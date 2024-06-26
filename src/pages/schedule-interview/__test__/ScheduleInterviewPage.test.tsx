import { render, screen } from "@testing-library/react"
import { Grid } from "antd"
import React from "react"

import { ScheduleInterviewPage } from "../ScheduleInterviewPage"

jest.mock("antd", () => ({
  ...jest.requireActual<Record<string, unknown>>("antd"),
  Grid: {
    useBreakpoint: jest.fn(),
  },
}))

const mockUseBreakpoint = Grid.useBreakpoint as jest.Mock<Record<string, boolean>>
describe("ScheduleInterviewPage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should renders DesktopCandidateSelectInterviewTime when isDesktop is true", () => {
    mockUseBreakpoint.mockReturnValue({ lg: true })

    render(<ScheduleInterviewPage />)

    expect(screen.getByTestId("desktop-candidate-select-interview-time")).toBeInTheDocument()
  })

  it("should renders MobileCandidateSelectInterviewTime when isDesktop is false", () => {
    mockUseBreakpoint.mockReturnValue({ lg: false })

    render(<ScheduleInterviewPage />)

    expect(screen.getByTestId("mobile-candidate-select-interview-time")).toBeInTheDocument()
  })
})
