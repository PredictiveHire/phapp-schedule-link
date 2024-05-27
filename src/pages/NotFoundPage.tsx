import { PHIcon } from "@ph/ui"
import { Result } from "antd"

import { cn } from "@/utils"

type NotFoundPageProps = {
  heightClass?: string
}

export default function NotFoundPage({ heightClass = "" }: NotFoundPageProps) {
  return (
    <div className={cn("pt-10", heightClass)}>
      <Result
        icon={<PHIcon size={200} name="notFound" />}
        title="404 Not Found"
        subTitle="Sorry, we can't find what you're looking for"
      />
    </div>
  )
}
