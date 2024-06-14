import { formatDateToLongString, getFormattedDate } from "../dateTime"

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
    it("should format the date to a long string format", () => {
      const date = new Date(2024, 5, 11) // June 11, 2024
      const formattedDate = formatDateToLongString(date)
      expect(formattedDate).toBe("Tuesday, June 11")
    })

    it("should handle invalid date input gracefully", () => {
      const invalidDate = new Date("invalid-date")
      const formattedDate = formatDateToLongString(invalidDate)
      expect(formattedDate).toBe("Invalid Date")
    })
  })
})
