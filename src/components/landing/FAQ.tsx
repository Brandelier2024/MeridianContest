"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How do I participate in the Meridian Scan & Win Contest?",
    a: "Purchase any 500ml or 1L Meridian Festive Tub from any authorized parlour or delivery partner. Peel the seal beneath the lid to reveal your unique QR code and 10-character code. Simply scan the QR code with your mobile camera or enter the code on this portal to claim your reward or enter the grand draw.",
  },
  {
    q: "What is the Bumper Prize and when will winners be drawn?",
    a: "The Bumper Prize is an exclusive Helicopter Joyride over Mumbai or Pune for 2 guests, including VIP chauffeur pickup and commemorative flight certificates. Draws take place every Sunday at 8:00 PM throughout the festive campaign, and winners are announced on our official portal and contacted via SMS.",
  },
  {
    q: "Can I enter multiple times with different tubs?",
    a: "Yes! Every single festive tub contains a unique, tamper-proof QR code. Each valid code gives you a separate entry into the weekly helicopter draw as well as an instant chance for free scoops and vouchers.",
  },
  {
    q: "How do I redeem my instant free scoop voucher?",
    a: "When you scan your code and win an instant scoop or tub voucher, you will receive a digital coupon code with a barcode directly on your screen and via SMS/WhatsApp. Present this voucher at any authorized Meridian parlour across Maharashtra within 90 days to claim your treat.",
  },
  {
    q: "Which tub flavours and sizes are eligible for the campaign?",
    a: "All 500ml and 1000ml (1 Litre) family tubs bearing the official 'Scan & Win 2026' golden lid seal are eligible. This includes all bestselling flavours like Alphonso Mango, Tender Coconut, Royal Rajbhog, Belgian Dark Chocolate, and Sitaphal.",
  },
  {
    q: "Is the lucky draw verified and transparent?",
    a: "Yes. All draw entries are securely registered using cryptographically verifiable random number generation (RNG). Draws are conducted under independent audit supervision to guarantee 100% transparency and fairness.",
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#dc1e43] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to know about participating, claiming prizes, and weekly draws.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  id={headerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full min-h-[44px] flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#dc1e43] rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111111] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-[#dc1e43]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    {faq.a}
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
