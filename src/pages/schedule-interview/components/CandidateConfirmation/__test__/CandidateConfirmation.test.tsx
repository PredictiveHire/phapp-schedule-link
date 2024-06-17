import { render, screen } from "@testing-library/react"
import React from "react"

import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { useCandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation/hooks/useCandidateConfirmation"
import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"

jest.mock("antd", () => {
  const actual = jest.requireActual<Record<string, unknown>>("antd")
  return {
    ...actual,
    Grid: {
      useBreakpoint: jest.fn().mockReturnValue({ lg: true }),
    },
  }
})
jest.mock("../hooks/useCandidateConfirmation")

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

const mockUseCandidateConfirmation = (
  useCandidateConfirmation as jest.MockedFunction<typeof useCandidateConfirmation>
).mockReturnValue({
  interviewData,
})

describe("CandidateConfirmation", () => {
  it("renders the component correctly", () => {
    render(<CandidateConfirmation />)

    expect(screen.getByText("Friday, June 14 09:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM")).toBeInTheDocument()
    expect(screen.getByText("Please check your email for more details.")).toBeInTheDocument()
    expect(screen.getByText(interviewData.jobRequisitionName)).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[interviewData.interviewMode])).toBeInTheDocument()
    expect(screen.getByText(interviewData.interviewAddress)).toBeInTheDocument()
    expect(screen.getByText(interviewData.timezone)).toBeInTheDocument()
  })

  it("displays the correct interview mode and location for in-person interview", () => {
    render(<CandidateConfirmation />)
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

    render(<CandidateConfirmation />)
    expect(screen.getByText("Online")).toBeInTheDocument()
    expect(screen.getByText("https://example.com/interview")).toBeInTheDocument()
  })

  it('has an "Add to calendar" button', () => {
    render(<CandidateConfirmation />)
    const button = screen.getByRole("button", { name: /add to calendar/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-black")
  })
})
