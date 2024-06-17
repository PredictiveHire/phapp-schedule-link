import { useState } from "react"

export const useShowTimeSlotBooking = () => {
  const [showTimeSlotBooking, setShowTimeSlotBooking] = useState(false)

  return {
    showTimeSlotBooking,
    setShowTimeSlotBooking,
  }
}
