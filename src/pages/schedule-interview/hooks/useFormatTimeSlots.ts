import { formatDateToTimeSlot } from "@/utils/dateTime"

import { InterviewTimeSlot, TimeSlot } from "../type"

export const useFormatTimeSlots = () => {
  const formatTimeSlots = (interviewTimes: InterviewTimeSlot[], currentDate: string): TimeSlot[] =>
    interviewTimes
      .filter((slot) => slot.start.startsWith(currentDate))
      .map((slot) => ({ slot: formatDateToTimeSlot(slot), timeslotId: slot.timeslotId }))

  return {
    formatTimeSlots,
  }
}
