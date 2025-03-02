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
  it("marks 'contact' as active when scrolled to the bottom", async () => {
    // Render the Navigation component with mocked sections
    render(
      <TestEnvironment>
        <section
          id="experience"
          data-testid="experience-section"
          style={{ height: "500px" }}
        >
          Experience Section
        </section>
        <section
          id="skills"
          data-testid="skills-section"
          style={{ height: "500px" }}
        >
          Skills Section
        </section>
        <section
          id="projects"
          data-testid="projects-section"
          style={{ height: "500px" }}
        >
          Projects Section
        </section>
        <section
          id="about"
          data-testid="about-section"
          style={{ height: "500px" }}
        >
          About Section
        </section>
        <section
          id="contact"
          data-testid="contact-section"
          style={{ height: "500px" }}
        >
          Contact Section
        </section>
      </TestEnvironment>
    )

    const contactLink = screen.getByTestId("nav-contact")
    const contactSection = screen.getByTestId("contact-section")

    // Mock DOM measurements
    Object.defineProperties(contactSection, {
      offsetTop: { value: 2000 },
      offsetHeight: { value: 500 },
    })

    // 1. Verify initial state
    expect(contactLink.parentElement).not.toHaveAttribute("data-active", "true")

    // 2. Simulate scroll to the bottom of the page
    act(() => {
      window.scrollY = 2000
      window.innerHeight = 1000
      Object.defineProperty(document.documentElement, "scrollHeight", {
        value: 3000,
        configurable: true,
      })
      window.dispatchEvent(new Event("scroll"))
    })

    // 3. Wait for state propagation
    await waitFor(
      () => {
        expect(contactLink.parentElement).toHaveAttribute("data-active", "true")
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
