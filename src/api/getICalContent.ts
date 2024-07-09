import apiClient from "./index"

export const getICalContent = (iCalId: string) => {
  return apiClient.post("/interview-schedule/download-event-ical", {
    iCalId,
  })
}
