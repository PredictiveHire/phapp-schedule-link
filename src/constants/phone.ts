import { CountryCode } from "libphonenumber-js"
import { ReactNode } from "react"

import { PhoneCode } from "@/types/phone"

export const DEFAULT_APSE_PHONE_CODE = { code: "61", short: "AU" } as PhoneCode
export const DEFAULT_EUW1_PHONE_CODE = { code: "44", short: "GB" } as PhoneCode
export const DEFAULT_USE1_PHONE_CODE = { code: "1", short: "US" } as PhoneCode

export type Area = {
  short: CountryCode
  phoneCode: string
  emoji: ReactNode
  name: string
}

export const AU_AREA: Area = {
  emoji: "🇦🇺",
  phoneCode: "61",
  short: "AU",
  name: "Australia",
}

export const EU_AREA: Area = {
  emoji: "🇬🇧",
  phoneCode: "44",
  short: "GB",
  name: "United Kingdom of Great Britain and Northern Ireland",
}

export const US_AREA: Area = {
  emoji: "🇺🇸",
  phoneCode: "1",
  short: "US",
  name: "United States of America",
}

// Default phone code to Australia phone code
export const DEFAULT_AREA: Area = AU_AREA

export const PHONE_NUMBER_MISSING_ERROR_MSG = "Please enter the phone number"
export const PHONE_PREFIX_MISSING_ERROR_MSG = "Please select the phone prefix"
export const PHONE_INVALID_ERROR_MSG = "Please enter a valid phone number"
