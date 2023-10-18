import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Providers } from '../../Provider'
import NavBar from './components/navbar'
import Footer from './components/footer'

const roboto = Roboto({subsets:['cyrillic'], weight: ['100', '300', '400'] })

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
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
