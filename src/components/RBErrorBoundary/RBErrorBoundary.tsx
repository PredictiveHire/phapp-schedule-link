import { ErrorBoundary } from "@rollbar/react"
import React from "react"

import ErrorPage from "@/pages/ErrorPage"

interface RBErrorBoundaryProps {
  children?: React.ReactNode
}

export const RBErrorBoundary: React.FC<RBErrorBoundaryProps> = ({ children }) => {
  return <ErrorBoundary fallbackUI={() => <ErrorPage />}>{children}</ErrorBoundary>
}
