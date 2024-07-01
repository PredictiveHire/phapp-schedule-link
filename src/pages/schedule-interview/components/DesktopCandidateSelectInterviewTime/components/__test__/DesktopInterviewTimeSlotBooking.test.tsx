import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import dayjs from "dayjs"
import React from "react"

import { useBookInterviewNow } from "@/pages/schedule-interview/hooks/useBookInterviewNow"
import { useFormatTimeSlots } from "@/pages/schedule-interview/hooks/useFormatTimeSlots"
import { useInterviewDate } from "@/pages/schedule-interview/hooks/useInterviewDate"
import { useSelectTimeSlot } from "@/pages/schedule-interview/hooks/useSelectTimeSlot"
import { formatDateToLongString } from "@/utils/dateTime"

import { DesktopInterviewTimeSlotBooking } from "../DesktopInterviewTimeSlotBooking"

// Mock the hooks
jest.mock("@/pages/schedule-interview/hooks/useFormatTimeSlots")
jest.mock("@/utils/dateTime")
jest.mock("@/pages/schedule-interview/hooks/useSelectTimeSlot")
jest.mock("@/pages/schedule-interview/hooks/useBookInterviewNow")
jest.mock("@/pages/schedule-interview/hooks/useInterviewDate")

const mockUserSelectTimeSlotValue = {
  selectedTimeSlotId: "1",
  handleTimeSlotChange: jest.fn(),
  setSelectedTimeSlotId: jest.fn(),
}

const mockUseBookInterviewNowValue = {
  isBookCandidateInterviewLoading: false,
  handleBookInterviewNow: jest.fn(),
}
const mockUseInterviewDateValue = {
  initialInterviewDate: dayjs("2024-06-01T08:00:00.000Z"),
  interviewDate: dayjs("2024-06-01T08:00:00.000Z"),
  handleDateChange: jest.fn(),
  disabledDate: jest.fn(),
  isInterviewDate: jest.fn(),
  interviewDates: [
    { timeslotId: "1", start: "2024-06-13T09:00:00Z", end: "2024-06-13T10:00:00Z" },
    { timeslotId: "2", start: "2024-06-14T10:00:00Z", end: "2024-06-14T11:00:00Z" },
  ],
  setInterviewDate: jest.fn(),
}

const mockUseFormatTimeSlots = useFormatTimeSlots as jest.MockedFunction<typeof useFormatTimeSlots>
const mockFormatDateToLongString = formatDateToLongString as jest.MockedFunction<typeof formatDateToLongString>
const mockUseSelectTimeSlot = useSelectTimeSlot as jest.MockedFunction<typeof useSelectTimeSlot>
const mockUseBookInterviewNow = useBookInterviewNow as jest.MockedFunction<typeof useBookInterviewNow>
const mockUseInterviewDate = useInterviewDate as jest.MockedFunction<typeof useInterviewDate>

describe("DesktopInterviewTimeSlotBooking", () => {
  beforeEach(() => {
    mockUseSelectTimeSlot.mockReturnValue({
      handleTimeSlotChange: jest.fn(),
      selectedTimeSlotId: "",
      setSelectedTimeSlotId: jest.fn(),
    })

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
    mockUseInterviewDate.mockReturnValue(mockUseInterviewDateValue)
  })

  it("should render the component correctly", () => {
    render(<DesktopInterviewTimeSlotBooking />)

    expect(screen.getByTestId("desktop-interview-time-slot-booking")).toBeInTheDocument()
    expect(screen.getByText(/Timezone:/)).toBeInTheDocument()
    expect(screen.getByText("Book interview now")).toBeInTheDocument()
  })

  it("should render the calendar header correctly", () => {
    render(<DesktopInterviewTimeSlotBooking />)

    expect(screen.getByText(dayjs().format("MMMM YYYY"))).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /left/i })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /right/i })).toBeInTheDocument()
  })

  it("should handle calendar navigation", async () => {
    const user = userEvent.setup()
    render(<DesktopInterviewTimeSlotBooking />)

    await user.click(screen.getByRole("img", { name: /left/i }))
    await user.click(screen.getByRole("img", { name: /right/i }))

    expect(mockUseInterviewDate().handleDateChange).not.toHaveBeenCalled()
  })

  // it("should handle date selection", async () => {
  //   const user = userEvent.setup()
  //   const { handleDateChange } = mockUseSelectTimeSlot()

  //   render(<DesktopInterviewTimeSlotBooking />)

  //   const dateCell = screen.getByText(dayjs().date().toString())
  //   await user.click(dateCell)

  //   expect(handleDateChange).toHaveBeenCalled()
  // })

  it("should render and handle time slots correctly", async () => {
    const user = userEvent.setup()
    render(<DesktopInterviewTimeSlotBooking />)

    expect(screen.getByText("09:00 AM - 10:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM - 11:00 AM")).toBeInTheDocument()

    const radioButton = screen.getByText("10:00 AM - 11:00 AM")
    await user.click(radioButton)

    expect(mockUseSelectTimeSlot().handleTimeSlotChange).toHaveBeenCalledWith("2")
  })

  it("should handle booking interview now button click", async () => {
    const user = userEvent.setup()
    render(<DesktopInterviewTimeSlotBooking />)

    const button = screen.getByText("Book interview now")
    await user.click(button)

    expect(mockUseBookInterviewNow().handleBookInterviewNow).toHaveBeenCalled()
  })
})
