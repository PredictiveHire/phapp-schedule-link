import { render, screen } from "@testing-library/react"

import { InvalidLinkPage } from "@/pages/InvalidLinkPage"

describe("@/pages/InvalidLinkPage", () => {
  it("should render the invalid link page correctly", () => {
    render(<InvalidLinkPage />)

    expect(screen.getByRole("article")).toBeInTheDocument()
    expect(screen.getByRole("article")).toHaveTextContent("Sorry, this link is invalid. Please contact your recruiter.")
  })
})
