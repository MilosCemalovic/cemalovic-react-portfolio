import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi, beforeEach } from "vitest"
import TestEnvironment from "./TestEnvironment"

// Define a custom type for the mock media query list
type MockMediaQueryList = {
  matches: boolean
  media: string
  onchange: null
  addEventListener: (
    event: string,
    listener: (event: MediaQueryListEvent) => void
  ) => void
  removeEventListener: (
    event: string,
    listener: (event: MediaQueryListEvent) => void
  ) => void
  addListener: (listener: (event: MediaQueryListEvent) => void) => void // Add deprecated addListener
  removeListener: (listener: (event: MediaQueryListEvent) => void) => void // Add deprecated removeListener
  dispatchEvent: (event: Event) => boolean
  listeners?: ((event: MediaQueryListEvent) => void)[] // Add the listeners property
}

// Mock window.matchMedia
beforeEach(() => {
  const matchMediaMock = vi.fn().mockImplementation((query: string) => {
    const mockMediaQueryList: MockMediaQueryList = {
      matches: false, // Default to false, or customize as needed
      media: query,
      onchange: null,
      addEventListener: vi.fn(
        (event: string, listener: (event: MediaQueryListEvent) => void) => {
          // Store the listener to simulate change events
          if (event === "change") {
            mockMediaQueryList.listeners = mockMediaQueryList.listeners || []
            mockMediaQueryList.listeners.push(listener)
          }
        }
      ),
      removeEventListener: vi.fn(
        (event: string, listener: (event: MediaQueryListEvent) => void) => {
          // Remove the listener
          if (event === "change" && mockMediaQueryList.listeners) {
            mockMediaQueryList.listeners = mockMediaQueryList.listeners.filter(
              (l) => l !== listener
            )
          }
        }
      ),
      addListener: vi.fn((listener: (event: MediaQueryListEvent) => void) => {
        // Store the listener to simulate change events (for deprecated addListener)
        mockMediaQueryList.listeners = mockMediaQueryList.listeners || []
        mockMediaQueryList.listeners.push(listener)
      }),
      removeListener: vi.fn(
        (listener: (event: MediaQueryListEvent) => void) => {
          // Remove the listener (for deprecated removeListener)
          if (mockMediaQueryList.listeners) {
            mockMediaQueryList.listeners = mockMediaQueryList.listeners.filter(
              (l) => l !== listener
            )
          }
        }
      ),
      dispatchEvent: vi.fn(),
    }

    return mockMediaQueryList
  })

  // Assigned the mock to window.matchMedia
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: matchMediaMock,
  })
})

describe("TestEnvironment Component", () => {
  it("should render the App component", () => {
    render(<TestEnvironment />)

    const appElement = screen.getByTestId("app")
    expect(appElement).toBeInTheDocument()
  })

  it("should render children when provided", () => {
    const testChildren = <div data-testid="test-children">Test Children</div>

    render(<TestEnvironment>{testChildren}</TestEnvironment>)

    const childrenElement = screen.getByTestId("test-children")
    expect(childrenElement).toBeInTheDocument()
    expect(childrenElement).toHaveTextContent("Test Children")
  })

  it("should apply the correct styles", () => {
    render(<TestEnvironment />)

    const containerDiv = screen.getByTestId("test-environment-container")

    expect(containerDiv).toHaveStyle("height: 200vh")
  })
})
