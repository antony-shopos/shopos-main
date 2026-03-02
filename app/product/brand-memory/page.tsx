import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposBrandMemoryHero from '@/components/sections/brand-memory/hero'
import BrandMemoryStore from '@/components/sections/brand-memory/brand-memory-store'

export const metadata: Metadata = {
  title: 'Brand Memory - Your Brand DNA Inside ShopOS',
  description:
    'Colors, fonts, models, scenes, voice, guidelines - stored once, applied to every generation. No re-briefing. No style drift.',
  alternates: {
    canonical: '/product/brand-memory',
  },
}

export default function ShoposBrandMemory() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposBrandMemoryHero />
      <BrandMemoryStore />
      <Footer />
    </main>
  )
}