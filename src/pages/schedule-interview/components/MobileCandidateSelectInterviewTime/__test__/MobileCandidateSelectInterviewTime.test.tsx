import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import dayjs from "dayjs"
import React from "react"

import { MobileCandidateSelectInterviewTime } from "../MobileCandidateSelectInterviewTime"

describe("MobileCandidateSelectInterviewTime", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should render MobileInterviewInfo and Calendar", () => {
    render(<MobileCandidateSelectInterviewTime />)

    expect(screen.getByTestId("mobile-interview-info")).toBeInTheDocument()
    expect(screen.getByRole("table")).toBeInTheDocument() // Calendar table
  })

  it("should show MobileInterviewTimeSlotBooking when a valid date is clicked", async () => {
    render(<MobileCandidateSelectInterviewTime />)

    const dateCell = screen.getAllByText("1")[0] // Assuming the first date cell with "1" is valid
    const user = userEvent.setup()
    await user.click(dateCell)

    expect(screen.getByTestId("mobile-interview-time-slot-booking")).toBeInTheDocument()
  })

  it("should close MobileInterviewTimeSlotBooking when close button is clicked", async () => {
    render(<MobileCandidateSelectInterviewTime />)

    const dateCell = screen.getAllByText("1")[0] // Assuming the first date cell with "1" is valid
    const user = userEvent.setup()
    await user.click(dateCell)

    expect(screen.getByTestId("mobile-interview-time-slot-booking")).toBeInTheDocument()

    const closeButton = screen.getByTestId("close-booking-button")
    await user.click(closeButton)

    expect(screen.queryByTestId("mobile-interview-time-slot-booking")).not.toBeInTheDocument()
    expect(screen.getByTestId("mobile-interview-info")).toBeInTheDocument()
  })

  it("should render correct header with month and year", () => {
    render(<MobileCandidateSelectInterviewTime />)

    const header = screen.getByText(dayjs().format("MMMM YYYY"))
    expect(header).toBeInTheDocument()
  })

  it("should navigate to next and previous month", async () => {
    render(<MobileCandidateSelectInterviewTime />)

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
