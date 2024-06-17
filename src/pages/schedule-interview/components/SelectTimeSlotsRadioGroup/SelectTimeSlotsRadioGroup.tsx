import { CheckCircleFilled } from "@ant-design/icons"
import { Radio } from "antd"

import { SelectedDateAndTime } from "@/pages/schedule-interview/type"

export interface SelectTimeSlotsRadioGroupProps {
  timeSlots: string[]
  selectedTime: string | null
  selectedDateAndTime: SelectedDateAndTime
  handleTimeSlotChange: (time: string) => void
  currentDate: string
}
export const SelectTimeSlotsRadioGroup: React.FC<SelectTimeSlotsRadioGroupProps> = ({
  timeSlots,
  selectedTime,
  selectedDateAndTime,
  handleTimeSlotChange,
  currentDate,
}) => {
  return (
    <Radio.Group
      className="w-full"
      onChange={(e) => handleTimeSlotChange(e.target.value as string)}
      value={selectedTime}
    >
      {timeSlots.map((slot: string) => (
        <Radio.Button key={slot} value={slot} className="w-full px-5 text-left text-black">
          {selectedDateAndTime.selectedTime === slot && selectedDateAndTime.selectedDate === currentDate && (
            <CheckCircleFilled className="checkCircleFilled mr-3 rounded-full bg-[#FFCEFF] text-black" />
          )}
          {slot}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}
