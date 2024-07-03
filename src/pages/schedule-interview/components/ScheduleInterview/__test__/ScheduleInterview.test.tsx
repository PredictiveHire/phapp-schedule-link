import { MockedProvider } from "@apollo/client/testing"
import { render, screen } from "@testing-library/react"
import { Grid } from "antd"
import React from "react"

import { LICandidateInterviewScheduleStatus } from "@/pages/schedule-interview/constants"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import { mockBookCandidateInterview } from "@/pages/schedule-interview/mock/mockBookCandidateInterview"
import { mockScheduleInterviewContext } from "@/pages/schedule-interview/mock/mockScheduleInterviewContext"

import { ScheduleInterview } from "../ScheduleInterview"

jest.mock("antd", () => ({
  ...jest.requireActual<Record<string, unknown>>("antd"),
  Grid: {
    useBreakpoint: jest.fn(),
  },
}))

// Mock the useScheduleInterview hook
jest.mock("@/pages/schedule-interview/hooks/useScheduleInterview")
const mockedUseScheduleInterview = useScheduleInterview as jest.MockedFunction<typeof useScheduleInterview>

const renderComponent = () => {
  return render(
    <MockedProvider mocks={mockBookCandidateInterview} addTypename={false}>
      <ScheduleInterview />
    </MockedProvider>
  )
}

const mockUseBreakpoint = Grid.useBreakpoint as jest.Mock<Record<string, boolean>>
describe("ScheduleInterview", () => {
  beforeEach(() => {
    mockedUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      candidateInterviewScheduleStatus: LICandidateInterviewScheduleStatus.PENDING,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should renders CandidateConfirmation when candidate interview schedule status is confirmed", () => {
    mockUseBreakpoint.mockReturnValue({ lg: true })
    mockedUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      candidateInterviewScheduleStatus: LICandidateInterviewScheduleStatus.CONFIRMED,
    })
    renderComponent()

    expect(screen.getByTestId("candidate-confirmation")).toBeInTheDocument()
  })

  it("should renders DesktopCandidateSelectInterviewTime when is desktop version", () => {
    mockUseBreakpoint.mockReturnValue({ lg: true })

    renderComponent()

    expect(screen.getByTestId("desktop-candidate-select-interview-time")).toBeInTheDocument()
  })

  it("should renders MobileCandidateSelectInterviewTime when is mobile version", () => {
    mockUseBreakpoint.mockReturnValue({ lg: false })

    renderComponent()

    expect(screen.getByTestId("mobile-candidate-select-interview-time")).toBeInTheDocument()
  })
})
