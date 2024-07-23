import { act, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"

import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { useCandidateCancelInterview } from "@/pages/schedule-interview/components/CandidateConfirmation/hooks/useCandidateCancelInterview"
import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"
import { useGenerateEventICalInfo } from "@/pages/schedule-interview/hooks/useGenerateEventICalInfo"
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

const mockGenerateEventICalInfo = jest.fn().mockResolvedValue({
  data: {
    LIGenerateEventICalInfo: {
      iCalContent: "test content",
    },
  },
})

jest.mock("@/utils/downloadICalFile")
const mockDownloadICalFile = downloadICalFile as jest.MockedFunction<typeof downloadICalFile>

jest.mock("@/pages/schedule-interview/hooks/useScheduleInterview")
const mockUseScheduleInterview = (
  useScheduleInterview as jest.MockedFunction<typeof useScheduleInterview>
).mockReturnValue(mockScheduleInterviewContext)

jest.mock("@/pages/schedule-interview/components/CandidateConfirmation/hooks/useCandidateCancelInterview")
const mockUseCandidateCancelInterview = (
  useCandidateCancelInterview as jest.MockedFunction<typeof useCandidateCancelInterview>
).mockReturnValue({
  isCancelCandidateInterviewLoading: false,
  cancelCandidateInterview: jest.fn(),
})

jest.mock("@/pages/schedule-interview/hooks/useGenerateEventICalInfo")
const mockUseGenerateEventICalInfo = (
  useGenerateEventICalInfo as jest.MockedFunction<typeof useGenerateEventICalInfo>
).mockReturnValue({
  isGenerateEventICalInfoLoading: false,
  generateEventICalInfo: mockGenerateEventICalInfo,
})

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

  it("should render correct buttons", () => {
    render(<CandidateConfirmation />)
    const addToCalendarButton = screen.getByRole("button", { name: /Add to calendar/i })
    const cancelInterviewButton = screen.getByRole("button", { name: /Cancel interview/i })
    const rescheduleInterviewButton = screen.getByRole("button", { name: /Reschedule interview/i })

    expect(addToCalendarButton).toBeInTheDocument()
    expect(cancelInterviewButton).toBeInTheDocument()
    expect(rescheduleInterviewButton).toBeInTheDocument()
  })

  it("should open cancel interview modal when cancel interview button is clicked", async () => {
    const user = userEvent.setup()
    render(<CandidateConfirmation />)
    const cancelInterviewButton = screen.getByRole("button", { name: /cancel interview/i })

    await act(async () => {
      await user.click(cancelInterviewButton)
    })

    const modal = screen.getByRole("dialog")
    expect(modal).toBeInTheDocument()
  })

  it("should call generateEventICalInfo and downloadICalFile when Add to calendar is clicked", async () => {
    const user = userEvent.setup()

    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
        iCalId: "bed76d65-5360-43e7-b971-88462020dda2",
      },
    })

    mockUseGenerateEventICalInfo.mockReturnValue({
      isGenerateEventICalInfoLoading: false,
      generateEventICalInfo: mockGenerateEventICalInfo,
    })

    const { getByRole } = render(<CandidateConfirmation />)
    const addToCalendarButton = getByRole("button", {
      name: "Add to calendar",
    })

    act(() => {
      void user.click(addToCalendarButton)
    })

    await waitFor(() => {
      expect(mockGenerateEventICalInfo).toHaveBeenCalledTimes(1)
    })
    expect(mockDownloadICalFile).toHaveBeenCalledTimes(1)
    expect(downloadICalFile).toHaveBeenCalledWith("test content", "interview.ics")
  })

  it("should not call generateEventICalInfo if iCalId is undefined", () => {
    const user = userEvent.setup()
    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
        iCalId: undefined,
      },
    })

    const { getByRole } = render(<CandidateConfirmation />)
    const addToCalendarButton = getByRole("button", {
      name: "Add to calendar",
    })

    act(() => {
      void user.click(addToCalendarButton)
    })

    expect(mockGenerateEventICalInfo).not.toHaveBeenCalled()
    expect(downloadICalFile).not.toHaveBeenCalled()
  })

  it("should not call downloadICalFile if generateEventICalInfo returns empty data", async () => {
    const user = userEvent.setup()

    mockUseScheduleInterview.mockReturnValue({
      ...mockScheduleInterviewContext,
      interviewInfo: {
        ...interviewInfo,
        iCalId: "bed76d65-5360-43e7-b971-88462020dda2",
      },
    })

    const mockGenerateEventICalInfo = jest.fn().mockResolvedValue({
      data: {
        LIGenerateEventICalInfo: {
          iCalContent: null,
        },
      },
    })

    mockUseGenerateEventICalInfo.mockReturnValue({
      isGenerateEventICalInfoLoading: false,
      generateEventICalInfo: mockGenerateEventICalInfo,
    })

    const { getByRole } = render(<CandidateConfirmation />)

    const addToCalendarButton = getByRole("button", {
      name: "Add to calendar",
    })

    act(() => {
      void user.click(addToCalendarButton)
    })

    await waitFor(() => {
      expect(mockGenerateEventICalInfo).toHaveBeenCalledWith({
        variables: {
          input: {
            iCalId: "bed76d65-5360-43e7-b971-88462020dda2",
          },
        },
      })
    })

    expect(downloadICalFile).not.toHaveBeenCalled()
  })
})
