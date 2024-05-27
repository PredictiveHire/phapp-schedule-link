import { makeVar } from "@apollo/client"

export enum SessionTimeoutNotificationMethod {
  MODAL = "modal",
  TOAST = "toast",
}

export const sessionHasTimeoutApolloVar = makeVar({
  sessionHasTimeout: false,
  notificationMethod: SessionTimeoutNotificationMethod.MODAL,
  forceLogout: false,
})
