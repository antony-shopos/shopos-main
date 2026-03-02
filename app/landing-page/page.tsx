import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import LandingHero from '@/components/sections/landing-page/hero'
import TryShopOS from '@/components/sections/landing-page/try-shopos'
import SocialProof from '@/components/sections/landing-page/social-proof'
import SpacesSection from '@/components/sections/landing-page/spaces'
import FAQ from '@/components/sections/landing-page/faq'

export const metadata: Metadata = {
  title: 'ShopOS: AI Coworkers for Brands & eCommerce',
  description:
    'AI coworkers that create product content, manage assets, and learn what sells. Product photos, videos, catalog copy, ad creatives. 500+ brands.',
  alternates: {
    canonical: '/',
  },
}

export default function ShoposLandingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <LandingHero />
      <TryShopOS />
      <SocialProof />
      <SpacesSection />
      <FAQ />
      <Footer />
    </main>
  )
}