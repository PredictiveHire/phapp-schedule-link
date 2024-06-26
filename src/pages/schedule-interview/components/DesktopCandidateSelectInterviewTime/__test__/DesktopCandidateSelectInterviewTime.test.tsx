import { render, screen } from "@testing-library/react"
import React from "react"

import { DesktopCandidateSelectInterviewTime } from "../DesktopCandidateSelectInterviewTime"

describe("DesktopCandidateSelectInterviewTime", () => {
  it("should render without crashing", () => {
    render(<DesktopCandidateSelectInterviewTime />)

    expect(screen.getByTestId("desktop-candidate-select-interview-time")).toBeInTheDocument()
    expect(screen.getByTestId("interview-info")).toBeInTheDocument()
    expect(screen.getByTestId("desktop-interview-time-slot-booking")).toBeInTheDocument()
  })

  it("should have the correct styles and classes applied", () => {
    render(<DesktopCandidateSelectInterviewTime />)

    const container = screen.getByTestId("desktop-candidate-select-interview-time")
    expect(container).toHaveClass("h-full overflow-y-auto bg-gray-100 p-11")
    expect(container.firstChild).toHaveClass(
      "mx-auto flex w-full max-w-[1090px] rounded-[20px] bg-white p-10 shadow-card"
    )
  })

  it("should pass the correct interviewInfo to InterviewInfo", () => {
    render(<DesktopCandidateSelectInterviewTime />)

    const interviewInfoComponent = screen.getByTestId("interview-info")
    expect(interviewInfoComponent).toBeInTheDocument()
  })
})
