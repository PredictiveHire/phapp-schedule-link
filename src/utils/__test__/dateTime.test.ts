import { InterviewTimeSlot } from "@/pages/schedule-interview/components/MobileCandidateSelectInterviewTime/type"

import { formatDateToLongString, formatDateToTimeSlot, formatDateToTimeString, getFormattedDate } from "../dateTime"

describe("utils => dateTime", () => {
  describe("getFormattedDate", () => {
    it("should format the date to default format YYYY-MM-DD", () => {
      const date = new Date(2024, 5, 11) // June 11, 2024
      const formattedDate = getFormattedDate(date)
      expect(formattedDate).toBe("2024-06-11")
    })

    it("should format the date to a custom format", () => {
      const date = new Date(2024, 5, 11) // June 11, 2024
      const format = "DD/MM/YYYY"
      const formattedDate = getFormattedDate(date, format)
      expect(formattedDate).toBe("11/06/2024")
    })

    it("should handle invalid date input gracefully", () => {
      const invalidDate = new Date("invalid-date")
      const formattedDate = getFormattedDate(invalidDate)
      expect(formattedDate).toBe("Invalid Date")
    })
  })

  describe("formatDateToLongString", () => {
    it("should format date to long string with time zone", () => {
      const date = new Date("2024-06-14T00:00:00Z")
      const result = formatDateToLongString(date, "Asia/Tokyo")
      expect(result).toBe("Friday, June 14")
    })

    it("should handle invalid date input gracefully", () => {
      const invalidDate = new Date("invalid-date")
      const formattedDate = formatDateToLongString(invalidDate)
      expect(formattedDate).toBe("Invalid Date")
    })
  })

  describe("formatDateToTimeSlot", () => {
    const slot = {
      start: "2024-06-14T08:00:00Z",
      end: "2024-06-14T09:00:00Z",
    }

    it("should format time slot with time zone", () => {
      const result = formatDateToTimeSlot(slot, "Asia/Tokyo")
      expect(result).toBe("05:00 PM - 06:00 PM")
    })

    it("should handle invalid date strings gracefully", () => {
      const slot: InterviewTimeSlot = {
        start: "invalid date",
        end: "invalid date",
      }

      const formattedSlot = formatDateToTimeSlot(slot)
      expect(formattedSlot).toBe("Invalid Date - Invalid Date")
    })
  })

  describe("formatDateToTimeString", () => {
    it("should format time correctly with time zone", () => {
      const time = "2024-06-17T14:30:00Z"
      const timeZone = "America/New_York"
      const formattedTime = formatDateToTimeString(time, timeZone)
      expect(formattedTime).toBe("10:30 AM")
    })

    it("should handle invalid time input gracefully", () => {
      const invalidTime = "invalid time"
      const formattedSlot = formatDateToTimeString(invalidTime)

      expect(formattedSlot).toBe("Invalid Date")
    })

    it("should handle invalid timeZone gracefully", () => {
      const time = "2024-06-17T14:30:00Z"
      const invalidTimeZone = "invalid/timezone"
      expect(() => formatDateToTimeString(time, invalidTimeZone)).toThrow(RangeError)
    })
  })
})
