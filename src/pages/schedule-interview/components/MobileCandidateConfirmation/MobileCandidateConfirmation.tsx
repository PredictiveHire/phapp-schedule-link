import { CalendarOutlined } from "@ant-design/icons"
import { PHIcon } from "@ph/ui"
import { Grid } from "antd"
import React from "react"

import { useCandidateConfirmation } from "@/pages/schedule-interview/components/MobileCandidateConfirmation/hooks/useCandidateConfirmation"
import { MobileCandidateConfirmationInfo } from "@/pages/schedule-interview/components/MobileCandidateConfirmation/MobileCandidateConfirmationInfo"
import {
  LIInterviewMode,
  LIInterviewModeLabel,
} from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime/constants"
import { formatDateToLongString, formatDateToTimeString } from "@/utils/dateTime"

const { useBreakpoint } = Grid

export const MobileCandidateConfirmation = () => {
  const { interviewData } = useCandidateConfirmation()
  const { jobRequisitionName, interviewMode, interviewAddress, timezone, interviewTime, interviewLink } = interviewData
  const interviewDate = formatDateToLongString(new Date(interviewTime.start), timezone)
  const interviewStartDateTime = formatDateToTimeString(interviewTime.start, timezone)
  const interviewEndDateTime = formatDateToTimeString(interviewTime.end, timezone)

  const breakpoint = useBreakpoint()
  let iconSize = 140 // icon size for mobile
  if (breakpoint.lg) {
    iconSize = 191 // icon size for desktop
  }

  return (
    <div className="h-screen overflow-y-auto bg-gray-100 p-5 lg:flex lg:items-center lg:justify-center">
      <article className="mx-auto flex h-auto w-full max-w-sm flex-col gap-6 rounded-[20px] bg-white p-5 shadow-card *:w-full lg:w-confirmation-container-desktop lg:max-w-none lg:p-10">
        <PHIcon size={iconSize} name="interviewConfirmation" />
        <header className="text-center">
          <h2 className="mb-0 text-lg font-semibold text-black">We look forward to seeing you on </h2>
          <h2 className="mb-0 text-lg font-semibold text-black">
            <time dateTime={interviewTime.start}>{`${interviewDate} ${interviewStartDateTime}`}</time>-{" "}
            <time dateTime={interviewTime.end}>{interviewEndDateTime}</time>!
          </h2>
        </header>
        <p className="text-secondary mb-0 text-center text-base font-light">
          Please check your email for more details.
        </p>
        <div className="border-t border-gray-200"></div>
        <div className="text-lg font-semibold text-black">
          <h2 className="mb-6 text-lg font-semibold text-black">{jobRequisitionName}</h2>
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
      </article>
    </div>
  )
}
