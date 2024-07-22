import { useMutation } from "@apollo/client"
import { useRollbar } from "@rollbar/react"
import { App } from "antd"
import { useNavigate, useParams } from "react-router-dom"

import {
  LiCancelCandidateInterviewMutation,
  LiCancelCandidateInterviewMutationVariables,
} from "@/__generated__/graphql"
import { LICancelCandidateInterview } from "@/pages/schedule-interview/graphql/mutation/cancelCandidateInterview.gql"

export const useCandidateCancelInterview = () => {
  const rollbar = useRollbar()
  const { message } = App.useApp()
  const navigate = useNavigate()
  const { shortcode = "" } = useParams<{
    shortcode: string
  }>()

  const [cancelCandidateInterviewRequest, { loading: isCancelCandidateInterviewLoading }] = useMutation<
    LiCancelCandidateInterviewMutation,
    LiCancelCandidateInterviewMutationVariables
  >(LICancelCandidateInterview, {
    onCompleted: (data) => {
      if (data?.LICancelCandidateInterview?.status === "CANCELLED") {
        void message.success(`Interview has been cancelled successfully.`)
        navigate(`cancel-confirmation`)
      }
    },
    onError: (error) => {
      void message.error("Interview fail to cancel, please try again.")
      rollbar.error("Interview fail to cancel, please try again.", error)
    },
  })

  const cancelCandidateInterview = async () => {
    await cancelCandidateInterviewRequest({
      variables: {
        input: {
          shortcode,
        },
      },
    })
  }

  return {
    isCancelCandidateInterviewLoading,
    cancelCandidateInterview,
  }
}
