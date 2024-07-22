import { Button, Modal } from "antd"
import React from "react"

import styles from "./CancelCandidateInterviewModal.module.css"

interface CancelCandidateInterviewModalProps {
  isOpen: boolean
  isCancelCandidateInterviewLoading: boolean
  onCancelDialog: () => void
  onCancelCandidateInterview: () => void
  jobRequisitionName: string
  interviewDate: string
  interviewStartDateTime: string
  interviewEndDateTime: string
}

export const CancelCandidateInterviewModal: React.FC<CancelCandidateInterviewModalProps> = ({
  isOpen,
  isCancelCandidateInterviewLoading,
  onCancelDialog,
  onCancelCandidateInterview,
  jobRequisitionName,
  interviewDate,
  interviewStartDateTime,
  interviewEndDateTime,
}) => {
  return (
    <Modal
      className={styles.cancelCandidateInterviewModal}
      width={560}
      centered
      open={isOpen}
      footer={null}
      closable={false}
    >
      <div className="p-5 text-center">
        <section className="font-semibold text-black">
          <h2 className="mb-8 text-xl">Are you sure you want to cancel this interview?</h2>
          <p className="mb-3 text-lg">{jobRequisitionName}</p>
          <p className="mb-7 text-lg">{`${interviewDate} ${interviewStartDateTime} - ${interviewEndDateTime}`}</p>
        </section>
        <div className="border-t border-gray-200"></div>
        <p className="my-5 text-text-tertiary">Cancelling this interview with let the hiring team know.</p>
        <div className="space-y-2 text-base">
          <Button
            loading={isCancelCandidateInterviewLoading}
            onClick={onCancelCandidateInterview}
            className="!h-button !text-base"
            danger
            block
            shape="round"
          >
            Cancel Interview
          </Button>
          <Button onClick={onCancelDialog} className="!h-button !text-base !text-black" block shape="round">
            No, don't cancel
          </Button>
        </div>
      </div>
    </Modal>
  )
}
