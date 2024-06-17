import { Grid } from "antd"

import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { DesktopCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/DesktopCandidateSelectInterviewTime/DesktopCandidateSelectInterviewTime"
import { MobileCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime"

const { useBreakpoint } = Grid
export const ScheduleInterviewPage = () => {
  const isDesktop = useBreakpoint().lg
  // TODO: If user re clicks the booking link after their times are confirmed then the confirmation page will show.
  const isConfirmedTime = false
  if (isConfirmedTime) {
    return <CandidateConfirmation />
  }

  if (isDesktop) {
    return <DesktopCandidateSelectInterviewTime />
  }
  return <MobileCandidateSelectInterviewTime />
}
