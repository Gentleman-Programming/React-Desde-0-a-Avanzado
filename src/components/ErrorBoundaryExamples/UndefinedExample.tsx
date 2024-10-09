import { useState } from "react"

export const UndefinedExample = () => {
  const [obj] = useState<{ prop?: string }>({})

  return <div>{obj.prop!.length}</div>
}

