import { graphql } from "@/__generated__"

export const LIGetCandidateScheduleLinkInfoByShortcode = graphql(`
  query LIGetCandidateScheduleLinkInfoByShortcode($filter: LIGetCandidateScheduleLinkInfoByShortcodeDto!) {
    LIGetCandidateScheduleLinkInfoByShortcode(filter: $filter) {
      jobRequisitionName
      candidateTimezone
      shortcode
      candidateScheduleStatus
      timeslots {
        _id
        start
        end
        status
      }
      interviewSchedule {
        defaultTimezone
        interviewUniqueName
        interviewDisplayName
        interviewType
        interviewMode
        interviewAddress
        interviewLink
        interviewEventDuration {
          type
          unit
          value
        }
        interviewNotesForCandidate
        interviewAttachments {
          fileId
          mimeType
          filename
        }
        interviewScheduleStatus
      }
      interviewEvent {
        interviewStartsAt
        interviewEndsAt
        iCalId
        interviewStatus
        timeslotId
      }
    }
  }
`)
