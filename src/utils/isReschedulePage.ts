export const isReschedulePage = (): boolean => {
  const href = window.location.href
  const isReschedulePage = href.endsWith("/reschedule")
  return Boolean(isReschedulePage)
}
