import { createBrowserRouter, Outlet } from "react-router-dom"

import { RBErrorBoundary } from "@/components/RBErrorBoundary"
import { CancelConfirmationPage } from "@/pages/CancelConfirmationPage"
import { InvalidLinkPage } from "@/pages/InvalidLinkPage"
import { ScheduleInterviewPage } from "@/pages/schedule-interview/ScheduleInterviewPage"

export const router = createBrowserRouter([
  {
    path: "/:awsRegion/:shortcode",
    errorElement: <RBErrorBoundary />,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ScheduleInterviewPage />,
      },
      {
        path: "cancel-confirmation",
        element: <CancelConfirmationPage />,
      },
    ],
  },

  {
    path: "*",
    element: <InvalidLinkPage />,
  },
])
