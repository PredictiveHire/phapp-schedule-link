import { PHIcon } from "@ph/ui"
import { Result } from "antd"

import { cn } from "@/utils"

type ErrorPageProps = {
  heightClass?: string
}

export default function ErrorPage({ heightClass = "h-full" }: ErrorPageProps) {
  return (
    <div className={cn("flex items-center justify-center", heightClass)} aria-label="Something went wrong on this page">
      <Result icon={<PHIcon size={200} name="somethingWentWrong" />} title="Sorry, something went wrong" />
    </div>
  )
}
