import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposLoopsHero from '@/components/sections/loops/hero'

export const metadata: Metadata = {
  title: 'Loops - Autonomous AI Agents That Test Your Content 24/7',
  description:
    'Generate creative variants, push to Meta and Google, measure performance, learn, iterate. Autonomous. Continuous. 500 variants per week.',
  alternates: {
    canonical: '/product/loops',
  },
}

export default function ShoposLoops() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposLoopsHero />
      <Footer />
    </main>
  )
}