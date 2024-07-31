import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"

import { InterviewInfoItem } from "./InterviewInfoItem"

interface InterviewInfoProps {
  interviewInfo: {
    logo: string
    jobRequisitionName: string
    interviewMode: LIInterviewMode
    interviewAddress?: string | null
    interviewLink?: string | null
  }
}
export const InterviewInfo = ({
  interviewInfo: { logo, jobRequisitionName, interviewMode, interviewAddress, interviewLink },
}: InterviewInfoProps) => {
  return (
    <div data-testid="interview-info" className="mb-10 w-[310px] text-left">
      {logo && <img src={logo} alt="Logo" className="mb-5 h-11" />}
      <h1 className="mb-0 text-sm font-semibold text-black">{jobRequisitionName}</h1>
      <InterviewInfoItem title="Interview Type" description={LIInterviewModeLabel[interviewMode]} />
      {interviewMode === LIInterviewMode.IN_PERSON && interviewAddress && (
        <InterviewInfoItem title="Location" description={interviewAddress} />
      )}
      {interviewMode === LIInterviewMode.ONLINE && interviewLink && (
        <InterviewInfoItem title="Link" description={interviewLink} />
      )}
    </div>
  )
}
