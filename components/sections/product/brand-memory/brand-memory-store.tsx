import SectionLayout from "@/components/SectionLayout"

export default function BrandMemoryStore() {
  return (
    <SectionLayout
      className="bg-transparent"
      borderClass="border-[#D4D4D4]"
    >
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">

        {/* Heading */}
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: 500,
            fontSize: "clamp(28px,4vw,36px)",
            letterSpacing: "-0.02em",
            color: "#0A0A0A",
          }}
        >
          What’s stored in Brand Memory?
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
             Visual Identity
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Brand colors (primary, secondary, accent)</li>
              <li>Typography preferences</li>
              <li>Logo placement rules</li>
              <li>Photography style (minimal, editorial, lifestyle, studio)</li>
              <li>Lighting direction (natural, studio, warm, cool)</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Model Preferences
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Preferred body types, age ranges, skin tones</li>
              <li>Default poses and expressions</li>
              <li>Styling direction</li>
              <li>Hair and makeup guidelines</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Scenes & Settings
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Background preferences by product category</li>
              <li>Recurring environments (coffee shop, gym, office, beach)</li>
              <li>Seasonal scene variations</li>
              <li>Prop preferences</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Brand Voice
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Tone (casual, professional, playful, luxury)</li>
              <li>Sentence structure preferences</li>
              <li>Words to use, words to avoid</li>
              <li>CTA patterns</li>
              <li>Product naming conventions</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-3xl p-5">
            <h3 className="text-[#0A0A0A] font-semibold mb-4 text-[18px]">
              Compliance Rules
            </h3>
            <ul className="space-y-2 text-[#262626] text-[15px]">
              <li>Category-specific restrictions</li>
              <li>Marketplace-specific requirements</li>
              <li>Legal disclaimers</li>
              <li>Claim substantiation rules</li>
            </ul>
          </div>

        </div>
      </div>
    </SectionLayout>
  )
}