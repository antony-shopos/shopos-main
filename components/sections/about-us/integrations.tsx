'use client'

import SectionLayout from '@/components/SectionLayout'
import Image from 'next/image'

export default function IntegrationsSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">
      <div className="py-24 px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-[clamp(28px,4vw,36px)] font-medium text-[#0A0A0A]"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Built to work directly within your commerce stack
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          <IntegrationCard src="/images/about-us/google-ads.png" alt="Google Ads" />
          <IntegrationCard src="/images/about-us/ga4.png" alt="Google Analytics" />
          <IntegrationCard src="/images/about-us/meta.png" alt="Meta" />
          <IntegrationCard src="/images/about-us/shopify.png" alt="Shopify" />

          <IntegrationCard src="/images/about-us/walmart.png" alt="Walmart" />
          <IntegrationCard src="/images/about-us/target.png" alt="Target" />
          <IntegrationCard src="/images/about-us/ebay.png" alt="Ebay" />
          <IntegrationCard src="/images/about-us/wayfair.png" alt="Wayfair" />

          <IntegrationCard src="/images/about-us/houzz.png" alt="Houzz" />
          <IntegrationCard src="/images/about-us/noon.png" alt="Noon" />
          <IntegrationCard src="/images/about-us/flipkart.png" alt="Flipkart" />
          <IntegrationCard src="/images/about-us/lazada.png" alt="Lazada" />
        </div>
      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}

function IntegrationCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-[#FFFFFF] rounded-[18px] h-[90px] flex items-center justify-center">
      <Image src={src} alt={alt} width={140} height={40} className="object-contain" />
    </div>
  )
}
