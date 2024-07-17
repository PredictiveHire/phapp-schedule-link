import { render, screen } from "@testing-library/react"

import { CancelConfirmationPage } from "../CancelConfirmationPage"

describe("@/pages/CancelConfirmationPage", () => {
  it("should render the invalid link page correctly", () => {
    render(<CancelConfirmationPage />)

    expect(screen.getByRole("article")).toBeInTheDocument()
    expect(screen.getByRole("article")).toHaveTextContent("Your interview was successfully cancelled")
  })
})
