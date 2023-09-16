import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Browser Music Viewer',
  description: ' ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="assets/js/input-knobs.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
