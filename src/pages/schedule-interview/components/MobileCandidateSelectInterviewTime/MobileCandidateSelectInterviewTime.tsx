import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Calendar } from "antd"
import type { Dayjs } from "dayjs"
import React, { useState } from "react"

import { useCalendarHeader } from "@/pages/schedule-interview/hooks/useCalendarHeader"
import { useInterviewDate } from "@/pages/schedule-interview/hooks/useInterviewDate"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import { cn } from "@/utils"

import { LIInterviewMode } from "../../constants"
import { InterviewInfo } from "../InterviewInfo"
import { MobileInterviewTimeSlotBooking } from "./components/MobileInterviewTimeSlotBooking"
import styles from "./styles.module.css"

export const MobileCandidateSelectInterviewTime = () => {
  const { interviewInfo, logo } = useScheduleInterview()
  const { interviewDate, isInterviewDate, disabledDate, handleDateChange, interviewDates } = useInterviewDate()
  const [showTimeSlotBooking, setShowTimeSlotBooking] = useState(false)
  const {
    jobRequisitionName = "",
    interviewMode = LIInterviewMode.IN_PERSON,
    interviewAddress = "",
    interviewLink = "",
    selectedTimeSlotId = "",
  } = interviewInfo ?? {}

  const { handleClickLeftOutline, handleClickRightOutline } = useCalendarHeader()
  const handleClickDate = (value: Dayjs) => {
    if (isInterviewDate(value)) {
      handleDateChange(value)
      setShowTimeSlotBooking(true)
    }
  }
  const headerRender = ({ value, onChange }: { value: Dayjs; onChange: (date: Dayjs) => void }) => (
    <div className="mb-4 flex items-center justify-between px-5">
      <LeftOutlined
        onClick={() => handleClickLeftOutline(value, onChange)}
        className="text-secondary cursor-pointer text-xl"
      />
      <span className="px-2 text-base font-semibold text-black">{`${value.format("MMMM")} ${value.year()}`}</span>
      <RightOutlined
        onClick={() => handleClickRightOutline(value, onChange)}
        className="text-secondary cursor-pointer text-xl"
      />
    </div>
  )

  const fullCellRender = (value: Dayjs) => (
    <div
      className={cn([
        "ant-picker-cell-inner ant-picker-calendar-date rounded-full text-center",
        `${isInterviewDate(value) ? "!bg-sapia-pink !text-base !text-text-secondary" : "!text-sm !text-black/50"}`,
      ])}
      onClick={() => handleClickDate(value)}
    >
      <div className="rounded-full">{value.date()}</div>
    </div>
  )

  return (
    <div
      data-testid="mobile-candidate-select-interview-time"
      className={cn(["h-full overflow-y-auto bg-gray-100 px-5 py-3", styles.candidateSelectInterviewTimeWrapper])}
    >
      {showTimeSlotBooking ? (
        <MobileInterviewTimeSlotBooking
          defaultTimeSlotId={selectedTimeSlotId}
          closeBooking={() => setShowTimeSlotBooking(false)}
          interviewTimes={interviewDates}
          initialDate={interviewDate}
        />
      ) : (
        <div className="mx-auto w-full rounded-[20px] bg-white p-5 shadow-card">
          <InterviewInfo interviewInfo={{ jobRequisitionName, interviewMode, interviewAddress, interviewLink, logo }} />
          <Calendar
            defaultValue={interviewDate}
            fullscreen={false}
            headerRender={headerRender}
            fullCellRender={fullCellRender}
            disabledDate={disabledDate}
          />
        </div>
      )}
    </div>
  )
}
