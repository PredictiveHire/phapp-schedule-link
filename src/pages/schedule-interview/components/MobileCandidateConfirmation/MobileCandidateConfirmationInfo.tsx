import React from "react"

interface MobileCandidateConfirmationInfoProps {
  title: string
  description: string
}

export const MobileCandidateConfirmationInfo: React.FC<MobileCandidateConfirmationInfoProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-3 flex items-start gap-2 last:mb-0 lg:w-full">
      <div className="text-tertiary w-2/5 text-sm font-light lg:w-1/3">{title}</div>
      <div className="w-full text-sm font-semibold text-black">{description}</div>
    </div>
  )
}
