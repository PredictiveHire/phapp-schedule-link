import { downloadICalFile } from "../downloadICalFile"

describe("utils => downloadICalFile", () => {
  describe("downloadICalFile", () => {
    let createObjectURLMock: jest.Mock
    let revokeObjectURLMock

    beforeEach(() => {
      createObjectURLMock = jest.fn(() => "mock-url")
      revokeObjectURLMock = jest.fn()

      global.URL.createObjectURL = createObjectURLMock
      global.URL.revokeObjectURL = revokeObjectURLMock
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it("should create a Blob with correct content and type", () => {
      global.Blob = jest.fn().mockImplementation((content, options) => ({
        content: content as unknown as string,
        options: options as BlobPropertyBag,
      }))

      downloadICalFile("test content")

      expect(global.Blob).toHaveBeenCalledWith(["test content"], { type: "text/calendar;charset=utf-8" })
    })

    it("should create a URL with the correct blob", () => {
      global.Blob = jest.fn().mockImplementation(() => ({
        content: "iCalContent",
        options: { type: "text/calendar;charset=utf-8" },
      }))
      downloadICalFile("iCalContent")

      expect(createObjectURLMock).toHaveBeenCalledWith({
        content: "iCalContent",
        options: { type: "text/calendar;charset=utf-8" },
      })
    })

    it("should create a link with the correct URL and filename", () => {
      const link = document.createElement("a")
      jest.spyOn(document, "createElement").mockReturnValue(link)

      downloadICalFile("iCalContent", "test.ics")

      expect(link.href).toContain("mock-url")
      expect(link.download).toBe("test.ics")
    })
  })
})
