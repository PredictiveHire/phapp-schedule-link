export const CandidateScheduleLinkInfoErrorCode = {
  CANDIDATE_SCHEDULE_NOT_FOUND: "ERROR_CUSTOM_LI_GET_CANDIDATE_SCHEDULE_LINK_INFO_CANDIDATE_SCHEDULE_NOT_FOUND",
  INTERVIEW_SCHEDULE_NOT_FOUND: "ERROR_CUSTOM_LI_GET_CANDIDATE_SCHEDULE_LINK_INFO_INTERVIEW_SCHEDULE_NOT_FOUND",
  INTERVIEW_SCHEDULE_NOT_COMPLETED: "ERROR_CUSTOM_LI_GET_CANDIDATE_SCHEDULE_LINK_INFO_INTERVIEW_SCHEDULE_NOT_COMPLETED",
  JOB_REQUISITION_NOT_FOUND: "ERROR_CUSTOM_LI_GET_CANDIDATE_SCHEDULE_LINK_INFO_JOB_REQUISITION_NOT_FOUND",
  TIMESLOTS_NOT_FOUND: "ERROR_CUSTOM_LI_GET_CANDIDATE_SCHEDULE_LINK_INFO_TIMESLOTS_NOT_FOUND",
  TIMESLOTS_NOT_AVAILABLE: "ERROR_CUSTOM_LI_GET_CANDIDATE_SCHEDULE_LINK_INFO_TIMESLOTS_NOT_AVAILABLE",
  TIMESLOTS_PASSED: "ERROR_CUSTOM_LI_GET_CANDIDATE_SCHEDULE_LINK_INFO_TIMESLOTS_PASSED",
}
export const CandidateScheduleLinkInfoErrorMessageMap = {
  [CandidateScheduleLinkInfoErrorCode.CANDIDATE_SCHEDULE_NOT_FOUND]:
    "Sorry! This link is invalid. Please contact your recruiter.",
  [CandidateScheduleLinkInfoErrorCode.INTERVIEW_SCHEDULE_NOT_FOUND]: "Sorry! This interview schedule was not found.",
  [CandidateScheduleLinkInfoErrorCode.INTERVIEW_SCHEDULE_NOT_COMPLETED]:
    "Sorry! This interview schedule has not been completed.",
  [CandidateScheduleLinkInfoErrorCode.JOB_REQUISITION_NOT_FOUND]: "Sorry! This job requisition was not found.",
  [CandidateScheduleLinkInfoErrorCode.TIMESLOTS_NOT_FOUND]: "Sorry! These time slots were not found.",
  [CandidateScheduleLinkInfoErrorCode.TIMESLOTS_NOT_AVAILABLE]:
    "Sorry! The time slots are not available. Please contact your recruiter.",
  [CandidateScheduleLinkInfoErrorCode.TIMESLOTS_PASSED]:
    "Sorry! This interview has passed. Please contact your recruiter.",
  default: "Sorry! This link is invalid. Please contact your recruiter.",
}

export const getCandidateScheduleLinkInfoErrorMessage = (code: string) =>
  CandidateScheduleLinkInfoErrorMessageMap[code] ?? CandidateScheduleLinkInfoErrorMessageMap.default
