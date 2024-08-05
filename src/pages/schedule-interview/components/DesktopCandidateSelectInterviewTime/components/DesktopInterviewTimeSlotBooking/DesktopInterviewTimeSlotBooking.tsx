import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Button, Calendar } from "antd"
import type { Dayjs } from "dayjs"
import React from "react"
import { useParams } from "react-router-dom"

import { SelectTimeSlotsRadioGroup } from "@/pages/schedule-interview/components/SelectTimeSlotsRadioGroup/SelectTimeSlotsRadioGroup"
import { DATE_FORMAT } from "@/pages/schedule-interview/constants"
import { useBookInterviewNow } from "@/pages/schedule-interview/hooks/useBookInterviewNow"
import { useCalendarHeader } from "@/pages/schedule-interview/hooks/useCalendarHeader"
import { useFormatTimeSlots } from "@/pages/schedule-interview/hooks/useFormatTimeSlots"
import { useInterviewDate } from "@/pages/schedule-interview/hooks/useInterviewDate"
import { useRescheduleCandidateInterview } from "@/pages/schedule-interview/hooks/useRescheduleCandidateInterview"
import { useSelectTimeSlot } from "@/pages/schedule-interview/hooks/useSelectTimeSlot"
import { cn, isReschedulePage } from "@/utils"
import { formatDateToLongString, formatDayjs } from "@/utils/dateTime"

import styles from "./styles.module.css"

interface IProps {
  defaultTimeSlotId?: string
}

export const DesktopInterviewTimeSlotBooking = ({ defaultTimeSlotId }: IProps) => {
  const { selectedTimeSlotId, handleTimeSlotChange } = useSelectTimeSlot({
    defaultTimeSlotId,
  })

  const isReschedule = isReschedulePage()

  const { initialInterviewDate, interviewDate, isInterviewDate, disabledDate, handleDateChange, interviewDates } =
    useInterviewDate()

  const { handleBookInterviewNow, isBookCandidateInterviewLoading } = useBookInterviewNow()
  const { rescheduleCandidateInterview, isRescheduleCandidateInterviewLoading } = useRescheduleCandidateInterview()

  const { formatTimeSlots } = useFormatTimeSlots()
  const currentDate = formatDayjs(interviewDate)

  const timeSlots = formatTimeSlots(interviewDates, currentDate)
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const isInitialAndCurrentDate = (value: Dayjs) =>
    formatDayjs(initialInterviewDate) === formatDayjs(value) && currentDate === formatDayjs(value)

  const { handleClickLeftOutline, handleClickRightOutline } = useCalendarHeader()
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
      className="flex h-full w-full items-center justify-center"
      data-testid={`${value.format(DATE_FORMAT)}`}
      onClick={() => handleDateChange(value)}
    >
      <div
        className={cn([
          "ant-picker-cell-inner ant-picker-calendar-date rounded-full text-center",
          isInterviewDate(value) ? "bg-[rgba(0,0,0,0.04)] text-base text-text-secondary" : "text-sm text-black/50",
          isInitialAndCurrentDate(value) && "bg-sapia-pink",
        ])}
      >
        <div className="rounded-full">{value.date()}</div>
      </div>
    </div>
  )

  return (
    <div data-testid="desktop-interview-time-slot-booking" className={styles.interviewTimeSlotBookingWrapper}>
      <section className="flex justify-between">
        <section>
          <Calendar
            defaultValue={interviewDate}
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
              timeSlots={[...timeSlots]}
              selectedTimeSlotId={selectedTimeSlotId}
              handleTimeSlotChange={handleTimeSlotChange}
            />
          </div>
        </section>
      </section>
      {isReschedule ? (
        <Button
          className={cn([
            "mt-4 w-full text-base font-normal",
            styles.buttonBook,
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
          className={cn(["mt-4 w-full text-base font-normal", styles.buttonBook, selectedTimeSlotId ? "active" : ""])}
          onClick={handleClickBookInterviewNow}
          loading={isBookCandidateInterviewLoading}
        >
          Book interview now
        </Button>
      )}
    </div>
  )
}
