import { createBrowserRouter } from "react-router-dom"

import { RBErrorBoundary } from "@/components/RBErrorBoundary"

export const router = createBrowserRouter([
  {
    path: "/:shortcode",
    index: true,
    errorElement: <RBErrorBoundary />,
    element: <div>shortcode</div>,
  },
])
