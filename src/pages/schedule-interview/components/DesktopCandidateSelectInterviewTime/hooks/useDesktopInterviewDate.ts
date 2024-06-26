import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { useState } from "react"

export const useDesktopInterviewDate = () => {
  // TODO: Mock data from backend
  const interviewDates = [
    { start: "2024-06-01T08:00:00.000Z", end: "2024-06-01T09:00:00.000Z" },
    { start: "2024-06-01T09:00:00.000Z", end: "2024-06-01T10:00:00.000Z" },
    { start: "2024-06-02T00:00:00.000Z", end: "2024-06-02T01:00:00.000Z" },
    { start: "2024-06-03T00:00:00.000Z", end: "2024-06-03T01:00:00.000Z" },
    { start: "2024-06-18T00:00:00.000Z", end: "2024-06-18T01:00:00.000Z" },
    { start: "2024-06-19T00:00:00.000Z", end: "2024-06-19T01:00:00.000Z" },
  ]

  const initialInterviewDate = dayjs(interviewDates[0].start)
  const [interviewDate, setInterviewDate] = useState<Dayjs>(initialInterviewDate)

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
    }
  }

  return {
    initialInterviewDate,
    interviewDate,
    setInterviewDate,
    isInterviewDate,
    disabledDate,
    clickDate,
    interviewDates,
  }
}
