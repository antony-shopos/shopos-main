import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Newsreader } from 'next/font/google'
import PageTransition from '@/components/PageTransition'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shopos.ai'),
  title: {
    default: 'ShopOS – AI for modern commerce teams',
    template: '%s | ShopOS',
  },
  description:
    'ShopOS gives brands AI teammates to create content, manage assets and improve performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${newsreader.variable}`}
    >
      <body className="font-sans bg-bg text-text">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}