import { formatDateToTimeSlot } from "@/utils/dateTime"

import { InterviewTimeSlot } from "../type"

export const useTimeSlots = () => {
  const formatTimeSlots = (interviewTimes: InterviewTimeSlot[], currentDate: string): string[] =>
    interviewTimes.filter((slot) => slot.start.startsWith(currentDate)).map((slot) => formatDateToTimeSlot(slot))

  return {
    formatTimeSlots,
  }
}
