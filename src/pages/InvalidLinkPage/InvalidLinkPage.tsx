import React from "react"

import { cn } from "@/utils"

/**
 * Page to be rendered when the link is invalid, or when the shortcode is invalid, in both mobile and desktop
 */
export const InvalidLinkPage = () => {
  return (
    <div
      className={cn("flex h-full w-full bg-layout p-6 lg:justify-center")}
      aria-label="Something went wrong on this page"
    >
      <article className="h-fit w-full rounded-2xl bg-white p-10 text-center text-lg font-bold shadow-card lg:w-invalid-link-container">
        Sorry, this link is invalid. Please contact your recruiter.
      </article>
    </div>
  )
}
