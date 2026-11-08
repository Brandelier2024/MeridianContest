"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { createGenericPlaceholder } from "@/lib/placeholders";

export interface FlavourItem {
  id: string;
  name: string;
  category: "all" | "fruit" | "nuts" | "chocolate" | "classic";
  tag: string;
  image: string;
  bgColor: string;
  accent: string;
  desc: string;
}

const MERIDIAN_FLAVOURS: FlavourItem[] = [
  {
    id: "sitaphal",
    name: "Sitaphal",
    category: "fruit",
    tag: "Pune Signature",
    image: "/images/flavors/sitaphal.jpg",
    bgColor: "#163323",
    accent: "#86efac",
    desc: "Fresh custard apple pulp infused in velvety buffalo milk cream.",
  },
  {
    id: "real-alphonso",
    name: "Real Alphonso",
    category: "fruit",
    tag: "Pure Ratnagiri Fruit",
    image: "/images/flavors/real-alphonso.jpg",
    bgColor: "#5c2406",
    accent: "#fbbf24",
    desc: "100% pure Ratnagiri Alphonso mango pulp churned with rich whole milk.",
  },
  {
    id: "honey-nut-crunch",
    name: "Honey Nut Crunch",
    category: "nuts",
    tag: "Contest Favourite",
    image: "/images/flavors/honey-nut-crunch.jpg",
    bgColor: "#2a1a08",
    accent: "#f59e0b",
    desc: "Roasted almond and cashew crunch tossed in golden wild honey.",
  },
  {
    id: "belgian-chocolate",
    name: "Belgian Chocolate",
    category: "chocolate",
    tag: "Decadent Cocoa",
    image: "/images/flavors/belgian-chocolate.jpg",
    bgColor: "#1c0d0d",
    accent: "#e0a96d",
    desc: "Bittersweet dark Belgian cocoa layered with melted chocolate fudge.",
  },
  {
    id: "tender-coconut",
    name: "Tender Coconut",
    category: "fruit",
    tag: "Natural Fruit",
    image: "/images/flavors/tender-coconut.jpg",
    bgColor: "#1a2c38",
    accent: "#7dd3fc",
    desc: "Real tender coconut malai scoops with delicate sweet coconut water.",
  },
  {
    id: "roasted-almond",
    name: "Roasted Almond",
    category: "nuts",
    tag: "Nut Rich",
    image: "/images/flavors/roasted-almond.jpg",
    bgColor: "#3b1e08",
    accent: "#fed7aa",
    desc: "Slow oven-roasted California almonds chopped into rich cream.",
  },
  {
    id: "brownie-burst",
    name: "Brownie Burst",
    category: "chocolate",
    tag: "Bakery Special",
    image: "/images/flavors/brownie-burst.jpg",
    bgColor: "#260e14",
    accent: "#fca5a5",
    desc: "Fudgy bakery brownie chunks folded in rich chocolate dairy cream.",
  },
  {
    id: "raspberry-ripple",
    name: "Raspberry Ripple",
    category: "fruit",
    tag: "Berry Swirl",
    image: "/images/flavors/raspberry-ripple.jpg",
    bgColor: "#450a1a",
    accent: "#f472b6",
    desc: "Tangy wild raspberry fruit ribbon swirled through sweet dairy vanilla.",
  },
  {
    id: "saffron-badam",
    name: "Saffron Badam",
    category: "nuts",
    tag: "Royal Indian",
    image: "/images/flavors/saffron-badam.jpg",
    bgColor: "#3d1f05",
    accent: "#fcd34d",
    desc: "Kashmiri saffron strands with slivered roasted almonds and cardamom.",
  },
  {
    id: "biscoff",
    name: "Lotus Biscoff",
    category: "chocolate",
    tag: "Caramel Crunch",
    image: "/images/flavors/biscoff.jpg",
    bgColor: "#2e1808",
    accent: "#f59e0b",
    desc: "Spiced caramelized speculoos cookie butter and crunchy biscuit crumb.",
  },
  {
    id: "gulkand",
    name: "Shahi Gulkand",
    category: "classic",
    tag: "Heritage Flavour",
    image: "/images/flavors/gulkand.jpg",
    bgColor: "#380d19",
    accent: "#fb7185",
    desc: "Sun-cooked rose petal preserve with cooling aromatic spices.",
  },
  {
    id: "ferrocher",
    name: "Ferrocher Hazelnut",
    category: "chocolate",
    tag: "Premium Nut",
    image: "/images/flavors/ferrocher.jpg",
    bgColor: "#20120b",
    accent: "#d4af37",
    desc: "Roasted hazelnut praline with velvety chocolate ganache ribbons.",
  },
  {
    id: "litchi",
    name: "Real Litchi",
    category: "fruit",
    tag: "Seasonal Pure Fruit",
    image: "/images/flavors/litchi.jpg",
    bgColor: "#2b141d",
    accent: "#fda4af",
    desc: "Juicy Shahi litchi fruit chunks suspended in cold churned whole milk.",
  },
  {
    id: "pista",
    name: "Pure Pista",
    category: "nuts",
    tag: "Nut Classic",
    image: "/images/flavors/pista.png",
    bgColor: "#132b1a",
    accent: "#86efac",
    desc: "Roasted green pistachios with pure whole milk and natural saffron hint.",
  },
  {
    id: "black-forest",
    name: "Black Forest",
    category: "chocolate",
    tag: "Cake & Cream",
    image: "/images/flavors/black-forest.jpg",
    bgColor: "#230f14",
    accent: "#f43f5e",
    desc: "Dark chocolate flakes with tart cherry compote and churned cream.",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    category: "classic",
    tag: "Celebration",
    image: "/images/flavors/red-velvet.jpg",
    bgColor: "#4c0514",
    accent: "#fca5a5",
    desc: "Moist red velvet sponge crumbs folded in sweet cream cheese cream.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Flavours" },
  { id: "fruit", label: "Fresh Fruit" },
  { id: "nuts", label: "Nuts & Crunch" },
  { id: "chocolate", label: "Choc & Desserts" },
  { id: "classic", label: "Heritage Classics" },
] as const;

