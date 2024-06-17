import type { ReactNode } from "react"
import React, { createContext, useState } from "react"

import logoSvg from "@/assets/images/ww-logo.svg"
import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "@/pages/schedule-interview/constants"
import { interviewDates } from "@/pages/schedule-interview/mock/mockInterviewDates"
import {
  CandidateInterviewScheduleInfo,
  ScheduleInterviewContextType,
} from "@/pages/schedule-interview/type/scheduleInterviewContext"

export const ScheduleInterviewContext = createContext<ScheduleInterviewContextType>({} as ScheduleInterviewContextType)

export const ScheduleInterviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // TODO: get candidate interview schedule info from backend
  const initialInterviewInfo = {
    jobRequisitionName: "job requisition name",
    interviewMode: LIInterviewMode.IN_PERSON,
    interviewAddress: "216 Lower Heidelberg Rd, Ivanhoe East VIC 3079",
  }
  const [interviewInfo, setInterviewInfo] = useState(initialInterviewInfo as CandidateInterviewScheduleInfo)

  const [candidateInterviewScheduleStatus, setCandidateInterviewScheduleStatus] = useState(
    LICandidateInterviewScheduleStatus.PENDING
  )
  const updateInterviewInfo = (info: CandidateInterviewScheduleInfo) => {
    setInterviewInfo(info)
  }
  const updateCandidateInterviewScheduleStatus = (status: LICandidateInterviewScheduleStatus) => {
    setCandidateInterviewScheduleStatus(status)
  }

  return (
    <ScheduleInterviewContext.Provider
      value={{
        logo: logoSvg,
        candidateInterviewScheduleStatus: candidateInterviewScheduleStatus,
        updateCandidateInterviewScheduleStatus: updateCandidateInterviewScheduleStatus,
        interviewDates: interviewDates,
        interviewInfo: interviewInfo,
        updateInterviewInfo: updateInterviewInfo,
      }}
    >
      {children}
    </ScheduleInterviewContext.Provider>
  )
}
