import React from "react"

import logoSvg from "../../../../assets/images/ww-logo.svg"
import { LIInterviewMode } from "../../constants"
import { InterviewInfo } from "../InterviewInfo"
import { DesktopInterviewTimeSlotBooking } from "./components/DesktopInterviewTimeSlotBooking"

// TODO: Mock data from backend
const interviewInfo = {
  logo: logoSvg,
  jobRequisitionName: "job requisition name",
  interviewMode: LIInterviewMode.IN_PERSON,
  interviewAddress: "216 Lower Heidelberg Rd, Ivanhoe East VIC 3079",
}

export const DesktopCandidateSelectInterviewTime = () => {
  return (
    <div data-testid="desktop-candidate-select-interview-time" className="h-full overflow-y-auto bg-gray-100 p-11">
      <div className="mx-auto flex w-full max-w-[1090px] rounded-[20px] bg-white p-10 shadow-card">
        <InterviewInfo interviewInfo={interviewInfo} />
        <DesktopInterviewTimeSlotBooking />
      </div>
    </div>
  )
}
