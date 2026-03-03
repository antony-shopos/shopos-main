"use client"

import SectionLayout from "@/components/SectionLayout"
import Image from "next/image"

export default function TestimonialSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">
      <div className="py-20 md:py-24 px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-[clamp(30px,4vw,44px)] font-medium leading-[120%] text-[#0A0A0A] mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Don’t just take our words for it
          </h2>

          <p
            className="text-[#525252] text-[17px] leading-[28px]"
            style={{ fontFamily: "Inter" }}
          >
            Listen to what brands working with ShopOS say about us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-[900px] mx-auto">
          <div
            className="
              bg-white
              rounded-[22px]
              border border-black/[0.06]
              px-8 md:px-16
              py-16 md:py-20
              text-center
            "
          >
            {/* Avatars */}
            <div className="flex justify-center -space-x-4 mb-10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/images/lp/avatar1.png"
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white z-10">
                <Image
                  src="/images/lp/avatar2.png"
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/images/lp/avatar3.png"
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <p className="text-[#525252] text-[18px] leading-[30px] max-w-[640px] mx-auto mb-10">
              ShopOS functions like an extended creative team. Catalog imagery,
              social visuals, ad videos. They've been our AI design partner since
              launching Tower in India.
            </p>

            {/* Author */}
            <div className="mb-8">
              <p className="text-[#0A0A0A] font-semibold text-[16px]">
                Rahul Gupta
              </p>
              <p className="text-[#6B7280] text-[14px]">
                Global VP & Head, Tower
              </p>
            </div>

            {/* CTA */}
            <button className="text-[15px] font-medium text-[#0A0A0A] hover:opacity-70 transition">
              Read case study →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}