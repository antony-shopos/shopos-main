"use client"

import SectionLayout from "@/components/SectionLayout"
import Image from "next/image"

export default function MakeMarketSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">
      <div className="py-20 md:py-24 px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="text-center max-w-[720px] mx-auto mb-8">
          <h2
            className="text-[clamp(30px,4vw,44px)] font-medium leading-[120%] text-[#0A0A0A] mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Make, Market & Manage your brand using AI
          </h2>

          <p className="text-[#525252] text-[17px] leading-[28px]">
            AI workflows designed specifically to solve specific commerce problems.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid md:grid-cols-3 gap-3 items-stretch">

          <div className="md:col-span-2">
            <BentoCard
              title="Build your brand DNA that tells a story"
              tag="Memory"
              description="Tailor your brand’s identity to reflect every generation using ShopOS."
              image="/images/lp/memory.png"
            />
          </div>

          <BentoCard
            title="Eliminate AI slop in a few clicks"
            tag="Refine"
            description="Achieve high-quality outputs with AI and human refinement."
            image="/images/lp/refine.png"
          />

          <BentoCard
            title="Shape your imagination with ideas"
            tag="Collaborate"
            description="Bring ideas to life by talking to an AI Creative Director."
            image="/images/lp/collaborate.png"
          />

          <div className="md:col-span-2">
            <BentoCard
              title="Create stores that learn from itself"
              tag="Loops"
              description="Autonomous AI agents that work 24×7, learn from feedback & continuously improve store performance."
              image="/images/lp/loops.png"
            />
          </div>

          <div className="md:col-span-2">
            <BentoCard
              title="Your asset library gets smart."
              tag="Connectors"
              description='Score image quality. Track with Meta, Google, Shopify. Search "blue lifestyle shots." Auto-organize by SKU.'
              image="/images/lp/connectors.png"
            />
          </div>

          <BentoCard
            title="500 images at once."
            tag="Batch"
            description="Upload photos. Get titles, descriptions, tags. Resize for formats."
            image="/images/lp/batch.png"
          />

        </div>

      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}


/* ========================= */
/* BENTO CARD */
/* ========================= */

function BentoCard({
  title,
  description,
  image,
  tag,
}: {
  title: string
  description: string
  image: string
  tag: string
}) {
  return (
    <div className="bg-white rounded-[20px] border border-black/[0.06] h-full flex flex-col overflow-hidden">

      {/* IMAGE — NO PADDING */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={600}
          className="max-h-[220px] w-auto object-contain"
        />
      </div>

      {/* CONTENT — WITH PADDING */}
      <div className="p-5 pt-6">
        <span className="inline-block text-[13px] px-3 py-1 rounded-full border border-black/10 bg-[#F7F7F7] text-[#0A0A0A] mb-3">
          {tag}
        </span>

        <h3 className="text-[18px] font-semibold text-[#0A0A0A] mb-2">
          {title}
        </h3>

        <p className="text-[#525252] text-[15px] leading-[24px]">
          {description}
        </p>
      </div>

    </div>
  )
}