import { PHIcon } from "@ph/ui"
import { render } from "@testing-library/react"

import { cn } from "@/utils"

import NotFoundPage from "../NotFoundPage"

// Mock the PHIcon component
jest.mock("@ph/ui", () => ({
  PHIcon: jest.fn(() => <div>PHIcon Mock</div>),
}))

// Mock the cn utility
jest.mock("@/utils", () => ({
  cn: jest.fn(() => "mocked-class"),
}))

describe("NotFoundPage", () => {
  it("renders without crashing", () => {
    const { container } = render(<NotFoundPage />)
    expect(container).toBeInTheDocument()
  })

  it("displays the correct title and subtitle", () => {
    const { getByText } = render(<NotFoundPage />)
    expect(getByText("404 Not Found")).toBeInTheDocument()
    expect(getByText("Sorry, we can't find what you're looking for")).toBeInTheDocument()
  })

  it("renders the PHIcon with correct props", () => {
    render(<NotFoundPage />)
    expect(PHIcon).toHaveBeenCalledWith({ size: 200, name: "notFound" }, {})
  })

  it("applies the heightClass prop correctly", () => {
    const heightClass = "h-full"
    render(<NotFoundPage heightClass={heightClass} />)
    expect(cn).toHaveBeenCalledWith("pt-10", heightClass)
  })

  it("applies the default class name when no heightClass is provided", () => {
    render(<NotFoundPage />)
    expect(cn).toHaveBeenCalledWith("pt-10", "")
  })
})
