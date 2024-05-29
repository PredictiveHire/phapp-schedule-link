import { AWSRegion } from "@/constants"
import { getRegionFullName, isRegionShortNameMatch } from "@/utils/regionMapping"

export const getApiPath = (): string => {
  // match the short region in the path /regions/:region/customers/:customerId/*
  const shortAwsRegion = window.location.pathname.split("/")[2]

  const isShortRegionMatch = isRegionShortNameMatch(shortAwsRegion)
  const awsRegion = isShortRegionMatch ? getRegionFullName(shortAwsRegion) : AWSRegion.AP_SOUTHEAST_2

  const apiPath = `/api/${awsRegion}/graphql`
  return apiPath
}
