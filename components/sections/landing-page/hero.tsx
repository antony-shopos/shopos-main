'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Plus,
  Image as ImageIcon,
  Video,
  FileText,
  MoreHorizontal,
} from 'lucide-react'
import SectionLayout from '@/components/SectionLayout'

const phrases = [
  'list your next summer launch',
  'analyze your competitors on Amazon',
  'tell you why your conversions are low',
]

const TYPING_SPEED = 40
const DELETING_SPEED = 30
const PAUSE_AFTER_TYPE = 1500

export default function LandingHero() {
  const [input, setInput] = useState('')
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (input.length > 0) return

    const current = phrases[index]
    let timeout: NodeJS.Timeout

    if (!isDeleting && display.length < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, display.length + 1))
      }, TYPING_SPEED)
    } else if (!isDeleting && display.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
    } else if (isDeleting && display.length > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, display.length - 1))
      }, DELETING_SPEED)
    } else if (isDeleting && display.length === 0) {
      setIsDeleting(false)
      setIndex(prev => (prev + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [display, isDeleting, index, input])

  return (
    <SectionLayout className="bg-[#FAFAFA] relative" borderClass="border-[#D4D4D4]">
      <section className="px-4 sm:px-6">
        <div className="w-full max-w-[920px] mx-auto text-center py-16 sm:py-20 md:py-24">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-500 text-xs sm:text-sm font-medium mb-4 border border-blue-100">
            #1 AI platform for brands & eCommerce
          </div>

          {/* Heading */}
          <h1 className="
            font-medium tracking-tight text-text
            text-[32px] leading-[38px]
            sm:text-[44px] sm:leading-[48px]
            md:text-[56px] md:leading-[56px]
          ">
            AI Coworkers that
            <span className="
              block font-serifAlt italic text-neutral-400
              text-[32px] leading-[38px]
              sm:text-[44px] sm:leading-[48px]
              md:text-[56px] md:leading-[56px]
            ">
              create content
            </span>
          </h1>

          {/* Subheading */}
          <p className="
            mt-6
            text-[15px]
            sm:text-[16px]
            md:text-[18px]
            text-textMuted
            max-w-2xl
            mx-auto
          ">
            ShopOS gives your brand agents & teammates to create content,
            manage assets, analyze performance, and learn what sells.
          </p>

          {/* Prompt Box */}
          <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
            <div
              className="
                w-full
                max-w-[768px]
                min-h-[110px] sm:min-h-[120px]
                bg-white
                border border-[#E5E5E5]
                rounded-[20px]
                shadow-[0_12px_32px_rgba(0,0,0,0.02)]
                px-4 pt-4 pb-3
                flex flex-col
                gap-3
              "
            >
              <div className="relative w-full h-[44px] sm:h-[48px] text-left">
                {input.length === 0 && (
                  <div className="absolute left-0 top-0 h-full flex items-start pointer-events-none text-[14px] sm:text-[15px] leading-[18px] text-[#A3A3A3]">
                    Ask ShopOS to {display}
                  </div>
                )}
                <textarea
                  rows={1}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className="
                    w-full
                    h-full
                    resize-none
                    bg-transparent
                    text-[14px] sm:text-[15px]
                    leading-[18px]
                    text-neutral-700
                    outline-none
                  "
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center"
                >
                  <Plus size={18} className="text-neutral-600" />
                </button>

                <button
                  type="button"
                  className="w-8 h-8 rounded-[20px] bg-[#F5F5F5] flex items-center justify-center"
                >
                  <ArrowRight size={16} className="text-[#D4D4D4]" />
                </button>
              </div>
            </div>
          </div>

          {/* Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">

            {[
              { label: 'Product Photos', icon: ImageIcon },
              { label: 'Video Clips', icon: Video },
              { label: 'Catalog Copy', icon: FileText },
              { label: 'More', icon: MoreHorizontal },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-[6px] px-4 pl-3 h-[36px] border border-[#E7E6E5] rounded-full"
              >
                <Icon size={16} strokeWidth={1.33} className="text-[#858481]" />
                <span className="text-[14px] leading-[17px] text-[#34322D]">
                  {label}
                </span>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              type="button"
              className="
                h-[36px]
                px-4
                flex items-center
                justify-center
                gap-2
                bg-[#171717]
                rounded-[20px]
                text-[#FAFAFA]
                text-[14px]
                font-medium
                leading-[21px]
                transition-colors
                hover:bg-black
              "
            >
              Get Started
              <ArrowRight size={16} strokeWidth={1.5} className="text-white" />
            </button>
          </div>

          {/* Trust */}
          <p className="mt-4 text-xs sm:text-sm text-textMuted">
            Trusted by 500+ Brands • Rated 4.8 ⭐ by commerce teams
          </p>

        </div>
      </section>
    </SectionLayout>
  )
}