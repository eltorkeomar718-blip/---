import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'بيع اكسسوارت حريمي وساعات وميداليات',
  description: 'متجر لبيع اكسسوارت حريمي وساعات وميداليات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
