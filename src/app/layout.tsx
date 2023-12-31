import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/redux/provider'

export const metadata: Metadata = {
  title: 'FOODS',
  icons: {
    icon: '/FOOD.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/FOOD.ico" />
      </head>
      <body>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
