import { Area, AU_AREA, EU_AREA, US_AREA } from "./phone"

export enum AWSRegion {
  AP_SOUTHEAST_2 = "ap-southeast-2",
  EU_WEST_1 = "eu-west-1",
  US_EAST_1 = "us-east-1",
}

export enum AWSShortRegion {
  APSE2 = "apse2",
  EUW1 = "euw1",
  USE1 = "use1",
}

// Default phone code based on region
export const REGION_AREA_MAP = new Map<string, Area>([
  [AWSShortRegion.APSE2, AU_AREA], // Australia
  [AWSShortRegion.EUW1, EU_AREA], // United Kingdom
  [AWSShortRegion.USE1, US_AREA], // United States
])

export const enum RegionAlias {
  AU = "au",
  EU = "eu",
  US = "us",
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  DEFAULT_COUNTRY = "au",
}
