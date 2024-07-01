import { Grid } from "antd"

import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { DesktopCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/DesktopCandidateSelectInterviewTime/DesktopCandidateSelectInterviewTime"
import { MobileCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime"
import { LICandidateInterviewScheduleStatus } from "@/pages/schedule-interview/constants"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"

const { useBreakpoint } = Grid
export const ScheduleInterview = () => {
  const isDesktop = useBreakpoint().lg
  const { candidateInterviewScheduleStatus } = useScheduleInterview()
  // TODO: If user re clicks the booking link after their times are confirmed then the confirmation page will show.
  if (candidateInterviewScheduleStatus === LICandidateInterviewScheduleStatus.CONFIRMED) {
    return <CandidateConfirmation />
  }

  if (isDesktop) {
    return <DesktopCandidateSelectInterviewTime />
  }
  return <MobileCandidateSelectInterviewTime />
}
