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
    <div className="mb-3 flex items-center">
      <div className="text-tertiary w-[100px] text-sm font-light">{title}</div>
      <div className="ml-2 text-sm font-semibold text-black">{description}</div>
    </div>
  )
}
