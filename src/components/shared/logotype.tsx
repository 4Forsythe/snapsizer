import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { SquareChevronRight } from 'lucide-react'

interface Props {
  className?: string
}

export const Logotype: React.FC<Props> = ({ className }) => {
  return (
    <Link className={cn('w-fit select-none uppercase', className)} href="/">
      <span className="text-xs font-normal italic flex items-center justify-center">
        <SquareChevronRight size={14} className="mr-0.5" /> Open Source
      </span>

      <span className="text-2xl font-semibold block">Snapsizer</span>
    </Link>
  )
}
