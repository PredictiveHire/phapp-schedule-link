import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { MobileCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime"

export const ScheduleInterviewPage = () => {
  // TODO: If user re clicks the booking link after their times are confirmed then the confirmation page will show.
  const isConfirmedTime = false
  if (isConfirmedTime) {
    return <CandidateConfirmation />
  }

  return <MobileCandidateSelectInterviewTime />
}
