"use client"

import SectionLayout from "@/components/SectionLayout"
import Image from "next/image"

export default function TeamSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">

      <div className="py-24 px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-[clamp(28px,4vw,36px)] font-medium text-[#0A0A0A]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">

          <TeamCard
            name="Sai Krishna"
            role="Co-founder"
            image="/images/team/sai-krishna.jpg"
          />

          <TeamCard
            name="Ajay PV"
            role="Co-founder"
            image="/images/team/ajay-pv.jpg"
          />

        </div>

      </div>

    </SectionLayout>
  )
}



function TeamCard({
  name,
  role,
  image,
}: {
  name: string
  role: string
  image: string
}) {
  return (
    <div>

      {/* Image */}
      <div className="relative w-full h-[260px] rounded-[28px] overflow-hidden bg-black">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-6">
        <h3 className="text-[22px] font-medium text-[#0A0A0A]">
          {name}
        </h3>

        <p className="text-[#737373] text-[18px] mt-1">
          {role}
        </p>
      </div>

    </div>
  )
}