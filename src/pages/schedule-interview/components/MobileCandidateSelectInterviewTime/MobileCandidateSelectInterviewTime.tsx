import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Calendar } from "antd"
import type { Dayjs } from "dayjs"
import React from "react"

import { cn } from "@/utils"

import logoSvg from "../../../../assets/images/ww-logo.svg"
import { MobileInterviewInfo } from "./components/MobileInterviewInfo"
import { MobileInterviewTimeSlotBooking } from "./components/MobileInterviewTimeSlotBooking"
import { LIInterviewMode } from "./constants"
import { useInterviewDate } from "./hooks/useInterviewDate"
import styles from "./styles.module.css"

// TODO: Mock data from backend
const interviewInfo = {
  logo: logoSvg,
  jobRequisitionName: "job requisition name",
  interviewMode: LIInterviewMode.IN_PERSON,
  interviewAddress: "216 Lower Heidelberg Rd, Ivanhoe East VIC 3079",
}

export const MobileCandidateSelectInterviewTime = () => {
  const {
    showTimeSlotBooking,
    setShowTimeSlotBooking,
    interviewDate,
    isInterviewDate,
    disabledDate,
    clickDate,
    interviewDates,
  } = useInterviewDate()

  const headerRender = ({ value, onChange }: { value: Dayjs; onChange: (date: Dayjs) => void }) => (
    <div className="mb-4 flex items-center justify-between px-5">
      <LeftOutlined
        onClick={() => onChange(value.clone().subtract(1, "month"))}
        className="text-secondary cursor-pointer text-xl"
      />
      <span className="px-2 text-base font-semibold text-black">{`${value.format("MMMM")} ${value.year()}`}</span>
      <RightOutlined
        onClick={() => onChange(value.clone().add(1, "month"))}
        className="text-secondary cursor-pointer text-xl"
      />
    </div>
  )

  const fullCellRender = (value: Dayjs) => (
    <div
      className={cn([
        "ant-picker-cell-inner ant-picker-calendar-date rounded-full text-center",
        `${isInterviewDate(value) ? "text-secondary text-secondary bg-sapia-pink text-base" : "text-sm text-black/50"}`,
      ])}
      onClick={() => clickDate(value)}
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
          closeBooking={() => setShowTimeSlotBooking(false)}
          interviewTimes={interviewDates}
          initialDate={interviewDate as Dayjs}
        />
      ) : (
        <div className="mx-auto w-full rounded-[20px] bg-white p-5 shadow-card">
          <MobileInterviewInfo interviewInfo={interviewInfo} />
          <Calendar
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
