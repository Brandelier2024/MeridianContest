"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function FlavorShowcase() {
  const [activeCategory, setActiveCategory] = useState<"all" | "featured" | "fruit" | "rich" | "sugarfree">("all");

  const flavors = [
    {
      name: "Honey Nut Crunch",
      category: "featured" as const,
      badge: "Official Contest Star",
      description: "Roasted almond and cashew crunch drenched in golden honey with velvety churned dairy ice cream.",
      tag: "Featured on Promo Video",
      image: "/images/sec_02.png",
      popular: true,
    },
    {
      name: "Real Alphonso Mango",
      category: "fruit" as const,
      badge: "Real Ratnagiri Pulp",
      description: "Crafted strictly with 100% pure Alphonso mango pulp and fresh whole milk. A summertime legend.",
      tag: "100% Pure Fruit",
      image: "/images/sec_00.png",
      popular: true,
    },
    {
      name: "Real Sitaphal (Custard Apple)",
      category: "fruit" as const,
      badge: "Pune Signature",
      description: "Creamy seasonal custard apple pulp infused in real cream. Meridian's most famous natural fruit flavor.",
      tag: "Seasonal Favorite",
      image: "/images/sec_04.png",
      popular: true,
    },
    {
      name: "Belgian Chocolate",
      category: "rich" as const,
      badge: "Imported Cocoa",
      description: "Deep, bittersweet Belgian cocoa blended to silky perfection with real dark chocolate chunks.",
      tag: "Decadent & Dark",
      image: "/images/sec_08.png",
      popular: false,
    },
    {
      name: "Tender Coconut",
      category: "fruit" as const,
      badge: "Coastal Delight",
      description: "Fresh tender coconut malai ribbons packed in light, refreshing pure milk ice cream.",
      tag: "Natural Refreshment",
      image: "/images/sec_01.png",
      popular: false,
    },
    {
      name: "Sugar-Free Rajbhog",
      category: "sugarfree" as const,
      badge: "Diabetic Friendly",
      description: "All the rich saffron and almond royal flavors of traditional Rajbhog with zero added sugar.",
      tag: "Guilt-Free Indulgence",
      image: "/images/sec_03.png",
      popular: false,
    },
  ];

  const filtered = activeCategory === "all" ? flavors : flavors.filter((f) => f.category === activeCategory);

  return (
    <section id="flavors" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#046bd2]/10 text-[#046bd2] text-xs font-bold tracking-wider uppercase mb-3">
            <span>The Real Indian Taste • 100% Pure Milk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] font-display tracking-tight">
            Flavours That Take You High
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334155]">
            Every Meridian tub is churned with pure dairy cream and natural fruits—no vegetable oils, no frozen desserts.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(
              [
                { id: "all", label: "All Flavours" },
                { id: "featured", label: "Contest Star" },
                { id: "fruit", label: "Natural Fruits" },
                { id: "rich", label: "Rich & Chocolate" },
                { id: "sugarfree", label: "Sugar-Free Range" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#046bd2] text-white shadow-md scale-105"
                    : "bg-[#F0F5FA] text-[#334155] hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flavors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((flv) => (
            <div
              key={flv.name}
              className="group bg-[#F0F5FA]/60 hover:bg-white rounded-3xl overflow-hidden border border-[#D1D5DB]/70 hover:border-[#046bd2] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={flv.image}
                    alt={flv.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#ffbc7d] border border-white/10">
                    {flv.badge}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      {flv.tag}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs text-white">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e293b] font-display group-hover:text-[#046bd2] transition-colors mb-2">
                    {flv.name}
                  </h3>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {flv.description}
                  </p>
                </div>
              </div>

              {/* Card Action */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#register"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-[#046bd2] bg-white group-hover:bg-[#046bd2] group-hover:text-white border border-[#046bd2]/40 text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Enter Contest With This Tub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
