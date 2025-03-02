import { render, screen } from "@testing-library/react"
import { describe, expect } from "vitest"
import About from "./About"
import { ABOUT } from "../../data/about"

describe("About", () => {
  beforeEach(() => {
    render(<About />)
  })

  it("should render the About component", () => {
    expect(screen.getByTestId("about-section")).toBeInTheDocument()
  })

  it("should render the heading", () => {
    expect(screen.getByText("About Me")).toBeInTheDocument()
  })

  it("should render the About items", () => {
    const projectItems = screen.getAllByTestId("about-item")
    expect(projectItems).toHaveLength(ABOUT.length)
  })

  it("should render about item titles and content", () => {
    ABOUT.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.content)).toBeInTheDocument()
    })
  })
})
