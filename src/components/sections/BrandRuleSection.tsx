"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { LiftText } from "@/components/ui/LiftText";
import { gsap } from "@/lib/animation";

export function BrandRuleSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        {
          wide: "(min-width: 761px) and (prefers-reduced-motion: no-preference)",
          narrow: "(max-width: 760px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as { wide: boolean; narrow: boolean };
          const track = el.querySelector(".rule__track") as HTMLElement;
          const line = el.querySelector(".rule__line") as HTMLElement;
          const words = Array.from(line.querySelectorAll(".rule__word")) as HTMLElement[];

          el.setAttribute("data-rule-held", "");

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "rule",
              trigger: track,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
            },
          });

          if (conditions.wide) {
            const size = 2.8;
            timeline
              .fromTo(
                line,
                { scale: size, x: () => (line.offsetWidth * size) / 2 + window.innerWidth / 2 },
                {
                  x: () =>
                    -((line.offsetWidth * size) / 2 - window.innerWidth / 2 + window.innerWidth * 0.04),
                  duration: 0.68,
                },
                0
              )
              .to(line, { x: 0, scale: 1, duration: 0.27, ease: "power2.inOut" }, 0.68);
          } else {
            words.forEach((word, index) => {
              const side = index % 2 ? -1 : 1;
              timeline
                .fromTo(
                  word,
                  { scale: 1.7, x: () => side * (window.innerWidth / 2 + word.offsetWidth * 0.85 + 12) },
                  { x: () => -side * word.offsetWidth * 0.22, duration: 0.42 },
                  index * 0.27
                )
                .to(
                  word,
                  { x: 0, scale: 1, duration: 0.18, ease: "power2.inOut" },
                  index * 0.27 + 0.42
                );
            });
          }

          timeline.fromTo(
            ".rule__pill",
            { y: () => window.innerHeight * 0.5, rotation: -48 },
            { y: 0, rotation: 0, duration: 0.95, ease: "power1.out" },
            0
          );

          const rise = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "rule:rings",
              trigger: track,
              start: "top 80%",
              end: () =>
                `top+=${Math.round((track.offsetHeight - window.innerHeight) * 0.35)} top`,
              scrub: 0.6,
            },
          });

          el.querySelectorAll(".rule__ring").forEach((ring, index) => {
            rise.fromTo(
              ring,
              { y: () => window.innerHeight * (0.45 + (index % 4) * 0.22) },
              { y: 0, duration: 0.8 + (index % 3) * 0.1 },
              0
            );
          });
        }
      );
    }, el);

    return () => {
      el.removeAttribute("data-rule-held");
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="rule" data-8b-section="rule" aria-labelledby="rule-title">
      <div className="rule__track">
        <div className="rule__stage">
          {/* Decorative Rings */}
          <div className="rule__rings" aria-hidden="true">
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
            <span className="rule__ring m-ring" />
          </div>

          <div className="rule__top">
            <h2 className="m-text-4" id="rule-title">
              The Meridian Rule
            </h2>
            <p className="rule__say m-text-5">
              Nobody leaves our parlour with <LiftText>just</LiftText> one scoop. When it comes to pure dairy, the answer is <LiftText>always</LiftText> yes.
            </p>
          </div>

          <p
            className="rule__line m-text-3"
            style={{ "--len": 17 } as React.CSSProperties}
          >
            <span className="rule__word">EVERY</span>{" "}
            <span className="rule__word">TUB</span>{" "}
            <span className="rule__word">CAN</span>{" "}
            <span className="rule__word">FLY</span>
          </p>

          <div className="rule__pill">
            <div className="m-pill">
              <Image
                src="/images/sec_06.png"
                alt="Helicopter skyline joyride experience"
                width={900}
                height={1125}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="rule__note m-text-4">
            Peel the secret seal on any 500ml or 1L tub to enter our grand helicopter joyride draw.
          </p>
        </div>
      </div>
    </section>
  );
}
