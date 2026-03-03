"use client"

import SectionLayout from "@/components/SectionLayout"
import Image from "next/image"

export default function OnePlatformSection() {
  return (
    <SectionLayout className="bg-[#FFFFFF]">
      <div className="relative py-20 md:py-24 px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <h2
            className="text-[clamp(30px,4vw,44px)] font-medium leading-[120%] text-[#0A0A0A] mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            One platform. Every workflow.
          </h2>

          <p
            className="text-[#525252] text-[17px] leading-[28px]"
            style={{ fontFamily: "Inter" }}
          >
            ShopOS combines content creation, asset management, and performance learning.
          </p>
        </div>

        {/* Preview Container */}
        <div className="mb-8 relative">
          <div className="
            relative
            bg-white
            rounded-[22px]
            border border-black/[0.06]
            p-3
            shadow-[0_1px_0_rgba(0,0,0,0.04)]
            overflow-hidden
          ">
            <Image
              src="/images/lp/oneplatform.png"
              alt="Platform Preview"
              width={1400}
              height={800}
              className="w-full h-auto"
            />

            {/* Bottom Gradient Fade */}
            <div className="
              pointer-events-none
              absolute bottom-0 left-0 right-0
              h-24
              bg-gradient-to-t
              from-[#FAFAFA]
              to-transparent
            " />
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Step Card */}
          {[
            {
              number: "1",
              title: "Connect or upload",
              desc: "Sync your Shopify store, drop a folder of product images, or paste a competitor URL. ShopOS works with whatever you have."
            },
            {
              number: "2",
              title: "Describe the outcome",
              desc: `"Generate lifestyle photos for my new collection." "Write descriptions for these 50 SKUs." Natural language, no templates.`
            },
            {
              number: "3",
              title: "Review and ship",
              desc: "ShopOS handles the work. Review outputs, make quick edits if needed, export to any platform. Every interaction makes it smarter."
            }
          ].map((step) => (
            <div
              key={step.number}
              className="
                bg-white
                rounded-3xl
                border border-black/[0.06]
                p-6
              "
            >
              {/* Number Badge */}
              <div className="
                w-12 h-12
                rounded-xl
                bg-[#FFFFFF]
                border border-black/[0.08]
                flex items-center justify-center
                text-[16px]
                font-medium
                text-[#6B7280]
                mb-6
              ">
                {step.number}
              </div>

              <h3 className="text-[18px] font-semibold text-[#0A0A0A] mb-3">
                {step.title}
              </h3>

              <p className="text-[#525252] text-[15px] leading-[24px]">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}