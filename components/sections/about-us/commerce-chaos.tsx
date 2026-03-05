"use client"

import SectionLayout from "@/components/SectionLayout"

export default function CommerceChaosSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA] ">

      <div className="py-20 md:py-24 px-6 md:px-12 lg:px-16">

        <div className="max-w-[760px] mx-auto">

          {/* Heading */}
          <h2
            className="text-[clamp(28px,3vw,36px)] font-medium leading-[120%] text-[#0A0A0A] mb-8"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Commerce is creative chaos.
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[#525252] text-[18px] leading-[30px] mb-6">
            Today's brands are expected to be everywhere at once. Instagram,
            TikTok, Amazon, their own storefronts. Each channel demands fresh,
            high-quality content daily.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[#525252] text-[18px] leading-[30px] mb-6">
            Traditional workflows can't keep up. Photoshoots are expensive.
            Copywriting is slow. A/B testing is manual. Brands are drowning in
            a backlog of "to-dos."
          </p>

          {/* Paragraph 3 */}
          <p className="text-[#525252] text-[18px] leading-[30px]">
            We asked: What if your software could actually do the work? Not
            just a tool to organize files, but an intelligent agent that
            creates them.
          </p>

        </div>

      </div>

{/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
      
    </SectionLayout>
  )
}