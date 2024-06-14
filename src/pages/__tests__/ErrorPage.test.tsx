import { render } from "@testing-library/react"
import React from "react"

import ErrorPage from "../ErrorPage"

jest.mock("@ph/ui", () => ({
  PHIcon: ({ size, name }: { size: number; name: string }) => (
    <div data-testid="ph-icon" data-size={size} data-name={name}></div>
  ),
}))

jest.mock("antd", () => ({
  Result: ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div data-testid="result">
      {icon}
      <div>{title}</div>
    </div>
  ),
}))

describe("ErrorPage", () => {
  it("should renders with default height class", () => {
    const { getByLabelText, getByText, getByTestId } = render(<ErrorPage />)
    const container = getByLabelText("Something went wrong on this page")
    expect(container).toHaveClass("flex items-center justify-center h-full")
    expect(getByTestId("ph-icon")).toHaveAttribute("data-size", "200")
    expect(getByTestId("ph-icon")).toHaveAttribute("data-name", "somethingWentWrong")
    expect(getByText("Sorry, something went wrong")).toBeInTheDocument()
  })

  it("should renders with custom height class", () => {
    const { getByLabelText } = render(<ErrorPage heightClass="h-screen" />)
    const container = getByLabelText("Something went wrong on this page")
    expect(container).toHaveClass("flex items-center justify-center h-screen")
  })
})
