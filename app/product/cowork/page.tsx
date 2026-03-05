import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import CoworkHeroSection from '@/components/sections/product/cowork/hero'
import EnterpriseFeaturesSection from '@/components/sections/product/cowork/enterprise-features'
import TestimonialSection from '@/components/sections/product/cowork/testimonial'

export const metadata: Metadata = {
  title: 'Cowork - AI that works like a teammate',
  description:
    'Desktop application. Comprehensive automation. Multi-brand management. White-label capabilities. Built for agencies scaling 50+ brands.',
  alternates: {
    canonical: '/product/cowork',
  },
}

export default function Cowork() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <CoworkHeroSection />
      <EnterpriseFeaturesSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}