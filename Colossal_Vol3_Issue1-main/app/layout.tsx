import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Colossal',
  description: 'The Official Newsletter for CINTEL department in SRM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"max-w-[100vw] min-h-[100vh] overflow-x-auto overflow-y-auto"+inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
