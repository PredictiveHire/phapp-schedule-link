import { CalendarOutlined } from "@ant-design/icons"
import { PHIcon } from "@ph/ui"
import { Grid } from "antd"
import React from "react"

import { CandidateConfirmationInfo } from "@/pages/schedule-interview/components/CandidateConfirmation/CandidateConfirmationInfo"
import { LIInterviewMode, LIInterviewModeLabel } from "@/pages/schedule-interview/constants"
import { useScheduleInterview } from "@/pages/schedule-interview/hooks/useScheduleInterview"
import { formatDateToLongString, formatDateToTimeString } from "@/utils/dateTime"

const { useBreakpoint } = Grid

export const CandidateConfirmation = () => {
  const { interviewInfo } = useScheduleInterview()
  const {
    jobRequisitionName,
    interviewMode,
    interviewAddress = "",
    timezone = "",
    interviewStartsAt = "",
    interviewEndsAt = "",
    interviewLink = "",
  } = interviewInfo
  const interviewDate = formatDateToLongString(new Date(interviewStartsAt), timezone)
  const interviewStartDateTime = formatDateToTimeString(interviewStartsAt, timezone)
  const interviewEndDateTime = formatDateToTimeString(interviewEndsAt, timezone)

  const breakpoint = useBreakpoint()
  let iconSize = 140 // icon size for mobile
  if (breakpoint.lg) {
    iconSize = 191 // icon size for desktop
  }

  return (
    <div
      className="h-screen overflow-y-auto bg-gray-100 p-5 lg:flex lg:items-center lg:justify-center"
      data-testid="candidate-confirmation"
    >
      <article className="mx-auto flex h-auto w-full max-w-sm flex-col gap-6 rounded-[20px] bg-white p-5 shadow-card *:w-full lg:w-confirmation-container-desktop lg:max-w-none lg:p-10">
        <PHIcon size={iconSize} name="interviewConfirmation" />
        <header className="text-center">
          <h2 className="mb-0 text-lg font-semibold text-black">We look forward to seeing you on </h2>
          <h2 className="mb-0 text-lg font-semibold text-black">
            <time dateTime={interviewStartsAt}>{`${interviewDate} ${interviewStartDateTime}`}</time>-{" "}
            <time dateTime={interviewEndsAt}>{interviewEndDateTime}</time>!
          </h2>
        </header>
        <p className="text-secondary mb-0 text-center text-base font-light">
          Please check your email for more details.
        </p>
        <div className="border-t border-gray-200"></div>
        <div className="text-lg font-semibold text-black">
          <h2 className="mb-6 text-lg font-semibold text-black">{jobRequisitionName}</h2>
          <CandidateConfirmationInfo title="Interview Type" description={LIInterviewModeLabel[interviewMode]} />
          {interviewMode === LIInterviewMode.IN_PERSON && interviewAddress && (
            <CandidateConfirmationInfo title="Location" description={interviewAddress} />
          )}
          {interviewMode === LIInterviewMode.ONLINE && (
            <CandidateConfirmationInfo title="Link" description={interviewLink} />
          )}
          <CandidateConfirmationInfo title="Timezone" description={timezone} />
        </div>
        <button
          className="flex h-[49px] w-full items-center justify-center rounded-full bg-black"
          onClick={() => {
            window.open(
              "https://local-ph-li-upload-attachments-spike.s3.ap-southeast-2.amazonaws.com/interview-latest.ics?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgbVntaQYAp2iNJcn91aMJ%2BcRtPazeHSM6CgG0cSffKbsCICVnaEPIytT9gEeFxUNrujm0e5wTiH8fU%2FSWRoUjIRM8KpIDCJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMMTc0NjIzMzI0ODQ4IgxM80EVq4VYh%2FOASCMq5gJ%2B9BSUiEB6FKQjzqIi3TNUdsOJwObQy9FKsMsDSJDsih%2B4Qy9lX%2BqqznN0SI4DFRaS6J%2FaL0bBwk1jXfO6EZPzH2pfOGFGCJ3I4IjrIU3%2Bcws8wQCx8IMs3ML7uXE81kE79%2FLTjoJFaNI5XQIlNFEuH8owE5YVfjpuetycRAw3IssuJeJ2YwX9skXcmYFoP2suYmv9fv%2BPIZY8NRORUFOVxV4FmQ5QW7%2BqRva4n8NtTn4GJta70iL9GOOt%2BGAO%2BQ99MzwWnhh6Gw93MdbjnI7PuBclJCIemnBQ8XfVMMmDQt5g4DhbFBGdnmLercCouI0zI97t6R1j%2FEJzIg0ah3DQTRzLzc64Z8390bKIoSR2yZ9THna9j6oWSvEhjP40AB1E2BiUWp5oCBdmlr15nWsoskUL23KQSQRPRv6mflmiG3xl8hTaGEJ6w6iueM8GtAazIkRvhJ5chEB9SMS3vNCm%2BslWnCOEMIHPl7QGOrQCLueXz3rg4Jy9hEi%2BEM4O9Pi%2FzO0%2FP4X9iJm%2F9TC%2FS3tCfTlDCA2BranyEscRV8QpWGld%2BdUMP20MQqG03vQrOq3uoMIHd5AzLkAawWo1L1USHzmp9wm3oa%2BSrmRJ%2BSlvkfDD8UHPqE5sWKP0EtsrF0dEo%2BrEeydcFPliyu0eK1bjaZ0uKbTdD46QT3wiU0Wsf7kjOVfnkTBdEACkr9o8iEsm%2FGHNeOUaBajDwjz8B1BK7PLTyVtGdVGAI46Od%2B4LH%2BfwFwBP6KNdjvde8Nq8OPRnI73YuoA%2BiR%2BKAHX0V8zMGfEnKXhIp0y%2FVZOKwdZvH%2F7K29D2ddKMti1ygWsxuLWVjyzzXyNo7uR%2BNScdK4bLQqSouW5auHBXQoUzAylx9jT0vEp5%2BlYgiHp2Rr1TsyUAtKY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240704T020933Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIASRKC4PKYIK5TKAMB%2F20240704%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=6a582ea2254b3419e9ec8cb6716b57d2fa129cea970c28e709d3209eb3c93f2c"
            )
          }}
        >
          <CalendarOutlined className="mr-2 text-2xl !text-white" />
          <span className="text-white">Add to calendar</span>
        </button>
      </article>
    </div>
  )
}
