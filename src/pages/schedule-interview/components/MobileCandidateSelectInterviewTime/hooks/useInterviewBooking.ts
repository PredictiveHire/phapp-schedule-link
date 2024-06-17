import { Dayjs } from "dayjs"
import { useState } from "react"

export const useInterviewBooking = ({
  initialDate,
  availableDates,
}: {
  initialDate: Dayjs
  availableDates: string[]
}) => {
  const initialCurrentDate = initialDate.format("YYYY-MM-DD")
  const [currentDate, setCurrentDate] = useState<string>(initialCurrentDate)
  const [selectedDateAndTime, setSelectedDateAndTime] = useState<{ selectedDate: string; selectedTime: string }>({
    selectedDate: "",
    selectedTime: "",
  })
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleDateChange = (direction: "prev" | "next"): void => {
    const currentIndex = availableDates.indexOf(currentDate)
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1
    if (newIndex >= 0 && newIndex < availableDates.length) {
      const newDate = availableDates[newIndex]
      setCurrentDate(newDate)

      if (newDate === selectedDateAndTime.selectedDate) {
        setSelectedTime(selectedDateAndTime.selectedTime)
      } else {
        setSelectedTime(null)
      }
    }
  }

  const handleTimeSlotChange = (time: string) => {
    setSelectedDateAndTime({
      selectedDate: currentDate,
      selectedTime: time,
    })
    setSelectedTime(time)
  }

  const handleBookInterviewNow = () => {
    if (selectedDateAndTime.selectedTime) {
      alert(`Proceed to confirmation for ${selectedDateAndTime.selectedDate} at ${selectedDateAndTime.selectedTime}`)
    }
  }

  const isLeftArrowDisabled = availableDates.indexOf(currentDate) === 0
  const isRightArrowDisabled = availableDates.indexOf(currentDate) === availableDates.length - 1

  return {
    currentDate,
    selectedDateAndTime,
    selectedTime,
    handleDateChange,
    handleTimeSlotChange,
    handleBookInterviewNow,
    isLeftArrowDisabled,
    isRightArrowDisabled,
  }
}
