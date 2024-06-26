import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Button, Calendar } from "antd"
import type { Dayjs } from "dayjs"
import React from "react"

import { useCalendarHeader } from "@/pages/schedule-interview/hooks/useCalendarHeader"
import { cn } from "@/utils"
import { formatDateToLongString, formatDayjs } from "@/utils/dateTime"

import { useTimeSlots } from "../../../../hooks/useTimeSlots"
import { SelectTimeSlotsRadioGroup } from "../../../SelectTimeSlotsRadioGroup/SelectTimeSlotsRadioGroup"
import { useSelectTimeSlot } from "../../hooks/useSelectTimeSlot"
import styles from "./styles.module.css"

export const DesktopInterviewTimeSlotBooking: React.FC = () => {
  const {
    initialInterviewDate,
    handleTimeSlotChange,
    selectedTime,
    selectedDateAndTime,
    interviewDate,
    isInterviewDate,
    disabledDate,
    interviewDates,
    handleDateChange,
    handleBookInterviewNow,
  } = useSelectTimeSlot()
  const { formatTimeSlots } = useTimeSlots()
  const currentDate = formatDayjs(interviewDate)
  const timeSlots = formatTimeSlots(interviewDates, currentDate)
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const isInitialAndCurrentDate = (value: Dayjs) =>
    formatDayjs(initialInterviewDate) === formatDayjs(value) && currentDate === formatDayjs(value)

  const { handleClickLeftOutline, handleClickRightOutline } = useCalendarHeader()
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
        isInterviewDate(value) ? "text-secondary bg-[rgba(0,0,0,0.04)] text-base" : "text-sm text-black/50",
        isInitialAndCurrentDate(value) && "bg-sapia-pink",
      ])}
      onClick={() => handleDateChange(value)}
    >
      <div className="rounded-full">{value.date()}</div>
    </div>
  )

  return (
    <div data-testid="desktop-interview-time-slot-booking" className={styles.interviewTimeSlotBookingWrapper}>
      <section className="flex justify-between">
        <section>
          <Calendar
            className={cn(["w-[316px]", styles.interviewTimeSlotBookingCalendar])}
            fullscreen={false}
            headerRender={headerRender}
            fullCellRender={fullCellRender}
            disabledDate={disabledDate}
          />
          <p className="mb-0 mt-3 text-left text-xs font-light text-black">Timezone: {userTimezone}</p>
        </section>
        <section className="ml-10 w-[350px]">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">{formatDateToLongString(interviewDate.toDate())}</div>
            <div className="text-sm font-normal text-black/65">
              {timeSlots.length} time slot{timeSlots.length > 1 ? "s" : ""}
            </div>
          </div>
          <div className="h-[350px] overflow-y-auto">
            <SelectTimeSlotsRadioGroup
              timeSlots={timeSlots}
              selectedTime={selectedTime}
              selectedDateAndTime={selectedDateAndTime}
              handleTimeSlotChange={handleTimeSlotChange}
              currentDate={currentDate}
            />
          </div>
        </section>
      </section>
      <Button
        className={cn([
          "mt-4 w-full text-base font-normal",
          styles.buttonBook,
          selectedDateAndTime.selectedTime ? "active" : "",
        ])}
        onClick={handleBookInterviewNow}
      >
        Book interview now
      </Button>
    </div>
  )
}
