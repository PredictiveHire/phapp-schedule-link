import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"

import { SelectedDateAndTime } from "@/pages/schedule-interview/type"

import { SelectTimeSlotsRadioGroup, SelectTimeSlotsRadioGroupProps } from "../SelectTimeSlotsRadioGroup"

describe("SelectTimeSlotsRadioGroup", () => {
  const mockHandleTimeSlotChange = jest.fn()

  const defaultProps: SelectTimeSlotsRadioGroupProps = {
    timeSlots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"],
    selectedTime: null,
    selectedDateAndTime: {
      selectedDate: "2024-06-23",
      selectedTime: "09:00 AM - 10:00 AM",
    } as SelectedDateAndTime,
    handleTimeSlotChange: mockHandleTimeSlotChange,
    currentDate: "2024-06-23",
  }

  const renderComponent = (props = defaultProps) => {
    return render(<SelectTimeSlotsRadioGroup {...props} />)
  }

  it("renders all time slots", () => {
    renderComponent()
    defaultProps.timeSlots.forEach((slot) => {
      expect(screen.getByText(slot)).toBeInTheDocument()
    })
  })

  it("displays CheckCircleFilled icon for the selected time slot", () => {
    renderComponent()
    expect(screen.getByText("09:00 AM - 10:00 AM").querySelector(".checkCircleFilled")).toBeInTheDocument()
  })

  it("calls handleTimeSlotChange when a time slot is selected", async () => {
    renderComponent()
    const timeSlotButton = screen.getByText("09:00 AM - 10:00 AM")

    await userEvent.click(timeSlotButton)
    expect(mockHandleTimeSlotChange).toHaveBeenCalledWith("09:00 AM - 10:00 AM")
  })
})
