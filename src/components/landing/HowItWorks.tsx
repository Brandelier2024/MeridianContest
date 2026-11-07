"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, QrCode, Trophy, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: ShoppingBag,
      title: "Buy Any Meridian Tub",
      description: "Pick up your favourite 500ml or 1L tub—like Honey Nut Crunch or Real Alphonso Mango—at any Pune parlour or grocery store.",
      badge: "In-Store & Delivery",
      image: "/images/sec_00.png",
    },
    {
      step: "02",
      icon: QrCode,
      title: "Scan the Code Under Lid",
      description: "Peel the tamper-proof lid seal to reveal your unique QR contest code. Scan it instantly with your mobile camera.",
      badge: "Inside Every Tub",
      image: "/images/sec_02.png",
    },
    {
      step: "03",
      icon: Trophy,
      title: "Enter the Lucky Draw",
      description: "Verify your phone number with an instant OTP. You are automatically entered into the grand Helicopter & weekly movie draws!",
      badge: "Weekly Grand Draws",
      image: "/images/sec_04.png",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#fdf8f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dc1e43]/10 text-[#dc1e43] text-xs font-bold uppercase tracking-wider mb-3">
            <span>3 Simple Steps • 100% Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] font-display tracking-tight">
            How to Enter &amp; Win
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334155]">
            No complicated apps or tokens. Just pure dairy ice cream and a simple QR code under the lid.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group bg-white rounded-3xl overflow-hidden border border-[#D1D5DB]/70 hover:border-[#dc1e43] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Real Campaign Frame Still */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-[#dc1e43] text-white flex items-center justify-center font-black text-sm shadow-md font-display">
                      {item.step}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-[#dc1e43]/10 text-[#dc1e43] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#dc1e43]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e293b] font-display mb-2 group-hover:text-[#dc1e43] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/enter"
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-[#dc1e43] bg-[#fff0f3] group-hover:bg-[#dc1e43] group-hover:text-white text-center flex items-center justify-center gap-1.5 transition-colors border border-[#dc1e43]/20 group-hover:border-[#dc1e43]"
                  >
                    <span>Proceed to Step {item.step}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
