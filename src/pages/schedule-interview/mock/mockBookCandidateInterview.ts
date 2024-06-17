import { LIBookCandidateInterview } from "../graphql/mutation/bookCandidateInterview.gql"

export const mockBookCandidateInterview = [
  {
    request: {
      query: LIBookCandidateInterview,
      variables: {
        shortcode: "shortcode-1",
        timeslotId: "110000000000000000000003",
        candidateTimezone: "Asia/Tokyo",
      },
    },
    result: {
      data: {},
    },
  },
]
