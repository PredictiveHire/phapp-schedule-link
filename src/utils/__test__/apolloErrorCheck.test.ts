import { ApolloError } from "@apollo/client/errors"
import { GraphQLError } from "graphql"

import {
  isGqlAuthenticationError,
  isGqlBadUserInputError,
  isGqlForbiddenError,
  isGqlInternalServerError,
  isGqlNotFoundError,
  isValidationError,
} from "../apolloErrorCheck" // adjust the import path accordingly

// Helper function to create a GraphQLError instance
const createGraphQLError = (code: string, name: string = ""): GraphQLError => {
  return new GraphQLError("Error message", {
    extensions: { code, exception: { name } },
  })
}

describe("utils => apolloErrorCheck", () => {
  const createApolloError = (code: string, name: string = ""): ApolloError => {
    const gqlError = createGraphQLError(code, name)
    return new ApolloError({
      graphQLErrors: [gqlError],
    })
  }

  it("should return true for UNAUTHENTICATED error", () => {
    const error = createApolloError("UNAUTHENTICATED")
    expect(isGqlAuthenticationError(error)).toBe(true)
  })

  it("should return true for BAD_USER_INPUT error", () => {
    const error = createApolloError("BAD_USER_INPUT")
    expect(isGqlBadUserInputError(error)).toBe(true)
  })

  it("should return true for INTERNAL_SERVER_ERROR or DOWNSTREAM_SERVICE_ERROR", () => {
    const internalError = createApolloError("INTERNAL_SERVER_ERROR")
    const downstreamError = createApolloError("DOWNSTREAM_SERVICE_ERROR")
    expect(isGqlInternalServerError(internalError)).toBe(true)
    expect(isGqlInternalServerError(downstreamError)).toBe(true)
  })

  it("should return true for FORBIDDEN error", () => {
    const error = createApolloError("FORBIDDEN")
    expect(isGqlForbiddenError(error)).toBe(true)
  })

  it("should return true for NOT_FOUND error", () => {
    const error = createApolloError("NOT_FOUND")
    expect(isGqlNotFoundError(error)).toBe(true)
  })

  it("should return true for INTERNAL_SERVER_ERROR with Validation Error", () => {
    const error = new ApolloError({
      graphQLErrors: [createGraphQLError("INTERNAL_SERVER_ERROR", "Validation Error")],
    })
    expect(isValidationError(error)).toBe(true)
  })

  it("should return false for unknown error code", () => {
    const error = createApolloError("UNKNOWN_ERROR")
    expect(isGqlAuthenticationError(error)).toBe(false)
    expect(isGqlBadUserInputError(error)).toBe(false)
    expect(isGqlInternalServerError(error)).toBe(false)
    expect(isGqlForbiddenError(error)).toBe(false)
    expect(isGqlNotFoundError(error)).toBe(false)
    expect(isValidationError(error)).toBe(false)
  })

  it("should return false for non-Validation Error", () => {
    const error = new ApolloError({
      graphQLErrors: [createGraphQLError("INTERNAL_SERVER_ERROR", "Some Other Error")],
    })
    expect(isValidationError(error)).toBe(false)
  })
})
