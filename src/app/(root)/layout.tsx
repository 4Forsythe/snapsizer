import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Image Compression and Optimization',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen flex flex-col">{children}</div>
}
