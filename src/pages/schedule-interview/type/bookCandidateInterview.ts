import { LiBookCandidateInterviewDto, LiBookCandidateInterviewMutation } from "@/__generated__/graphql"

export type LiBookCandidateInterview = LiBookCandidateInterviewMutation["LIBookCandidateInterview"]
export interface BookCandidateInterview extends LiBookCandidateInterview {
  timezone: string
  interviewStartsAt: string
  interviewEndsAt: string
  iCalId: string
}
export type BookCandidateInterviewDto = LiBookCandidateInterviewDto

export interface BookCandidateInterviewInput {
  timeslotId: string
  shortcode: string
  candidateTimezone: string
}
