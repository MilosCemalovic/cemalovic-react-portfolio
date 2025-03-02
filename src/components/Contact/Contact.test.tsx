import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import Contact from "./Contact"
import useMediaQuery from "../../hooks/useMediaQuery"

// Mock the useMediaQuery hook
vi.mock("../../hooks/useMediaQuery", () => ({
  default: vi.fn(),
}))

describe("Contact", () => {
  it("should render the footer", () => {
    render(<Contact />)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })

  it("should render social links only on small screens", () => {
    // Mock useMediaQuery to return true (small screen)
    ;(useMediaQuery as jest.Mock).mockReturnValue(true)

    render(<Contact />)

    // Check if social links are visible
    const socialLinks = screen.getByTestId("social-links")
    expect(socialLinks).toBeInTheDocument()

    // Mock useMediaQuery to return false (large screen)
    ;(useMediaQuery as jest.Mock).mockReturnValue(false)

    // Re-render the component
    const { container } = render(<Contact />)

    // Check if social links are hidden
    const hiddenSocialLinks = container.querySelector(
      '[data-testid="social-links"]'
    )
    expect(hiddenSocialLinks).toBeNull()
  })

  it("should have a working Contact span link", () => {
    render(<Contact />)

    const contactLink = screen.getByTestId("contact")
    expect(contactLink).toBeInTheDocument()

    expect(contactLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/milos-cemalovic"
    )
    expect(contactLink).toHaveAttribute("target", "_blank")
  })
})
