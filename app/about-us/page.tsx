import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import AboutHeroSection from '@/components/sections/about-us/hero'
import CommerceChaosSection from '@/components/sections/about-us/commerce-chaos'
import ShoposSolvesSection from '@/components/sections/about-us/shopos-solves'
import TransformationNumbersSection from '@/components/sections/about-us/transformation-number'
import BuiltToLastSection from '@/components/sections/about-us/built-to-last'
import TeamSection from '@/components/sections/about-us/teams'
import IntegrationsSection from '@/components/sections/about-us/integrations'
import CtaSection from '@/components/sections/about-us/cta-section'

export const metadata: Metadata = {
  title: 'About Us - Smart Asset Management for Commerce',
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
      <AboutHeroSection />
      <CommerceChaosSection />
      <ShoposSolvesSection />
      <TeamSection />
      <TransformationNumbersSection />
      <BuiltToLastSection />
      <IntegrationsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}