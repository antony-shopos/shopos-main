import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposRefineHero from '@/components/sections/refine/hero'

export const metadata: Metadata = {
  title: 'Refine - AI Gets You 90%, Humans Close the Gap',
  description:
    'Fix faces, adjust lighting, tweak copy tone. Surgical edits, not starting over. Every refinement trains your AI for next time.',
  alternates: {
    canonical: '/product/refine',
  },
}

export default function ShoposRefine() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposRefineHero />
      <Footer />
    </main>
  )
}