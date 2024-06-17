import { LiBookCandidateInterviewDto } from "@/__generated__/graphql"

export type BookCandidateInterviewDto = LiBookCandidateInterviewDto

export interface BookCandidateInterviewInput {
  timeslotId: string
  shortcode: string
  candidateTimezone: string
}
