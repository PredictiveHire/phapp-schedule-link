import { ApolloLink } from "@apollo/client"
import Cookies from "js-cookie"

import { XSRF_TOKEN } from "../../constants"

export const csrfHeaderLink = new ApolloLink((operation, forward) => {
  const csrfTokenInCookie = Cookies.get(XSRF_TOKEN)
  if (csrfTokenInCookie) {
    // The csrf token is passed from EDGE through cookies. TI follows EDGE way to add the csrf to the headers
    // https://github.com/PredictiveHire/phapp-edge-v3/blob/develop/src/graphql/links/csrfHeader.link.ts
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        "X-XSRF-TOKEN": csrfTokenInCookie,
      },
    }))
  }

  return forward(operation)
})
