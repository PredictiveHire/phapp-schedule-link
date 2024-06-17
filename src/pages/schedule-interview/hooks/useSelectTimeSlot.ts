import { useState } from "react"

export const useSelectTimeSlot = () => {
  const [selectedTimeSlotId, setSelectedTimeSlotId] = useState<string | null>(null)

  const handleTimeSlotChange = (timeslotId: string) => {
    setSelectedTimeSlotId(timeslotId)
  }

  return {
    selectedTimeSlotId,
    setSelectedTimeSlotId,
    handleTimeSlotChange,
  }
}
