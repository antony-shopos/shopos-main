import Navbar from '@/components/Navbar-all'
import Footer from '@/components/Footer'
import ShoposWebHero from '@/components/sections/shopos-web/hero'
import SpacesSection from '@/components/sections/shopos-web/spaces'
import CtaSection from '@/components/sections/shopos-web/cta-section'

export default function ShoposWeb() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <ShoposWebHero />
      <SpacesSection/>
      <CtaSection />
      <Footer />
    </main>
  )
}