import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

import { LIGetCandidateScheduleLinkInfoByShortcode } from "../graphql/query/getCandidateScheduleLinkInfo.gql"

export const useGetCandidateScheduleLinkInfoByShortcode = () => {
  const { shortcode = "" } = useParams()
  const {
    data,
    loading: isLoadingCandidateScheduleLinkInfo,
    error: getCandidateScheduleLinkInfoError,
  } = useQuery(LIGetCandidateScheduleLinkInfoByShortcode, {
    variables: {
      filter: {
        shortcode,
      },
    },
    fetchPolicy: "no-cache",
  })

  return {
    candidateScheduleLinkInfo: data?.LIGetCandidateScheduleLinkInfoByShortcode,
    isLoadingCandidateScheduleLinkInfo,
    getCandidateScheduleLinkInfoError,
  }
}
