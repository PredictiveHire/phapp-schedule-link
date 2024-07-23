import { Grid } from "antd"

import { DesktopCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/DesktopCandidateSelectInterviewTime/DesktopCandidateSelectInterviewTime"
import { MobileCandidateSelectInterviewTime } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"

import { CandidateScheduleError } from "../CandidateScheduleError"

const { useBreakpoint } = Grid

export const RescheduleInterview = () => {
  const isDesktop = useBreakpoint().lg
  const { isLoadingCandidateScheduleLinkInfo, getCandidateScheduleLinkInfoError } = useScheduleInterview()

  if (!isLoadingCandidateScheduleLinkInfo && getCandidateScheduleLinkInfoError) {
    return <CandidateScheduleError getCandidateScheduleLinkInfoError={getCandidateScheduleLinkInfoError} />
  }

  if (isDesktop) {
    return <DesktopCandidateSelectInterviewTime />
  }
  return <MobileCandidateSelectInterviewTime />
}
