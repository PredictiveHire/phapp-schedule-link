import { CountryCode } from "libphonenumber-js"

export type PhoneCode = {
  code: string
  short: string
}

export type CountryPhoneInputValue = {
  code?: number | string
  phone?: string
  short?: CountryCode
}
