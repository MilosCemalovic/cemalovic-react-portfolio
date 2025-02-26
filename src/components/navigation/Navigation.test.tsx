import { describe, expect, it, vi } from "vitest"
import { act, render, screen, waitFor } from "@testing-library/react"
import Navigation from "./Navigation"
import TestEnvironment from "../../test/TestEnvironment"

window.HTMLElement.prototype.scrollIntoView = vi.fn()

describe("Navigation", () => {
  it("should render the navigation component", () => {
    render(<Navigation />)
    expect(screen.getByTestId("navigation")).toBeInTheDocument()
  })

  it("should render the navigation links", () => {
    render(<Navigation />)
    expect(screen.getByTestId("cv-link")).toBeInTheDocument()
    expect(screen.getByTestId("social-links")).toBeInTheDocument()
  })

  it("has a working CV download", () => {
    render(<Navigation />)
    expect(screen.getByText("Download CV")).toHaveAttribute("download")
  })

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
