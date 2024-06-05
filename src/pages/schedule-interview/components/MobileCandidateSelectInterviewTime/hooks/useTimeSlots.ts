import { InterviewTimeSlot } from "../type"

export const useTimeSlots = () => {
  const formatTimeSlots = (interviewTimes: InterviewTimeSlot[], currentDate: string): string[] =>
    interviewTimes
      .filter((slot) => slot.start.startsWith(currentDate))
      .map(
        (slot) =>
          `${new Date(slot.start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${new Date(slot.end).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
      )

  return {
    formatTimeSlots,
  }
}
