import { MockedProvider } from "@apollo/client/testing"
import { render, screen } from "@testing-library/react"
import React from "react"

import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import { mockBookCandidateInterview } from "@/pages/schedule-interview/mock/mockBookCandidateInterview"
import { mockScheduleInterviewContext } from "@/pages/schedule-interview/mock/mockScheduleInterviewContext"

import { DesktopCandidateSelectInterviewTime } from "../DesktopCandidateSelectInterviewTime"

// Mock the useScheduleInterview hook
jest.mock("@/pages/schedule-interview/hooks/useScheduleInterview")
const mockedUseScheduleInterview = useScheduleInterview as jest.MockedFunction<typeof useScheduleInterview>

const renderComponent = () => {
  return render(
    <MockedProvider mocks={mockBookCandidateInterview} addTypename={false}>
      <DesktopCandidateSelectInterviewTime />
    </MockedProvider>
  )
}
describe("DesktopCandidateSelectInterviewTime", () => {
  beforeEach(() => {
    mockedUseScheduleInterview.mockReturnValue(mockScheduleInterviewContext)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should render the component", () => {
    renderComponent()
    expect(screen.getByTestId("desktop-candidate-select-interview-time")).toBeInTheDocument()
  })

  it("should render InterviewInfo and DesktopInterviewTimeSlotBooking components", () => {
    renderComponent()
    expect(screen.getByTestId("interview-info")).toBeInTheDocument()
    expect(screen.getByTestId("desktop-interview-time-slot-booking")).toBeInTheDocument()
  })

  it("should have the correct styles and classes applied", () => {
    renderComponent()

    const container = screen.getByTestId("desktop-candidate-select-interview-time")
    expect(container).toHaveClass("h-full overflow-y-auto bg-gray-100 p-11")
    expect(container.firstChild).toHaveClass(
      "mx-auto flex w-full max-w-[1090px] rounded-[20px] bg-white p-10 shadow-card"
    )
  })
})
