"use client"

import SectionLayout from "@/components/SectionLayout"
import Image from "next/image"

export default function AboutHeroSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">

      <div className="py-20 md:py-24 px-6 md:px-12 lg:px-16">

        {/* TAG */}
        <div className="flex justify-center mb-6">
          <span className="text-[13px] px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#3B82F6] border border-[#DCE3FF]">
            About Us
          </span>
        </div>

        {/* HEADING */}
        <div className="text-center max-w-[900px] mx-auto mb-6">
          <h1
            className="text-[clamp(34px,4vw,52px)] font-medium leading-[120%] text-[#0A0A0A]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Building the{" "}
            <span className=" font-serifAlt italic text-[#4F7DF3]">
              operating system
            </span>{" "}
            for modern commerce.
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <p className="text-[#525252] text-[17px] leading-[28px]">
            We believe that every brand, big or small, deserves access to
            world-class creative intelligence. ShopOS is the AI coworker that
            levels the playing field.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="max-w-[1100px] mx-auto mb-14">
          <div className="relative w-full h-[420px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/about-us/team-office.png"
              alt="ShopOS team working"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TRUST TEXT */}
        <div className="text-center mb-8">
          <p className="text-[14px] text-[#737373]">
            Loved by teams who ship every week
          </p>
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-14 opacity-70">

          <Image
            src="/images/logos/celio.svg"
            alt="Celio"
            width={110}
            height={40}
          />

          <Image
            src="/images/logos/myntra.svg"
            alt="Myntra"
            width={110}
            height={40}
          />

          <Image
            src="/images/logos/hamleys.svg"
            alt="Hamleys"
            width={110}
            height={40}
          />

          <Image
            src="/images/logos/ajio.svg"
            alt="Ajio"
            width={110}
            height={40}
          />

        </div>

      </div>

{/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}