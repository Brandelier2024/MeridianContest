"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Play, ShieldCheck, QrCode, ArrowRight, X, Plane } from "lucide-react";

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!videoModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoModalOpen]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#072559] via-[#0b3b8c] to-[#0d47a1] text-white">
      {/* Background Decorative Circles & Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Contest Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>Official Meridian Ice Creams Promotion</span>
              <span className="text-white/40">•</span>
              <span className="text-white">Valid Across All Parlours</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-white drop-shadow-sm">
              Win a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">Helicopter Ride</span> <br />
              &amp; Movie Tickets!
            </h1>

            {/* Tagline & Description */}
            <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Grab your favourite tub of <strong className="text-amber-300 font-semibold">Meridian Ice Cream</strong>, scan the unique QR code, and enter our mega lucky draw!
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#register"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-blue-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 transition-all duration-200 group"
              >
                <QrCode className="w-5 h-5 mr-3 text-blue-950" />
                <span>Scan &amp; Enter Draw</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-4 rounded-2xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center mr-3">
                  <Play className="w-4 h-4 text-amber-300 fill-amber-300" />
                </div>
                <span>Watch Promo (10s)</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-300">100%</p>
                <p className="text-xs text-blue-200 font-medium">Real Dairy Milk</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">25+ Yrs</p>
                <p className="text-xs text-blue-200 font-medium">Pune&apos;s Favourite</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-300">Weekly</p>
                <p className="text-xs text-blue-200 font-medium">Lucky Draws</p>
              </div>
            </div>
          </div>

          {/* Right Column: Video Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/60 border-4 border-white/20 bg-blue-950">
              
              {/* Promo Video Card Header */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured Campaign</span>
              </div>

              {/* Looping Promo Video */}
              <div className="relative aspect-[9/12] sm:aspect-[4/5] w-full bg-slate-900">
                <video
                  src="/videos/meridian-promo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-blue-950 via-blue-950/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                      Honey Nut Crunch &amp; More
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Buy Any Flavour Tub
                    </h3>
                  </div>
                  <a
                    href="#register"
                    className="min-h-[44px] inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-colors"
                  >
                    Enter Now
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Winner Alert Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Plane className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Helicopter Ride Awaits!</p>
                <p className="text-[11px] text-slate-500">Scan QR on tub to qualify</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Video Modal Popup */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Campaign Promo Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full">
              <video
                src="/videos/meridian-promo.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-slate-900 text-center">
              <p className="text-sm text-slate-300">
                Meridian Ice Creams — &quot;Win a Helicopter Ride &amp; Movie Tickets&quot; Campaign
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
