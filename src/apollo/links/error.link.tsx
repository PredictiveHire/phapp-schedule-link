/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ApolloError } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

import { isGqlAuthenticationError } from "@/utils"
import { checkIsPublicUrl } from "@/utils/checkIsPublicUrl"

import { sessionHasTimeoutApolloVar, SessionTimeoutNotificationMethod } from "../../constants"

export const errorLink = onError(({ operation, ...error }) => {
  const { graphQLErrors, networkError } = error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { operationName } = operation

  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      // This needs to be improved when we have more standardized error code
      const graphQLErrorsConditions = ["Access denied", "AccessToken is empty"]

      if (
        // trigger this when refresh token fails
        isGqlAuthenticationError(new ApolloError({ graphQLErrors })) ||
        graphQLErrorsConditions.some((condition) => error.message.includes(condition))
      ) {
        // Note according to the design, private pages should automatically display unauthenticated page. e.g. /talent-insights
        // That's why we mark forceLogout attribute as true
        // Hook in AuthProvider can logout user and update page based on sessionHasTimeout
        const isPublicUrl = checkIsPublicUrl(window.location.href)
        sessionHasTimeoutApolloVar({
          sessionHasTimeout: true,
          notificationMethod: isPublicUrl
            ? SessionTimeoutNotificationMethod.TOAST
            : SessionTimeoutNotificationMethod.MODAL,
          forceLogout: isPublicUrl,
        })
        return
      }
    })
  }

  if (networkError) {
    // eslint-disable-next-line no-console
    console.log(`[Network error]: ${networkError}`)
  }
})
