"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { gsap } from "@/lib/animation";
import { createTubPlaceholder } from "@/lib/placeholders";

const SIGNATURE_TUBS = [
  {
    name: "Honey Nut Crunch",
    desc: "Roasted almond and cashew crunch drenched in golden honey with velvety churned dairy cream.",
    tag: "Contest Star",
    price: "₹310",
    image: "/images/sec_02.png",
    alt: "Honey Nut Crunch Meridian 500ml tub",
    bgColor: "#2a1a08",
    fallback: createTubPlaceholder("Honey Nut Crunch", "Contest Star", "₹310", "#2a1a08", "#f59e0b"),
  },
  {
    name: "Alphonso Mango",
    desc: "100% pure Ratnagiri Alphonso mango pulp churned with rich whole milk. Pure sunshine in a scoop.",
    tag: "Pure Fruit",
    price: "₹340",
    image: "/images/sec_00.png",
    alt: "Real Alphonso Mango Meridian 500ml tub",
    bgColor: "#5c2406",
    fallback: createTubPlaceholder("Alphonso Mango", "Pure Fruit", "₹340", "#5c2406", "#fbbf24"),
  },
  {
    name: "Real Sitaphal",
    desc: "Creamy seasonal custard apple pulp infused in velvety buffalo milk cream. Pune's true signature.",
    tag: "Pune Signature",
    price: "₹340",
    image: "/images/sec_04.png",
    alt: "Real Sitaphal custard apple Meridian 500ml tub",
    bgColor: "#102d1d",
    fallback: createTubPlaceholder("Real Sitaphal", "Pune Signature", "₹340", "#102d1d", "#86efac"),
  },
  {
    name: "Belgian Truffle",
    desc: "Bittersweet dark Belgian cocoa layered with melted chocolate fudge and velvety cream ribbons.",
    tag: "Decadent",
    price: "₹350",
    image: "/images/sec_08.png",
    alt: "Belgian Chocolate Truffle Meridian 500ml tub",
    bgColor: "#1c0d0d",
    fallback: createTubPlaceholder("Belgian Truffle", "Decadent", "₹350", "#1c0d0d", "#e0a96d"),
  },
];

export function SignatureTubsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        {
          wide: "(min-width: 601px) and (prefers-reduced-motion: no-preference)",
          narrow: "(max-width: 600px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as { wide: boolean; narrow: boolean };
          const list = el.querySelector(".pies__list") as HTMLElement;
          if (!list) return;

          const cards = Array.from(list.querySelectorAll(".pie")) as HTMLElement[];
          const fan = [-12, 7, -4, 13, -8, 10];

          if (conditions.wide) {
            const timeline = gsap.timeline({
              defaults: { ease: "power2.out" },
              scrollTrigger: {
                id: "pies",
                trigger: list,
                start: "top 98%",
                end: "top 22%",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            });

            const offset = (card: HTMLElement) => {
              const box = list.getBoundingClientRect();
              const own = card.getBoundingClientRect();
              const currentX = (gsap.getProperty(card, "x") as number) || 0;
              return box.left + box.width / 2 - (own.left + own.width / 2) + currentX;
            };

            cards.forEach((card, index) => {
              timeline.fromTo(
                card,
                {
                  x: () => offset(card),
                  y: () => window.innerHeight * 0.3 - index * 14,
                  rotation: fan[index % fan.length] * 1.3,
                },
                {
                  x: () => offset(card),
                  y: 0,
                  rotation: fan[index % fan.length] * 1.3,
                  duration: 0.38,
                  ease: "power1.out",
                },
                0
              );
              timeline.fromTo(
                card,
                { x: () => offset(card), rotation: fan[index % fan.length] * 1.3 },
                { x: 0, rotation: 0, duration: 0.62, immediateRender: false },
                0.38
              );
            });
          } else {
            cards.forEach((card, index) => {
              const side = index % 2 ? 1 : -1;
              gsap.fromTo(
                card,
                { x: () => side * window.innerWidth * 0.55, rotation: side * 11 },
                {
                  x: 0,
                  rotation: 0,
                  ease: "power2.out",
                  scrollTrigger: {
                    id: `pies:card-${index}`,
                    trigger: card,
                    start: "top bottom",
                    end: "top 50%",
                    scrub: 0.5,
                  },
                }
              );
            });
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pies"
      data-8b-section="pies"
      data-ground="light"
      aria-labelledby="pies-title"
    >
      <span id="tubs" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <WaveDivider swell />

      <div className="pies__head">
        <h2 className="m-text-2" id="pies-title">
          Signature Tubs
        </h2>
        <p className="m-text">
          Crafted with 100% whole milk and natural seasonal fruits. Four that never leave the counter, and a contest QR code under every lid.
        </p>
      </div>

      <ul className="pies__list">
        {SIGNATURE_TUBS.map((tub) => (
          <li key={tub.name} className="pie">
            <figure className="pie__photo">
              <img
                src={tub.image}
                alt={tub.alt}
                width={900}
                height={1350}
                loading="lazy"
                style={{ background: tub.bgColor }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = tub.fallback;
                }}
              />
            </figure>
            <div className="pie__body">
              <h3 className="pie__name m-text-2">{tub.name}</h3>
              <p className="m-text">{tub.desc}</p>
            </div>
            <p className="pie__foot">
              <span className="m-text-4">{tub.tag}</span>
              <span className="m-badge">{tub.price}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="pies__more">
        <Link className="m-btn" href="/enter">
          <span className="m-btn__label">Enter Lucky Draw</span>
        </Link>
        <Link className="m-text-4 m-link" href="#flavours">
          Or explore 30+ parlour flavours ↓
        </Link>
      </div>
    </section>
  );
}
