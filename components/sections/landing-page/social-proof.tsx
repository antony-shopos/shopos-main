'use client'

import SectionLayout from '@/components/SectionLayout'

const logos = [
  '/images/client-logos/celio.png',
  '/images/client-logos/myntra.png',
  '/images/client-logos/hamleys.png',
  '/images/client-logos/ajio.png',
  '/images/client-logos/another.png',
]

export default function SocialProof() {
  return (
    <SectionLayout
      className="bg-[#FAFAFA] relative overflow-hidden"
      borderClass="border-[#D4D4D4]"
    >
      <section className="px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto py-12 sm:py-16">

          {/* Heading */}
          <p className="text-center text-[14px] sm:text-[16px] text-[#6B6B6B] mb-10">
            Loved by teams who ship every week
          </p>

          {/* Ticker Wrapper */}
          <div className="relative overflow-hidden">

            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

            {/* Moving Track */}
            <div className="flex w-max animate-scroll gap-20">

              {/* Duplicate twice for seamless loop */}
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="brand logo"
                  className="h-8 sm:h-10 md:h-12 opacity-60 grayscale"
                />
              ))}

            </div>
          </div>

        </div>
      </section>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}