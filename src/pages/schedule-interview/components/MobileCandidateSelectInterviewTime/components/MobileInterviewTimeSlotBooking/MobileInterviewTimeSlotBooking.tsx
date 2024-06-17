import { ArrowLeftOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Dayjs } from "dayjs"
import React from "react"

import { cn } from "@/utils"
import { formatDateToLongString, getFormattedDate } from "@/utils/dateTime"

import { useTimeSlots } from "../../../../hooks/useTimeSlots"
import { InterviewTimeSlot } from "../../../../type"
import { SelectTimeSlotsRadioGroup } from "../../../SelectTimeSlotsRadioGroup/SelectTimeSlotsRadioGroup"
import { useInterviewBooking } from "../../hooks/useInterviewBooking"
import styles from "./styles.module.css"

export interface InterviewTimeSlotBookingProps {
  closeBooking: () => void
  interviewTimes: InterviewTimeSlot[]
  initialDate: Dayjs
}

export const MobileInterviewTimeSlotBooking: React.FC<InterviewTimeSlotBookingProps> = ({
  closeBooking,
  interviewTimes,
  initialDate,
}) => {
  const availableDates = [
    ...new Set(interviewTimes.map((slot: InterviewTimeSlot) => getFormattedDate(new Date(slot.start)))),
  ].sort()
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const {
    currentDate,
    selectedDateAndTime,
    selectedTime,
    handleDateChange,
    handleTimeSlotChange,
    handleBookInterviewNow,
    isLeftArrowDisabled,
    isRightArrowDisabled,
  } = useInterviewBooking({ initialDate, availableDates })
  const { formatTimeSlots } = useTimeSlots()
  const timeSlots = formatTimeSlots(interviewTimes, currentDate)

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
        selectedTime={selectedTime}
        selectedDateAndTime={selectedDateAndTime}
        handleTimeSlotChange={handleTimeSlotChange}
        currentDate={currentDate}
      />
      <Button
        className={cn([
          "buttonBook mt-4 w-full text-base font-normal",
          selectedDateAndTime.selectedTime ? "active" : "",
        ])}
        onClick={handleBookInterviewNow}
      >
        Book interview now
      </Button>
    </div>
  )
}
