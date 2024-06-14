import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Dayjs } from "dayjs"
import React from "react"

import { formatDateToLongString } from "@/utils/dateTime"

import { useInterviewBooking } from "../../hooks/useInterviewBooking"
import { useTimeSlots } from "../../hooks/useTimeSlots"
import { InterviewTimeSlotBookingProps, MobileInterviewTimeSlotBooking } from "../MobileInterviewTimeSlotBooking"

jest.mock("../../hooks/useInterviewBooking")
jest.mock("../../hooks/useTimeSlots")
jest.mock("@/utils/dateTime")

const mockUserInterviewBookingValue = {
  currentDate: "2024-06-13",
  selectedDateAndTime: { selectedDate: "2024-06-13", selectedTime: "09:00" },
  selectedTime: "09:00",
  handleDateChange: jest.fn(),
  handleTimeChange: jest.fn(),
  handleBookInterviewNow: jest.fn(),
  isLeftArrowDisabled: false,
  isRightArrowDisabled: false,
}
const mockUseInterviewBooking = (
  useInterviewBooking as jest.MockedFunction<typeof useInterviewBooking>
).mockReturnValue(mockUserInterviewBookingValue)
const mockUseTimeSlots = useTimeSlots as jest.MockedFunction<typeof useTimeSlots>
const mockFormatDateToLongString = formatDateToLongString as jest.MockedFunction<typeof formatDateToLongString>

const setup = (props: Partial<InterviewTimeSlotBookingProps> = {}) => {
  const defaultProps: InterviewTimeSlotBookingProps = {
    closeBooking: jest.fn(),
    interviewTimes: [
      { start: "2024-06-13T09:00:00Z", end: "2024-06-13T10:00:00Z" },
      { start: "2024-06-14T09:00:00Z", end: "2024-06-14T10:00:00Z" },
    ],
    initialDate: {} as Dayjs,
  }
  return render(<MobileInterviewTimeSlotBooking {...defaultProps} {...props} />)
}

describe("MobileInterviewTimeSlotBooking", () => {
  beforeEach(() => {
    mockUseInterviewBooking.mockReturnValue({
      currentDate: "2024-06-13",
      selectedDateAndTime: { selectedDate: "2024-06-13", selectedTime: "09:00" },
      selectedTime: "09:00",
      handleDateChange: jest.fn(),
      handleTimeChange: jest.fn(),
      handleBookInterviewNow: jest.fn(),
      isLeftArrowDisabled: false,
      isRightArrowDisabled: false,
    })
    mockUseTimeSlots.mockReturnValue({
      formatTimeSlots: jest.fn(() => ["09:00", "10:00"]),
    })
    mockFormatDateToLongString.mockReturnValue("June 13, 2024")
  })

  it("should render the component correctly", () => {
    setup()
    expect(screen.getByText("June 13, 2024")).toBeInTheDocument()
    expect(screen.getByText("09:00")).toBeInTheDocument()
    expect(screen.getByText("Book interview now")).toBeInTheDocument()
  })

  it("should call closeBooking when the close button is clicked", async () => {
    const user = userEvent.setup()
    const closeBooking = jest.fn()
    setup({ closeBooking })
    await user.click(screen.getByTestId("close-booking-button"))
    expect(closeBooking).toHaveBeenCalledTimes(1)
  })

  it("should handle date change when left or right button is clicked", async () => {
    const user = userEvent.setup()
    const handleDateChange = jest.fn()
    mockUseInterviewBooking.mockReturnValue({
      ...mockUserInterviewBookingValue,
      handleDateChange,
    })
    setup()

    await user.click(screen.getByRole("button", { name: /left/i }))
    expect(handleDateChange).toHaveBeenCalledWith("prev")

    await user.click(screen.getByRole("button", { name: /right/i }))
    expect(handleDateChange).toHaveBeenCalledWith("next")
  })

  it("should handle time change when a time slot is selected", async () => {
    const user = userEvent.setup()
    const handleTimeChange = jest.fn()
    mockUseInterviewBooking.mockReturnValue({
      ...mockUserInterviewBookingValue,
      handleTimeChange,
    })
    setup()

    await user.click(screen.getByText("10:00"))
    expect(handleTimeChange).toHaveBeenCalledWith("10:00")
  })

  it("should handle booking interview when 'Book interview now' button is clicked", async () => {
    const user = userEvent.setup()
    const handleBookInterviewNow = jest.fn()
    mockUseInterviewBooking.mockReturnValue({
      ...mockUserInterviewBookingValue,
      handleBookInterviewNow,
    })
    setup()

    await user.click(screen.getByText("Book interview now"))
    expect(handleBookInterviewNow).toHaveBeenCalledTimes(1)
  })
})
