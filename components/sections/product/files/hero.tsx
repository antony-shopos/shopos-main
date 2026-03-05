import SectionLayout from '@/components/SectionLayout'

export default function ShoposFilesHero() {
  return (
    <SectionLayout className="bg-[#FAFAFA] relative" borderClass="border-[#D4D4D4]">
      <div className="relative py-16 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Side Gradient Fades INSIDE locked container */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent" />

        <div className="relative text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 bg-white text-[14px] text-[#262626] font-medium mb-6">
            Files
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(36px,5vw,60px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '120%',
              color: '#0A0A0A',
              marginBottom: '8px',
            }}
          >
            Your asset library knows things
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '18px',
              letterSpacing: '-0.02em',
              lineHeight: '28px',
              color: '#525252',
              maxWidth: '540px',
              margin: '0 auto 24px auto',
            }}
          >
            Most asset libraries know where things are.
Files knows what things do.
          </p>
        </div>

        {/* Preview Block */}
        <div className="w-full h-[380px] md:h-[460px] bg-[#FFFFFF] rounded-3xl mb-6" />

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6">
            <div className="w-10 h-10 mb-6 bg-white border border-black/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/shopos-web/Fully encrypted.png"
                alt="Fully encrypted"
                className="w-[24px] h-[24px] object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] mb-3">Auto-Organization</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Every asset tagged with product SKU, category, content type,
channel, campaign, date. No manual tagging. No folder chaos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6">
            <div className="w-10 h-10 mb-6 bg-white border border-black/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/shopos-web/multibrand.png"
                alt="Multi-brand workspaces"
                className="w-[24px] h-[24px] object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] mb-3">Quality Scoring</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Resolution, composition, brand consistency, marketplace compliance.
Every image scored automatically. Fix issues before they cost you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6">
            <div className="w-10 h-10 mb-6 bg-white border border-black/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/shopos-web/shopifysync.png"
                alt="Shopify sync"
                className="w-[24px] h-[27.5px] object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] mb-3">Performance Tracking</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Connect your channels. See which assets perform best.
Sort by CTR, conversion rate, ROAS.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6">
            <div className="w-10 h-10 mb-6 bg-white border border-black/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/shopos-web/shopifysync.png"
                alt="Shopify sync"
                className="w-[24px] h-[27.5px] object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] mb-3">Smart Search</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Natural language. "Red dress on model, outdoor setting."
Filter by quality score, performance, date, channel.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6">
            <div className="w-10 h-10 mb-6 bg-white border border-black/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/shopos-web/shopifysync.png"
                alt="Shopify sync"
                className="w-[24px] h-[27.5px] object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] mb-3">Version History</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Every edit, every variant tracked. Compare performance
across versions of the same asset.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6">
            <div className="w-10 h-10 mb-6 bg-white border border-black/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/shopos-web/shopifysync.png"
                alt="Shopify sync"
                className="w-[24px] h-[27.5px] object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] mb-3">Gap Analysis</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Files knows your catalog. It knows what content exists
for each SKU and what's missing.
"43 products have no lifestyle shots. Generate them?" → Yes.
            </p>
          </div>

        </div>
      </div>
    </SectionLayout>
  )
}
