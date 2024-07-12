import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

export const ScheduleLinkOnTopLoading = () => {
  return (
    <div className="absolute" role="status" aria-live="polite" aria-label="Loading...">
      <Spin fullscreen indicator={<LoadingOutlined className="!text-7xl" spin />} />
    </div>
  )
}
