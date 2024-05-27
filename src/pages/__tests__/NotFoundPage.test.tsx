import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import NotFoundPage from "../NotFoundPage"

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  )
}

describe("NotFoundPage", () => {
  it("should show 404 title and notfound icon", () => {
    renderWithRouter()
    const pageTitle = screen.getByText("404 Not Found")
    const notFoundIcon = screen.getByRole("img", { name: "notFound" })
    expect(pageTitle).toBeInTheDocument()
    expect(notFoundIcon).toBeInTheDocument()
  })
})
