import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Dayjs } from "dayjs"
import React from "react"

import { useInterviewDateChange } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime/hooks/useInterviewDateChange"
import { useBookInterviewNow } from "@/pages/schedule-interview/hooks/useBookInterviewNow"
import { useFormatTimeSlots } from "@/pages/schedule-interview/hooks/useFormatTimeSlots"
import { useSelectTimeSlot } from "@/pages/schedule-interview/hooks/useSelectTimeSlot"
import { formatDateToLongString } from "@/utils/dateTime"

import { InterviewTimeSlotBookingProps, MobileInterviewTimeSlotBooking } from "../MobileInterviewTimeSlotBooking"

jest.mock("@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime/hooks/useInterviewDateChange")
jest.mock("@/pages/schedule-interview/hooks/useFormatTimeSlots")
jest.mock("@/pages/schedule-interview/hooks/useSelectTimeSlot")
jest.mock("@/pages/schedule-interview/hooks/useBookInterviewNow")
jest.mock("@/utils/dateTime")

const mockUseInterviewDateChangeValue = {
  currentDate: "2024-06-13",
  handleDateChange: jest.fn(),
  isLeftArrowDisabled: false,
  isRightArrowDisabled: false,
}

const mockUserSelectTimeSlotValue = {
  selectedTimeSlotId: "1",
  handleTimeSlotChange: jest.fn(),
  setSelectedTimeSlotId: jest.fn(),
}

const mockUseBookInterviewNowValue = {
  isBookCandidateInterviewLoading: false,
  handleBookInterviewNow: jest.fn(),
}

const mockUseInterviewDateChange = useInterviewDateChange as jest.MockedFunction<typeof useInterviewDateChange>
const mockUseFormatTimeSlots = useFormatTimeSlots as jest.MockedFunction<typeof useFormatTimeSlots>
const mockFormatDateToLongString = formatDateToLongString as jest.MockedFunction<typeof formatDateToLongString>
const mockUseSelectTimeSlot = useSelectTimeSlot as jest.MockedFunction<typeof useSelectTimeSlot>
const mockUseBookInterviewNow = useBookInterviewNow as jest.MockedFunction<typeof useBookInterviewNow>

const renderComponent = (props: Partial<InterviewTimeSlotBookingProps> = {}) => {
  const defaultProps: InterviewTimeSlotBookingProps = {
    closeBooking: jest.fn(),
    interviewTimes: [
      { timeslotId: "1", start: "2024-06-13T09:00:00Z", end: "2024-06-13T10:00:00Z" },
      { timeslotId: "2", start: "2024-06-14T10:00:00Z", end: "2024-06-14T11:00:00Z" },
    ],
    initialDate: {} as Dayjs,
  }
  return render(<MobileInterviewTimeSlotBooking {...defaultProps} {...props} />)
}

describe("MobileInterviewTimeSlotBooking", () => {
  beforeEach(() => {
    mockUseInterviewDateChange.mockReturnValue(mockUseInterviewDateChangeValue)
    mockUseFormatTimeSlots.mockReturnValue({
      formatTimeSlots: jest.fn(() => [
        {
          slot: "09:00 AM - 10:00 AM",
          timeslotId: "1",
        },
        {
          slot: "10:00 AM - 11:00 AM",
          timeslotId: "2",
        },
      ]),
    })
    mockFormatDateToLongString.mockReturnValue("June 13, 2024")
    mockUseSelectTimeSlot.mockReturnValue(mockUserSelectTimeSlotValue)
    mockUseBookInterviewNow.mockReturnValue(mockUseBookInterviewNowValue)
  })

  it("should render the component correctly", () => {
    renderComponent()
    expect(screen.getByText("June 13, 2024")).toBeInTheDocument()
    expect(screen.getByText("09:00 AM - 10:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM - 11:00 AM")).toBeInTheDocument()
    expect(screen.getByText("Book interview now")).toBeInTheDocument()
  })

  it("should call closeBooking when the close button is clicked", async () => {
    const user = userEvent.setup()
    const closeBooking = jest.fn()
    renderComponent({ closeBooking })
    await user.click(screen.getByTestId("close-booking-button"))
    expect(closeBooking).toHaveBeenCalledTimes(1)
  })

  it("should handle date change when left or right button is clicked", async () => {
    const user = userEvent.setup()
    const handleDateChange = jest.fn()
    mockUseInterviewDateChange.mockReturnValue({
      ...mockUseInterviewDateChangeValue,
      handleDateChange,
    })
    renderComponent()

    await user.click(screen.getByRole("button", { name: /left/i }))
    expect(handleDateChange).toHaveBeenCalledWith("prev")

    await user.click(screen.getByRole("button", { name: /right/i }))
    expect(handleDateChange).toHaveBeenCalledWith("next")
  })

  it("should handle time change when a time slot is selected", async () => {
    const user = userEvent.setup()
    const handleTimeSlotChange = jest.fn()
    mockUseSelectTimeSlot.mockReturnValue({
      ...mockUserSelectTimeSlotValue,
      handleTimeSlotChange,
    })
    renderComponent()

    await user.click(screen.getByText("10:00 AM - 11:00 AM"))
    expect(handleTimeSlotChange).toHaveBeenCalledWith("2")
  })

  it("should handle booking interview when 'Book interview now' button is clicked", async () => {
    const user = userEvent.setup()
    const handleBookInterviewNow = jest.fn()
    mockUseBookInterviewNow.mockReturnValue({
      ...mockUseBookInterviewNowValue,
      handleBookInterviewNow,
    })
    renderComponent()

    await user.click(screen.getByText("Book interview now"))
    expect(handleBookInterviewNow).toHaveBeenCalledTimes(1)
  })
})
