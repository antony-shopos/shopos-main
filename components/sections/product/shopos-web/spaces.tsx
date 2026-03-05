import SectionLayout from "@/components/SectionLayout"

export default function SpacesSection() {
  const spaces = [
    {
      title: 'Product Studio',
      desc: 'Clean, professional studio shots for any object.',
      image: '/images/shopos-web/productstudio.png',
    },
    {
      title: 'Fashion Studio',
      desc: 'Get a pro studio look for your clothing items.',
      image: '/images/shopos-web/fashionstudio.png',
    },
    {
      title: 'Feature Highlight',
      desc: 'Point out the specific selling points of your item.',
      image: '/images/shopos-web/featurehighlight.png',
    },
    {
      title: 'Product Clip',
      desc: 'Turn a still photo into a moving product video.',
      image: '/images/shopos-web/productclip.png',
    },
    {
      title: 'Fashion Lifestyle',
      desc: 'Place your apparel in a real-world setting.',
      image: '/images/shopos-web/fashionlifestyle.png',
    },
    {
      title: 'Offer Banner',
      desc: 'Place your apparel in a real-world setting.',
      image: '/images/shopos-web/offerbanner.png',
    },
    {
      title: 'Analyze Competitors',
      desc: 'Turn a still photo into a moving product video.',
      image: '/images/shopos-web/analyze-competitors.png',
    },
    {
      title: 'Fashion Lifestyle',
      desc: 'Place your apparel in a real-world setting.',
      image: '/images/shopos-web/fashionlifestyle-2.png',
    },
    {
      title: 'Create Social Content',
      desc: 'Promote a special discount with a wide header.',
      image: '/images/shopos-web/create-socialcontent.png',
    },
    {
      title: 'Refresh Your Catalog',
      desc: 'Turn a still photo into a moving product video.',
      image: '/images/shopos-web/refresh-yourcatalog.png',
    },
    {
      title: 'Photo Collage',
      desc: 'Mix multiple lifestyle shots into one layout.',
      image: '/images/shopos-web/photocollage.png',
    },
    {
      title: 'Build Brand Guidelines',
      desc: 'Promote a special discount with a wide header.',
      image: '/images/shopos-web/build-brandguidelines.png',
    },
  ]

  return (
    <SectionLayout
      className="bg-[#FAFAFA]"
      borderClass="border-[#D4D4D4]"
    >

      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">

        {/* Heading */}
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 500,
            fontSize: 'clamp(28px,4vw,36px)',
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
          }}
        >
          100+ Spaces for Every Commerce Problem
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3 pb-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[228px] rounded-lg object-cover mb-4"
              />

              <h3 className="text-[#0A0A0A] font-semibold mb-1 text-[15px] text-center">
                {item.title}
              </h3>

              <p className="text-[#525252] text-[13px] leading-[20px] text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#F5F5F5] text-[#0A0A0A] px-6 py-2.5 rounded-full text-[14px] font-medium hover:opacity-90 transition">
            View All Spaces
          </button>
        </div>

      </div>

      {/* Bottom dashed line aligned to layout */}
      <div className="border-b border-dashed border-[#D4D4D4]" />

    </SectionLayout>
  )
}