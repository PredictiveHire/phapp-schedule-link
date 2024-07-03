import { MockedProvider } from "@apollo/client/testing"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import dayjs from "dayjs"
import React from "react"

import { LICandidateInterviewScheduleStatus } from "@/pages/schedule-interview/constants"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import { mockBookCandidateInterview } from "@/pages/schedule-interview/mock/mockBookCandidateInterview"
import { mockScheduleInterviewContext } from "@/pages/schedule-interview/mock/mockScheduleInterviewContext"

import { MobileCandidateSelectInterviewTime } from "../MobileCandidateSelectInterviewTime"

// Mock the useScheduleInterview hook
jest.mock("@/pages/schedule-interview/hooks/useScheduleInterview")
const mockedUseScheduleInterview = useScheduleInterview as jest.MockedFunction<typeof useScheduleInterview>

const renderComponent = () => {
  return render(
    <MockedProvider mocks={mockBookCandidateInterview} addTypename={false}>
      <MobileCandidateSelectInterviewTime />
    </MockedProvider>
  )
}

describe("MobileCandidateSelectInterviewTime", () => {
  beforeEach(() => {
    mockedUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      candidateInterviewScheduleStatus: LICandidateInterviewScheduleStatus.PENDING,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should render InterviewInfo and Calendar", () => {
    renderComponent()

    expect(screen.getByTestId("interview-info")).toBeInTheDocument()
    expect(screen.getByRole("table")).toBeInTheDocument() // Calendar table
  })

  it("should show MobileInterviewTimeSlotBooking when a valid date is clicked", async () => {
    renderComponent()

    const dateCell = screen.getAllByText("1")[0] // Assuming the first date cell with "1" is valid
    const user = userEvent.setup()
    await user.click(dateCell)

    expect(screen.getByTestId("mobile-interview-time-slot-booking")).toBeInTheDocument()
  })

  it("should close MobileInterviewTimeSlotBooking when close button is clicked", async () => {
    renderComponent()

    const dateCell = screen.getAllByText("1")[0] // Assuming the first date cell with "1" is valid
    const user = userEvent.setup()
    await user.click(dateCell)

    expect(screen.getByTestId("mobile-interview-time-slot-booking")).toBeInTheDocument()

    const closeButton = screen.getByTestId("close-booking-button")
    await user.click(closeButton)

    expect(screen.queryByTestId("mobile-interview-time-slot-booking")).not.toBeInTheDocument()
    expect(screen.getByTestId("interview-info")).toBeInTheDocument()
  })

  it("should render correct header with month and year", () => {
    renderComponent()

    const header = screen.getByText(dayjs().format("MMMM YYYY"))
    expect(header).toBeInTheDocument()
  })

  it("should navigate to next and previous month", async () => {
    renderComponent()

    const nextButton = screen.getByRole("img", { name: /right/i })
    const user = userEvent.setup()
    await user.click(nextButton)

    const headerNext = screen.getByText(dayjs().add(1, "month").format("MMMM YYYY"))
    expect(headerNext).toBeInTheDocument()

    const prevButton = screen.getByRole("img", { name: /left/i })
    await user.click(prevButton)
    await user.click(prevButton)

    const headerPrev = screen.getByText(dayjs().subtract(1, "month").format("MMMM YYYY"))
    expect(headerPrev).toBeInTheDocument()
  })
})
