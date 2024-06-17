import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import dayjs from "dayjs"
import React from "react"

import { useTimeSlots } from "../../../../hooks/useTimeSlots"
import { useSelectTimeSlot } from "../../hooks/useSelectTimeSlot"
import { DesktopInterviewTimeSlotBooking } from "../DesktopInterviewTimeSlotBooking"

// Mock the hooks
jest.mock("../../hooks/useSelectTimeSlot")
jest.mock("../../../../hooks/useTimeSlots")

const mockUseSelectTimeSlot = useSelectTimeSlot as jest.MockedFunction<typeof useSelectTimeSlot>
const mockUseTimeSlots = useTimeSlots as jest.MockedFunction<typeof useTimeSlots>

describe("DesktopInterviewTimeSlotBooking", () => {
  beforeEach(() => {
    mockUseSelectTimeSlot.mockReturnValue({
      initialInterviewDate: dayjs("2024-06-01T08:00:00.000Z"),
      handleTimeSlotChange: jest.fn(),
      selectedTime: "",
      selectedDateAndTime: { selectedDate: "", selectedTime: "" },
      interviewDate: dayjs("2024-06-01T08:00:00.000Z"),
      isInterviewDate: jest.fn(),
      disabledDate: jest.fn(),
      interviewDates: [
        { start: "2024-06-01T08:00:00.000Z", end: "2024-06-01T09:00:00.000Z" },
        { start: "2024-06-01T09:00:00.000Z", end: "2024-06-01T10:00:00.000Z" },
      ],
      handleDateChange: jest.fn(),
      handleBookInterviewNow: jest.fn(),
      clickDate: jest.fn(),
      setSelectedTime: jest.fn(),
    })

    mockUseTimeSlots.mockReturnValue({
      formatTimeSlots: jest.fn().mockReturnValue([]),
    })
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

    expect(mockUseSelectTimeSlot().handleDateChange).not.toHaveBeenCalled()
  })

  it("should handle date selection", async () => {
    const user = userEvent.setup()
    const { handleDateChange } = mockUseSelectTimeSlot()

    render(<DesktopInterviewTimeSlotBooking />)

    const dateCell = screen.getByText(dayjs().date().toString())
    await user.click(dateCell)

    expect(handleDateChange).toHaveBeenCalled()
  })

  it("should render and handle time slots correctly", async () => {
    mockUseSelectTimeSlot.mockReturnValue({
      ...mockUseSelectTimeSlot(),
      selectedTime: "09:00 AM - 10:00 AM",
      selectedDateAndTime: { selectedDate: dayjs().format("YYYY-MM-DD"), selectedTime: "09:00 AM - 10:00 AM" },
    })

    mockUseTimeSlots.mockReturnValue({
      formatTimeSlots: jest.fn().mockReturnValue(["08:00 AM - 9:00 AM", "09:00 AM - 10:00 AM"]),
    })
    const user = userEvent.setup()
    render(<DesktopInterviewTimeSlotBooking />)

    expect(screen.getByText("08:00 AM - 9:00 AM")).toBeInTheDocument()
    expect(screen.getByText("09:00 AM - 10:00 AM")).toBeInTheDocument()

    const radioButton = screen.getByText("08:00 AM - 9:00 AM")
    await user.click(radioButton)

    expect(mockUseSelectTimeSlot().handleTimeSlotChange).toHaveBeenCalledWith("08:00 AM - 9:00 AM")
  })

  it("should handle booking interview now button click", async () => {
    const user = userEvent.setup()
    render(<DesktopInterviewTimeSlotBooking />)

    const button = screen.getByText("Book interview now")
    await user.click(button)

    expect(mockUseSelectTimeSlot().handleBookInterviewNow).toHaveBeenCalled()
  })
})
