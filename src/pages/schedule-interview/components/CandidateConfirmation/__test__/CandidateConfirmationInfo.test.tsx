import { render, screen } from "@testing-library/react"
import React from "react"

import { CandidateConfirmationInfo } from "@/pages/schedule-interview/components/CandidateConfirmation"

jest.mock("@/constants", () => ({}))
describe("CandidateConfirmationInfo", () => {
  it("should renders title and description correctly", () => {
    const title = "Test Title"
    const description = "Test Description"

    render(<CandidateConfirmationInfo title={title} description={description} />)

    const titleElement = screen.getByText(title)
    const descriptionElement = screen.getByText(description)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(titleElement).toHaveClass("text-tertiary w-2/5 text-sm font-light lg:w-1/3")
    expect(descriptionElement).toHaveClass("w-full text-sm font-semibold text-black")
  })
})
