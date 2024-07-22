import { graphql } from "@/__generated__"

export const LICancelCandidateInterview = graphql(`
  mutation LICancelCandidateInterview($input: LICancelCandidateInterviewDto!) {
    LICancelCandidateInterview(input: $input) {
      interviewEventId
      interviewScheduleId
      interviewUniqueName
      interviewDisplayName
      interviewType
      interviewMode
      status
    }
  }
`)
