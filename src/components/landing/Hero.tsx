"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, QrCode, ArrowRight, X, Award, CheckCircle } from "lucide-react";

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    if (videoModalOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setVideoModalOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [videoModalOpen]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#046bd2] via-[#045cb4] to-[#046bd2] text-white">
      {/* Soft background ambient dairy lighting */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#ffbc7d]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Authentic Brand Crest Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#ffbc7d] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#da0e2f]" />
              <span>Pune&apos;s Favourite Dairy Ice Cream • Since 1999</span>
            </div>

            {/* Main Headline in Baloo Da 2 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-[1.12] text-white">
              Win a <span className="text-[#ffbc7d]">Helicopter Ride</span> <br className="hidden sm:inline" />
              &amp; VIP Movie Tickets
            </h1>

            {/* Pure Dairy Proposition */}
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Buy any 500ml or 1L tub of <strong className="text-white font-bold">Meridian Ice Cream</strong>, scan the secret QR code under the lid, and enter our grand festival lucky draw!
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#register"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-7 py-3.5 rounded-2xl text-sm font-bold text-[#1e293b] bg-[#ffbc7d] hover:bg-[#fed7aa] shadow-lg shadow-black/10 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <QrCode className="w-4 h-4 mr-2.5 text-[#da0e2f]" />
                <span>Scan &amp; Enter Lucky Draw</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-[#da0e2f] flex items-center justify-center mr-2.5 shadow-xs">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                <span>Watch Campaign Video (10s)</span>
              </button>
            </div>

            {/* Real Quality Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#ffbc7d] font-display">100%</p>
                <p className="text-xs text-white/80 font-semibold">Pure Dairy Milk</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">25+ Yrs</p>
                <p className="text-xs text-white/80 font-semibold">Pune Heritage</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#ffbc7d] font-display">Weekly</p>
                <p className="text-xs text-white/80 font-semibold">Lucky Draws</p>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Campaign Video Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white/25 bg-[#045cb4]">
              
              {/* Campaign Header Tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#111111]/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-[#da0e2f] animate-pulse" />
                <span>Official TV Commercial</span>
              </div>

              {/* Real Looping Video */}
              <div className="relative aspect-[4/5] w-full bg-slate-900">
                <video
                  src="/videos/meridian-promo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#045cb4] via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Bottom Card Strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#045cb4] via-[#045cb4]/95 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#ffbc7d] font-bold uppercase tracking-wider block">
                      Honey Nut Crunch &amp; Real Alphonso
                    </span>
                    <h3 className="text-lg font-bold text-white font-display">
                      Buy Any Flavour Tub
                    </h3>
                  </div>
                  <a
                    href="#register"
                    className="min-h-[44px] inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-[#1e293b] bg-white hover:bg-[#ffbc7d] shadow-sm transition-colors"
                  >
                    Enter Draw
                  </a>
                </div>
              </div>

            </div>

            {/* Verified Winner Micro-Card */}
            <div className="absolute -bottom-5 -left-5 bg-white text-[#1e293b] p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#da0e2f]/10 text-[#da0e2f] flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-[#da0e2f]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1e293b]">Helicopter Joyride Draw</p>
                <p className="text-[11px] text-[#64748b]">Scan QR on tub to qualify</p>
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
          aria-label="Meridian Contest Campaign Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
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
              <p className="text-sm font-semibold text-slate-200">
                Meridian Ice Creams — &quot;Win a Helicopter Ride &amp; Movie Tickets&quot;
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
