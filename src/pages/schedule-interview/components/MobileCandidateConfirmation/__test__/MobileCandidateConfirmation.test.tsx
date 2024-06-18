import { render, screen } from "@testing-library/react"
import React from "react"

import { LIInterviewMode, LIInterviewModeLabel } from "../../MobileCandidateSelectInterviewTime/constants"
import { useCandidateConfirmation } from "../hooks/useCandidateConfirmation"
import { MobileCandidateConfirmation } from "../MobileCandidateConfirmation"

jest.mock("../../../../../assets/images/candidate-confirmation.svg", () => "mocked-image-path")

const interviewData = {
  jobRequisitionName: "Software Engineer",
  interviewMode: LIInterviewMode.IN_PERSON,
  timezone: "America/New_York",
  interviewTime: {
    start: "2024-06-14T13:00:00Z",
    end: "2024-06-14T14:00:00Z",
  },
  interviewAddress: "7 Kent Street",
  interviewLink: "",
}

jest.mock("../hooks/useCandidateConfirmation")

const mockUseCandidateConfirmation = (
  useCandidateConfirmation as jest.MockedFunction<typeof useCandidateConfirmation>
).mockReturnValue({
  interviewData,
})

describe("MobileCandidateConfirmation", () => {
  it("renders the component correctly", () => {
    render(<MobileCandidateConfirmation />)

    expect(screen.getByText("Friday, June 14 09:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM")).toBeInTheDocument()
    expect(screen.getByText("Please check your email for more details.")).toBeInTheDocument()
    expect(screen.getByText(interviewData.jobRequisitionName)).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[interviewData.interviewMode])).toBeInTheDocument()
    expect(screen.getByText(interviewData.interviewAddress)).toBeInTheDocument()
    expect(screen.getByText(interviewData.timezone)).toBeInTheDocument()
  })

  it("displays the correct interview mode and location for in-person interview", () => {
    render(<MobileCandidateConfirmation />)
    expect(screen.getByText("In person")).toBeInTheDocument()
    expect(screen.getByText(interviewData.interviewAddress)).toBeInTheDocument()
  })

  it("displays the correct interview mode and link for online interview", () => {
    mockUseCandidateConfirmation.mockReturnValue({
      interviewData: {
        ...interviewData,
        interviewMode: LIInterviewMode.ONLINE,
        interviewAddress: "",
        interviewLink: "https://example.com/interview",
      },
    })

    render(<MobileCandidateConfirmation />)
    expect(screen.getByText("Online")).toBeInTheDocument()
    expect(screen.getByText("https://example.com/interview")).toBeInTheDocument()
  })

  it('has an "Add to calendar" button', () => {
    render(<MobileCandidateConfirmation />)
    const button = screen.getByRole("button", { name: /add to calendar/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-black")
  })
})
