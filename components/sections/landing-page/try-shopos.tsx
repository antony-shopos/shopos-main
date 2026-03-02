'use client'

import { ArrowRight } from 'lucide-react'
import SectionLayout from '@/components/SectionLayout'

export default function TryShopOS() {
  return (
    <SectionLayout
      className="relative bg-[#F1F1F1] overflow-hidden"
      borderClass="border-[#DFDFDF]"
    >
      {/* Top Curve SVG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] sm:w-[646px] max-w-[90%] pointer-events-none z-0">
        <svg
          viewBox="0 0 646.389 73.03"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 646.389 0 C 646.389 0 613.916 0.291 598.889 17.5 C 583.862 34.709 582.889 38 582.889 38 L 570.889 54 C 570.889 54 554.983 73 524.889 73 C 494.795 73 321.889 73 321.889 73 L 111.889 73 C 111.889 73 91.007 74.841 68.889 49.5 C 46.771 24.159 40.889 17.5 40.889 17.5 C 40.889 17.5 29.557 0 0.889 0 C -27.779 0 646.389 0 646.389 0 Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>

      <section className="relative z-10 px-4 sm:px-6">
        <div className="w-full max-w-[905px] mx-auto py-16 sm:py-20 md:py-24 flex flex-col items-center gap-8 sm:gap-10">

          {/* Screenshot Card */}
          <div className="relative w-full bg-[#F1F1F1] border border-[#E5E5E5] rounded-[20px] p-2 sm:p-3">

            {/* Aspect Ratio Locked */}
            <div className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden bg-neutral-200">
              <img
                src="/images/try-shopos/try-shopos.png"
                alt="ShopOS dashboard preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[110px] bg-gradient-to-b from-transparent to-[#F2F2F2] rounded-b-[20px]" />
          </div>

          {/* Text Content */}
          <div className="max-w-[857px] text-center flex flex-col items-center gap-6 sm:gap-8 px-2 sm:px-6">

            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#525252]">
              Your creative team, always on 100+ AI workflows built for commerce.
              Product photos. Ad creatives. Catalog copy. Video clips. Social content.
              Your AI teammates handle production. You handle strategy.
              They remember your brand guidelines. They learn from performance data.
              They get better every time you use them.
            </p>

            <button
              type="button"
              className="
                h-[36px]
                px-4
                flex items-center justify-center gap-2
                bg-[#171717]
                rounded-[20px]
                text-white
                text-[14px]
                font-medium
                leading-[20px]
                transition-colors
                hover:bg-black
              "
            >
              Try ShopOS
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>

          </div>

        </div>
      </section>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}