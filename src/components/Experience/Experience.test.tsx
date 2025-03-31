import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Experience from "./Experience"
import { EXPERIENCE } from "../../data/experience"

describe("Experience", () => {
  beforeEach(() => {
    render(<Experience />)
  })

  it("should display the heading section", () => {
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Professional Experience"
    )
  })

  it("should display company names", () => {
    expect(screen.getByText(/EY/i)).toBeInTheDocument()
  })

  it("should display all experience items", () => {
    const experienceItems = screen.getAllByTestId("experience-item")

    expect(experienceItems).toHaveLength(EXPERIENCE.length)
  })

  it("should display role descriptions", () => {
    const roleDescription = screen.getByText(
      /React developer, I've been a member of multiple teams involved in building complex IFA/i
    )
    expect(roleDescription).toBeInTheDocument()
  })

  it("should display headings", () => {
    const headings = screen.getByTestId("experience-heading")
    expect(headings).toBeInTheDocument()
  })

  it("should display the skills", () => {
    const skills = screen.getByText("Redux Toolkit")
    expect(skills).toBeInTheDocument()
  })
})
