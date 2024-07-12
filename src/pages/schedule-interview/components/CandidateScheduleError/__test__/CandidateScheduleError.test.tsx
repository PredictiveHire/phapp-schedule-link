import { ApolloError } from "@apollo/client"
import { render, screen } from "@testing-library/react"
import React from "react"

import { getCandidateScheduleLinkInfoErrorMessage } from "@/utils/getCandidateScheduleLinkInfoErrorMessage"

import { CandidateScheduleError } from "../CandidateScheduleError"

jest.mock("@/utils/getCandidateScheduleLinkInfoErrorMessage")
const mockGetCandidateScheduleLinkInfoErrorMessage = (
  getCandidateScheduleLinkInfoErrorMessage as jest.Mock
).mockReturnValue("Mock error message")

describe("CandidateScheduleError", () => {
  it("should display the correct error message based on the error code", () => {
    const mockError = {
      graphQLErrors: [
        {
          extensions: {
            code: "MOCK_ERROR_CODE",
          },
        },
      ],
    } as unknown as ApolloError

    render(<CandidateScheduleError getCandidateScheduleLinkInfoError={mockError} />)

    expect(getCandidateScheduleLinkInfoErrorMessage).toHaveBeenCalledWith("MOCK_ERROR_CODE")
    expect(screen.getByText("Mock error message")).toBeInTheDocument()
  })

  it("should display a default error message when no error code is provided", () => {
    const mockError = {
      graphQLErrors: [{}],
    } as unknown as ApolloError

    mockGetCandidateScheduleLinkInfoErrorMessage.mockReturnValue("Default error message")

    render(<CandidateScheduleError getCandidateScheduleLinkInfoError={mockError} />)

    expect(getCandidateScheduleLinkInfoErrorMessage).toHaveBeenCalledWith("")
    expect(screen.getByText("Default error message")).toBeInTheDocument()
  })
})
