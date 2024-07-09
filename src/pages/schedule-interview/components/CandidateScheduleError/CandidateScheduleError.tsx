import { ApolloError } from "@apollo/client"
import React from "react"

import { ErrorDisplay } from "@/components/ErrorDisplay"
import { getCandidateScheduleLinkInfoErrorMessage } from "@/utils/getCandidateScheduleLinkInfoErrorMessage"

interface CandidateScheduleErrorProps {
  getCandidateScheduleLinkInfoError: ApolloError
}
export const CandidateScheduleError: React.FC<CandidateScheduleErrorProps> = ({
  getCandidateScheduleLinkInfoError,
}) => {
  const code = getCandidateScheduleLinkInfoError?.graphQLErrors[0]?.extensions?.code ?? ""
  const description = getCandidateScheduleLinkInfoErrorMessage(String(code))
  return <ErrorDisplay description={description} />
}
