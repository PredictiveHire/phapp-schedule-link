import { useContext } from "react"

import { ScheduleInterviewContext } from "../context/ScheduleInterviewContext"

export const useScheduleInterview = () => {
  const context = useContext(ScheduleInterviewContext)
  if (context === undefined) {
    throw new Error("useScheduleInterview must be used within a ScheduleInterviewProvider")
  }
  return context
}
