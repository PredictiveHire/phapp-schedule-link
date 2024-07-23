import React from "react"

import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"

import { LIInterviewMode } from "../../constants"
import { InterviewInfo } from "../InterviewInfo"
import { DesktopInterviewTimeSlotBooking } from "./components/DesktopInterviewTimeSlotBooking"

export const DesktopCandidateSelectInterviewTime = () => {
  const { interviewInfo, logo } = useScheduleInterview()
  const {
    jobRequisitionName = "",
    interviewMode = LIInterviewMode.IN_PERSON,
    interviewAddress = "",
    interviewLink = "",
    selectedTimeSlotId = "",
  } = interviewInfo ?? {}
  return (
    <div data-testid="desktop-candidate-select-interview-time" className="h-full overflow-y-auto bg-gray-100 p-11">
      <div className="mx-auto flex w-full max-w-[1090px] rounded-[20px] bg-white p-10 shadow-card">
        <InterviewInfo interviewInfo={{ jobRequisitionName, interviewMode, interviewAddress, interviewLink, logo }} />
        <DesktopInterviewTimeSlotBooking defaultTimeSlotId={selectedTimeSlotId} />
      </div>
    </div>
  )
}
