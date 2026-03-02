'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function DropdownItem({
  title,
  desc,
  icon,
  href,
  onClick,
}: {
  title: string
  desc: string
  icon: string
  href: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start gap-[12px] px-[8px] py-[12px] rounded-[8px] hover:bg-[#F5F5F5] transition-colors"
    >
      <div className="w-10 h-10 rounded-[10px] border border-black/10 flex items-center justify-center bg-white">
        <img src={icon} alt={title} className="w-5 h-5 object-contain" />
      </div>

      <div className="flex flex-col gap-[8px]">
        <h4
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '100%',
            color: '#0A0A0A',
          }}
        >
          {title}
        </h4>

        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0.02em',
            color: '#525252',
          }}
        >
          {desc}
        </p>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [desktopOpen, setDesktopOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  /* ============================= */
  /* Scroll Lock When Mobile Open  */
  /* ============================= */
  useEffect(() => {
    if (mobileOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [mobileOpen])

  return (
    <header className="w-full bg-[#F6F6F6] border-b border-black/5 relative z-50">
      {/* ============================= */}
      {/* TOP BAR */}
      {/* ============================= */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-24 py-5 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Link href="/cowork">
            <img
              src="/images/logo/shopos-cowork-logo.png"
              alt="ShopOS Cowork"
              style={{ width: '82.73px', height: '42.31px' }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 relative">
            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopOpen(true)}
              onMouseLeave={() => setDesktopOpen(false)}
            >
              <span
                className="cursor-pointer text-[12px] text-[#525252] pb-6"
                style={{ fontFamily: 'Inter' }}
              >
                Products
              </span>

              {desktopOpen && (
                <div className="absolute left-0 top-[28px] h-6 w-full" />
              )}

              <div
                className={`absolute left-0 top-[40px] w-[820px] transition-all duration-300 ${
                  desktopOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-[12px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-[20px] grid grid-cols-2 gap-x-[20px] gap-y-[12px]">
                  <DropdownItem title="Use Cases" desc="Built for every brand" icon="/images/navbar/usecases.svg" href="/use-cases" />
                  <DropdownItem title="Loops" desc="Performance improves itself" icon="/images/navbar/loops.svg" href="/product/loops" />
                  <DropdownItem title="Spaces" desc="Workflows trained for ecommerce" icon="/images/navbar/spaces.svg" href="/spaces" />
                  <DropdownItem title="Files" desc="A library of proven winners" icon="/images/navbar/files.svg" href="/product/files" />
                  <DropdownItem title="Refine" desc="Human edits train intelligence" icon="/images/navbar/refine.svg" href="/product/refine" />
                  <DropdownItem title="Cowork" desc="Your AI commerce operator" icon="/images/navbar/cowork.svg" href="/product/cowork" />
                  <DropdownItem title="Brand Memory" desc="Brand rules, always remembered" icon="/images/navbar/memory.svg" href="/product/brand-memory" />
                </div>
              </div>
            </div>

            <Link href="/how-it-works" className="text-[12px] text-[#525252]">
              How it Works
            </Link>
            <Link href="/vision" className="text-[12px] text-[#525252]">
              Vision
            </Link>
            <Link href="/blog" className="text-[12px] text-[#525252]">
              Blog
            </Link>
            <Link href="/github" className="text-[12px] text-[#525252]">
              Github
            </Link>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center">
          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <button
              className="flex items-center gap-3"
              style={{
                backgroundColor: '#0A0A0A',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '999px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
              }}
            >
              Download
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  border: '1px dashed #FFFFFF',
                  borderRadius: '3px',
                }}
              />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden ml-4"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <span style={{ fontSize: '24px' }}>✕</span>
            ) : (
              <span style={{ fontSize: '24px' }}>☰</span>
            )}
          </button>
        </div>
      </div>

      {/* ============================= */}
      {/* MOBILE MENU */}
      {/* ============================= */}
      <div
        className={`fixed inset-0 top-[72px] bg-[#F6F6F6] transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40 overflow-y-auto`}
      >
        <div className="pt-12 px-6 flex flex-col gap-6 pb-16">
          {/* PRODUCTS ACCORDION */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex justify-between items-center text-[20px] text-[#525252]"
            >
              Products
              <span>{mobileProductsOpen ? '−' : '+'}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileProductsOpen ? 'max-h-[900px] mt-4' : 'max-h-0'
              }`}
            >
              <div className="flex flex-col gap-4">
                <DropdownItem title="Use Cases" desc="Built for every brand" icon="/images/navbar/usecases.svg" href="/use-cases" onClick={() => setMobileOpen(false)} />
                <DropdownItem title="Loops" desc="Performance improves itself" icon="/images/navbar/loops.svg" href="/product/loops" onClick={() => setMobileOpen(false)} />
                <DropdownItem title="Spaces" desc="Workflows trained for ecommerce" icon="/images/navbar/spaces.svg" href="/spaces" onClick={() => setMobileOpen(false)} />
                <DropdownItem title="Files" desc="A library of proven winners" icon="/images/navbar/files.svg" href="/product/files" onClick={() => setMobileOpen(false)} />
                <DropdownItem title="Refine" desc="Human edits train intelligence" icon="/images/navbar/refine.svg" href="/product/refine" onClick={() => setMobileOpen(false)} />
                <DropdownItem title="Cowork" desc="Your AI commerce operator" icon="/images/navbar/cowork.svg" href="/product/cowork" onClick={() => setMobileOpen(false)} />
                <DropdownItem title="Brand Memory" desc="Brand rules, always remembered" icon="/images/navbar/memory.svg" href="/product/brand-memory" onClick={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>

          <Link href="/how-it-works" onClick={() => setMobileOpen(false)} className="text-[20px] text-[#525252]">
            How it Works
          </Link>

          <Link href="/vision" onClick={() => setMobileOpen(false)} className="text-[20px] text-[#525252]">
            Vision
          </Link>

          <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-[20px] text-[#525252]">
            Blog
          </Link>

          <Link href="/github" onClick={() => setMobileOpen(false)} className="text-[20px] text-[#525252]">
            Github
          </Link>

          <button
            className="mt-8 w-full"
            style={{
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              padding: '16px 20px',
              borderRadius: '999px',
              fontFamily: 'Inter',
              fontSize: '16px',
            }}
          >
            Download
          </button>
        </div>
      </div>
    </header>
  )
}