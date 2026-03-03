'use client'

import SectionLayout from '@/components/SectionLayout'
import { useState, useRef, useEffect } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is ShopOS Cowork?",
      answer:
        "A desktop AI assistant built for brands. It connects to your store, learns your voice, and does actual work—research, copywriting, image generation, catalog updates."
    },
    { question: "Is it open source?", answer: "Parts of the system are open source." },
    { question: "Does my data stay private?", answer: "Yes. Cowork runs locally on your Mac." },
    { question: "What models does it use?", answer: "A combination of state-of-the-art models." },
    { question: "Can it actually change things in my store?", answer: "Yes, with your permission." },
    { question: "What's the difference between this and ChatGPT?", answer: "Cowork executes store-connected tasks." },
    { question: "What if I'm not technical?", answer: "No coding required." },
    { question: "Does it work with platforms other than Shopify?", answer: "Yes, multiple integrations." },
    { question: "Who built this?", answer: "Built by ShopOS." }
  ]

  return (
    <SectionLayout className="bg-[#FAFAFA]" borderClass="border-[#D4D4D4]">
    <section className="relative bg-[#FAFAFA] py-24 overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Heading + Subtitle */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "Space Grotesk",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "48px",
              color: "#0A0A0A",
              marginBottom: "12px"
            }}
          >
            Frequently asked questions
          </h2>

          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#737373"
            }}
          >
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Accordion */}
        <div>

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            const contentRef = useRef<HTMLDivElement>(null)
            const [height, setHeight] = useState(0)

            useEffect(() => {
              if (contentRef.current) {
                setHeight(contentRef.current.scrollHeight)
              }
            }, [isOpen])

            return (
              <div
                key={index}
                style={{
                  borderBottom:
                    index !== faqs.length - 1
                      ? "1px solid #E5E5E5"
                      : "none"
                }}
              >

                {/* Question Row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: "100%",
                    paddingTop: "24px",
                    paddingBottom: isOpen ? "4px" : "24px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#0A0A0A"
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "9999px",
                      border: "2px solid #A3A3A3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {isOpen ? (
                      <div
                        style={{
                          width: "10px",
                          height: "2px",
                          backgroundColor: "#A3A3A3"
                        }}
                      />
                    ) : (
                      <div style={{ position: "relative", width: "10px", height: "10px" }}>
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            width: "100%",
                            height: "2px",
                            backgroundColor: "#A3A3A3",
                            transform: "translateY(-50%)"
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            width: "2px",
                            height: "100%",
                            backgroundColor: "#A3A3A3",
                            transform: "translateX(-50%)"
                          }}
                        />
                      </div>
                    )}
                  </div>
                </button>

                {/* Smooth Animated Answer */}
                <div
                  style={{
                    height: isOpen ? `${height}px` : "0px",
                    overflow: "hidden",
                    transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <div ref={contentRef}>
                    <p
                      style={{
                        paddingTop: "4px",
                        paddingBottom: "24px",
                        paddingRight: "48px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#525252"
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>

    </SectionLayout>
  )
}