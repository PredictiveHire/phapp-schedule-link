import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { useState } from "react"

import { useScheduleInterview } from "./useScheduleInterview"

export const useInterviewDate = () => {
  const { interviewDates } = useScheduleInterview()
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

  const handleDateChange = (date: Dayjs) => {
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
    handleDateChange,
    interviewDates,
  }
}
