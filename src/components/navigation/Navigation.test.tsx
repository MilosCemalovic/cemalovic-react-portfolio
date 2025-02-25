import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Navigation from "./Navigation"

describe("Navigation", () => {
  it("should render the navigation component", () => {
    render(<Navigation />)
    expect(screen.getByTestId("navigation")).toBeInTheDocument()
  })
})
