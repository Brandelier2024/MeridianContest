"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, QrCode, Trophy, ArrowRight, Sparkles } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Buy Any Festive Tub",
    description:
      "Visit any authorized Meridian parlour or order via delivery. Pick any 500ml or 1L tub marked with the festive Scan & Win campaign sticker.",
    icon: ShoppingBag,
    iconColor: "text-[#046bd2]",
    bgColor: "bg-blue-50 border-blue-100",
  },
  {
    step: "02",
    title: "Scratch & Reveal Code",
    description:
      "Peel back the hygienic freshness seal under the lid. Scratch the golden security strip to reveal your unique QR code and 10-character alphanumeric entry key.",
    icon: QrCode,
    iconColor: "text-[#dc1e43]",
    bgColor: "bg-red-50 border-red-100",
  },
  {
    step: "03",
    title: "Scan & Win Joy!",
    description:
      "Scan the code using your mobile phone camera or enter the 10-character code on this portal. Receive your instant voucher or entered lucky draw ticket immediately.",
    icon: Trophy,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50 border-amber-100",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#046bd2] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            How to Participate &amp; Win
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Participating takes less than 30 seconds. No complicated app downloads required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all card-hover-depth flex flex-col items-start"
              >
                <div className="w-full flex items-center justify-between mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${item.bgColor}`}
                  >
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <span className="text-3xl font-black text-slate-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-[#F0F5FA] rounded-3xl p-8 sm:p-12 border border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="text-2xl font-extrabold text-[#111111]">
              Ready to verify your tub code?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Have your ice cream tub seal ready. Enter the 10-character code or scan with your phone camera.
            </p>
          </div>
          <Link
            href="/enter"
            className="min-h-[44px] inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-[#dc1e43] hover:bg-[#b91535] shadow-md transition-all shrink-0"
          >
            <span>Scan QR / Enter Code</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
