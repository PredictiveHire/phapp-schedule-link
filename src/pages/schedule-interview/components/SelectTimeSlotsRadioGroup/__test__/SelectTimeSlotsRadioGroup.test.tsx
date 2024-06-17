import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"

import { TimeSlot } from "@/pages/schedule-interview/type"

import { SelectTimeSlotsRadioGroup, SelectTimeSlotsRadioGroupProps } from "../SelectTimeSlotsRadioGroup"

describe("SelectTimeSlotsRadioGroup", () => {
  const timeSlots: TimeSlot[] = [
    { timeslotId: "1", slot: "09:00 AM - 10:00 AM" },
    { timeslotId: "2", slot: "10:00 AM - 11:00 AM" },
    { timeslotId: "3", slot: "11:00 AM - 12:00 PM" },
  ]

  const handleTimeSlotChange = jest.fn()

  const setup = (selectedTimeSlotId: string | null) => {
    const props: SelectTimeSlotsRadioGroupProps = {
      timeSlots,
      selectedTimeSlotId,
      handleTimeSlotChange,
    }

    return render(<SelectTimeSlotsRadioGroup {...props} />)
  }

  it("should render all time slots", () => {
    setup(null)
    timeSlots.forEach((timeSlot) => {
      expect(screen.getByText(timeSlot.slot)).toBeInTheDocument()
    })
  })

  it("should render the selected time slot with a check icon", () => {
    setup("2")
    expect(screen.getByText("10:00 AM - 11:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM - 11:00 AM").closest("label")).toContainElement(screen.getByRole("img"))
  })

  it("should call handleTimeSlotChange when a time slot is selected", async () => {
    setup(null)
    const user = userEvent.setup()
    await user.click(screen.getByText("11:00 AM - 12:00 PM"))
    expect(handleTimeSlotChange).toHaveBeenCalledWith("3")
  })

  it("should update the selected time slot when props change", () => {
    const { rerender } = setup("1")
    expect(screen.getByText("09:00 AM - 10:00 AM").closest("label")).toContainElement(screen.getByRole("img"))

    rerender(
      <SelectTimeSlotsRadioGroup
        timeSlots={timeSlots}
        selectedTimeSlotId="3"
        handleTimeSlotChange={handleTimeSlotChange}
      />
    )
    expect(screen.getByText("11:00 AM - 12:00 PM").closest("label")).toContainElement(screen.getByRole("img"))
  })
})
