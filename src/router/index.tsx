import { createBrowserRouter } from "react-router-dom"

import { RBErrorBoundary } from "@/components/RBErrorBoundary"
import { ScheduleInterviewPage } from "@/pages/schedule-interview/ScheduleInterviewPage"

export const router = createBrowserRouter([
  {
    path: "/:shortcode",
    index: true,
    errorElement: <RBErrorBoundary />,
    element: <ScheduleInterviewPage />,
  },
])
