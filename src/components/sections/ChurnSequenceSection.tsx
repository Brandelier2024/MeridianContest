"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animation";

const CHURN_STEPS = [
  {
    num: "1",
    name: "Pure Whole Milk",
    note: "Sourced fresh every dawn from local Maharashtra dairy farms, test-verified for rich natural butterfat.",
    image: "/images/sec_01.png",
    alt: "Pure dairy fresh whole milk",
  },
  {
    num: "2",
    name: "Real Seasonal Fruit",
    note: "Hand-picked Ratnagiri Alphonso mangoes, natural custard apples, and slow-roasted California almonds.",
    image: "/images/sec_00.png",
    alt: "Handpicked Ratnagiri Alphonso mango pulp",
  },
  {
    num: "3",
    name: "Slow Aging Vats",
    note: "Chilled for 24 hours in slow-aging vats so dairy proteins stabilize naturally without synthetic gums.",
    image: "/images/sec_03.png",
    alt: "Slow dairy aging vats",
  },
  {
    num: "4",
    name: "Batch Vat Churning",
    note: "Churned gently in small batches for dense, velvety scoops with zero air fluffing.",
    image: "/images/sec_04.png",
    alt: "Batch churning of velvety dairy ice cream",
  },
  {
    num: "5",
    name: "Lid QR Seal & Deep Chill",
    note: "Tamper-evident lid sealed with secret contest QR code, flash-frozen at -28°C for pure freshness.",
    image: "/images/sec_02.png",
    alt: "Meridian contest tub with tamper-proof QR code lid seal",
  },
];

export function ChurnSequenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const track = el.querySelector(".dough__track");
        const shots = Array.from(el.querySelectorAll(".dough__shot"));
        const names = Array.from(el.querySelectorAll(".dough__name"));
        const count = Math.min(shots.length, names.length);
        if (count < 2) return;

        el.setAttribute("data-dough-held", "");
        el.style.setProperty("--dough-count", String(count));

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            id: "dough",
            trigger: track,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });

        timeline.fromTo(
          ".dough__frame-wrap",
          { rotation: -13 },
          { rotation: 0, duration: count },
          0
        );

        shots.slice(1, count).forEach((shot, index) => {
          timeline.fromTo(
            shot,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power2.inOut" },
            index + 0.3
          );
        });

        names.slice(1, count).forEach((name, index) => {
          timeline.fromTo(
            name,
            { color: "var(--color-4)" },
            { color: "var(--color-2)", duration: 0.3 },
            index + 0.55
          );
        });

        timeline.set(shots.slice(1, count), { clipPath: "none" }, count);
      });
    }, el);

    return () => {
      el.removeAttribute("data-dough-held");
      el.style.removeProperty("--dough-count");
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="churn" data-8b-section="dough" aria-labelledby="churn-title">
      <div className="dough__track">
        <div className="dough__stage">
          {/* Steps List */}
          <div className="dough__steps-wrap">
            <div className="dough__head">
              <span className="m-text-4">The Craft</span>
              <h2 className="m-text-2" id="churn-title">
                The Churn
              </h2>
            </div>

            <ol className="dough__steps">
              {CHURN_STEPS.map((step, idx) => (
                <li key={step.name} className="dough__step" data-active={idx === 0 ? "" : undefined}>
                  <span className="m-text-4">0{step.num}</span>
                  <div>
                    <h3 className="dough__name m-text-2" style={{ color: idx === 0 ? "var(--color-2)" : undefined }}>
                      {step.name}
                    </h3>
                    <p className="dough__note m-text">{step.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Tilted Photo Frame */}
          <div className="dough__frame-wrap">
            <div className="dough__frame">
              {CHURN_STEPS.map((step, idx) => (
                <Image
                  key={step.name}
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="dough__shot"
                  style={{
                    zIndex: idx + 1,
                    clipPath: idx === 0 ? "none" : "inset(100% 0% 0% 0%)",
                  }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
