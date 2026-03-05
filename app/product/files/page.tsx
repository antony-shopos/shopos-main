import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposFilesHero from '@/components/sections/product/files/hero'

export const metadata: Metadata = {
  title: 'Files - Smart Asset Management for Commerce',
  description:
    'Auto-organized by SKU, campaign, channel. Quality scoring. Performance tracking. Search "blue lifestyle shots that converted" and get an answer.',
  alternates: {
    canonical: '/product/files',
  },
}

export default function ShoposFiles() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposFilesHero />
      <Footer />
    </main>
  )
}