/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import {
  Area,
  AU_AREA,
  AWSRegion,
  AWSShortRegion,
  DEFAULT_APSE_PHONE_CODE,
  DEFAULT_AREA,
  DEFAULT_EUW1_PHONE_CODE,
  DEFAULT_USE1_PHONE_CODE,
  EU_AREA,
  RegionAlias,
  US_AREA,
} from "@/constants"
import { PhoneCode } from "@/types/phone"

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

export const getDefaultPhoneCodeForRegion = (regionName: string): PhoneCode => {
  const regionFullName = getRegionFullName(regionName)

  switch (regionFullName) {
    case AWSRegion.AP_SOUTHEAST_2:
      return DEFAULT_APSE_PHONE_CODE
    case AWSRegion.EU_WEST_1:
      return DEFAULT_EUW1_PHONE_CODE
    case AWSRegion.US_EAST_1:
      return DEFAULT_USE1_PHONE_CODE
    default:
      return { code: "", short: "" } as PhoneCode
  }
}

export const mapRegionToCustomerArea = (customerRegion: string): Area => {
  switch (customerRegion) {
    case AWSShortRegion.APSE2:
      return AU_AREA
    case AWSShortRegion.EUW1:
      return EU_AREA
    case AWSShortRegion.USE1:
      return US_AREA
    default:
      return DEFAULT_AREA
  }
}

export const getRegionAlias = (regionFullName: string): string => {
  switch (regionFullName) {
    case AWSRegion.AP_SOUTHEAST_2:
    case AWSShortRegion.APSE2:
      return RegionAlias.AU
    case AWSRegion.EU_WEST_1:
    case AWSShortRegion.EUW1:
      return RegionAlias.EU
    case AWSRegion.US_EAST_1:
    case AWSShortRegion.USE1:
      return RegionAlias.US
    default:
      return RegionAlias.DEFAULT_COUNTRY
  }
}
