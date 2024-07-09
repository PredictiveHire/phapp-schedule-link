import { render, screen, waitFor } from "@testing-library/react"
import React from "react"

import { LICandidateInterviewScheduleStatus, LIInterviewMode } from "@/pages/schedule-interview/constants"

import { useGetCandidateScheduleLinkInfoByShortcode } from "../../hooks/useGetCandidateScheduleLinkInfoByShortcode"
import { ScheduleInterviewContext, ScheduleInterviewProvider } from "../ScheduleInterviewContext"

// Mock the hook used inside the provider
jest.mock("../../hooks/useGetCandidateScheduleLinkInfoByShortcode")

describe("ScheduleInterviewProvider", () => {
  const mockUseGetCandidateScheduleLinkInfoByShortcode = useGetCandidateScheduleLinkInfoByShortcode as jest.Mock

  const mockCandidateScheduleLinkInfo = {
    candidateTimezone: "America/New_York",
    candidateScheduleStatus: LICandidateInterviewScheduleStatus.CONFIRMED,
    timeslots: [
      { start: "2024-07-01T09:00:00Z", end: "2024-07-01T10:00:00Z", _id: "1" },
      { start: "2024-07-01T11:00:00Z", end: "2024-07-01T12:00:00Z", _id: "2" },
    ],
    interviewSchedule: {
      interviewMode: LIInterviewMode.ONLINE,
      interviewLink: "https://example.com/interview",
      interviewAddress: "",
    },
    interviewEvent: {
      interviewStartsAt: "2024-07-01T09:00:00Z",
      interviewEndsAt: "2024-07-01T10:00:00Z",
      iCalId: "12345",
    },
  }

  beforeEach(() => {
    mockUseGetCandidateScheduleLinkInfoByShortcode.mockReturnValue({
      candidateScheduleLinkInfo: mockCandidateScheduleLinkInfo,
      isLoadingCandidateScheduleLinkInfo: false,
      getCandidateScheduleLinkInfoError: null,
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it("should renders loading component when data is being fetched", () => {
    mockUseGetCandidateScheduleLinkInfoByShortcode.mockReturnValueOnce({
      candidateScheduleLinkInfo: null,
      isLoadingCandidateScheduleLinkInfo: true,
      getCandidateScheduleLinkInfoError: null,
    })

    render(
      <ScheduleInterviewProvider>
        <div>Test Child</div>
      </ScheduleInterviewProvider>
    )

    expect(screen.getByTestId("loading")).toBeInTheDocument()
  })

  it("should provides context values after data is fetched", async () => {
    render(
      <ScheduleInterviewProvider>
        <ScheduleInterviewContext.Consumer>
          {(context) => (
            <div>
              <div>Candidate Status: {context.candidateInterviewScheduleStatus}</div>
              <div>Interview Mode: {context.interviewInfo?.interviewMode}</div>
              <div>Timezone: {context.interviewInfo?.timezone}</div>
            </div>
          )}
        </ScheduleInterviewContext.Consumer>
      </ScheduleInterviewProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(/Candidate Status: CONFIRMED/i)).toBeInTheDocument()
      expect(screen.getByText(/Interview Mode: ONLINE/i)).toBeInTheDocument()
      expect(screen.getByText(/Timezone: America\/New_York/i)).toBeInTheDocument()
    })
  })
})
