/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { AWSRegion, AWSShortRegion } from "../constants/region"

export const getRegionFullName = (regionShortName: string): string => {
  switch (regionShortName) {
    case AWSRegion.AP_SOUTHEAST_2:
    case AWSShortRegion.APSE2:
      return AWSRegion.AP_SOUTHEAST_2
    case AWSRegion.EU_WEST_1:
    case AWSShortRegion.EUW1:
      return AWSRegion.EU_WEST_1
    case AWSRegion.US_EAST_1:
    case AWSShortRegion.USE1:
      return AWSRegion.US_EAST_1
    default:
      return ""
  }
}

export const getRegionShortName = (regionFullName: string): string => {
  switch (regionFullName) {
    case AWSRegion.AP_SOUTHEAST_2:
    case AWSShortRegion.APSE2:
      return AWSShortRegion.APSE2
    case AWSRegion.EU_WEST_1:
    case AWSShortRegion.EUW1:
      return AWSShortRegion.EUW1
    case AWSRegion.US_EAST_1:
    case AWSShortRegion.USE1:
      return AWSShortRegion.USE1
    default:
      return ""
  }
}

export const isRegionShortNameMatch = (regionShortName: string): boolean =>
  [AWSShortRegion.APSE2, AWSShortRegion.EUW1, AWSShortRegion.USE1].includes(regionShortName as AWSShortRegion)
