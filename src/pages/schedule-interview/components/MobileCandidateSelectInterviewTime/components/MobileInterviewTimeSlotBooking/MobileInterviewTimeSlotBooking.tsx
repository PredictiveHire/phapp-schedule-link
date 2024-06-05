import { ArrowLeftOutlined, CheckCircleFilled, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Button, Radio } from "antd"
import { Dayjs } from "dayjs"
import React from "react"

import { cn } from "@/utils"
import { formatDateToLongString, getFormattedDate } from "@/utils/dateTime"

import { useInterviewBooking } from "../../hooks/useInterviewBooking"
import { useTimeSlots } from "../../hooks/useTimeSlots"
import { InterviewTimeSlot } from "../../type"
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
    handleTimeChange,
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
      <Radio.Group className="w-full" onChange={(e) => handleTimeChange(e.target.value as string)} value={selectedTime}>
        {timeSlots.map((slot: string) => (
          <Radio.Button key={slot} value={slot} className="w-full px-5 text-left text-black">
            {selectedDateAndTime.selectedTime === slot && selectedDateAndTime.selectedDate === currentDate && (
              <CheckCircleFilled className="checkCircleFilled mr-3 rounded-full bg-[#FFCEFF] text-black" />
            )}
            {slot}
          </Radio.Button>
        ))}
      </Radio.Group>
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
