import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
