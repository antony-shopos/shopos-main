import SectionLayout from '@/components/SectionLayout'

export default function ShoposLoopsHero() {
  return (
    <SectionLayout className="bg-[#FAFAFA] relative" borderClass="border-[#D4D4D4]">
      <div className="relative py-16 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Side Gradient Fades INSIDE locked container */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent" />

        <div className="relative text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 bg-white text-[14px] text-[#262626] font-medium mb-6">
            Loops
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
            Simulate. Listen. Test. Repeat.
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
              maxWidth: '516px',
              margin: '0 auto 24px auto',
            }}
          >
            Manual creative testing: you test 5 things per quarter.
Track results in a spreadsheet. Brief your designer
based on gut feel.<br/><br/>Loops: 500 variants tested per week. Connected to your
ad accounts and store. Autonomous. Always running.
You set the goal. The agents do the work.
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
            <h3 className="font-semibold text-[#0A0A0A] mb-3">SIMULATE</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Loops generates variant batches based on your Brand Memory
and Context Graph. Each variant is a hypothesis.
Different backgrounds, different crops, different copy,
different CTAs.
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
            <h3 className="font-semibold text-[#0A0A0A] mb-3">LISTEN</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Loops monitors real-world performance. Click-through rates,
conversion rates, add-to-cart rates, ROAS.
Revenue metrics, not vanity metrics.
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
            <h3 className="font-semibold text-[#0A0A0A] mb-3">TEST</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Loops pushes winning variants and retires losers.
Statistically significant decisions, not gut calls.
No manual intervention required.
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
            <h3 className="font-semibold text-[#0A0A0A] mb-3">REPEAT</h3>
            <p className="text-[#525252] text-[14px] leading-[22px]">
              Every cycle makes the system smarter. The Context Graph
absorbs the results. Next batch starts from a higher
baseline. Continuously.
            </p>
          </div>

        </div>
      </div>
    </SectionLayout>
  )
}
