'use client'

import SectionLayout from '@/components/SectionLayout'
import Image from 'next/image'

export default function EnterpriseFeaturesSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">
      <div className="py-24 px-6 md:px-12 lg:px-16 space-y-28">
        {/* ROW 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto">
          {/* TEXT */}
          <div>
            <span className="px-3 py-1 text-[12px] rounded-full border border-[#E5E5E5] text-[#525252] bg-white font-medium">
              ENTERPRISE
            </span>

            <h2
              className="mt-4 text-[32px] leading-[40px] font-medium text-[#0A0A0A]"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              Managing 50 brands manually?
            </h2>

            <p className="mt-4 text-[#525252] text-[18px] leading-[28px]">
              One dashboard. Switch between clients instantly. Shared asset libraries. Cross-brand
              learning. What works for Brand A informs Brand B.
            </p>

            <ul className="mt-6 space-y-4 text-[16px] text-[#525252]">
              <li>Leverage automation to move fast</li>
              <li>Always give customers a human to chat to</li>
              <li>Automate customer support and close leads faster</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src="/images/product/cowork/feature-1.png"
              alt="Dashboard preview"
              width={900}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto">
          {/* IMAGE */}
          <div className="rounded-[20px] overflow-hidden order-2 md:order-1">
            <Image
              src="/images/product/cowork/feature-2.png"
              alt="White label preview"
              width={900}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <span className="px-3 py-1 text-[12px] rounded-full border border-[#E5E5E5] text-[#525252] bg-white font-medium">
              ENTERPRISE
            </span>

            <h2
              className="mt-4 text-[32px] leading-[40px] font-medium text-[#0A0A0A]"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              Need to deliver under your agency’s brand?
            </h2>

            <p className="mt-4 text-[#525252] text-[18px] leading-[28px]">
              Remove ShopOS branding completely. Custom domains. Your logo. Your color scheme.
              Clients never know you're using AI infrastructure.
            </p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-[15px] font-medium hover:opacity-90 transition">
              Contact Sales →
            </button>
          </div>
        </div>
      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}
