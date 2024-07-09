import React from "react"

import { cn } from "@/utils"

interface ErrorDisplayProps {
  description: string
}
export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ description }) => {
  return (
    <div
      className={cn("flex h-full w-full bg-layout p-6 lg:justify-center")}
      aria-label="Something went wrong on this page"
    >
      <article className="h-fit w-full rounded-2xl bg-white p-10 text-center text-lg font-bold shadow-card lg:w-invalid-link-container">
        {description}
      </article>
    </div>
  )
}
