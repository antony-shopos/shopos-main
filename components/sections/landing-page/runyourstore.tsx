"use client"

import SectionLayout from "@/components/SectionLayout"
import Image from "next/image"

export default function RunYourStoreSection() {
  return (
    <SectionLayout className="bg-[#FAFAFA]">
      <div className="relative 
        py-16 md:py-20 lg:py-24
        px-5 sm:px-6 md:px-12 lg:px-16
      ">

        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-14">
          <h2
            className="
              text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]
              font-medium leading-[120%] text-[#0A0A0A] mb-3 md:mb-4
            "
            style={{ fontFamily: "Space Grotesk" }}
          >
            Run your store on autopilot
            <br className="hidden sm:block" />
            and sell like the big boys
          </h2>

          <p
            className="
              text-[15px] sm:text-[16px] md:text-[18px]
              leading-[24px] md:leading-[28px]
              text-[#525252]
            "
            style={{ fontFamily: "Inter" }}
          >
            ShopOS combines content creation, asset management,
            and performance learning.
          </p>
        </div>

        {/* Cards */}
        <div className="
          grid 
          gap-5 sm:gap-6 md:gap-8 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          mb-8 md:mb-10
        ">

          {/* CARD */}
          {[
            {
              title: "Create",
              img: "/images/lp/create.png",
              desc: "Product photos, ad creatives, catalog copy, video clips, social content. 100+ workflows built for commerce. Studio-quality output in minutes."
            },
            {
              title: "Manage",
              img: "/images/lp/manage.png",
              desc: "Your asset library gets smart. Quality scoring, performance tracking, auto-organization by SKU, campaign, or channel. Find any asset instantly."
            },
            {
              title: "Learn",
              img: "/images/lp/learn.png",
              desc: "Connect your store & ad accounts. ShopOS runs agentic A/B tests 24/7 across what generations, strategies and tactics work for your brand and products."
            }
          ].map((card) => (
            <div
              key={card.title}
              className="
                bg-white 
                rounded-3xl 
                p-6 sm:p-7 md:p-8
                border border-black/[0.04]
              "
            >
              <div className="
                w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
                mb-5 md:mb-6 
                rounded-xl 
                bg-[#FFFFFF] 
                border border-black/10 
                flex items-center justify-center
              ">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={20}
                  height={20}
                  className="sm:w-[22px] sm:h-[22px]"
                />
              </div>

              <h3 className="text-[18px] md:text-[20px] font-semibold mb-2 md:mb-3 text-[#0A0A0A]">
                {card.title}
              </h3>

              <p className="
                text-[#525252] 
                text-[14px] sm:text-[15px] 
                leading-[22px] sm:leading-[24px]
              ">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pills */}
        <div className="
          flex flex-wrap 
          gap-2 sm:gap-3 
        ">
          {[
            "Content Generation",
            "Bulk Processing",
            "Brand Memory",
            "Performance Analytics",
            "Competitor Analysis",
            "Browser Automation",
            "Store Sync",
            "A/B Testing",
          ].map((item) => (
            <div
              key={item}
              className="
                px-4 sm:px-5 
                py-1.5 sm:py-2 
                rounded-full 
                border border-black/10 
                bg-[#FAFAFA] 
                text-[#262626] 
                text-[13px] sm:text-[14px]
                whitespace-nowrap
              "
            >
              {item}
            </div>
          ))}
        </div>

      </div>
      {/* Bottom dashed line aligned to layout */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-dashed border-[#D4D4D4]" />
    </SectionLayout>
  )
}