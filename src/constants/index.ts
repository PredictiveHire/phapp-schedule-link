export * from "./region"

export const STAGE = import.meta.env.VITE_STAGE || ""
export const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || ""
export const ROLLBAR_TOKEN = import.meta.env.VITE_ROLLBAR_TOKEN || ""
export const LI_BASE_API_URL = import.meta.env.VITE_LI_BASE_API_URL || ""

export const DEFAULT_AWS_REGION = "noFlush_default_region"
export const XSRF_TOKEN = "xsrf_token"

export const ANTD_NOTIFICATION_STACK_THRESHOLD = 3
