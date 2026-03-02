import SectionLayout from "@/components/SectionLayout"

export default function CtaSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]" borderClass="border-[#D4D4D4]">

      <div className="relative py-16 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden">

        {/* Background inside locked container */}
        <div
          className="absolute inset-0 bg-top bg-cover opacity-40 pointer-events-none"
          style={{
            backgroundImage: "url('/images/shopos-web/cta-bg.png')",
          }}
        />

        {/* Content */}
        <div className="relative text-center">
          <h2
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              fontSize: 'clamp(28px,4vw,32px)',
              color: '#0A0A0A',
              marginBottom: '40px',
            }}
          >
            Give your brand AI Coworkers.
          </h2>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-full text-[16px] font-medium hover:opacity-90 transition">
              Get Started
            </button>

            <p className="text-[#737373] text-[14px]">
              No Credit Card Required
            </p>
          </div>
        </div>

      </div>

    </SectionLayout>
  )
}