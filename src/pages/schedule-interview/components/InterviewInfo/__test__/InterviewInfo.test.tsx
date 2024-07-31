import { render, screen } from "@testing-library/react"
import React from "react"

import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"

import { InterviewInfo } from "../InterviewInfo"

describe("InterviewInfo", () => {
  const baseProps = {
    interviewInfo: {
      logo: "test-logo.png",
      jobRequisitionName: "Software Engineer",
      interviewMode: LIInterviewMode.IN_PERSON,
      interviewAddress: "123 Main St",
      interviewLink: "https://example.com",
    },
  }

  it("should render correctly with in-person interview mode", () => {
    render(<InterviewInfo interviewInfo={{ ...baseProps.interviewInfo, interviewMode: LIInterviewMode.IN_PERSON }} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", "test-logo.png")
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
    expect(screen.getByText("Interview Type")).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[LIInterviewMode.IN_PERSON])).toBeInTheDocument()
    expect(screen.getByText("Location")).toBeInTheDocument()
    expect(screen.getByText("123 Main St")).toBeInTheDocument()
  })

  it("should render correctly with online interview mode", () => {
    render(<InterviewInfo interviewInfo={{ ...baseProps.interviewInfo, interviewMode: LIInterviewMode.ONLINE }} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", "test-logo.png")
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
    expect(screen.getByText("Interview Type")).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[LIInterviewMode.ONLINE])).toBeInTheDocument()
    expect(screen.getByText("Link")).toBeInTheDocument()
    expect(screen.getByText("https://example.com")).toBeInTheDocument()
  })

  it("should render correctly with Phone interview mode", () => {
    render(<InterviewInfo interviewInfo={{ ...baseProps.interviewInfo, interviewMode: LIInterviewMode.PHONE }} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", "test-logo.png")
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
    expect(screen.getByText("Interview Type")).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[LIInterviewMode.PHONE])).toBeInTheDocument()
  })

  it("should not render logo image if logoUrl is not provided", () => {
    render(<InterviewInfo interviewInfo={{ ...baseProps.interviewInfo, logo: "" }} />)

    expect(screen.queryByRole("img")).not.toBeInTheDocument()
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
    expect(screen.getByText("Interview Type")).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[LIInterviewMode.IN_PERSON])).toBeInTheDocument()
    expect(screen.getByText("Location")).toBeInTheDocument()
    expect(screen.getByText("123 Main St")).toBeInTheDocument()
  })

  it("should not render address or link if not provided", () => {
    render(
      <InterviewInfo
        interviewInfo={{
          ...baseProps.interviewInfo,
          interviewMode: LIInterviewMode.IN_PERSON,
          interviewAddress: undefined,
        }}
      />
    )

    expect(screen.getByRole("img")).toHaveAttribute("src", "test-logo.png")
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
    expect(screen.getByText("Interview Type")).toBeInTheDocument()
    expect(screen.getByText(LIInterviewModeLabel[LIInterviewMode.IN_PERSON])).toBeInTheDocument()
  })
})
