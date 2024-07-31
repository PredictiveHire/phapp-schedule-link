import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

import { LIGetBrandingByShortcode } from "../graphql/query/getCandidateScheduleByShortcode.gql"

export const useGetBrandingByShortcode = () => {
  const { shortcode = "" } = useParams()
  const {
    data,
    loading: isLoadingCandidateScheduleLinkBranding,
    error: getCandidateScheduleLinkInfoError,
  } = useQuery(LIGetBrandingByShortcode, {
    variables: {
      filter: {
        shortcode,
      },
    },
    fetchPolicy: "no-cache",
  })

  return {
    candidateScheduleLinkBranding: data?.LIGetBrandingByShortcode,
    isLoadingCandidateScheduleLinkBranding,
    getCandidateScheduleLinkInfoError,
  }
}
