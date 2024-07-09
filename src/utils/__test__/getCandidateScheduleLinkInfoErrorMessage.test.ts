import {
  CandidateScheduleLinkInfoErrorCode,
  getCandidateScheduleLinkInfoErrorMessage,
} from "../getCandidateScheduleLinkInfoErrorMessage"

describe("getCandidateScheduleLinkInfoErrorMessage", () => {
  it("should return the correct error message for CANDIDATE_SCHEDULE_NOT_FOUND", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage(
      CandidateScheduleLinkInfoErrorCode.CANDIDATE_SCHEDULE_NOT_FOUND
    )
    expect(errorMessage).toBe("Sorry! This link is invalid. Please contact your recruiter.")
  })

  it("should return the correct error message for INTERVIEW_SCHEDULE_NOT_FOUND", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage(
      CandidateScheduleLinkInfoErrorCode.INTERVIEW_SCHEDULE_NOT_FOUND
    )
    expect(errorMessage).toBe("Sorry! This interview schedule was not found.")
  })

  it("should return the correct error message for INTERVIEW_SCHEDULE_NOT_COMPLETED", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage(
      CandidateScheduleLinkInfoErrorCode.INTERVIEW_SCHEDULE_NOT_COMPLETED
    )
    expect(errorMessage).toBe("Sorry! This interview schedule has not been completed.")
  })

  it("should return the correct error message for JOB_REQUISITION_NOT_FOUND", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage(
      CandidateScheduleLinkInfoErrorCode.JOB_REQUISITION_NOT_FOUND
    )
    expect(errorMessage).toBe("Sorry! This job requisition was not found.")
  })

  it("should return the correct error message for TIMESLOTS_NOT_FOUND", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage(
      CandidateScheduleLinkInfoErrorCode.TIMESLOTS_NOT_FOUND
    )
    expect(errorMessage).toBe("Sorry! These time slots were not found.")
  })

  it("should return the correct error message for TIMESLOTS_NOT_AVAILABLE", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage(
      CandidateScheduleLinkInfoErrorCode.TIMESLOTS_NOT_AVAILABLE
    )
    expect(errorMessage).toBe("Sorry! The time slots are not available. Please contact your recruiter.")
  })

  it("should return the correct error message for TIMESLOTS_PASSED", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage(CandidateScheduleLinkInfoErrorCode.TIMESLOTS_PASSED)
    expect(errorMessage).toBe("Sorry! This interview has passed. Please contact your recruiter.")
  })

  it("should return the default error message for an unknown error code", () => {
    const errorMessage = getCandidateScheduleLinkInfoErrorMessage("UNKNOWN_ERROR_CODE")
    expect(errorMessage).toBe("Sorry! This link is invalid. Please contact your recruiter.")
  })
})
