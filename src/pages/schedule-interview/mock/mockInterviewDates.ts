import dayjs from "dayjs"

export const interviewDates = [
  { timeslotId: "110000000000000000000003", start: "2024-06-01T08:00:00.000Z", end: "2024-06-01T09:00:00.000Z" },
  { timeslotId: "2", start: "2024-06-01T09:00:00.000Z", end: "2024-06-01T10:00:00.000Z" },
  { timeslotId: "3", start: "2024-06-02T00:00:00.000Z", end: "2024-06-02T01:00:00.000Z" },
  { timeslotId: "4", start: "2024-06-03T00:00:00.000Z", end: "2024-06-03T01:00:00.000Z" },
  { timeslotId: "5", start: "2024-06-18T00:00:00.000Z", end: "2024-06-18T01:00:00.000Z" },
  { timeslotId: "6", start: "2024-06-19T00:00:00.000Z", end: "2024-06-19T01:00:00.000Z" },
].map((date) => ({
  ...date,
  start: dayjs(date.start).month(dayjs().month()).format(),
  end: dayjs(date.end).month(dayjs().month()).format(),
}))
