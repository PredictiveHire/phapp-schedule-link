import { Dayjs } from "dayjs"
import { useState } from "react"

import { SelectedDateAndTime } from "@/pages/schedule-interview/type"
import { formatDayjs } from "@/utils/dateTime"

import { useDesktopInterviewDate } from "./useDesktopInterviewDate"

export const useSelectTimeSlot = () => {
  const { initialInterviewDate, interviewDate, isInterviewDate, disabledDate, clickDate, interviewDates } =
    useDesktopInterviewDate()
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedDateAndTime, setSelectedDateAndTime] = useState<SelectedDateAndTime>({
    selectedDate: formatDayjs(interviewDate),
    selectedTime: "",
  })

  const handleTimeSlotChange = (time: string) => {
    setSelectedTime(time)
    setSelectedDateAndTime({
      selectedDate: formatDayjs(interviewDate),
      selectedTime: time,
    })
  }

  const handleDateChange = (value: Dayjs) => {
    if (formatDayjs(value) === selectedDateAndTime.selectedDate) {
      setSelectedTime(selectedDateAndTime.selectedTime)
    } else {
      setSelectedTime(null)
    }
    clickDate(value)
  }

  const handleBookInterviewNow = () => {
    // TODO: Handle book interview now
    if (selectedDateAndTime.selectedTime) {
      alert(`Proceed to confirmation for ${selectedDateAndTime.selectedDate} at ${selectedDateAndTime.selectedTime}`)
    }
  }

  return {
    initialInterviewDate,
    interviewDate,
    isInterviewDate,
    disabledDate,
    clickDate,
    interviewDates,
    selectedTime,
    setSelectedTime,
    handleTimeSlotChange,
    handleDateChange,
    selectedDateAndTime,
    handleBookInterviewNow,
  }
}
