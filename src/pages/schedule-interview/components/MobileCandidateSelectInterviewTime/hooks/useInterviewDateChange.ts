import { Dayjs } from "dayjs"
import { useState } from "react"

export const useInterviewDateChange = ({
  initialDate,
  availableDates,
}: {
  initialDate: Dayjs
  availableDates: string[]
}) => {
  const initialCurrentDate = initialDate.format("YYYY-MM-DD")
  const [currentDate, setCurrentDate] = useState<string>(initialCurrentDate)

  const handleDateChange = (direction: "prev" | "next"): void => {
    const currentIndex = availableDates.indexOf(currentDate)
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1
    if (newIndex >= 0 && newIndex < availableDates.length) {
      const newDate = availableDates[newIndex]
      setCurrentDate(newDate)
    }
  }
  const isLeftArrowDisabled = availableDates.indexOf(currentDate) === 0
  const isRightArrowDisabled = availableDates.indexOf(currentDate) === availableDates.length - 1

  return {
    currentDate,
    handleDateChange,
    isLeftArrowDisabled,
    isRightArrowDisabled,
  }
}
