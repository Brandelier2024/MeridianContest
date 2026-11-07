"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, Sparkles } from "lucide-react";

const CITIES = [
  { id: "all", label: "All Cities" },
  { id: "pune", label: "Pune & PCMC" },
  { id: "mumbai", label: "Mumbai" },
  { id: "thane", label: "Thane & Navi Mumbai" },
] as const;

const STORES = [
  {
    name: "Meridian Flagship Parlour — FC Road",
    city: "pune",
    area: "Fergusson College Road, Shivajinagar",
    address: "Shop 4, Opp. Goodluck Cafe, FC Road, Pune 411004",
    timing: "11:00 AM – 12:30 AM Daily",
    phone: "+91 20 2565 4488",
  },
  {
    name: "Meridian Parlour — Kothrud",
    city: "pune",
    area: "Karve Road, Kothrud",
    address: "Ground Floor, City Pride Complex, Kothrud, Pune 411038",
    timing: "11:00 AM – 12:00 AM Daily",
    phone: "+91 20 2544 1122",
  },
  {
    name: "Meridian Parlour — Viman Nagar",
    city: "pune",
    area: "Near Phoenix Marketcity",
    address: "Shop 12, Dutta Mandir Chowk, Viman Nagar, Pune 411014",
    timing: "12:00 PM – 1:00 AM Daily",
    phone: "+91 20 4123 7799",
  },
  {
    name: "Meridian Parlour — Bandra West",
    city: "mumbai",
    area: "Hill Road, Bandra",
    address: "Plot 82, Near St. Peter's Church, Hill Road, Bandra West, Mumbai 400050",
    timing: "12:00 PM – 1:30 AM Daily",
    phone: "+91 22 2640 9900",
  },
  {
    name: "Meridian Parlour — Juhu",
    city: "mumbai",
    area: "Juhu Tara Road",
    address: "Shop 3, Sea Princess Arcade, Juhu Tara Road, Mumbai 400049",
    timing: "12:00 PM – 2:00 AM Daily",
    phone: "+91 22 2618 3355",
  },
  {
    name: "Meridian Parlour — Thane Meadows",
    city: "thane",
    area: "Vasant Vihar, Pokhran Road 2",
    address: "Shop 8, Glady Alwares Road, Thane West 400610",
    timing: "11:30 AM – 12:00 AM Daily",
    phone: "+91 22 2172 6644",
  },
] as const;

export default function StoreLocator() {
  const [selectedCity, setSelectedCity] = useState<string>("all");

  const filteredStores =
    selectedCity === "all"
      ? STORES
      : STORES.filter((s) => s.city === selectedCity);

  return (
    <section id="stores" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#046bd2] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>80+ Outlets in Maharashtra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Find Your Nearest Meridian Parlour
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Pick up your festive tub and claim your instant scoop vouchers at any of our parlour locations.
          </p>
        </div>

        {/* City Filter with ARIA Pressed State */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              aria-pressed={selectedCity === city.id}
              className={`min-h-[44px] px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                selectedCity === city.id
                  ? "bg-[#046bd2] text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {city.label}
            </button>
          ))}
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.name}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold uppercase tracking-wide mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#dc1e43]" />
                  <span>{store.area}</span>
                </div>

                <h3 className="text-lg font-black text-[#111111] mb-2 leading-snug">
                  {store.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {store.address}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{store.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <a
                      href={`tel:${store.phone.replace(/\s+/g, "")}`}
                      className="text-[#046bd2] hover:underline font-semibold"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600">
                  Contest Tubs Available
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.name + " " + store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#dc1e43] rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
