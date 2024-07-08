export const downloadICalFile = (iCalContent: string, filename = "interview.ics") => {
  const blob = new Blob([iCalContent], { type: "text/calendar;charset=utf-8" })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}