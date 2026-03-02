'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <section className="overflow-hidden bg-white">
      {/* Bottom dashed line aligned to layout */}
      <div className="border-t border-dashed border-[#D4D4D4]" />
      {/* HARD LOCK AT 1440PX */}
      <div className="max-w-[1460px] mx-auto w-full">
        {/* 3 Column Layout */}
        <div className="grid grid-cols-[20px_1fr_20px] md:grid-cols-[120px_1fr_120px] lg:grid-cols-[208px_1fr_208px]">
          {/* LEFT DECOR */}
          <div className="relative">
            <img
              src="/images/footer/left-support.png"
              alt=""
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* CENTER CONTENT */}
          <div
            className="pt-16 pb-6"
            style={{
              borderLeft: '1px dashed #D4D4D4',
              borderRight: '1px dashed #D4D4D4',
            }}
          >
            <div className="px-4 sm:px-8 lg:px-3">
              {/* TOP AREA */}
              <div className="flex flex-col lg:flex-row mb-16 lg:mb-24">
                {/* LEFT BLOCK */}
                <div className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
                  <img
                    src="/images/footer/shopos-logo-footer.png"
                    alt="ShopOS"
                    className="w-8 mb-6"
                  />

                  <p className="text-[14px] leading-[22px] text-[#525252]">
                    ShopOS is an AI-native operating system designed for modern ecommerce &
                    fast-growing DTC brands. Helping them with creating content for product display
                    pages, catalogs, social media, ads and self-learn & improve from what’s working.
                  </p>
                </div>

                {/* RIGHT BLOCK */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
                  <div>
                    <h4 className="text-[#262626] font-medium mb-4">Products</h4>
                    <ul className="space-y-3 text-[14px] text-[#525252]">
                      <li>Use Cases</li>
                      <li>Spaces</li>
                      <li>
                        <Link href="/product/loops" className="hover:opacity-70 transition">
                          Loops
                        </Link>
                      </li>
                      <li><Link href="/product/refine" className="hover:opacity-70 transition">Refine</Link></li>
                      <li><Link href="/product/files" className="hover:opacity-70 transition">Files</Link></li>
                      <li>
                        <Link href="/product/brand-memory" className="hover:opacity-70 transition">
                          Brand Memory
                        </Link>
                      </li>
                      <li>
                        <Link href="/product/cowork" className="hover:opacity-70 transition">
                          Cowork
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#262626] font-medium mb-4">Case Studies</h4>
                    <ul className="space-y-3 text-[14px] text-[#525252]">
                      <li>Case Studies</li>
                      <li>In the Press</li>
                      <li>
                        Careers <span className="text-blue-600">Hiring</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#262626] font-medium mb-4">Resources</h4>
                    <ul className="space-y-3 text-[14px] text-[#525252]">
                      <li>Context Graph</li>
                      <li>D2C Brand Fund</li>
                      <li>About Us</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* WORDMARK */}
              <div className="mb-16 lg:mb-24">
                <h1
                  className="w-full text-center font-bold"
                  style={{
                    fontFamily: 'Space Grotesk',
                    letterSpacing: '0.02em',
                    color: '#262626',
                    fontSize: 'clamp(48px, 17vw, 252px)',
                    lineHeight: '100%',
                  }}
                >
                  SHOPOS
                </h1>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 lg:mb-20">
                <p className="text-[14px] text-[#525252] text-center md:text-left">
                  ShopOS © 2026. Built with AI & Humans, together.
                </p>

                <div className="flex gap-6 items-center">
                  <img src="/images/footer/XLogo.svg" className="h-7" alt="X" />
                  <img src="/images/footer/InstagramLogo.svg" className="h-7" alt="Instagram" />
                  <img src="/images/footer/LinkedinLogo.svg" className="h-7" alt="LinkedIn" />
                  <img src="/images/footer/Newspaper.svg" className="h-7" alt="Press" />
                  <img src="/images/footer/BehanceLogo.svg" className="h-7" alt="Behance" />
                </div>
              </div>

              {/* AI SUMMARY */}
              <div className="text-center">
                <p className="text-[14px] text-[#262626] mb-4">Request an AI summary of ShopOS</p>

                <div className="flex justify-center gap-4 items-center flex-wrap">
                  <img src="/images/footer/claude.png" className="h-8" alt="Claude" />
                  <img src="/images/footer/perplexity.png" className="h-8" alt="Perplexity" />
                  <img src="/images/footer/chatgpt.png" className="h-8" alt="ChatGPT" />
                  <img src="/images/footer/gemini.png" className="h-8" alt="Gemini" />
                  <img src="/images/footer/grok.png" className="h-8" alt="Grok" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT DECOR */}
          <div className="relative">
            <img
              src="/images/footer/right-support.png"
              alt=""
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
