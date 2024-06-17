import { ScheduleInterview } from "./components/ScheduleInterview/ScheduleInterview"
import { ScheduleInterviewProvider } from "./context/ScheduleInterviewContext"

export const ScheduleInterviewPage = () => {
  return (
    <ScheduleInterviewProvider>
      <ScheduleInterview />
    </ScheduleInterviewProvider>
  )
}
