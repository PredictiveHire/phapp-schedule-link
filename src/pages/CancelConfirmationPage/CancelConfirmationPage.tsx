import { PHIcon } from "@ph/ui"
import React from "react"

export const CancelConfirmationPage = () => {
  return (
    <div
      className="flex h-full w-full bg-layout p-6 lg:items-center lg:justify-center"
      aria-label="Something went wrong on this page"
    >
      <article className="h-fit w-full flex-col rounded-2xl bg-white p-5 text-center text-lg font-bold shadow-card sm:p-10 lg:w-confirmation-container-desktop">
        <PHIcon className="mb-6" size={60} name="tickCircleFilledGreen" />
        <p className="m-0">Your interview was successfully cancelled</p>
      </article>
    </div>
  )
}
