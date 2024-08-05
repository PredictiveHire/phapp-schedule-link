import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import dayjs from "dayjs"
import React from "react"
import { MemoryRouter } from "react-router-dom"

import { DATE_FORMAT } from "@/pages/schedule-interview/constants"
import { useBookInterviewNow } from "@/pages/schedule-interview/hooks/useBookInterviewNow"
import { useFormatTimeSlots } from "@/pages/schedule-interview/hooks/useFormatTimeSlots"
import { useInterviewDate } from "@/pages/schedule-interview/hooks/useInterviewDate"
import { useRescheduleCandidateInterview } from "@/pages/schedule-interview/hooks/useRescheduleCandidateInterview"
import { useSelectTimeSlot } from "@/pages/schedule-interview/hooks/useSelectTimeSlot"
import { formatDateToLongString } from "@/utils/dateTime"

import { DesktopInterviewTimeSlotBooking } from "../DesktopInterviewTimeSlotBooking"

// Mock the hooks
jest.mock("@/pages/schedule-interview/hooks/useRescheduleCandidateInterview")
jest.mock("@/pages/schedule-interview/hooks/useFormatTimeSlots")
jest.mock("@/utils/dateTime")
jest.mock("@/pages/schedule-interview/hooks/useSelectTimeSlot")
jest.mock("@/pages/schedule-interview/hooks/useBookInterviewNow")
jest.mock("@/pages/schedule-interview/hooks/useInterviewDate")
jest.mock("@rollbar/react")

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
  ].map((date) => ({
    ...date,
    start: dayjs(date.start).month(dayjs().month()).format(),
    end: dayjs(date.end).month(dayjs().month()).format(),
  })),
  setInterviewDate: jest.fn(),
}

const mockUseRescheduleCandidateInterview = (
  useRescheduleCandidateInterview as jest.MockedFunction<typeof useRescheduleCandidateInterview>
).mockReturnValue({
  isRescheduleCandidateInterviewLoading: false,
  rescheduleCandidateInterview: jest.fn(),
})

const mockUseFormatTimeSlots = useFormatTimeSlots as jest.MockedFunction<typeof useFormatTimeSlots>
const mockFormatDateToLongString = formatDateToLongString as jest.MockedFunction<typeof formatDateToLongString>
const mockUseSelectTimeSlot = useSelectTimeSlot as jest.MockedFunction<typeof useSelectTimeSlot>
const mockUseBookInterviewNow = useBookInterviewNow as jest.MockedFunction<typeof useBookInterviewNow>
const mockUseInterviewDate = useInterviewDate as jest.MockedFunction<typeof useInterviewDate>

const renderComponent = () => {
  return render(
    <MemoryRouter>
      <DesktopInterviewTimeSlotBooking />
    </MemoryRouter>
  )
}

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
    renderComponent()

    expect(screen.getByTestId("desktop-interview-time-slot-booking")).toBeInTheDocument()
    expect(screen.getByText(/Timezone:/)).toBeInTheDocument()
    expect(screen.getByText("Book interview now")).toBeInTheDocument()
  })

  it("should render the calendar header correctly", () => {
    renderComponent()

    expect(screen.getByText("June 2024")).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /left/i })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /right/i })).toBeInTheDocument()
  })

  it("should handle calendar navigation", async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(screen.getByRole("img", { name: /left/i }))
    await user.click(screen.getByRole("img", { name: /right/i }))

    expect(mockUseInterviewDate().handleDateChange).not.toHaveBeenCalled()
  })

  it("should handle date selection", async () => {
    const user = userEvent.setup()
    const handleDateChange = jest.fn()
    mockUseInterviewDate.mockReturnValue({
      ...mockUseInterviewDateValue,
      handleDateChange,
    })

    renderComponent()
    const dateTestId = dayjs("June 13, 2024").format(DATE_FORMAT)
    const dateCell = screen.getByTestId(dateTestId)
    await user.click(dateCell)

    expect(handleDateChange).toHaveBeenCalled()
  })

  it("should render and handle time slots correctly", async () => {
    const user = userEvent.setup()
    renderComponent()

    expect(screen.getByText("09:00 AM - 10:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM - 11:00 AM")).toBeInTheDocument()

    const radioButton = screen.getByText("10:00 AM - 11:00 AM")
    await user.click(radioButton)

    expect(
      mockUseSelectTimeSlot({
        defaultTimeSlotId: undefined,
      }).handleTimeSlotChange
    ).toHaveBeenCalledWith("2")
  })

  it("should handle booking interview now button click", async () => {
    const user = userEvent.setup()
    renderComponent()

    const button = screen.getByText("Book interview now")
    await user.click(button)

    expect(mockUseBookInterviewNow().handleBookInterviewNow).toHaveBeenCalled()
  })
})
