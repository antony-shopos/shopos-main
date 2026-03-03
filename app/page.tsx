import type { Metadata } from 'next'
import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import LandingHero from '@/components/sections/landing-page/hero'
import TryShopOS from '@/components/sections/landing-page/try-shopos'
import SocialProof from '@/components/sections/landing-page/social-proof'
import SpacesSection from '@/components/sections/landing-page/spaces'
import FAQ from '@/components/sections/landing-page/faq'
import RunYourStore from '@/components/sections/landing-page/runyourstore'
import OnePlatformSection from '@/components/sections/landing-page/oneplatform'
import BuildingSection from '@/components/sections/landing-page/building'
import MakeSection from '@/components/sections/landing-page/make-section'
import TestimonialSection from '@/components/sections/landing-page/testimonial'
import CtaSection from '@/components/sections/landing-page/cta-section'

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
      <RunYourStore />
      <OnePlatformSection />
      <SpacesSection />
      <BuildingSection />
      <MakeSection />
      <TestimonialSection />
      <FAQ />
      <CtaSection />
      <Footer />
    </main>
  )
}