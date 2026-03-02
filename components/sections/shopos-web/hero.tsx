import SectionLayout from "@/components/SectionLayout"

export default function ShoposWebHero() {
  return (
    <SectionLayout
      className="bg-[#FAFAFA] relative"
      borderClass="border-[#D4D4D4]"
    >
      <div className="relative py-16 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden">

        {/* Side Gradient Fades INSIDE locked container */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent" />

        <div className="relative text-center">

          {/* Top Pill */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 bg-white text-[14px] text-[#262626] font-medium mb-6">
            ShopOS Web
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              fontSize: 'clamp(36px,5vw,52px)',
              letterSpacing: '-0.02em',
              lineHeight: '110%',
              color: '#0A0A0A',
              marginBottom: '8px',
            }}
          >
            Your creative team, always on
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
              maxWidth: '654px',
              margin: '0 auto 32px auto',
            }}
          >
            100+ AI workflows built for commerce. Product photos. Ad creatives.
            Catalog copy. Video clips. Social content. Your AI teammates handle
            production. You handle strategy.
          </p>

          {/* CTA */}
          <button className="bg-black text-white px-7 py-3.5 rounded-full text-[15px] font-medium transition hover:opacity-90 mb-8">
            Try ShopOS Web Free
          </button>
        </div>

        {/* Preview Block */}
        <div className="w-full h-[380px] md:h-[460px] bg-[#FFFFFF] rounded-3xl mb-6" />

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

          {/* Card 1 */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6">
            <div className="w-10 h-10 mb-6 bg-white border border-black/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/shopos-web/Fully encrypted.png"
                alt="Fully encrypted"
                className="w-[24px] h-[24px] object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#0A0A0A] mb-3">
              Fully encrypted
            </h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Everything in ShopOS is encrypted in transit (SSL) and at-rest
              (AES-256). Your brand data stays protected.
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
            <h3 className="font-semibold text-[#0A0A0A] mb-3">
              Multi-brand workspaces
            </h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Manage 50 brands from one dashboard. Agencies and holding
              companies can switch contexts without logging out.
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
            <h3 className="font-semibold text-[#0A0A0A] mb-3">
              Shopify sync
            </h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Products, inventory, orders auto-synced. Generate content for your
              actual catalog, always up to date.
            </p>
          </div>

        </div>
      </div>
    </SectionLayout>
  )
}