export const checkIsPublicUrl = (url: string) => {
  const publicUrlsConditions = ["assessments"]
  return publicUrlsConditions.some((condition) => url.includes(condition))
}
