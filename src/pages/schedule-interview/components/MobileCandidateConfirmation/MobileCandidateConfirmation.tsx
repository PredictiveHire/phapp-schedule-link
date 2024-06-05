import { CalendarOutlined } from "@ant-design/icons"
import { PHIcon } from "@ph/ui"
import React from "react"

import { formatDateToLongString, formatDateToTimeString } from "@/utils/dateTime"

import { LIInterviewMode, LIInterviewModeLabel } from "../MobileCandidateSelectInterviewTime/constants"
import { useCandidateConfirmation } from "./hooks/useCandidateConfirmation"
import { MobileCandidateConfirmationInfo } from "./MobileCandidateConfirmationInfo"

export const MobileCandidateConfirmation = () => {
  const { interviewData } = useCandidateConfirmation()
  const { jobRequisitionName, interviewMode, interviewAddress, timezone, interviewTime, interviewLink } = interviewData
  const interviewDate = formatDateToLongString(new Date(interviewTime.start), timezone)
  const interviewStartDateTime = formatDateToTimeString(interviewTime.start, timezone)
  const interviewEndDateTime = formatDateToTimeString(interviewTime.end, timezone)

  return (
    <article className="h-screen overflow-y-auto bg-gray-100 p-5">
      <div className="mx-auto h-auto w-full max-w-sm rounded-[20px] bg-white p-5 shadow-card">
        <div className="mb-6 text-center">
          <PHIcon size={140} name="interviewConfirmation" />
          <h2 className="mb-2 mt-4 text-lg font-semibold text-black">
            We look forward to seeing you on{" "}
            <time dateTime={interviewTime.start}>{`${interviewDate} ${interviewStartDateTime}`}</time> -{" "}
            <time dateTime={interviewTime.end}>{interviewEndDateTime}</time>!
          </h2>
          <p className="text-secondary text-base font-light">Please check your email for more details.</p>
        </div>
        <div className="mb-6 border-t border-gray-200"></div>
        <div className="mb-6">
          <div className="text-semibold mb-6 text-base">{jobRequisitionName}</div>
          <MobileCandidateConfirmationInfo title="Interview Type" description={LIInterviewModeLabel[interviewMode]} />
          {interviewMode === LIInterviewMode.IN_PERSON && interviewAddress && (
            <MobileCandidateConfirmationInfo title="Location" description={interviewAddress} />
          )}
          {interviewMode === LIInterviewMode.ONLINE && (
            <MobileCandidateConfirmationInfo title="Link" description={interviewLink} />
          )}
          <MobileCandidateConfirmationInfo title="Timezone" description={timezone} />
        </div>
        <button className="flex h-[49px] w-full items-center justify-center rounded-full bg-black">
          <CalendarOutlined className="mr-2 text-2xl !text-white" />
          <span className="text-white">Add to calendar</span>
        </button>
      </div>
    </article>
  )
}
