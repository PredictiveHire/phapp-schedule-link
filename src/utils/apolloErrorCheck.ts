import { ApolloError } from "@apollo/client/errors"

const checkError = (e: ApolloError, code: string) => {
  if (e && e.graphQLErrors) {
    for (const gqlError of e.graphQLErrors) {
      if (gqlError.extensions?.code === code) {
        return true
      }
    }
    return false
  }
  return false
}

const checkValidationError = (e: ApolloError) => {
  if (e && e.graphQLErrors && Array.isArray(e.graphQLErrors)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return e.graphQLErrors.some((error) => error.extensions.exception.name.includes("Validation Error"))
  }
}

export const isGqlAuthenticationError = (e: ApolloError) => {
  return checkError(e, "UNAUTHENTICATED")
}

export const isGqlBadUserInputError = (e: ApolloError) => {
  return checkError(e, "BAD_USER_INPUT")
}

export const isGqlInternalServerError = (e: ApolloError) => {
  return checkError(e, "INTERNAL_SERVER_ERROR") || checkError(e, "DOWNSTREAM_SERVICE_ERROR")
}

export const isGqlForbiddenError = (e: ApolloError) => {
  return checkError(e, "FORBIDDEN")
}

export const isGqlNotFoundError = (e: ApolloError) => {
  return checkError(e, "NOT_FOUND")
}

export const isValidationError = (e: ApolloError) => {
  return checkError(e, "INTERNAL_SERVER_ERROR") && checkValidationError(e)
}
