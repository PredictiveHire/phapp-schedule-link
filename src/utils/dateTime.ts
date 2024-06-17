import type { Dayjs } from "dayjs"
import dayjs from "dayjs"

import { InterviewTimeSlot } from "@/pages/schedule-interview/type"

export const getFormattedDate = (date: Date, format: string = "YYYY-MM-DD"): string => dayjs(date).format(format)

export const formatDayjs = (date: Dayjs, format: string = "YYYY-MM-DD"): string => date.format(format)

export const formatDateToLongString = (date: Date, timeZone?: string): string => {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: timeZone,
  }
  return date.toLocaleDateString("en-US", dateFormatOptions)
}

export const formatDateToTimeString = (time: string, timeZone?: string) =>
  new Date(time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: timeZone })

export const formatDateToTimeSlot = (slot: InterviewTimeSlot, timeZone?: string) =>
  `${formatDateToTimeString(slot.start, timeZone)} - ${formatDateToTimeString(slot.end, timeZone)}`
