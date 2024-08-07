import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "../constants/interviewInfo"
import { InterviewTimeSlot } from "./interviewTimeSlot"

export interface CandidateInterviewScheduleInfo {
  jobRequisitionName: string
  interviewMode: LIInterviewMode
  interviewAddress?: string
  interviewLink?: string
  interviewStartsAt?: string
  interviewEndsAt?: string
  timezone?: string
  iCalId?: string
}
export type ScheduleInterviewContextType = {
  candidateInterviewScheduleStatus: LICandidateInterviewScheduleStatus
  logo: string
  interviewDates: InterviewTimeSlot[]
  interviewInfo: CandidateInterviewScheduleInfo
  updateInterviewInfo: (info: CandidateInterviewScheduleInfo) => void
  updateCandidateInterviewScheduleStatus: (status: LICandidateInterviewScheduleStatus) => void
}
