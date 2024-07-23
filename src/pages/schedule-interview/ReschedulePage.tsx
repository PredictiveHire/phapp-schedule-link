import { RescheduleInterview } from "./components/RescheduleInterview/RescheduleInterview"
import { ScheduleInterviewProvider } from "./context/ScheduleInterviewContext"

export const ReschedulePage = () => {
  return (
    <ScheduleInterviewProvider>
      <RescheduleInterview />
    </ScheduleInterviewProvider>
  )
}
