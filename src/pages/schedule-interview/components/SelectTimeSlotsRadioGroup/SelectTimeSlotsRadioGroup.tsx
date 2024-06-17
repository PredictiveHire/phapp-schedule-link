import { CheckCircleFilled } from "@ant-design/icons"
import { Radio } from "antd"

import { TimeSlot } from "@/pages/schedule-interview/type"

export interface SelectTimeSlotsRadioGroupProps {
  timeSlots: TimeSlot[]
  selectedTimeSlotId: string | null
  handleTimeSlotChange: (timeslotId: string) => void
}
export const SelectTimeSlotsRadioGroup: React.FC<SelectTimeSlotsRadioGroupProps> = ({
  timeSlots,
  selectedTimeSlotId,
  handleTimeSlotChange,
}) => {
  return (
    <Radio.Group
      className="w-full"
      onChange={(e) => handleTimeSlotChange(e.target.value as string)}
      value={selectedTimeSlotId}
    >
      {timeSlots.map((timeSlot: TimeSlot) => {
        const { timeslotId, slot } = timeSlot
        return (
          <Radio.Button key={timeslotId} value={timeslotId} className="w-full px-5 text-left text-black">
            {selectedTimeSlotId === timeslotId && (
              <CheckCircleFilled className="checkCircleFilled mr-3 rounded-full bg-[#FFCEFF] text-black" />
            )}
            {slot}
          </Radio.Button>
        )
      })}
    </Radio.Group>
  )
}
