import { render } from "@testing-library/react"
import React from "react"

import { LIInterviewMode, LIInterviewModeLabel } from "../../constants"
import { MobileInterviewInfo } from "../MobileInterviewInfo"

describe("MobileInterviewInfo", () => {
  const interviewInfo = {
    logo: "https://example.com/logo.png",
    jobRequisitionName: "Software Engineer",
    interviewMode: LIInterviewMode.IN_PERSON,
    interviewAddress: "123 Main St, City, Country",
    interviewLink: "https://example.com/interview-link",
  }

  it("should renders the logo, job requisition name, and interview type", () => {
    const { getByAltText, getByText } = render(<MobileInterviewInfo interviewInfo={interviewInfo} />)

    expect(getByAltText("Logo")).toHaveAttribute("src", interviewInfo.logo)
    expect(getByText(interviewInfo.jobRequisitionName)).toBeInTheDocument()
    expect(getByText("Interview Type")).toBeInTheDocument()
    expect(getByText(LIInterviewModeLabel[interviewInfo.interviewMode])).toBeInTheDocument()
  })

  it("should renders the interview address if the interview mode is IN_PERSON", () => {
    const { getByText } = render(<MobileInterviewInfo interviewInfo={interviewInfo} />)

    expect(getByText("Location")).toBeInTheDocument()
    expect(getByText(interviewInfo.interviewAddress)).toBeInTheDocument()
  })

  it("should renders the interview link if the interview mode is ONLINE", () => {
    const onlineInterviewInfo = {
      ...interviewInfo,
      interviewMode: LIInterviewMode.ONLINE,
    }

    const { getByText } = render(<MobileInterviewInfo interviewInfo={onlineInterviewInfo} />)

    expect(getByText("Link")).toBeInTheDocument()
    expect(getByText(onlineInterviewInfo.interviewLink)).toBeInTheDocument()
  })
})
