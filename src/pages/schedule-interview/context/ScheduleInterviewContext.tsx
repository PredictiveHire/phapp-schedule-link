import type { ReactNode } from "react"
import React, { createContext, useEffect, useState } from "react"

import logoSvg from "@/assets/images/ww-logo.svg"
import { ScheduleLinkLoading } from "@/components/ScheduleLinkLoading"
import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "@/pages/schedule-interview/constants"
import {
  CandidateInterviewScheduleInfo,
  ScheduleInterviewContextType,
} from "@/pages/schedule-interview/type/scheduleInterviewContext"

import { useGetCandidateScheduleLinkInfoByShortcode } from "../hooks/useGetCandidateScheduleLinkInfoByShortcode"
import { InterviewTimeSlot } from "../type"
import { LiCandidateScheduleLinkInfo } from "../type/getCandidateScheduleLinkByShortcode"

export const ScheduleInterviewContext = createContext<ScheduleInterviewContextType>({} as ScheduleInterviewContextType)

export const ScheduleInterviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [interviewInfo, setInterviewInfo] = useState<CandidateInterviewScheduleInfo | null>(null)
  const [candidateInterviewScheduleStatus, setCandidateInterviewScheduleStatus] = useState(
    LICandidateInterviewScheduleStatus.PENDING
  )
  const [interviewDates, setInterviewDates] = useState<InterviewTimeSlot[]>([])
  const [isDataUpdated, setIsDataUpdated] = useState(false)

  const { candidateScheduleLinkInfo, isLoadingCandidateScheduleLinkInfo, getCandidateScheduleLinkInfoError } =
    useGetCandidateScheduleLinkInfoByShortcode()

  useEffect(() => {
    if (!isLoadingCandidateScheduleLinkInfo) {
      if (!getCandidateScheduleLinkInfoError && candidateScheduleLinkInfo) {
        const {
          jobRequisitionName,
          candidateTimezone,
          candidateScheduleStatus,
          timeslots,
          interviewSchedule,
          interviewEvent,
        } = candidateScheduleLinkInfo as LiCandidateScheduleLinkInfo
        const { interviewMode, interviewLink, interviewAddress } = interviewSchedule

        const formattedInterviewDates = timeslots.map((timeslot) => ({
          start: timeslot.start,
          end: timeslot.end,
          timeslotId: timeslot._id,
        }))
        setInterviewDates(formattedInterviewDates)

        setInterviewInfo({
          jobRequisitionName: jobRequisitionName ?? "",
          timezone: candidateTimezone,
          interviewMode: interviewMode ?? LIInterviewMode.IN_PERSON,
          interviewLink: interviewLink ?? "",
          interviewAddress: interviewAddress ?? "",
          interviewStartsAt: interviewEvent?.interviewStartsAt ?? "",
          interviewEndsAt: interviewEvent?.interviewEndsAt ?? "",
          iCalId: interviewEvent?.iCalId ?? "",
        })

        setCandidateInterviewScheduleStatus(candidateScheduleStatus)
      }
      setIsDataUpdated(true)
    }
  }, [isLoadingCandidateScheduleLinkInfo, getCandidateScheduleLinkInfoError, candidateScheduleLinkInfo])

  if (isLoadingCandidateScheduleLinkInfo || !isDataUpdated) {
    return <ScheduleLinkLoading />
  }

  return (
    <ScheduleInterviewContext.Provider
      value={{
        logo: logoSvg,
        candidateInterviewScheduleStatus,
        updateCandidateInterviewScheduleStatus: setCandidateInterviewScheduleStatus,
        interviewDates,
        interviewInfo,
        updateInterviewInfo: setInterviewInfo,
        isLoadingCandidateScheduleLinkInfo,
        getCandidateScheduleLinkInfoError,
      }}
    >
      {children}
    </ScheduleInterviewContext.Provider>
  )
}