export function FlavoursSliderSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const trackRef = useRef<HTMLDivElement | null>(null);

  const filteredFlavours =
    activeCategory === "all"
      ? MERIDIAN_FLAVOURS
      : MERIDIAN_FLAVOURS.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollLeft = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <section
      id="flavours"
      data-8b-section="flavours"
      data-ground="light"
      aria-labelledby="flavours-title"
    >
      <WaveDivider swell />

      {/* Head */}
      <div className="flavours__head">
        <span className="m-text-4 text-[#8c0d25]">The Real Indian Taste</span>
        <h2 className="m-text-2" id="flavours-title">
          Rich &amp; Delicious with Pure Goodness
        </h2>
        <p className="m-text">
          Enjoy the royal treat of Meridian ice creams. Crafted with 100% whole milk, zero vegetable oils, and real seasonal fruits. Over 25 years of making ice creams like no other.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flavours__filters" role="group" aria-label="Flavour categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            aria-pressed={activeCategory === cat.id}
            data-active={activeCategory === cat.id ? "true" : "false"}
            className="flavours__filter-btn"
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Interactive Horizontal Track */}
      <div
        ref={trackRef}
        className="flavours__track"
        tabIndex={0}
        role="region"
        aria-label="Flavour scoops carousel"
      >
        {filteredFlavours.map((flavour) => {
          const fallbackSvg = createGenericPlaceholder(
            flavour.name,
            flavour.tag,
            600,
            600,
            flavour.bgColor,
            flavour.accent
          );

          return (
            <article key={flavour.id} className="flavour-card">
              <figure className="flavour-card__photo">
                <img
                  src={flavour.image}
                  alt={`${flavour.name} ice cream scoop`}
                  width={500}
                  height={500}
                  loading="lazy"
                  style={{ background: flavour.bgColor }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackSvg;
                  }}
                />
              </figure>

              <div className="flavour-card__body">
                <h3 className="flavour-card__name m-text-2">{flavour.name}</h3>
                <p className="flavour-card__desc m-text">{flavour.desc}</p>
              </div>

              <div className="flavour-card__foot">
                <span className="m-badge border-current opacity-90 text-xs">
                  {flavour.tag}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Slider Nav Controls */}
      <div className="flavours__controls" aria-label="Slider navigation">
        <button
          type="button"
          onClick={scrollLeft}
          className="flavours__btn"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="m-text-4 text-xs tracking-widest uppercase opacity-75">
          Swipe or Drag to Explore
        </span>
        <button
          type="button"
          onClick={scrollRight}
          className="flavours__btn"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <Link className="m-btn" href="#corner">
          <span className="m-btn__label">Taste at Nearest Parlour</span>
        </Link>
      </div>
    </section>
  );
}

