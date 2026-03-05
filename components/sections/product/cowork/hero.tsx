'use client'

import SectionLayout from '@/components/SectionLayout'

export default function CoworkHeroSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">
      <div className="py-20 md:py-24 px-6 md:px-12 lg:px-16">
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 text-[12px] rounded-full bg-[#FFFFFF] border border-[#E5E5E5] text-[#262626] font-display font-medium tracking-wide">
            SHOPOS COWORK
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-[800px] mx-auto">
          <h1
            className="text-[clamp(32px,4vw,40px)] font-medium text-[#0A0A0A] leading-[120%] mb-2"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            AI that works like a teammate
          </h1>

          <p className="text-[#525252] text-[18px] leading-[28px]">
            Desktop application. Comprehensive automation. Multi-brand management. White-label
            capabilities. Built for agencies scaling 50+ brands.
          </p>
        </div>

        {/* Video container */}
        <div className="mt-12 max-w-[1100px] mx-auto border border-[#E5E5E5] rounded-[20px] p-3">
          {/* Inner video wrapper */}
          <div className="overflow-hidden rounded-[12px]">
            <video autoPlay muted loop playsInline className="w-full h-auto object-cover">
              <source src="/videos/Cowork D3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}
