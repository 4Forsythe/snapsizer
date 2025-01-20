import React from 'react'

import { cn } from '@/lib/utils'

interface Props extends React.PropsWithChildren {
  className?: string
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={cn('max-w-[1240px] mx-auto', className)}>{children}</div>
}
