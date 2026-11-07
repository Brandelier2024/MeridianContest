"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to participate in the Meridian Lucky Draw?",
      a: "Any customer residing in India who purchases any Meridian Ice Cream 500ml or 1L tub (at official parlours, retail stores, or delivery apps) is eligible. Participants must have a valid 10-digit Indian mobile number for OTP verification.",
    },
    {
      q: "Where is the secret QR code located?",
      a: "The unique QR contest code is printed on the inside of the tamper-evident lid seal of every participating Meridian tub. Peel the seal to reveal your code.",
    },
    {
      q: "Can I enter multiple times with different phone numbers?",
      a: "To ensure fair play and equal opportunities for everyone, our system uses phone verification and intelligent device checks. Each person is allowed one official entry per phone number. Automated scripts or duplicate submissions from the same device are automatically flagged.",
    },
    {
      q: "What identification is required to claim the Helicopter Ride or Movie Tickets?",
      a: "When lucky draw winners are drawn, our team contacts them directly via phone & SMS. To claim the prize, the winner simply needs to present any standard government-issued photo ID (such as PAN Card, Voter ID, or Driving Licence) to verify their identity. (Note: Aadhaar is NOT required).",
    },
    {
      q: "Which ice cream flavours qualify for the contest?",
      a: "All flavours qualify! Whether you pick up our contest-featured Honey Nut Crunch, Real Alphonso Mango, Sitaphal, Belgian Chocolate, or any 500ml family pack or 1L party tub, you are eligible to enter.",
    },
    {
      q: "When and how are winners announced?",
      a: "Weekly movie ticket winners are drawn every Monday during the campaign period. The Grand Helicopter Joyride winner will be announced at the campaign finale. Winners are contacted directly on their registered mobile number and published on our official website.",
    },
    {
      q: "Do I need to keep my store receipt or tub lid?",
      a: "Yes, we strongly recommend keeping your purchase receipt or a photo of your ice cream tub until the draw concludes, as it helps expedite winner verification.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dc1e43]/10 text-[#dc1e43] text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#dc1e43]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#334155]">
            Everything you need to know about contest rules, prizes, and winner selection.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-[#D1D5DB]/70 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-[#fdf8f7]/60 hover:bg-[#fff0f3] transition-colors"
                >
                  <span className="font-bold text-[#1e293b] text-sm sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#dc1e43]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 bg-white text-sm text-[#334155] leading-relaxed border-t border-[#D1D5DB]/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
