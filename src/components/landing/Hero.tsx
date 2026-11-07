"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Sparkles, ArrowRight, ShieldCheck, Trophy, Award, Gift } from "lucide-react";

// Dynamic import for Three.js canvas to ensure client-only rendering
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] flex items-center justify-center bg-slate-50/50 rounded-2xl animate-pulse">
      <div className="flex flex-col items-center gap-3 text-slate-400">
        <Sparkles className="w-8 h-8 text-[#dc1e43] animate-spin" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          Loading 3D Experience...
        </span>
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F5FA] via-[#FFFDF9] to-white">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Copy, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Campaign Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#dc1e43] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#dc1e43]" />
              <span>Meridian Grand Festive Season 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] leading-[1.12] tracking-tight mb-6">
              Scan, Scratch &amp;{" "}
              <span className="text-[#dc1e43] relative inline-block">
                Win Joy!
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#dc1e43]/30"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Indulge in 100% pure dairy Meridian ice cream tubs. Peel &amp; scratch the secret
              seal under the lid to win a{" "}
              <strong className="text-slate-900 font-bold">
                Helicopter Joyride over Mumbai &amp; Pune
              </strong>
              , Couple Movie Tickets, or Instant Free Scoops!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/enter"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-extrabold text-white bg-[#dc1e43] hover:bg-[#b91535] shadow-lg shadow-red-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enter Code / Scan QR</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="#prizes"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all hover:border-slate-300"
              >
                <Trophy className="w-4 h-4 text-[#046bd2]" />
                <span>View Grand Prizes</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                  50,000+
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                  Assured Prizes
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#046bd2]">
                  100%
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                  Pure Dairy Quality
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#dc1e43]">
                  ₹15L+
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                  Prize Pool
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* 3D Canvas Box */}
            <div className="relative w-full aspect-square max-w-[480px]">
              <ThreeCanvas />

              {/* Floating Highlight Card 1: Helicopter Joyride */}
              <div className="absolute top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float pointer-events-none">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    Mega 1st Prize
                  </p>
                  <p className="text-sm font-extrabold text-slate-900">
                    Helicopter Joyride
                  </p>
                </div>
              </div>

              {/* Floating Highlight Card 2: Instant Scoop */}
              <div
                className="absolute -bottom-4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float pointer-events-none"
                style={{ animationDelay: "2.5s" }}
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#dc1e43] font-bold">
                  <Gift className="w-5 h-5 text-[#dc1e43]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#dc1e43] uppercase tracking-wider">
                    Instant Win
                  </p>
                  <p className="text-sm font-extrabold text-slate-900">
                    Free Scoops &amp; Tubs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

