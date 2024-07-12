import { interviewDates } from "@/pages/schedule-interview/mock/mockInterviewDates"

import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "../constants"

export const interviewInfo = {
  jobRequisitionName: "Software Engineer",
  interviewMode: LIInterviewMode.IN_PERSON,
  timezone: "America/New_York",
  interviewStartsAt: "2024-06-14T13:00:00Z",
  interviewEndsAt: "2024-06-14T14:00:00Z",
  interviewAddress: "7 Kent Street",
  interviewLink: "",
}

export const mockScheduleInterviewContext = {
  interviewInfo,
  interviewDates,
  candidateInterviewScheduleStatus: LICandidateInterviewScheduleStatus.CONFIRMED,
  updateInterviewInfo: jest.fn(),
  updateCandidateInterviewScheduleStatus: jest.fn(),
  logo: "logo.svg",
  isLoadingCandidateScheduleLinkInfo: false,
  getCandidateScheduleLinkInfoError: undefined,
}
