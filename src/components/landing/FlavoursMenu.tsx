"use client";

import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Flavours" },
  { id: "naturals", label: "Real Naturals" },
  { id: "royal", label: "Royal Delights" },
  { id: "chocolate", label: "Chocolate Obsession" },
] as const;

const FLAVOURS = [
  {
    name: "Alphonso King Mango",
    category: "naturals",
    description: "Made exclusively with pure Ratnagiri Hapus mango pulp. Rich, pulpy, and tropical.",
    badge: "Bestseller",
    badgeColor: "bg-amber-100 text-amber-800",
    ingredients: ["Fresh Cow Milk", "Ratnagiri Alphonso Pulp", "Natural Cream"],
  },
  {
    name: "Tender Coconut Malai",
    category: "naturals",
    description: "Real tender coconut water and tender coconut malai scoops for a light, refreshing taste.",
    badge: "Signature",
    badgeColor: "bg-emerald-100 text-emerald-800",
    ingredients: ["Tender Coconut Meat", "Coconut Water", "Pure Dairy Cream"],
  },
  {
    name: "Royal Rajbhog Gold",
    category: "royal",
    description: "Infused with rich saffron threads, crunchy California almonds, Iranian pistachios, and green cardamom.",
    badge: "Festive Special",
    badgeColor: "bg-red-100 text-[#dc1e43]",
    ingredients: ["Kashmiri Saffron", "Dry Roasted Almonds", "Pistachio", "Cardamom"],
  },
  {
    name: "Belgian Dark Fantasy",
    category: "chocolate",
    description: "Intense 70% dark Belgian cocoa blended into silky rich cream with crunchy chocolate flakes.",
    badge: "Decadent",
    badgeColor: "bg-stone-200 text-stone-800",
    ingredients: ["70% Belgian Cocoa", "Roasted Cocoa Nibs", "Rich Dairy Milk"],
  },
  {
    name: "Roasted Almond Kaju Delight",
    category: "royal",
    description: "Golden roasted almonds and buttery cashew nuts folded in a rich creamy caramel milk base.",
    badge: "Crunchy",
    badgeColor: "bg-amber-100 text-amber-900",
    ingredients: ["Roasted Almonds", "Goan Cashews", "Caramelized Milk Cream"],
  },
  {
    name: "Creamy Fresh Sitaphal",
    category: "naturals",
    description: "Hand-deseeded custard apple pulp blended gently to preserve the distinct natural fruity texture.",
    badge: "Seasonal Classic",
    badgeColor: "bg-emerald-100 text-emerald-800",
    ingredients: ["Fresh Custard Apple", "Pure Milk Solids", "Cane Sugar"],
  },
] as const;

export default function FlavoursMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFlavours =
    activeCategory === "all"
      ? FLAVOURS
      : FLAVOURS.filter((f) => f.category === activeCategory);

  return (
    <section id="flavours" className="py-20 lg:py-28 bg-[#F0F5FA]/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#dc1e43] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pure Dairy Goodness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Original Taste &amp; Quality in Every Scoop
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Crafted with 100% pure milk and natural ingredients. Every tub is eligible for the Scan &amp; Win lucky draw.
          </p>
        </div>

        {/* Filter Tabs with Accessible ARIA Pressed & 44px Touch Targets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`min-h-[44px] px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#dc1e43] text-white shadow-md shadow-red-500/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Flavours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFlavours.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all card-hover-depth flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    500ml &amp; 1L Tubs
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#111111] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Key Ingredients:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium"
                    >
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>{ing}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
