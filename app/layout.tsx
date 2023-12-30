/*
 * @Date: 2023-12-28 14:51:02
 * @Author: Bruce Hsu
 * @Description: 
 */
import type { Metadata } from 'next'

import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: 'Disney+ clone',
  description: 'For Educational purposes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-[#1A1C29]'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
