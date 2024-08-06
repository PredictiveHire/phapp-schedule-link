import { graphql } from "@/__generated__"

export const LIRescheduleCandidateInterview = graphql(`
  mutation LIRescheduleCandidateInterview($input: LIRescheduleCandidateInterviewDto!) {
    LIRescheduleCandidateInterview(input: $input) {
      jobRequisitionName
      interviewType
      interviewLocation
      interviewLink
      timezone
      interviewStartsAt
      interviewEndsAt
      iCalId
    }
  }
`)
