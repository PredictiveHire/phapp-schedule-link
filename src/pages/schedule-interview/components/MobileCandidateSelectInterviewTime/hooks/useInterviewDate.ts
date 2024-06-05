import type { Dayjs } from "dayjs"
import { useState } from "react"

export const useInterviewDate = () => {
  const [showTimeSlotBooking, setShowTimeSlotBooking] = useState(false)
  const [interviewDate, setInterviewDate] = useState<Dayjs>()

  // TODO: Mock data from backend
  const interviewDates = [
    { start: "2024-06-01T08:00:00.000Z", end: "2024-06-01T09:00:00.000Z" },
    { start: "2024-06-01T09:00:00.000Z", end: "2024-06-01T10:00:00.000Z" },
    { start: "2024-06-02T00:00:00.000Z", end: "2024-06-02T01:00:00.000Z" },
    { start: "2024-06-03T00:00:00.000Z", end: "2024-06-03T01:00:00.000Z" },
    { start: "2024-06-04T00:00:00.000Z", end: "2024-06-04T01:00:00.000Z" },
    { start: "2024-06-05T00:00:00.000Z", end: "2024-06-05T01:00:00.000Z" },
  ]
  const isInterviewDate = (date: Dayjs) =>
    interviewDates.some((d) => {
      const startDate = new Date(d.start)
      return (
        date.year() === startDate.getFullYear() &&
        date.month() === startDate.getMonth() &&
        date.date() === startDate.getDate()
      )
    })

  const disabledDate = (date: Dayjs) => !isInterviewDate(date)

  const clickDate = (date: Dayjs) => {
    if (isInterviewDate(date)) {
      setInterviewDate(date)
      setShowTimeSlotBooking(true)
    }
  }

  return {
    showTimeSlotBooking,
    setShowTimeSlotBooking,
    interviewDate,
    setInterviewDate,
    isInterviewDate,
    disabledDate,
    clickDate,
    interviewDates,
  }
}
