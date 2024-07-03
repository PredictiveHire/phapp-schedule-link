import { useMutation } from "@apollo/client"
import { App } from "antd"

import type {
  LiBookCandidateInterviewMutation,
  LiBookCandidateInterviewMutationVariables,
} from "@/__generated__/graphql"

import { LICandidateInterviewScheduleStatus } from "../constants"
import { LIBookCandidateInterview } from "../graphql/mutation/bookCandidateInterview.gql"
import { BookCandidateInterview } from "../type/bookCandidateInterview"
import { useScheduleInterview } from "./useScheduleInterview"

export const useBookCandidateInterview = () => {
  const { message } = App.useApp()
  const { interviewInfo, updateInterviewInfo, updateCandidateInterviewScheduleStatus } = useScheduleInterview()
  const [bookCandidateInterview, { loading: isBookCandidateInterviewLoading }] = useMutation<
    LiBookCandidateInterviewMutation,
    LiBookCandidateInterviewMutationVariables
  >(LIBookCandidateInterview, {
    onCompleted: (data: { LIBookCandidateInterview: BookCandidateInterview }) => {
      const { LIBookCandidateInterview } = data
      const { timezone, interviewStartsAt, interviewEndsAt, iCalId } = LIBookCandidateInterview
      void message.success("Interview booked successfully")
      updateInterviewInfo({
        ...interviewInfo,
        timezone,
        interviewStartsAt,
        interviewEndsAt,
        iCalId,
      })
      updateCandidateInterviewScheduleStatus(LICandidateInterviewScheduleStatus.CONFIRMED)
    },
    onError: (error) => {
      const errorMsg = error.graphQLErrors?.map((error) => error.message).join("; ")
      void message.error(`Failed to book interview:${errorMsg}`)
    },
  })

  return {
    bookCandidateInterview,
    isBookCandidateInterviewLoading,
  }
}
