import { describe, expect, it, vi } from "vitest"
import { act, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navigation from "./Navigation"
import TestEnvironment from "../../test/TestEnvironment"
import * as useMediaQuery from "../../hooks/useMediaQuery"
import styles from "./Navigation.module.scss"

// Mock the useMediaQuery hook
vi.mock("../../hooks/useMediaQuery", () => ({
  default: vi.fn(),
}))

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn()

describe("Navigation", () => {
  beforeEach(() => {
    ;(useMediaQuery.default as jest.Mock).mockReturnValue(false)

    render(<Navigation />)
  })

  it("should render the navigation component", () => {
    expect(screen.getByTestId("navigation")).toBeInTheDocument()
  })

  it("should render the navigation links", () => {
    expect(screen.getByTestId("cv-link")).toBeInTheDocument()
    expect(screen.getByTestId("social-links")).toBeInTheDocument()
  })

  it("has a working CV download", () => {
    expect(screen.getByText("Download CV")).toHaveAttribute("download")
  })
})

describe("Navigation - Active Section on Scroll", () => {
  it("updates the active section on scroll", async () => {
    render(<TestEnvironment />)

    const experienceLink = screen.getByTestId("nav-experience")
    const experienceSection = screen.getByTestId("experience-section")

    // Mock DOM measurements
    Object.defineProperties(experienceSection, {
      offsetTop: { value: 1000 },
      offsetHeight: { value: 500 },
    })

    // 1. Verify initial state
    expect(experienceLink.parentElement).not.toHaveAttribute(
      "data-active",
      "true"
    )

    // 2. Simulate scroll using direct position update
    act(() => {
      window.scrollY = 900
      window.dispatchEvent(new Event("scroll"))
    })

    // 3. Wait for state propagation
    await waitFor(
      () => {
        expect(experienceLink.parentElement).toHaveAttribute(
          "data-active",
          "true"
        )
      },
      { timeout: 1000 }
    )
  })
})

describe("Navigation - Hamburger Menu", () => {
  beforeEach(() => {
    // Set viewport width to simulate a smaller screen
    window.innerWidth = 500
    ;(useMediaQuery.default as jest.Mock).mockReturnValue(true)

    render(<Navigation />)
  })

  it("should render the hamburger menu", () => {
    const menuButton = screen.getByTestId("menu-button")
    expect(menuButton).toBeInTheDocument()
  })

  it("should hide the navigation links by default", () => {
    const navWrapper = screen.getByTestId("nav-wrapper")
    expect(navWrapper).not.toHaveClass(styles.open)
  })

  it("should toggle the navigation links on button click", async () => {
    // For version v14 or above (currently using), we are use async/await with userEvent.setup()
    // If the version is v13 or below, use userEvent.click() synchronously, without async/await
    const user = userEvent.setup()

    const menuButton = screen.getByTestId("menu-button")
    const navWrapper = screen.getByTestId("nav-wrapper")

    // Menu should be closed initially
    expect(navWrapper).not.toHaveClass(styles.open)

    // Click the menu button to open the menu
    await user.click(menuButton)
    expect(navWrapper).toHaveClass(styles.open)

    // Click the menu button again to close the menu
    await user.click(menuButton)
    expect(navWrapper).not.toHaveClass(styles.open)
  })

  it("should close the navigation links on link click", async () => {
    const user = userEvent.setup()

    const menuButton = screen.getByTestId("menu-button")
    const navWrapper = screen.getByTestId("nav-wrapper")
    const navExperience = screen.getByTestId("nav-experience")

    // Open the menu
    await user.click(menuButton)
    expect(navWrapper).toHaveClass(styles.open)

    // Menu should be closed after experience link click
    await user.click(navExperience)
    expect(navWrapper).not.toHaveClass(styles.open)
  })
})
