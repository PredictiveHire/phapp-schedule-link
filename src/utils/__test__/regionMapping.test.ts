import { getRegionFullName, getRegionShortName, isRegionShortNameMatch } from "@/utils/regionMapping"

import { AWSRegion, AWSShortRegion } from "../../constants/region"

describe("Region Utilities", () => {
  describe("getRegionFullName", () => {
    it("should return AP_SOUTHEAST_2 for AWSRegion.AP_SOUTHEAST_2", () => {
      expect(getRegionFullName(AWSRegion.AP_SOUTHEAST_2)).toBe(AWSRegion.AP_SOUTHEAST_2)
    })

    it("should return AP_SOUTHEAST_2 for AWSShortRegion.APSE2", () => {
      expect(getRegionFullName(AWSShortRegion.APSE2)).toBe(AWSRegion.AP_SOUTHEAST_2)
    })

    it("should return EU_WEST_1 for AWSRegion.EU_WEST_1", () => {
      expect(getRegionFullName(AWSRegion.EU_WEST_1)).toBe(AWSRegion.EU_WEST_1)
    })

    it("should return EU_WEST_1 for AWSShortRegion.EUW1", () => {
      expect(getRegionFullName(AWSShortRegion.EUW1)).toBe(AWSRegion.EU_WEST_1)
    })

    it("should return US_EAST_1 for AWSRegion.US_EAST_1", () => {
      expect(getRegionFullName(AWSRegion.US_EAST_1)).toBe(AWSRegion.US_EAST_1)
    })

    it("should return US_EAST_1 for AWSShortRegion.USE1", () => {
      expect(getRegionFullName(AWSShortRegion.USE1)).toBe(AWSRegion.US_EAST_1)
    })

    it("should return an empty string for an unknown region", () => {
      expect(getRegionFullName("UNKNOWN_REGION")).toBe("")
    })
  })

  describe("getRegionShortName", () => {
    it("should return APSE2 for AWSRegion.AP_SOUTHEAST_2", () => {
      expect(getRegionShortName(AWSRegion.AP_SOUTHEAST_2)).toBe(AWSShortRegion.APSE2)
    })

    it("should return APSE2 for AWSShortRegion.APSE2", () => {
      expect(getRegionShortName(AWSShortRegion.APSE2)).toBe(AWSShortRegion.APSE2)
    })

    it("should return EUW1 for AWSRegion.EU_WEST_1", () => {
      expect(getRegionShortName(AWSRegion.EU_WEST_1)).toBe(AWSShortRegion.EUW1)
    })

    it("should return EUW1 for AWSShortRegion.EUW1", () => {
      expect(getRegionShortName(AWSShortRegion.EUW1)).toBe(AWSShortRegion.EUW1)
    })

    it("should return USE1 for AWSRegion.US_EAST_1", () => {
      expect(getRegionShortName(AWSRegion.US_EAST_1)).toBe(AWSShortRegion.USE1)
    })

    it("should return USE1 for AWSShortRegion.USE1", () => {
      expect(getRegionShortName(AWSShortRegion.USE1)).toBe(AWSShortRegion.USE1)
    })

    it("should return an empty string for an unknown region", () => {
      expect(getRegionShortName("UNKNOWN_REGION")).toBe("")
    })
  })

  describe("isRegionShortNameMatch", () => {
    it("should return true for AWSShortRegion.APSE2", () => {
      expect(isRegionShortNameMatch(AWSShortRegion.APSE2)).toBe(true)
    })

    it("should return true for AWSShortRegion.EUW1", () => {
      expect(isRegionShortNameMatch(AWSShortRegion.EUW1)).toBe(true)
    })

    it("should return true for AWSShortRegion.USE1", () => {
      expect(isRegionShortNameMatch(AWSShortRegion.USE1)).toBe(true)
    })

    it("should return false for an unknown region", () => {
      expect(isRegionShortNameMatch("UNKNOWN_REGION")).toBe(false)
    })
  })
})
