import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Providers } from '../../Provider'

const roboto = Roboto({ weight: ['100', '300', '400'] })

export const metadata: Metadata = {
  title: 'mimo downloader',
  description: 'Download MP3 of your favourite vidoes from Youtube and Tiktok',
  keywords: ['Download', 'youtube', 'tiktok', 'music downloader', 'vidoe downloader']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
