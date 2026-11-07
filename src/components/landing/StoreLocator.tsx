"use client";

import React, { useState } from "react";
import { MapPin, Clock, Navigation, ExternalLink, QrCode } from "lucide-react";
import { PUNE_OUTLETS } from "@/lib/constants";

export function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = PUNE_OUTLETS.filter(
    (o) =>
      o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.landmark.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="outlets" className="py-20 md:py-28 bg-[#F0F5FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#046bd2]/10 text-[#046bd2] text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#046bd2]" />
            <span>Pune &amp; PCMC Parlours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] font-display tracking-tight">
            Find Your Nearest Meridian Parlour
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334155]">
            Grab your favourite 500ml or 1L tub in-store today to scan the contest QR code on the spot.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search area (e.g. FC Road, Bavdhan, Kothrud)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#D1D5DB] rounded-2xl text-sm font-medium focus:ring-2 focus:ring-[#046bd2] focus:border-[#046bd2] focus:outline-none shadow-sm text-[#1e293b]"
              />
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Navigation className="w-5 h-5 text-[#046bd2]" />
              </div>
            </div>
          </div>
        </div>

        {/* Parlour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((store) => (
            <div
              key={store.name}
              className="bg-white rounded-3xl p-6 border border-[#D1D5DB]/70 hover:border-[#046bd2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#046bd2]/10 text-[#046bd2] text-xs font-bold">
                    {store.city}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1e293b] font-display mb-1">
                  {store.name}
                </h3>
                <p className="text-xs text-[#64748b] mb-4">{store.area}</p>

                <div className="space-y-2.5 text-xs text-[#334155]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#046bd2] shrink-0 mt-0.5" />
                    <span>{store.landmark}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{store.timing}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://maps.google.com/?q=Meridian+Ice+Cream+${encodeURIComponent(store.area + " Pune")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#046bd2] hover:text-[#045cb4] flex items-center gap-1.5"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#register"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#046bd2] bg-[#F0F5FA] hover:bg-[#046bd2] hover:text-white transition-colors"
                >
                  Enter Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
