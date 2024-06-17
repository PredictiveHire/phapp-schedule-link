import { useContext } from "react"

import { ScheduleInterviewContext } from "../context/ScheduleInterviewContext"

export const useScheduleInterview = () => {
  const context = useContext(ScheduleInterviewContext)
  if (context === undefined) {
    throw new Error("useScheduleInterviewContext must be used within a ScheduleInterviewProvider")
  }
  return context
}
