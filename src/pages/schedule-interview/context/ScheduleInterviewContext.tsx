import dayjs from "dayjs"
import type { ReactNode } from "react"
import React, { createContext, useEffect, useState } from "react"

import { ScheduleLinkLoading } from "@/components/ScheduleLinkLoading"
import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "@/pages/schedule-interview/constants"
import {
  CandidateInterviewScheduleInfo,
  ScheduleInterviewContextType,
} from "@/pages/schedule-interview/type/scheduleInterviewContext"

import { useGetBrandingByShortcode } from "../hooks/useGetBrandingByShortcode"
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
  const [logo, setLogo] = useState("")
  const [isDataUpdated, setIsDataUpdated] = useState(false)

  const { candidateScheduleLinkInfo, isLoadingCandidateScheduleLinkInfo, getCandidateScheduleLinkInfoError } =
    useGetCandidateScheduleLinkInfoByShortcode()
  const { candidateScheduleLinkBranding, isLoadingCandidateScheduleLinkBranding } = useGetBrandingByShortcode()

  useEffect(() => {
    if (!isLoadingCandidateScheduleLinkInfo && !getCandidateScheduleLinkInfoError && candidateScheduleLinkInfo) {
      const {
        jobRequisitionName,
        candidateTimezone,
        candidateScheduleStatus,
        timeslots,
        interviewSchedule,
        interviewEvent,
      } = candidateScheduleLinkInfo as LiCandidateScheduleLinkInfo
      const { interviewMode, interviewLink, interviewAddress } = interviewSchedule

      const formattedInterviewDates = timeslots
        .map((timeslot) => ({
          start: timeslot.start,
          end: timeslot.end,
          timeslotId: timeslot._id,
        }))
        .sort((a, b) => dayjs(a.start).diff(dayjs(b.start)))

      // TODO: replace timeSlotId from interviewEvent
      const selectedTimeSlotId = "110000000000000000000005"
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
        selectedTimeSlotId: (interviewEvent && selectedTimeSlotId) ?? "",
      })

      setCandidateInterviewScheduleStatus(candidateScheduleStatus)
    }

    if (!isLoadingCandidateScheduleLinkBranding) {
      setLogo(candidateScheduleLinkBranding?.logoUrl ?? "")
    }

    if (!isLoadingCandidateScheduleLinkInfo && !isLoadingCandidateScheduleLinkBranding) {
      setIsDataUpdated(true)
    }
  }, [
    isLoadingCandidateScheduleLinkInfo,
    isLoadingCandidateScheduleLinkBranding,
    getCandidateScheduleLinkInfoError,
    candidateScheduleLinkInfo,
    candidateScheduleLinkBranding,
  ])

  if (isLoadingCandidateScheduleLinkInfo || isLoadingCandidateScheduleLinkBranding || !isDataUpdated) {
    return <ScheduleLinkLoading />
  }

  return (
    <ScheduleInterviewContext.Provider
      value={{
        logo,
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
