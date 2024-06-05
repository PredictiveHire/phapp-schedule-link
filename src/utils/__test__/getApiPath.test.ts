import { AWSRegion } from "@/constants"
import { getApiPath } from "@/utils/getApiPath"
import { getRegionFullName, isRegionShortNameMatch } from "@/utils/regionMapping"

// Mock the dependencies
jest.mock("@/utils/regionMapping", () => ({
  getRegionFullName: jest.fn(),
  isRegionShortNameMatch: jest.fn(),
}))

// Mock the constants
jest.mock("@/constants", () => ({
  AWSRegion: {
    AP_SOUTHEAST_2: "ap-southeast-2",
  },
}))

const mockIsRegionShortNameMatch = isRegionShortNameMatch as jest.Mock
const mockGetRegionFullName = getRegionFullName as jest.Mock

describe("utils => getApiPath", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("should return the correct api path when the region short name matches", () => {
    mockIsRegionShortNameMatch.mockReturnValue(true)
    mockGetRegionFullName.mockReturnValue("us-west-2")

    // Mock window location pathname
    Object.defineProperty(window, "location", {
      writable: true,
      value: { pathname: "/regions/usw/customers/123" },
    })

    const result = getApiPath()
    expect(result).toBe("/api/us-west-2/graphql")
    expect(isRegionShortNameMatch).toHaveBeenCalledWith("usw")
    expect(getRegionFullName).toHaveBeenCalledWith("usw")
  })

  it("should return the default api path when the region short name does not match", () => {
    mockIsRegionShortNameMatch.mockReturnValue(false)

    // Mock window location pathname
    Object.defineProperty(window, "location", {
      writable: true,
      value: { pathname: "/regions/invalid-region/customers/123" },
    })

    const result = getApiPath()
    expect(result).toBe(`/api/${AWSRegion.AP_SOUTHEAST_2}/graphql`)
    expect(isRegionShortNameMatch).toHaveBeenCalledWith("invalid-region")
    expect(getRegionFullName).not.toHaveBeenCalled()
  })

  it("should handle paths with less than expected segments gracefully", () => {
    mockIsRegionShortNameMatch.mockReturnValue(false)

    // Mock window location pathname
    Object.defineProperty(window, "location", {
      writable: true,
      value: { pathname: "/regions" },
    })

    const result = getApiPath()
    expect(result).toBe(`/api/${AWSRegion.AP_SOUTHEAST_2}/graphql`)
    expect(isRegionShortNameMatch).toHaveBeenCalledWith(undefined)
    expect(getRegionFullName).not.toHaveBeenCalled()
  })
})
