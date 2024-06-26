import { Dayjs } from "dayjs"

export const useCalendarHeader = () => {
  const handleClickLeftOutline = (value: Dayjs, onChange: (date: Dayjs) => void) => {
    onChange(value.clone().subtract(1, "month"))
  }

  const handleClickRightOutline = (value: Dayjs, onChange: (date: Dayjs) => void) => {
    onChange(value.clone().add(1, "month"))
  }

  return {
    handleClickLeftOutline,
    handleClickRightOutline,
  }
}
