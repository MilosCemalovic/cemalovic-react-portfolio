import { describe, it, vi, expect, beforeEach, afterEach } from "vitest"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { renderApp } from "./main"

// Mock createRoot and render
vi.mock("react-dom/client", () => ({
  createRoot: vi.fn().mockImplementation(() => ({
    render: vi.fn(),
  })),
}))

describe("main.tsx", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks()
  })

  afterEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = ""
  })

  it("should render the App component inside StrictMode", () => {
    // Create a mock root element
    const rootElement = document.createElement("div")
    rootElement.id = "root"
    document.body.appendChild(rootElement)

    // Call the renderApp function
    renderApp()

    // Verify that createRoot was called with the correct element
    expect(createRoot).toHaveBeenCalledWith(rootElement)

    // Verify that the App component is rendered inside StrictMode
    const rootInstance = vi.mocked(createRoot).mock.results[0].value
    expect(rootInstance.render).toHaveBeenCalledWith(
      <StrictMode>
        <App />
      </StrictMode>
    )
  })

  it("should throw an error if the root element is not found", () => {
    // Ensure the root element does not exist
    document.body.innerHTML = ""

    // Mock console.error to suppress error logs in the test output
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {})

    // Call the renderApp function
    renderApp()

    // Verify that an error was logged
    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Root element not found in the DOM."
    )

    // Restore console.error
    consoleErrorMock.mockRestore()
  })
})
