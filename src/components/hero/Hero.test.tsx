import { beforeEach, describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import styles from "./Hero.module.scss"
import Hero from "./Hero"

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />)
  })

  it("should render hero section with background image styles", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection).toBeVisible()
    expect(heroSection).toHaveClass(styles.hero)
  })

  it("should render greeting text", () => {
    expect(screen.getByText("Hello!")).toBeInTheDocument()
  })

  it("should render subtitle text", () => {
    expect(screen.getByText("I am a Software Developer")).toBeInTheDocument()
  })
})
