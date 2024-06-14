import { render, screen } from "@testing-library/react"
import React from "react"

import { RBErrorBoundary } from "../RBErrorBoundary"

// Mock the ErrorBoundary from @rollbar/react
jest.mock("@rollbar/react", () => ({
  ErrorBoundary: ({ fallbackUI, children }: { fallbackUI: () => React.ReactNode; children: React.ReactNode }) => (
    <div>
      {children}
      <div>{fallbackUI()}</div>
    </div>
  ),
}))

// Mock the ErrorPage component
jest.mock("@/pages/ErrorPage", () => () => <div>Error Page</div>)

describe("RBErrorBoundary", () => {
  it("should renders children correctly", () => {
    render(
      <RBErrorBoundary>
        <div>Child Component</div>
      </RBErrorBoundary>
    )
    expect(screen.getByText("Child Component")).toBeInTheDocument()
  })
})
