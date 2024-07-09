import type {
  LiCandidateScheduleLinkInfoEntity,
  LiCandidateScheduleLinkInfoInterviewEventEntity,
  LiCandidateScheduleLinkInfoInterviewScheduleEntity,
  LiCandidateScheduleLinkInfoTimeslotEntity,
  LiGetCandidateScheduleLinkInfoByShortcodeQuery,
} from "@/__generated__/graphql"

import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "../constants"

export type LiGetCandidateScheduleLinkInfoByShortcode =
  LiGetCandidateScheduleLinkInfoByShortcodeQuery["LIGetCandidateScheduleLinkInfoByShortcode"]

export interface CandidateScheduleLinkInfoInterviewSchedule extends LiCandidateScheduleLinkInfoInterviewScheduleEntity {
  interviewMode: LIInterviewMode
}
export interface CandidateScheduleLinkInfoInterviewEvent extends LiCandidateScheduleLinkInfoInterviewEventEntity {
  interviewStartsAt?: string | null
  interviewEndsAt?: string | null
}
export interface CandidateScheduleLinkInfoTimeslot extends LiCandidateScheduleLinkInfoTimeslotEntity {
  start: string
  end: string
}

export interface LiCandidateScheduleLinkInfo extends LiCandidateScheduleLinkInfoEntity {
  timeslots: CandidateScheduleLinkInfoTimeslot[]
  interviewEvent: CandidateScheduleLinkInfoInterviewEvent
  candidateScheduleStatus: LICandidateInterviewScheduleStatus
  interviewSchedule: CandidateScheduleLinkInfoInterviewSchedule
}
