import { useMutation } from "@apollo/client"
import { useRollbar } from "@rollbar/react"
import { App } from "antd"
import { useNavigate } from "react-router-dom"

import type {
  LiRescheduleCandidateInterviewMutation,
  LiRescheduleCandidateInterviewMutationVariables,
} from "@/__generated__/graphql"

import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "../constants"
import { LIRescheduleCandidateInterview } from "../graphql/mutation/rescheduleCandidateInterview.gql"
import { RescheduleCandidateInterview } from "../type/rescheduleCandidateInterview"
import { useScheduleInterview } from "./useScheduleInterview"

export const useRescheduleCandidateInterview = () => {
  const rollbar = useRollbar()
  const { message } = App.useApp()
  const navigate = useNavigate()
  const { interviewInfo, updateInterviewInfo, updateCandidateInterviewScheduleStatus } = useScheduleInterview()
  const [rescheduleCandidateInterview, { loading: isRescheduleCandidateInterviewLoading }] = useMutation<
    LiRescheduleCandidateInterviewMutation,
    LiRescheduleCandidateInterviewMutationVariables
  >(LIRescheduleCandidateInterview, {
    onCompleted: (data: { LIRescheduleCandidateInterview: RescheduleCandidateInterview }) => {
      void message.success("Interview rescheduled successfully")
      const { LIRescheduleCandidateInterview } = data
      const { timezone, interviewStartsAt, interviewEndsAt, iCalId } = LIRescheduleCandidateInterview
      const {
        jobRequisitionName = "",
        interviewMode = LIInterviewMode.IN_PERSON,
        interviewAddress,
        interviewLink,
      } = interviewInfo ?? {}
      updateInterviewInfo({
        jobRequisitionName,
        interviewMode,
        interviewAddress,
        interviewLink,
        timezone,
        interviewStartsAt,
        interviewEndsAt,
        iCalId,
      })
      updateCandidateInterviewScheduleStatus(LICandidateInterviewScheduleStatus.CONFIRMED)

      // redirect to the confirmation page
      setTimeout(() => {
        navigate(-1)
      }, 1000)
    },
    onError: (error) => {
      const errorMsg = error.graphQLErrors?.map((error) => error.message).join("; ")
      void message.error(`Interview failed to reschedule. Please refresh your page and try again.`)
      rollbar.error("Interview failed to reschedule", errorMsg)
    },
  })

  return {
    rescheduleCandidateInterview,
    isRescheduleCandidateInterviewLoading,
  }
}
