"use client";

import React from "react";
import Link from "next/link";
import { Plane, Film, Gift, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const PRIZES = [
  {
    tier: "1st Bumper Prize",
    title: "Helicopter Joyride Experience",
    subtitle: "Over Mumbai or Pune Skyline for 2 Guests",
    description:
      "Take flight in a chartered executive helicopter! Experience breathtaking aerial views of the coastline or hills, with VIP ground transport and flight certificates included.",
    badge: "Grand Weekly Draw",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    accentColor: "border-amber-400 bg-gradient-to-br from-amber-50/50 via-white to-white",
    icon: Plane,
    iconBg: "bg-amber-500 text-white",
    features: [
      "Private 15-minute scenic helicopter flight",
      "Includes access for 2 persons",
      "Luxury chauffeur transfer from parlour",
      "Commemorative framed flight photo",
    ],
  },
  {
    tier: "2nd Mega Prize",
    title: "Couple VIP Movie Experience",
    subtitle: "Luxury Multiplex Recliner Passes",
    description:
      "Enjoy the latest blockbuster in plush ultra-luxury recliners with free gourmet popcorn, nachos, and Meridian handcrafted ice cream tubs served right at your seat.",
    badge: "100+ Winners",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    accentColor: "border-blue-300 bg-gradient-to-br from-blue-50/50 via-white to-white",
    icon: Film,
    iconBg: "bg-[#046bd2] text-white",
    features: [
      "2 VIP Recliner tickets at premium cinemas",
      "Curated gourmet snack & beverage hamper",
      "Free Meridian 500ml tub voucher",
      "Valid across Mumbai, Pune & Thane",
    ],
  },
  {
    tier: "3rd Instant Rewards",
    title: "Free Meridian Scoops & Tubs",
    subtitle: "Over 40,000+ Instant Winners",
    description:
      "Every festive tub gives you an instant chance to win a free signature scoop or 500ml parlour voucher valid at any authorized Meridian parlour across Maharashtra.",
    badge: "Instant Reward",
    badgeColor: "bg-red-100 text-[#dc1e43] border-red-200",
    accentColor: "border-red-200 bg-gradient-to-br from-red-50/40 via-white to-white",
    icon: Gift,
    iconBg: "bg-[#dc1e43] text-white",
    features: [
      "Instant digital coupon on WhatsApp / SMS",
      "Redeemable at 80+ Meridian parlours",
      "Choice from over 50+ fresh flavours",
      "Valid for 90 days from scan date",
    ],
  },
] as const;

export default function PrizeShowcase() {
  return (
    <section id="prizes" className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#dc1e43] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unwrap the Rewards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Grand Prizes That Take You Higher
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From the clouds above to the silver screen, our festive campaign is loaded with memorable celebrations for our loyal patrons.
          </p>
        </div>

        {/* Prizes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRIZES.map((prize) => {
            const Icon = prize.icon;
            return (
              <div
                key={prize.title}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-300 card-hover-depth flex flex-col justify-between ${prize.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide border ${prize.badgeColor}`}
                    >
                      {prize.badge}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${prize.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                    {prize.tier}
                  </p>
                  <h3 className="text-2xl font-black text-[#111111] leading-snug">
                    {prize.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 mt-1 mb-4">
                    {prize.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prize.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/60 mb-6">
                    {prize.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/enter"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors hover:border-slate-300"
                >
                  <span>Claim or Enter Draw</span>
                  <ArrowRight className="w-4 h-4 text-[#dc1e43]" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
