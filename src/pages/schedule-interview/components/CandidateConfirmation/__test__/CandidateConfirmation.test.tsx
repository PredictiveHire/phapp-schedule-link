import { act, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { AxiosResponse } from "axios"
import React from "react"

import { getICalContent } from "@/api/getICalContent"
import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import {
  interviewInfo,
  mockScheduleInterviewContext,
} from "@/pages/schedule-interview/mock/mockScheduleInterviewContext"
import { downloadICalFile } from "@/utils/downloadICalFile"

jest.mock("@/constants", () => ({}))

jest.mock("antd", () => {
  const actual = jest.requireActual<Record<string, unknown>>("antd")
  return {
    ...actual,
    Grid: {
      useBreakpoint: jest.fn().mockReturnValue({ lg: true }),
    },
  }
})

jest.mock("@/api/getICalContent")
const mockGetICalContent = getICalContent as jest.MockedFunction<typeof getICalContent>

jest.mock("@/utils/downloadICalFile")
const mockDownloadICalFile = downloadICalFile as jest.MockedFunction<typeof downloadICalFile>

jest.mock("@/pages/schedule-interview/hooks/useScheduleInterview")
const mockUseScheduleInterview = (
  useScheduleInterview as jest.MockedFunction<typeof useScheduleInterview>
).mockReturnValue(mockScheduleInterviewContext)

describe("CandidateConfirmation", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the component correctly", () => {
    render(<CandidateConfirmation />)

    expect(screen.getByText("Friday, June 14 09:00 AM")).toBeInTheDocument()
    expect(screen.getByText("10:00 AM")).toBeInTheDocument()
    expect(screen.getByText("Please check your email for more details.")).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.jobRequisitionName)).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[interviewInfo.interviewMode])).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.interviewAddress)).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.timezone)).toBeInTheDocument()
  })

  it("displays the correct interview mode and location for in-person interview", () => {
    render(<CandidateConfirmation />)
    expect(screen.getByText("In person")).toBeInTheDocument()
    expect(screen.getByText(interviewInfo.interviewAddress)).toBeInTheDocument()
  })

  it("displays the correct interview mode and link for online interview", () => {
    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
        interviewMode: LIInterviewMode.ONLINE,
        interviewAddress: "",
        interviewLink: "https://example.com/interview",
      },
    })

    render(<CandidateConfirmation />)
    expect(screen.getByText("Online")).toBeInTheDocument()
    expect(screen.getByText("https://example.com/interview")).toBeInTheDocument()
  })

  it('has an "Add to calendar" button', () => {
    render(<CandidateConfirmation />)
    const button = screen.getByRole("button", { name: /add to calendar/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-black")
  })

  it("should call getICalContent and downloadICalFile when Add to calendar is clicked", async () => {
    const user = userEvent.setup()

    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
        iCalId: "bed76d65-5360-43e7-b971-88462020dda2",
      },
    })

    const mockICalContent = "mock iCal content"
    mockGetICalContent.mockResolvedValue({
      data: mockICalContent,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    } as unknown as AxiosResponse)

    const { getByText } = render(<CandidateConfirmation />)
    const addToCalendarButton = getByText("Add to calendar")

    act(() => {
      void user.click(addToCalendarButton)
    })

    await waitFor(() => {
      expect(mockGetICalContent).toHaveBeenCalledTimes(1)
      expect(mockDownloadICalFile).toHaveBeenCalledTimes(1)
      expect(getICalContent).toHaveBeenCalledWith("bed76d65-5360-43e7-b971-88462020dda2")
      expect(downloadICalFile).toHaveBeenCalledWith(mockICalContent)
    })
  })

  it("should not call getICalContent if iCalId is undefined", async () => {
    const user = userEvent.setup()
    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
        iCalId: undefined,
      },
    })

    const { getByText } = render(<CandidateConfirmation />)
    const addToCalendarButton = getByText("Add to calendar")

    act(() => {
      void user.click(addToCalendarButton)
    })

    await waitFor(() => {
      expect(getICalContent).not.toHaveBeenCalled()
      expect(downloadICalFile).not.toHaveBeenCalled()
    })
  })

  it("should not call downloadICalFile if getICalContent returns empty data", async () => {
    const user = userEvent.setup()

    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
        iCalId: "bed76d65-5360-43e7-b971-88462020dda2",
      },
    })

    const mockICalContent = ""
    mockGetICalContent.mockResolvedValue({
      data: mockICalContent,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    } as unknown as AxiosResponse)

    const { getByText } = render(<CandidateConfirmation />)
    const addToCalendarButton = getByText("Add to calendar")

    act(() => {
      void user.click(addToCalendarButton)
    })

    await waitFor(() => {
      expect(getICalContent).toHaveBeenCalledWith("bed76d65-5360-43e7-b971-88462020dda2")
      expect(downloadICalFile).not.toHaveBeenCalled()
    })
  })
})
