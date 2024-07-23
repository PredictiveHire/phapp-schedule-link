import { useState } from "react"

interface IProps {
  defaultTimeSlotId?: string
}

export const useSelectTimeSlot = ({ defaultTimeSlotId }: IProps) => {
  const [selectedTimeSlotId, setSelectedTimeSlotId] = useState<string | null>(defaultTimeSlotId ?? null)

  const handleTimeSlotChange = (timeslotId: string) => {
    setSelectedTimeSlotId(timeslotId)
  }

  return {
    selectedTimeSlotId,
    setSelectedTimeSlotId,
    handleTimeSlotChange,
  }
}
