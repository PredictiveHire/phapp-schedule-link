import dayjs from "dayjs"

export const getFormattedDate = (date: Date, format: string = "YYYY-MM-DD"): string => dayjs(date).format(format)

export const formatDateToLongString = (date: Date): string => {
  const dateFormatOptions: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long" }
  return date.toLocaleDateString("en-US", dateFormatOptions)
}
