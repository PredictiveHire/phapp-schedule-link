import { render, screen } from "@testing-library/react"
import React from "react"

import { ErrorDisplay } from "../ErrorDisplay"

// Mock implementation of the cn utility function
jest.mock("@/utils", () => ({
  cn: (...args: string[]) => args.join(" "),
}))

describe("InvalidPage", () => {
  it("should renders the description correctly", () => {
    const description = "This is an error message"

    render(<ErrorDisplay description={description} />)

    // Check if the description is rendered
    expect(screen.getByText(description)).toBeInTheDocument()

    // Check if the container has the correct aria-label
    expect(screen.getByLabelText("Something went wrong on this page")).toBeInTheDocument()

    // Check if the class names are applied correctly
    const container = screen.getByLabelText("Something went wrong on this page")
    expect(container).toHaveClass("flex h-full w-full bg-layout p-6 lg:justify-center")

    const article = screen.getByText(description).closest("article")
    expect(article).toHaveClass(
      "h-fit w-full rounded-2xl bg-white p-10 text-center text-lg font-bold shadow-card lg:w-invalid-link-container"
    )
  })
})
