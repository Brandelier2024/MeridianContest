"use client";

import React, { useEffect, useRef } from "react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PillButton } from "@/components/ui/PillButton";
import { LiftText } from "@/components/ui/LiftText";
import { gsap } from "@/lib/animation";
import { createGenericPlaceholder } from "@/lib/placeholders";

const OUTLETS_LIST = [
  { area: "FC Road", loc: "Opp. Goodluck Chowk, Deccan", timing: "11 AM - 11:30 PM" },
  { area: "Bavdhan", loc: "Bavdhan - Pashan Link Road", timing: "11 AM - 11:00 PM" },
  { area: "Kothrud", loc: "Near Karve Statue, Kothrud", timing: "11 AM - 11:00 PM" },
  { area: "Camp", loc: "Moledina Road, near Aurora Towers", timing: "11:30 AM - 11:30 PM" },
  { area: "Hadapsar", loc: "Magarpatta / Keshav Nagar", timing: "11 AM - 11:30 PM" },
  { area: "PCMC", loc: "Santoshi Mata Mandir Chowk, Pimpri", timing: "11 AM - 11:00 PM" },
];

const CORNER_FALLBACK = createGenericPlaceholder(
  "Meridian 1999",
  "Pune Parlours",
  340,
  600,
  "#2a1a08",
  "#ffbc7d"
);

export function ParloursSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const mark = el.querySelector(".corner__mark");
        const ring = el.querySelector(".corner__ring");
        if (!mark || !ring) return;

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "corner",
              trigger: mark,
              start: "top bottom",
              end: "center 52%",
              scrub: 0.6,
            },
          })
          .fromTo(".corner__ring", { scale: 6.5, rotation: -40 }, { scale: 1, rotation: 0, duration: 1, ease: "power2.out" }, 0)
          .fromTo(
            ".corner__ring ellipse",
            { strokeDashoffset: 0.7 },
            { autoRound: false, strokeDashoffset: 0, duration: 0.85 },
            0.15
          )
          .fromTo(
            ".corner__photo",
            { y: 220, rotation: -22 },
            { y: 0, rotation: 0, duration: 0.9, ease: "power2.out" },
            0.05
          );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="corner"
      data-8b-section="corner"
      data-ground="light"
      aria-labelledby="corner-title"
    >
      <span id="parlours" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <WaveDivider swell />

      <div className="corner__stage">
        {/* Left: Content & Hours */}
        <div className="corner__text">
          <div className="corner__head">
            <span className="m-text-4">Pune &amp; PCMC Parlours</span>
            <h2 className="m-text-2" id="corner-title">
              Find Your Nearest Parlour
            </h2>
            <p className="m-text">
              Walk into any of our iconic parlours to grab your favourite 500ml or 1L tub, peel the contest code on the spot, and enjoy <LiftText>pure</LiftText> churned cream straight from the counter.
            </p>
          </div>

          <div className="corner__hours">
            <p className="m-text-4 text-[#8c0d25] mb-2 font-bold">Featured Pune Outlets:</p>
            {OUTLETS_LIST.map((store) => (
              <dl key={store.area}>
                <dt className="m-text-4">{store.area} — {store.loc}</dt>
                <dd className="m-text text-sm font-semibold">{store.timing}</dd>
              </dl>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <PillButton
              variant="solid"
              href="https://maps.google.com/?q=Meridian+Ice+Creams+Pune"
              external
            >
              Directions on Google Maps ↗
            </PillButton>
            <PillButton variant="outline" href="/enter">
              Enter In Lucky Draw →
            </PillButton>
          </div>
        </div>

        {/* Right: Big Established '99' with animated SVG ellipse */}
        <div className="corner__mark-wrap">
          <span className="corner__mark m-text-3">99</span>
          <span className="corner__ring" aria-hidden="true">
            <svg viewBox="0 0 460 460">
              <ellipse
                cx="230"
                cy="230"
                rx="190"
                ry="170"
                transform="rotate(-12 230 230)"
              />
            </svg>
          </span>
          <div className="corner__photo">
            <div className="m-pill">
              <img
                src="/images/sec_02.png"
                alt="Meridian Honey Nut Crunch Tub"
                width={340}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ background: "#2a1a08" }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = CORNER_FALLBACK;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
