import { render, screen } from "@testing-library/react"
import { describe, expect } from "vitest"
import Projects from "./Projects"
import { PROJECTS } from "../../data/projects"

describe("Projects", () => {
  beforeEach(() => {
    render(<Projects />)
  })

  it("should render the Projects component", () => {
    expect(screen.getByTestId("projects-section")).toBeInTheDocument()
  })

  it("should render the heading", () => {
    expect(screen.getByText("Projects")).toBeInTheDocument()
  })

  it("should render the heading", () => {
    const projectItems = screen.getAllByTestId("project-item")
    expect(projectItems).toHaveLength(PROJECTS.length)
  })

  it("should render project titles, descriptions, and links", () => {
    PROJECTS.forEach((project) => {
      // Check for project title
      expect(screen.getByText(project.title)).toBeInTheDocument()

      // Check for project description
      expect(screen.getByText(project.description)).toBeInTheDocument()

      // Check for project image
      const image = screen.getByTestId(`project-image-${project.title}`)
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute("src", project.image)
      expect(image).toHaveAttribute("alt", project.title)

      // Check for live demo link (if available)
      if (project.liveLink) {
        const liveLink = screen.getByTestId(`live-link-${project.title}`)
        expect(liveLink).toBeInTheDocument()
        expect(liveLink).toHaveAttribute("href", project.liveLink)
      }

      // Check for GitHub link
      const githubLink = screen.getByTestId(`github-link-${project.title}`)
      expect(githubLink).toBeInTheDocument()
      expect(githubLink).toHaveAttribute("href", project.githubLink)
    })
  })
})
