import { LoadingOutlined } from "@ant-design/icons"

import { cn } from "@/utils"

export const ScheduleLinkLoading = ({ heightClass = "h-full" }: { heightClass?: string }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading..."
      data-testid="loading"
      className={cn("flex flex-col items-center justify-center overflow-auto pb-10", heightClass)}
    >
      <LoadingOutlined className="text-7xl" />
    </div>
  )
}
