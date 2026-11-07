"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag, QrCode, Trophy, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: ShoppingBag,
    title: "Buy Any Meridian Ice Cream",
    description:
      "Visit any Meridian parlour, supermarket, or delivery partner and pick up your favourite 500ml or party tub — including Honey Nut Crunch, Alphonso Mango, or Sitaphal.",
    image: "/images/sec_00.png",
    tag: "Step 1 • Purchase",
  },
  {
    step: "02",
    icon: QrCode,
    title: "Scan the Unique QR Code",
    description:
      "Locate the special contest QR code printed on the lid or side of your Meridian tub. Open your phone camera and scan it to open your personal entry page.",
    image: "/images/sec_02.png",
    tag: "Step 2 • Scan",
  },
  {
    step: "03",
    icon: Trophy,
    title: "Enter the Mega Lucky Draw",
    description:
      "Fill out your details with mobile number verification. You are instantly entered into our weekly lucky draws for helicopter rides & luxury movie tickets!",
    image: "/images/sec_04.png",
    tag: "Step 3 • Win Big",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold tracking-wider uppercase mb-4">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            How to Participate &amp; Win
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Enjoying your favourite ice cream has never been this rewarding. Follow three easy steps to take flight!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col justify-between"
              >
                {/* Step Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-blue-900/20 group-hover:text-blue-900/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center shadow-md shadow-blue-950/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Image from Video */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-slate-200 border border-slate-200/60 shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-blue-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                      {item.tag}
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Status */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-blue-800">
                  <span>Fast, Easy &amp; Free Entry</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/15">
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Already have your Meridian tub ready?
            </h4>
            <p className="text-sm text-blue-200 mt-1">
              Scroll down to the registration form or scan your QR code directly!
            </p>
          </div>
          <a
            href="#register"
            className="whitespace-nowrap min-h-[44px] inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm text-blue-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-all hover:scale-105"
          >
            Enter Form Directly
          </a>
        </div>

      </div>
    </section>
  );
}
