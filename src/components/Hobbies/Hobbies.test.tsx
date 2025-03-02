import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Hobbies from "./Hobbies"
import { HOBBIES } from "../../data/hobbies"

describe("Hobbies", () => {
  beforeEach(() => {
    render(<Hobbies />)
  })

  it("should render the hobbies section", () => {
    expect(screen.getByTestId("hobbies-section")).toBeInTheDocument()
  })

  it("should render the heading", () => {
    expect(screen.getByText("Hobbies")).toBeInTheDocument()
  })

  it("should render all hobbies", () => {
    const hobbyItems = screen.getAllByTestId("hobby-item")
    expect(hobbyItems).toHaveLength(HOBBIES.length)
  })

  it("should render hobby names and icons", () => {
    HOBBIES.forEach((hobby) => {
      expect(screen.getByText(hobby.name)).toBeInTheDocument()
      expect(screen.getByText(hobby.icon)).toBeInTheDocument()
    })
  })
})
