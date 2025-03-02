import { renderHook, act } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import useMediaQuery from "./useMediaQuery"

describe("useMediaQuery Hook", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks()
  })

  it("should return false for a non-matching media query", () => {
    // Mock window.matchMedia to return a non-matching media query
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"))
    expect(result.current).toBe(false)
  })

  it("should return true for a matching media query", () => {
    // Mock window.matchMedia to return a matching media query
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"))
    expect(result.current).toBe(true)
  })

  it("should update the result when the media query changes", () => {
    // Create a mock media query list with a change listener
    const listeners: ((event: MediaQueryListEvent) => void)[] = []
    const mockMediaQueryList = {
      matches: false,
      media: "(max-width: 768px)",
      onchange: null,
      addEventListener: (
        _: string,
        listener: (event: MediaQueryListEvent) => void
      ) => {
        listeners.push(listener)
      },
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }

    // Mock window.matchMedia to return the mock media query list
    window.matchMedia = vi.fn().mockImplementation(() => mockMediaQueryList)

    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"))

    // Verify initial state
    expect(result.current).toBe(false)

    // Simulate a change in the media query
    act(() => {
      mockMediaQueryList.matches = true
      listeners.forEach((listener) =>
        listener({ matches: true } as MediaQueryListEvent)
      )
    })

    // Verify updated state
    expect(result.current).toBe(true)
  })
})
