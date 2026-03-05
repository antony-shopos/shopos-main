"use client"

import SectionLayout from "@/components/SectionLayout"

export default function TransformationNumbersSection() {
  return (
    <SectionLayout className="relative bg-[#262626] overflow-hidden"
      borderClass="border-[#737373]">

      {/* DARK GRADIENT BACKGROUND */}
      <div className="absolute inset-0" />

      <div className="relative py-24 px-6 md:px-12 lg:px-16">

        {/* HEADING */}
        <div className="text-center mb-8">
          <h2
            className="text-[clamp(30px,4vw,40px)] font-medium text-white"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Transformation by the numbers
          </h2>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">

          <StatCard
            value="2M+"
            label="Assets generated"
          />

          <StatCard
            value="500+"
            label="Brands onboarded"
          />

          <StatCard
            value="150+"
            label="AI Workflows"
          />

          <StatCard
            value="24/7"
            label="Uptime & Support"
          />

        </div>

      </div>

    </SectionLayout>
  )
}


function StatCard({
  value,
  label
}: {
  value: string
  label: string
}) {
  return (
    <div className="bg-[#1C1C1C/10] border border-white/10 rounded-[24px] py-8 px-4 text-center flex flex-col items-center justify-center">

      <div className="text-[56px] font-display md:text-[56px] font-regular text-white mb-3">
        {value}
      </div>

      <div className="text-[18px] text-[#BDBDBD]">
        {label}
      </div>

    </div>
  )
}