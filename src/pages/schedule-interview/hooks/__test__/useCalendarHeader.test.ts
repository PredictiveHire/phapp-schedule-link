import { act, renderHook } from "@testing-library/react"
import dayjs from "dayjs"

import { useCalendarHeader } from "../useCalendarHeader"

describe("useCalendarHeader", () => {
  it("should handle left outline click correctly", () => {
    const { result } = renderHook(() => useCalendarHeader())
    const onChange = jest.fn()
    const value = dayjs("2023-06-25")

    act(() => {
      result.current.handleClickLeftOutline(value, onChange)
    })

    expect(onChange).toHaveBeenCalledWith(dayjs("2023-05-25"))
  })

  it("should handle right outline click correctly", () => {
    const { result } = renderHook(() => useCalendarHeader())
    const onChange = jest.fn()
    const value = dayjs("2023-06-25")

    act(() => {
      result.current.handleClickRightOutline(value, onChange)
    })

    expect(onChange).toHaveBeenCalledWith(dayjs("2023-07-25"))
  })
})
