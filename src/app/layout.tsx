import './globals.css'
import type { Metadata } from 'next'

// Remove this line if not using the font
// import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'ProjectHopper',
  description: 'Autonomous Van Delivery Management System',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
