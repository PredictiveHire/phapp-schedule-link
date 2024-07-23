import { isReschedulePage } from "../isReschedulePage"

describe("isReschedulePage", () => {
  it("should return true when URL ends with /reschedule", () => {
    Object.defineProperty(window, "location", {
      value: { href: "http://example.com/reschedule" },
      writable: true,
    })

    expect(isReschedulePage()).toBe(true)
  })

  it("should return false when URL does not end with /reschedule", () => {
    Object.defineProperty(window, "location", {
      value: { href: "http://example.com/otherpage" },
      writable: true,
    })

    expect(isReschedulePage()).toBe(false)
  })
})
