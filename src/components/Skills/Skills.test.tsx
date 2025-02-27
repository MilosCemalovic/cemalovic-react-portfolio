import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Skills from "./Skills"
import { SKILLS } from "../../data/skills"

describe("Skills", () => {
  beforeEach(() => {
    render(<Skills />)
  })

  it("should render the skills section", () => {
    expect(screen.getByTestId("skills-section")).toBeInTheDocument()
  })

  it("should render the heading", () => {
    expect(screen.getByText("Technical Skills")).toBeInTheDocument()
  })

  it("should render all skills", () => {
    const skillItems = screen.getAllByTestId("skill-item")
    expect(skillItems).toHaveLength(SKILLS.length)
  })

  it("should render skill names and icons", () => {
    SKILLS.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument()

      const icon = screen.getByTestId(`icon-${skill.iconId}`)
      expect(icon).toBeInTheDocument()
    })
  })
})
