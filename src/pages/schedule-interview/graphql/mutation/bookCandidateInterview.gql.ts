import { graphql } from "@/__generated__"

export const LIBookCandidateInterview = graphql(`
  mutation LIBookCandidateInterview($input: LIBookCandidateInterviewDto!) {
    LIBookCandidateInterview(input: $input) {
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
