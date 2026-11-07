"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Check, ArrowRight } from "lucide-react";

export function PrizeShowcase() {
  return (
    <section id="prizes" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dc1e43]/10 text-[#dc1e43] text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#dc1e43]" />
            <span>Festival Lucky Draw Prizes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] font-display tracking-tight">
            Grand Prizes That Take You High
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334155]">
            Every verified tub code gives you an entry into our weekly draws and grand aerial finale.
          </p>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Helicopter Joyride (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#D1D5DB]/70 bg-[#fdf8f7] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/sec_06.png"
                  alt="Helicopter Joyride Experience"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                
                {/* Grand Prize Badge */}
                <div className="absolute top-4 left-4 bg-[#f59e0b] text-[#111111] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md">
                  Grand Prize
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-bold bg-[#dc1e43]/90 backdrop-blur-md px-3 py-1 rounded-full">
                    Aerial City Skyline Tour
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-display mt-2 drop-shadow-sm">
                    VIP Helicopter Joyride
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  Fly high above the city skyline with someone special. A private, breathtaking helicopter ride giving you a once-in-a-lifetime bird&apos;s-eye view.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Private helicopter ride for 2 passengers",
                    "Dedicated certified aviation pilot",
                    "HD commemorative in-flight photos",
                    "Exclusive winner pickup assistance",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#1e293b]">
                      <span className="w-5 h-5 rounded-full bg-[#dc1e43]/10 text-[#dc1e43] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Link
                href="/enter"
                className="w-full min-h-[44px] inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#dc1e43] hover:bg-[#b81435] shadow-md transition-colors gap-2"
              >
                <span>Enter to Win Helicopter Ride</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Movie Tickets Combo (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#D1D5DB]/70 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/sec_08.png"
                  alt="VIP Cinema Movie Experience"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-[#dc1e43] text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Weekly Prize
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-black font-display drop-shadow-sm">
                    VIP Cinema Movie Tickets
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm text-[#334155] leading-relaxed">
                  Enjoy your favourite blockbuster in premium luxury recliner seating, complete with gourmet snacks &amp; beverages combo.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Couple VIP recliner seats at premier multiplexes",
                    "Complimentary popcorn & beverage combo",
                    "Multiple winners drawn every week",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#1e293b]">
                      <span className="w-5 h-5 rounded-full bg-[#dc1e43]/10 text-[#dc1e43] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Link
                href="/enter"
                className="w-full min-h-[44px] inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-[#dc1e43] bg-[#fff0f3] hover:bg-[#dc1e43] hover:text-white border border-[#dc1e43]/30 transition-colors gap-2"
              >
                <span>Enter for Weekly Movie Tickets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
