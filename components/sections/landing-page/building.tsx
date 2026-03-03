"use client"

import SectionLayout from "@/components/SectionLayout"
import Image from "next/image"
import FluidDotBackground from "@/components/FluidDotBackground"

export default function WhatAreYouBuildingSection() {
  return (
    <SectionLayout className="relative bg-[#FAFAFA] overflow-hidden">

      {/* ONE GLOBAL FLUID DOT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <FluidDotBackground baseOpacity={0.08} activeOpacity={0.15} />
      </div>

      {/* WHITE CONTAINER */}
      <div className="relative bg-[#FDFDFD] py-20 md:py-24 px-6 md:px-12 lg:px-16 z-10">

        {/* CONTENT */}
        <div className="relative z-20">

          <div className="text-center mb-10">
            <h2
              className="text-[clamp(30px,4vw,44px)] font-medium leading-[120%] text-[#0A0A0A]"
              style={{ fontFamily: "Space Grotesk" }}
            >
              What are you building?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <BuildCard
              title="Launch a New Product"
              description="Generate photos, descriptions, tags for your marketplace launch. Upload product images. Get everything you need for Amazon, Flipkart, Shopify."
              image="/images/lp/build-1.png"
            />

            <BuildCard
              title="Scale Ad Creatives"
              description="1 hero shot becomes 12 ad sizes, 4 marketplace formats, 3 social crops. Stop resizing manually."
              image="/images/lp/build-2.png"
            />

            <BuildCard
              title="Refresh Your Catalog"
              description="Bulk update descriptions. Add SEO tags. Generate new lifestyle shots. Keep your catalog fresh without the grind."
              image="/images/lp/build-3.png"
            />

            <BuildCard
              title="Analyze Competitors"
              description="Upload screenshots of competitor listings. Get positioning analysis, content recommendations, pricing insights."
              image="/images/lp/build-4.png"
            />

            <BuildCard
              title="Create Social Content"
              description="Posts, stories, carousels for Instagram and TikTok. Maintain your brand voice across platforms."
              image="/images/lp/build-5.png"
            />

            <BuildCard
              title="Build Brand Guidelines"
              description="Store your visual DNA. Colors, fonts, models, scenes, voice. Apply it to every generation, automatically."
              image="/images/lp/build-6.png"
            />

          </div>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4] z-30" />

    </SectionLayout>
  )
}


/* CARD — HOVER REMOVED */
function BuildCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div className="bg-white rounded-[20px] border border-black/[0.06] p-4 flex items-start gap-4">

      <div className="flex-1">
        <h3 className="text-[18px] font-semibold text-[#0A0A0A] mb-2">
          {title}
        </h3>

        <p className="text-[#525252] text-[15px] leading-[24px]">
          {description}
        </p>
      </div>

      <div className="shrink-0">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="rounded-2xl w-[110px] h-[110px] object-cover"
        />
      </div>
    </div>
  )
}