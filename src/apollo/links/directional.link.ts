import { ApolloLink, from } from "@apollo/client"

import { errorLink } from "./error.link"
import { httpLink } from "./http.link"

export const directionalLink = new ApolloLink((operation, forward) => {
  return forward(operation)
}).split(
  (operation) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { operationName } = operation

    // If the operation name no needs to refresh token, then no need to refresh token
    // if ([...noRefreshTokenOperationName].includes(operationName)) {
    //   return false
    // }

    // If the operation name needs CSRF protection, then need to add csrf token to the header
    // if ([...csrfProtectedOperationName].includes(operationName)) {
    //   return true
    // }

    return true
  },
  // httpLink must be on the right side to initialize the request path
  from([errorLink, httpLink]),
  from([errorLink, httpLink])
)
