export interface BookCandidateInterviewInput {
  timeslotId: string
  shortcode: string
  candidateTimezone: string
}

export const useRescheduleInterview = () => {
  // TODO: will implement rescheduleCandidateInterview
  const mockGqlHook = {
    rescheduleCandidateInterview: () => {
      console.log("rescheduleCandidateInterview")
    },
    isRescheduleInterviewLoading: false,
  }

  const { rescheduleCandidateInterview, isRescheduleInterviewLoading } = mockGqlHook
  const handleRescheduleInterview = (options: BookCandidateInterviewInput) => {
    const { timeslotId = "", shortcode = "", candidateTimezone = "" } = options
    rescheduleCandidateInterview()
  }

  return {
    handleRescheduleInterview,
    isRescheduleInterviewLoading,
  }
}
