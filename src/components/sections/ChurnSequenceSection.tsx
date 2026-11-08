"use client";

import React, { useEffect, useRef } from "react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { gsap } from "@/lib/animation";
import { createStepPlaceholder } from "@/lib/placeholders";

const CHURN_STEPS = [
  {
    num: 1,
    name: "Pure Whole Milk",
    note: "Sourced fresh every dawn from local Maharashtra dairy farms, test-verified for rich natural butterfat.",
    image: "/images/sec_01.png",
    alt: "Pure dairy fresh whole milk from local Maharashtra farms",
    bgColor: "#4a0a10",
    fallback: createStepPlaceholder(1, "Pure Whole Milk", "#4a0a10", "#ffdd78"),
  },
  {
    num: 2,
    name: "Real Seasonal Fruit",
    note: "Hand-picked Ratnagiri Alphonso mangoes, natural custard apples, and slow-roasted California almonds.",
    image: "/images/sec_00.png",
    alt: "Handpicked Ratnagiri Alphonso mango and fresh seasonal fruits",
    bgColor: "#7a2e05",
    fallback: createStepPlaceholder(2, "Real Seasonal Fruit", "#7a2e05", "#ffea78"),
  },
  {
    num: 3,
    name: "Slow Aging Vats",
    note: "Chilled for 24 hours in slow-aging vats so dairy proteins stabilize naturally without synthetic gums.",
    image: "/images/sec_03.png",
    alt: "Slow dairy aging vats stabilizing fresh cream",
    bgColor: "#1b2e24",
    fallback: createStepPlaceholder(3, "Slow Aging Vats", "#1b2e24", "#a3e635"),
  },
  {
    num: 4,
    name: "Batch Vat Churning",
    note: "Churned gently in small batches for dense, velvety scoops with zero air fluffing.",
    image: "/images/sec_04.png",
    alt: "Small batch vat churning of velvety ice cream",
    bgColor: "#5b121f",
    fallback: createStepPlaceholder(4, "Batch Churning", "#5b121f", "#fed7aa"),
  },
  {
    num: 5,
    name: "Lid QR Seal & Chill",
    note: "Tamper-evident lid sealed with secret contest QR code, flash-frozen at -28°C for pure freshness.",
    image: "/images/sec_02.png",
    alt: "Meridian contest tub with secret QR code under tamper seal",
    bgColor: "#2d0a3d",
    fallback: createStepPlaceholder(5, "Lid QR Seal", "#2d0a3d", "#fbcfe8"),
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
        const shots = Array.from(el.querySelectorAll<HTMLImageElement>(".dough__shot"));
        const names = Array.from(el.querySelectorAll<HTMLElement>(".dough__name"));
        const count = Math.min(shots.length, names.length);
        if (count < 2) return;

        const theme = getComputedStyle(document.documentElement);
        const ink = theme.getPropertyValue("--color-4").trim() || "#1c0b07";
        const light = theme.getPropertyValue("--color-2").trim() || "#fdf8f7";

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
          el.querySelector(".dough__frame-wrap"),
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
            { color: ink },
            { color: light, duration: 0.3 },
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
    <section
      ref={sectionRef}
      id="dough"
      data-8b-section="dough"
      aria-labelledby="dough-title"
    >
      <span id="churn" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <WaveDivider swell={false} />

      <div className="dough__head">
        <h2 className="m-text-2" id="dough-title" data-8b-motion="lift">
          I take <span className="m-lift">my</span> time
        </h2>
        <p className="m-text">
          Every tub of Meridian pure dairy ice cream starts with 100% whole milk. Five steps, no shortcuts, the same since 1999.
        </p>
      </div>

      <div className="dough__track">
        <div className="dough__stage">
          <ol className="dough__steps">
            {CHURN_STEPS.map((step) => (
              <li key={step.num} className="dough__step">
                <span className="dough__num m-text-4">Step {step.num}</span>
                <h3 className="dough__name m-text-2">{step.name}</h3>
                <p className="dough__note m-text">{step.note}</p>
              </li>
            ))}
          </ol>

          <div className="dough__frame-wrap">
            <div className="dough__frame">
              {CHURN_STEPS.map((step, idx) => (
                <img
                  key={step.num}
                  src={step.image}
                  alt={step.alt}
                  width={900}
                  height={1350}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="dough__shot"
                  style={{
                    background: step.bgColor,
                    clipPath: idx === 0 ? "none" : "inset(100% 0% 0% 0%)",
                  }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = step.fallback;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
