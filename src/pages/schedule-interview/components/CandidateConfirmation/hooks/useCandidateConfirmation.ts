import { LIInterviewMode } from "../../MobileCandidateSelectInterviewTime/constants"
import { InterviewTimeSlot } from "../../MobileCandidateSelectInterviewTime/type"

interface InterviewData {
  jobRequisitionName: string
  interviewMode: LIInterviewMode
  timezone: string
  interviewTime: InterviewTimeSlot
  interviewAddress: string
  interviewLink: string
}

export const useCandidateConfirmation = () => {
  // TODO: MOCK DATA
  const interviewData: InterviewData = {
    jobRequisitionName: "Software Engineer",
    interviewMode: LIInterviewMode.IN_PERSON,
    timezone: "Australia/Melbourne",
    interviewTime: { start: "2024-06-01T08:00:00.000Z", end: "2024-06-01T09:00:00.000Z" },
    interviewAddress: "Room 1, Level 9, 477 Collins St, Melbourne VIC 3000, Australia",
    interviewLink: "",
  }

  return {
    interviewData,
  }
}
