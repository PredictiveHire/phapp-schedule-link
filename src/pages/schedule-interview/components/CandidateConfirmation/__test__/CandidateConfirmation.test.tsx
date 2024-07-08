import { render, screen } from "@testing-library/react"
import React from "react"

import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import {
  interviewInfo,
  mockScheduleInterviewContext,
} from "@/pages/schedule-interview/mock/mockScheduleInterviewContext"

jest.mock("@/constants", () => ({}))

jest.mock("antd", () => {
  const actual = jest.requireActual<Record<string, unknown>>("antd")
  return {
    ...actual,
    Grid: {
      useBreakpoint: jest.fn().mockReturnValue({ lg: true }),
    },
  }
})
jest.mock("@/pages/schedule-interview/hooks/useScheduleInterview")

const mockUseScheduleInterview = (
  useScheduleInterview as jest.MockedFunction<typeof useScheduleInterview>
).mockReturnValue(mockScheduleInterviewContext)

describe("CandidateConfirmation", () => {
  it("renders the component correctly", () => {
    render(<CandidateConfirmation />)

    expect(screen.getByText("Friday, June 14 09:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM")).toBeInTheDocument()
    expect(screen.getByText("Please check your email for more details.")).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.jobRequisitionName)).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[interviewInfo.interviewMode])).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.interviewAddress)).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.timezone)).toBeInTheDocument()
  })

  it("displays the correct interview mode and location for in-person interview", () => {
    render(<CandidateConfirmation />)
    expect(screen.getByText("In person")).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.interviewAddress)).toBeInTheDocument()
  })

  it("displays the correct interview mode and link for online interview", () => {
    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
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
