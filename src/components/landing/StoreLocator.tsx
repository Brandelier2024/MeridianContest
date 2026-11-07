"use client";

import React, { useState } from "react";
import { MapPin, Clock, Navigation, Phone, ExternalLink } from "lucide-react";
import { PUNE_OUTLETS, BRAND } from "@/lib/constants";

export function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = PUNE_OUTLETS.filter(
    (o) =>
      o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.landmark.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="outlets" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-900" />
            <span>Pune &amp; PCMC Parlours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Find Your Nearest Meridian Parlour
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Grab a tub in-store today to scan the contest QR code on the spot!
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search area (e.g. FC Road, Bavdhan, Kothrud)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Navigation className="w-5 h-5 text-blue-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Parlour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((store) => (
            <div
              key={store.name}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold">
                    {store.city}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {store.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4">{store.area}</p>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
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
                  className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#register"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-amber-900 bg-amber-400/30 hover:bg-amber-400 transition-colors"
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
