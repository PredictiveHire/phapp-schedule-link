import { render, screen } from "@testing-library/react"
import { act } from "react"

import { CancelCandidateInterviewModal } from "../CancelCandidateInterviewModal"

describe("CancelCandidateInterviewModal", () => {
  it("should renders modal correctly", () => {
    const mockData = {
      isOpen: true,
      isCancelCandidateInterviewLoading: false,
      onCancelDialog: jest.fn(),
      onCancelCandidateInterview: jest.fn(),
      jobRequisitionName: "Test Job Requisition Name",
      interviewDate: "Test Interview Date",
      interviewStartDateTime: "Test Interview Start Date Time",
      interviewEndDateTime: "Test Interview End Date Time",
    }

    render(
      <CancelCandidateInterviewModal
        isOpen={mockData.isOpen}
        isCancelCandidateInterviewLoading={mockData.isCancelCandidateInterviewLoading}
        onCancelDialog={mockData.onCancelDialog}
        onCancelCandidateInterview={mockData.onCancelCandidateInterview}
        jobRequisitionName={mockData.jobRequisitionName}
        interviewDate={mockData.interviewDate}
        interviewStartDateTime={mockData.interviewStartDateTime}
        interviewEndDateTime={mockData.interviewEndDateTime}
      />
    )

    const titleElement = screen.getByText("Are you sure you want to cancel this interview?")
    const jobRequisitionNameElement = screen.getByText(mockData.jobRequisitionName)
    const interviewDateTimeElement = screen.getByText(
      `${mockData.interviewDate} ${mockData.interviewStartDateTime} - ${mockData.interviewEndDateTime}`
    )
    const confirmCancelInterviewButton = screen.getByRole("button", { name: "Cancel Interview" })

    const cancelInterviewModal = screen.getByRole("button", {
      name: "No, don't cancel",
    })

    expect(titleElement).toBeInTheDocument()
    expect(jobRequisitionNameElement).toBeInTheDocument()
    expect(interviewDateTimeElement).toBeInTheDocument()
    expect(confirmCancelInterviewButton).toBeInTheDocument()
    expect(cancelInterviewModal).toBeInTheDocument()
  })

  it("should call onCancelCandidateInterview when cancel interview button is clicked", () => {
    const mockData = {
      isOpen: true,
      isCancelCandidateInterviewLoading: false,
      onCancelDialog: jest.fn(),
      onCancelCandidateInterview: jest.fn(),
      jobRequisitionName: "Test Job Requisition Name",
      interviewDate: "Test Interview Date",
      interviewStartDateTime: "Test Interview Start Date Time",
      interviewEndDateTime: "Test Interview End Date Time",
    }

    render(
      <CancelCandidateInterviewModal
        isOpen={mockData.isOpen}
        isCancelCandidateInterviewLoading={mockData.isCancelCandidateInterviewLoading}
        onCancelDialog={mockData.onCancelDialog}
        onCancelCandidateInterview={mockData.onCancelCandidateInterview}
        jobRequisitionName={mockData.jobRequisitionName}
        interviewDate={mockData.interviewDate}
        interviewStartDateTime={mockData.interviewStartDateTime}
        interviewEndDateTime={mockData.interviewEndDateTime}
      />
    )

    const confirmCancelInterviewButton = screen.getByRole("button", { name: "Cancel Interview" })

    act(() => {
      confirmCancelInterviewButton.click()
    })

    expect(mockData.onCancelCandidateInterview).toHaveBeenCalled()
  })
})
