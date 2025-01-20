import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

import { cn } from '@/lib/utils'
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants'

import './main.css'

const JostFont = Jost({
  variable: '--font-jost',
  subsets: ['latin', 'cyrillic'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en">
      <body className={cn(JostFont.variable, 'antialiased')}>{children}</body>
    </html>
  )
}
