import { ArrowLeftOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Dayjs } from "dayjs"
import React from "react"
import { useParams } from "react-router-dom"

import { useInterviewDateChange } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime/hooks/useInterviewDateChange"
import { SelectTimeSlotsRadioGroup } from "@/pages/schedule-interview/components/SelectTimeSlotsRadioGroup/SelectTimeSlotsRadioGroup"
import { useBookInterviewNow } from "@/pages/schedule-interview/hooks/useBookInterviewNow"
import { useFormatTimeSlots } from "@/pages/schedule-interview/hooks/useFormatTimeSlots"
import { useRescheduleCandidateInterview } from "@/pages/schedule-interview/hooks/useRescheduleCandidateInterview"
import { useSelectTimeSlot } from "@/pages/schedule-interview/hooks/useSelectTimeSlot"
import { InterviewTimeSlot } from "@/pages/schedule-interview/type"
import { cn, isReschedulePage } from "@/utils"
import { formatDateToLongString, getFormattedDate } from "@/utils/dateTime"

import styles from "./styles.module.css"

export interface InterviewTimeSlotBookingProps {
  closeBooking: () => void
  interviewTimes: InterviewTimeSlot[]
  initialDate: Dayjs
  defaultTimeSlotId?: string
}

export const MobileInterviewTimeSlotBooking: React.FC<InterviewTimeSlotBookingProps> = ({
  closeBooking,
  interviewTimes,
  initialDate,
  defaultTimeSlotId,
}) => {
  const isReschedule = isReschedulePage()

  const availableDates = [
    ...new Set(interviewTimes.map((slot: InterviewTimeSlot) => getFormattedDate(new Date(slot.start)))),
  ].sort()
  const { currentDate, handleDateChange, isLeftArrowDisabled, isRightArrowDisabled } = useInterviewDateChange({
    initialDate,
    availableDates,
  })

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const { selectedTimeSlotId, handleTimeSlotChange } = useSelectTimeSlot({
    defaultTimeSlotId,
  })
  const { handleBookInterviewNow, isBookCandidateInterviewLoading } = useBookInterviewNow()
  const { rescheduleCandidateInterview, isRescheduleCandidateInterviewLoading } = useRescheduleCandidateInterview()

  const { formatTimeSlots } = useFormatTimeSlots()
  const timeSlots = formatTimeSlots(interviewTimes, currentDate)

  const { shortcode = "" } = useParams()

  const handleClickBookInterviewNow = () => {
    void handleBookInterviewNow({
      timeslotId: selectedTimeSlotId || "",
      shortcode: shortcode,
      candidateTimezone: userTimezone,
    })
  }

  const handleClickRescheduleInterview = () => {
    void rescheduleCandidateInterview({
      variables: {
        input: {
          timeslotId: selectedTimeSlotId || "",
          shortcode: shortcode,
          candidateTimezone: userTimezone,
        },
      },
    })
  }

  return (
    <div
      data-testid="mobile-interview-time-slot-booking"
      className={cn(["mx-auto rounded-2xl bg-white p-5 shadow-card", styles.interviewTimeSlotBookingWrapper])}
    >
      <section className="flex items-center justify-between">
        <div
          className="mr-3 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1px] border-solid border-black"
          onClick={closeBooking}
          data-testid="close-booking-button"
        >
          <ArrowLeftOutlined className="ml-2.5 w-7 text-black" />
        </div>

        <div className="text-left text-xs font-normal text-black">Timezone: {userTimezone}</div>
      </section>
      <div className="mt-5 flex items-center justify-between">
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={() => handleDateChange("prev")}
          disabled={isLeftArrowDisabled}
        />
        <div className="text-lg font-semibold">{formatDateToLongString(new Date(currentDate))}</div>
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={() => handleDateChange("next")}
          disabled={isRightArrowDisabled}
        />
      </div>
      <SelectTimeSlotsRadioGroup
        timeSlots={timeSlots}
        selectedTimeSlotId={selectedTimeSlotId}
        handleTimeSlotChange={handleTimeSlotChange}
      />
      {isReschedule ? (
        <Button
          className={cn([
            "buttonBook mt-4 w-full text-base font-normal",
            selectedTimeSlotId !== defaultTimeSlotId ? "active" : "",
          ])}
          disabled={selectedTimeSlotId === defaultTimeSlotId}
          onClick={handleClickRescheduleInterview}
          loading={isRescheduleCandidateInterviewLoading}
        >
          Reschedule interview
        </Button>
      ) : (
        <Button
          className={cn(["buttonBook mt-4 w-full text-base font-normal", selectedTimeSlotId ? "active" : ""])}
          onClick={handleClickBookInterviewNow}
          loading={isBookCandidateInterviewLoading}
        >
          Book interview now
        </Button>
      )}
    </div>
  )
}
