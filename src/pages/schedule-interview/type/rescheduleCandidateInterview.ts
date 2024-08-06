import { LiRescheduleCandidateInterviewMutation } from "@/__generated__/graphql"

export type LiRescheduleCandidateInterview = LiRescheduleCandidateInterviewMutation["LIRescheduleCandidateInterview"]
export interface RescheduleCandidateInterview extends LiRescheduleCandidateInterview {
  timezone: string
  interviewStartsAt: string
  interviewEndsAt: string
  iCalId: string
}
