import { render, screen } from "@testing-library/react"
import React from "react"

import { MobileCandidateConfirmationInfo } from "../MobileCandidateConfirmationInfo"

describe("MobileCandidateConfirmationInfo", () => {
  it("should renders title and description correctly", () => {
    const title = "Test Title"
    const description = "Test Description"

    render(<MobileCandidateConfirmationInfo title={title} description={description} />)

    const titleElement = screen.getByText(title)
    const descriptionElement = screen.getByText(description)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(titleElement).toHaveClass("text-tertiary w-[100px] text-sm font-light")
    expect(descriptionElement).toHaveClass("ml-2 text-sm font-semibold text-black")
  })
})
