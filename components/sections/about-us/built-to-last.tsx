"use client"

import SectionLayout from "@/components/SectionLayout"
import { Globe, Lock, CheckCircle2, TrendingUp, Wrench, Info } from "lucide-react"

export default function BuiltToLastSection() {
  return (
    <SectionLayout className="bg-[#FFFFFF]">

      <div className="py-24 px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-[clamp(28px,4vw,36px)] font-medium text-[#0A0A0A]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Built to Last
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">

          <FeatureCard
            icon={<Globe size={22} />}
            title="No training on your data"
            description="We have contractual agreements with our AI providers that prohibit the use of customer data to train their models."
          />

          <FeatureCard
            icon={<Lock size={22} />}
            title="Secure Encryption"
            description="When you use Shop OS, your data is encrypted in-transit using TLS 1.2 or greater."
          />

          <FeatureCard
            icon={<CheckCircle2 size={22} />}
            title="Advanced Permissions"
            description="Specify who can create and access what, with granular precision."
          />

          <FeatureCard
            icon={<TrendingUp size={22} />}
            title="LLM Optimization"
            description="Shop OS constantly evaluates models from multiple providers, so you always get the best tool for the job."
          />

          <FeatureCard
            icon={<Wrench size={22} />}
            title="Security & admin tools"
            description="Shop OS constantly evaluates models from multiple providers, so you always get the best tool for the job."
          />

          <FeatureCard
            icon={<Info size={22} />}
            title="Zero data retention"
            description="No data is stored with LLM providers. 30-day retention for non-Enterprise."
          />

        </div>

      </div>

      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />

    </SectionLayout>
  )
}


function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-[#F3F3F3] rounded-[20px] p-8">

      {/* Icon */}
      <div className="text-[#3B82F6] mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[18px] font-medium text-[#0A0A0A] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#525252] text-[16px] leading-[26px]">
        {description}
      </p>

    </div>
  )
}