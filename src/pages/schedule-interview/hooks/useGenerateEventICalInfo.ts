import { useMutation } from "@apollo/client"
import { useRollbar } from "@rollbar/react"
import { App } from "antd"

import { LiGenerateEventICalInfoMutation, LiGenerateEventICalInfoMutationVariables } from "@/__generated__/graphql"

import { LIGenerateEventICalInfo } from "../graphql/mutation/generateEventICalInfo.gql"

export const useGenerateEventICalInfo = () => {
  const rollbar = useRollbar()
  const { message } = App.useApp()

  const [generateEventICalInfo, { loading: isGenerateEventICalInfoLoading }] = useMutation<
    LiGenerateEventICalInfoMutation,
    LiGenerateEventICalInfoMutationVariables
  >(LIGenerateEventICalInfo, {
    onError: (error) => {
      void message.error("Failed to add calendar. Please try again")
      rollbar.error("Failed to add calendar", error)
    },
  })

  return {
    generateEventICalInfo,
    isGenerateEventICalInfoLoading,
  }
}
