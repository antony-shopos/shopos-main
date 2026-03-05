"use client"

import SectionLayout from "@/components/SectionLayout"

export default function ShoposSolvesSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">

      <div className="py-20 md:py-24 px-6 md:px-12 lg:px-16">

        <div className="max-w-[760px] mx-auto">

          {/* Heading */}
          <h2
            className="text-[clamp(28px,3vw,36px)] font-medium leading-[120%] text-[#0A0A0A] mb-8"
            style={{ fontFamily: "Space Grotesk" }}
          >
            How ShopOS solves
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[#525252] text-[18px] leading-[30px] mb-6">
            We built ShopOS to be the first "AI Coworker" for commerce teams. It doesn't just generate generic images. It learns your brand guidelines. It studies your performance data. It understands your catalog.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[#525252] text-[18px] leading-[30px] mb-6">
            The result is a system that gets smarter every time you use it, turning the chaos of content production into a streamlined, intelligent engine.
          </p>


        </div>

      </div>

{/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
      
    </SectionLayout>
  )
}