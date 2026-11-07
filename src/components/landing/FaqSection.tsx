"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to participate in the Meridian Lucky Draw?",
      a: "Any customer residing in India who purchases any Meridian Ice Cream tub (at official franchise parlours, retail stores, or delivery apps) is eligible. Participants must have a valid 10-digit Indian mobile number for OTP verification.",
    },
    {
      q: "Can I enter multiple times with different phone numbers?",
      a: "To ensure fair play and equal opportunities for everyone, our system uses phone verification and intelligent device fingerprinting. Each person is allowed one official entry per phone number. Automated scripts or duplicate submissions from the same device are automatically flagged.",
    },
    {
      q: "What identification is required to claim the Helicopter Ride or Movie Tickets?",
      a: "When lucky draw winners are drawn, our team contacts them via phone & SMS. To claim the prize, the winner simply needs to present any standard government-issued photo ID (such as PAN Card, Voter ID, or Driving Licence) to verify their identity. (Note: Aadhaar is NOT required).",
    },
    {
      q: "Which ice cream flavours qualify for the contest?",
      a: "All flavours qualify! Whether you pick up our contest-featured Honey Nut Crunch, Real Alphonso Mango, Sitaphal, Belgian Chocolate, or any 500ml family pack or party tub, you are eligible to enter.",
    },
    {
      q: "When and how are winners announced?",
      a: "Draws are held weekly throughout the contest period. Winners are contacted directly on their registered mobile number and announced on our official website and social media channels.",
    },
    {
      q: "Do I need to keep my store receipt or tub?",
      a: "Yes, we strongly recommend keeping your purchase receipt or a photo of your ice cream tub until the draw concludes, as it helps expedite winner verification.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600">
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
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-900" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
