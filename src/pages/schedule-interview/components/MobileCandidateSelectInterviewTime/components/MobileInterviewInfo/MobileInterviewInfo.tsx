import { LIInterviewMode, LIInterviewModeLabel } from "../../constants"

interface MobileInterviewInfoProps {
  interviewInfo: {
    logo: string
    jobRequisitionName: string
    interviewMode: LIInterviewMode
    interviewAddress?: string
    interviewLink?: string
  }
}
export const MobileInterviewInfo = ({
  interviewInfo: { logo, jobRequisitionName, interviewMode, interviewAddress, interviewLink },
}: MobileInterviewInfoProps) => {
  return (
    <div data-testid="mobile-interview-info" className="mb-6 text-left">
      <img src={logo} alt="Logo" className="h-11" />
      <h1 className="mb-0 mt-5 text-sm font-bold text-black">{jobRequisitionName}</h1>
      <div className="text-tertiary mt-3 text-sm">Interview Type</div>
      <div className="mt-2 text-sm font-bold text-black">{LIInterviewModeLabel[interviewMode]}</div>

      {interviewMode === LIInterviewMode.IN_PERSON && interviewAddress && (
        <>
          <div className="text-tertiary mt-3 text-sm">Location</div>
          <div className="mt-2 text-sm font-bold text-black">{interviewAddress}</div>
        </>
      )}
      {interviewMode === LIInterviewMode.ONLINE && (
        <>
          <div className="text-tertiary mt-3 text-sm">Link</div>
          <div className="mt-2 text-sm font-bold text-black">{interviewLink}</div>
        </>
      )}
    </div>
  )
}
