"use client";

import React from "react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { LiftText } from "@/components/ui/LiftText";

const FAQS = [
  {
    q: "Who is eligible to enter the Meridian Lucky Draw?",
    a: "Any customer residing in India who purchases any Meridian Ice Cream 500ml or 1L tub (at official parlours, retail stores, or delivery apps) is eligible. Participants must have a valid 10-digit Indian mobile number for instant OTP verification.",
  },
  {
    q: "Where exactly is the contest QR code located on the tub?",
    a: "The unique QR contest code is printed on the inside of the tamper-evident lid seal of every participating Meridian 500ml and 1L tub. Peel the seal gently to reveal your unique code.",
  },
  {
    q: "Which ice cream flavours qualify for the lucky draw?",
    a: "All flavours qualify! Whether you pick up Honey Nut Crunch, Real Alphonso Mango, Sitaphal, Belgian Chocolate, or any 500ml family pack or 1L party tub, you are eligible to enter.",
  },
  {
    q: "When and how are winners announced?",
    a: "Weekly movie ticket winners are drawn every Monday during the campaign period. The Grand Helicopter Joyride winner will be announced at the campaign finale. Winners are contacted directly on their registered mobile number and published on our official website.",
  },
  {
    q: "What identification is required to claim the Helicopter Ride or Movie Tickets?",
    a: "When lucky draw winners are drawn, our team contacts them directly via phone & SMS. To claim the prize, the winner simply needs to present any standard government-issued photo ID (such as PAN Card, Voter ID, or Driving Licence) to verify their identity. (Aadhaar is NOT required).",
  },
];

export function FaqSection() {
  return (
    <section id="faq" data-8b-section="faq" aria-labelledby="faq-title">
      <WaveDivider swell />

      <div className="faq__head">
        <span className="m-text-4">Got Questions?</span>
        <h2 className="m-text-2" id="faq-title">
          Contest Rules &amp; FAQ
        </h2>
        <p className="m-text">
          Everything you need to know about our pure dairy standards, lid QR codes, <LiftText>weekly</LiftText> movie passes, and the grand helicopter finale.
        </p>
      </div>

      <div className="faq__list">
        {FAQS.map((item, idx) => (
          <details key={item.q} className="faq__item" open={idx === 0}>
            <summary className="faq__q">
              <span className="faq__q-text m-text-2">{item.q}</span>
              <span className="faq__icon" aria-hidden="true">
                <svg viewBox="0 0 14 14">
                  <path d="M7 1v12M1 7h12" />
                </svg>
              </span>
            </summary>
            <div className="faq__a m-text">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

