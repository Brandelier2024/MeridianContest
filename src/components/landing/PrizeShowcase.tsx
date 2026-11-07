"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, Ticket, Plane } from "lucide-react";

export function PrizeShowcase() {
  return (
    <section id="prizes" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Grand Contest Rewards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            What You Can Win
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Every valid entry has an equal chance to win our headline prizes. Lucky draw winners are announced weekly!
          </p>
        </div>

        {/* Prizes Grid: 2 Heavyweight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Helicopter Joyride (Grand Prize) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-blue-950/90 to-slate-900 p-8 sm:p-10 border-2 border-amber-400/50 shadow-2xl shadow-amber-500/10 flex flex-col justify-between group">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 text-xs font-black tracking-wider uppercase shadow-md">
                <Plane className="w-3.5 h-3.5" />
                <span>Mega Grand Prize</span>
              </span>
              <span className="text-xs text-amber-300 font-semibold">
                Multi-Winner Draw
              </span>
            </div>

            {/* Media Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-8 border border-white/10 bg-slate-800">
              <Image
                src="/images/sec_06.png"
                alt="Helicopter Ride over Pune City"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">Aviation Experience</p>
                  <p className="text-sm font-semibold text-white">Private Couple Joyride</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-900/80 backdrop-blur-md flex items-center justify-center text-amber-300">
                  <Plane className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                City Aerial Helicopter Joyride
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Take to the skies on an exhilarating helicopter tour over the historic skyline. Enjoy bird&apos;s-eye views with personal headsets and luxury treatment.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-slate-200 gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Exclusive 2-passenger joyride experience</span>
                </li>
                <li className="flex items-center text-sm text-slate-200 gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Aviation headsets with pilot commentary</span>
                </li>
                <li className="flex items-center text-sm text-slate-200 gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Full safety briefing &amp; souvenir video footage</span>
                </li>
              </ul>
            </div>

            {/* Bottom CTA */}
            <a
              href="#register"
              className="w-full min-h-[44px] inline-flex items-center justify-center py-4 rounded-2xl font-bold text-sm text-blue-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.02]"
            >
              Enter to Win Helicopter Ride
            </a>
          </div>

          {/* Card 2: Movie Tickets Experience */}
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 p-8 sm:p-10 border border-white/10 hover:border-blue-400/40 shadow-2xl flex flex-col justify-between group transition-colors">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-black tracking-wider uppercase">
                <Ticket className="w-3.5 h-3.5" />
                <span>Weekly Star Prize</span>
              </span>
              <span className="text-xs text-blue-300 font-semibold">
                Multiple Winners Every Week
              </span>
            </div>

            {/* Media Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-8 border border-white/10 bg-slate-800">
              <Image
                src="/images/sec_08.png"
                alt="VIP Recliner Movie Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-300 font-bold uppercase tracking-wider">Luxury Cinema Night</p>
                  <p className="text-sm font-semibold text-white">Pair of VIP Recliner Tickets</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-400/20 backdrop-blur-md flex items-center justify-center text-amber-300">
                  <Ticket className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                VIP Recliner Movie Experience
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Sink into ultra-comfortable luxury recliners for the hottest new blockbuster. Complete with large gourmet popcorn and chilled drinks on us!
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-slate-200 gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>2x VIP Luxury Recliner seats at top multiplexes</span>
                </li>
                <li className="flex items-center text-sm text-slate-200 gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>Complimentary tub of theatre popcorn &amp; beverages</span>
                </li>
                <li className="flex items-center text-sm text-slate-200 gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>Flexible booking for any movie of your choice</span>
                </li>
              </ul>
            </div>

            {/* Bottom CTA */}
            <a
              href="#register"
              className="w-full min-h-[44px] inline-flex items-center justify-center py-4 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]"
            >
              Enter for Movie Tickets
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
