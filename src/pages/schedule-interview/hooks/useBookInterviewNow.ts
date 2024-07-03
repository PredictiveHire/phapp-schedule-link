import { useBookCandidateInterview } from "./useBookCandidateInterview"

export interface BookCandidateInterviewInput {
  timeslotId: string
  shortcode: string
  candidateTimezone: string
}

export const useBookInterviewNow = () => {
  const { bookCandidateInterview, isBookCandidateInterviewLoading } = useBookCandidateInterview()
  const handleBookInterviewNow = async (options: BookCandidateInterviewInput) => {
    const { timeslotId = "", shortcode = "", candidateTimezone = "" } = options
    await bookCandidateInterview({
      variables: {
        input: {
          timeslotId,
          shortcode,
          candidateTimezone,
        },
      },
    })
  }

  return {
    handleBookInterviewNow,
    isBookCandidateInterviewLoading,
  }
}
