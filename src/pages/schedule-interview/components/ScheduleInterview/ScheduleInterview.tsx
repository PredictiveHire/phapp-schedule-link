import { Grid } from "antd"

import { CandidateConfirmation } from "@/pages/schedule-interview/components/CandidateConfirmation"
import { DesktopCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/DesktopCandidateSelectInterviewTime/DesktopCandidateSelectInterviewTime"
import { MobileCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime"
import { LICandidateInterviewScheduleStatus } from "@/pages/schedule-interview/constants"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"

import { CandidateScheduleError } from "../CandidateScheduleError/CandidateScheduleError"

const { useBreakpoint } = Grid
export const ScheduleInterview = () => {
  const isDesktop = useBreakpoint().lg
  const { candidateInterviewScheduleStatus, isLoadingCandidateScheduleLinkInfo, getCandidateScheduleLinkInfoError } =
    useScheduleInterview()

  if (!isLoadingCandidateScheduleLinkInfo && getCandidateScheduleLinkInfoError) {
    return <CandidateScheduleError getCandidateScheduleLinkInfoError={getCandidateScheduleLinkInfoError} />
  }

  if (candidateInterviewScheduleStatus === LICandidateInterviewScheduleStatus.CONFIRMED) {
    return <CandidateConfirmation />
  }

  if (isDesktop) {
    return <DesktopCandidateSelectInterviewTime />
  }
  return <MobileCandidateSelectInterviewTime />
}
