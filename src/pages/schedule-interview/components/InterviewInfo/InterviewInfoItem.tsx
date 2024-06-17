import React from "react"

interface InterviewInfoItemProps {
  title: string
  description: string
}

export const InterviewInfoItem: React.FC<InterviewInfoItemProps> = ({ title, description }) => {
  return (
    <article>
      <div className="text-tertiary mt-3 text-sm font-light">{title}</div>
      <div className="mt-2 text-sm font-semibold text-black">{description}</div>
    </article>
  )
}
