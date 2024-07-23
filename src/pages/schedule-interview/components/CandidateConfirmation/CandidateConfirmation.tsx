import { CalendarOutlined } from "@ant-design/icons"
import { PHIcon } from "@ph/ui"
import { Button, Grid, Space } from "antd"
import React, { useState } from "react"

import { CandidateConfirmationInfo } from "@/pages/schedule-interview/components/CandidateConfirmation/CandidateConfirmationInfo"
import { useCandidateCancelInterview } from "@/pages/schedule-interview/components/CandidateConfirmation/hooks/useCandidateCancelInterview"
import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"
import { useGenerateEventICalInfo } from "@/pages/schedule-interview/hooks/useGenerateEventICalInfo"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import { formatDateToLongString, formatDateToTimeString } from "@/utils/dateTime"
import { downloadICalFile } from "@/utils/downloadICalFile"

import { CancelCandidateInterviewModal } from "./components/CancelCandidateInterviewModal"

const { useBreakpoint } = Grid

export const CandidateConfirmation = () => {
  const [isCancelInterviewModalOpen, setIsCancelInterviewModalOpen] = useState(false)

  const { isCancelCandidateInterviewLoading, cancelCandidateInterview } = useCandidateCancelInterview()
  const { interviewInfo } = useScheduleInterview()
  const { generateEventICalInfo } = useGenerateEventICalInfo()
  const {
    jobRequisitionName = "",
    interviewMode = LIInterviewMode.IN_PERSON,
    interviewAddress = "",
    timezone = "",
    interviewStartsAt = "",
    interviewEndsAt = "",
    interviewLink = "",
    iCalId,
  } = interviewInfo ?? {}
  const interviewDate = formatDateToLongString(new Date(interviewStartsAt), timezone)
  const interviewStartDateTime = formatDateToTimeString(interviewStartsAt, timezone)
  const interviewEndDateTime = formatDateToTimeString(interviewEndsAt, timezone)

  const breakpoint = useBreakpoint()
  let iconSize = 140 // icon size for mobile
  if (breakpoint.lg) {
    iconSize = 191 // icon size for desktop
  }

  const addToCalendar = async () => {
    if (!iCalId) {
      return
    }

    const result = await generateEventICalInfo({
      variables: {
        input: {
          iCalId,
        },
      },
    })
    if (result.data?.LIGenerateEventICalInfo) {
      const { iCalContent } = result.data.LIGenerateEventICalInfo
      if (iCalContent) {
        downloadICalFile(iCalContent, "interview.ics")
      }
    }
  }

  return (
    <div
      className="h-screen overflow-y-auto bg-gray-100 p-5 lg:flex lg:items-center lg:justify-center"
      data-testid="candidate-confirmation"
    >
      <article className="mx-auto flex h-auto w-full max-w-sm flex-col gap-6 rounded-[20px] bg-white p-5 shadow-card *:w-full lg:w-confirmation-container-desktop lg:max-w-none lg:p-10">
        <PHIcon size={iconSize} name="interviewConfirmation" />
        <header className="text-center">
          <h2 className="mb-0 text-lg font-semibold text-black">We look forward to seeing you on </h2>
          <h2 className="mb-0 text-lg font-semibold text-black">
            <time dateTime={interviewStartsAt}>{`${interviewDate} ${interviewStartDateTime}`}</time>-{" "}
            <time dateTime={interviewEndsAt}>{interviewEndDateTime}</time>!
          </h2>
        </header>
        <p className="text-secondary mb-0 text-center text-base font-light">
          Please check your email for more details.
        </p>
        <div className="border-t border-gray-200"></div>
        <div className="text-lg font-semibold text-black">
          <h2 className="mb-6 text-lg font-semibold text-black">{jobRequisitionName}</h2>
          <CandidateConfirmationInfo title="Interview Type" description={LIInterviewModeLabel[interviewMode]} />
          {interviewMode === LIInterviewMode.IN_PERSON && interviewAddress && (
            <CandidateConfirmationInfo title="Location" description={interviewAddress} />
          )}
          {interviewMode === LIInterviewMode.ONLINE && (
            <CandidateConfirmationInfo title="Link" description={interviewLink} />
          )}
          <CandidateConfirmationInfo title="Timezone" description={timezone} />
        </div>
        <Space direction="vertical">
          <Button
            aria-label="Add to calendar"
            type="primary"
            className="!h-button !bg-black !text-base"
            block
            shape="round"
            icon={<CalendarOutlined className="text-2xl" />}
            onClick={() => {
              void addToCalendar()
            }}
          >
            <span className="text-white">Add to calendar</span>
          </Button>

          <Button aria-label="Reschedule Interview" className="!h-button !text-base !text-black" block shape="round">
            Reschedule Interview
          </Button>
          <Button
            aria-label="Cancel Interview"
            onClick={() => {
              setIsCancelInterviewModalOpen(true)
            }}
            className="!h-button !text-base"
            danger
            block
            shape="round"
          >
            Cancel Interview
          </Button>
        </Space>
      </article>
      <CancelCandidateInterviewModal
        isCancelCandidateInterviewLoading={isCancelCandidateInterviewLoading}
        isOpen={isCancelInterviewModalOpen}
        onCancelDialog={() => {
          setIsCancelInterviewModalOpen(false)
        }}
        onCancelCandidateInterview={() => {
          void cancelCandidateInterview()
        }}
        jobRequisitionName={jobRequisitionName}
        interviewDate={interviewDate}
        interviewStartDateTime={interviewStartDateTime}
        interviewEndDateTime={interviewEndDateTime}
      />
    </div>
  )
}
