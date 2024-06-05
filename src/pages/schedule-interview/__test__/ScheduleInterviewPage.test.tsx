import { render, screen } from "@testing-library/react"
import dayjs from "dayjs"
import React from "react"

import { ScheduleInterviewPage } from "../ScheduleInterviewPage"

describe("ScheduleInterviewPage", () => {
  it("should renders MobileCandidateSelectInterviewTime component", () => {
    render(<ScheduleInterviewPage />)

    // Check if the mocked MobileCandidateSelectInterviewTime component is rendered
    const mobileCandidateSelectInterviewTime = screen.getByTestId("mobile-candidate-select-interview-time")
    expect(mobileCandidateSelectInterviewTime).toBeInTheDocument()

    const nextButton = screen.getByRole("img", { name: /right/i })
    expect(nextButton).toBeInTheDocument()

    const prevButton = screen.getByRole("img", { name: /left/i })
    expect(prevButton).toBeInTheDocument()

    const header = screen.getByText(dayjs().format("MMMM YYYY"))
    expect(header).toBeInTheDocument()
  })
})
