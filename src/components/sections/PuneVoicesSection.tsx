"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { LiftText } from "@/components/ui/LiftText";
import { gsap } from "@/lib/animation";

const PUNE_VOICES = [
  {
    name: "Kaka Deshmukh",
    area: "FC Road • Since 1999",
    quote: "Every Sunday after misal, one family tub of Alphonso Mango. Twenty-five years, never skipped a single week.",
    image: "/images/sec_02.png",
    alt: "Kaka Deshmukh, loyal Pune customer",
  },
  {
    name: "Pooja & Rohan",
    area: "Kothrud",
    quote: "Scanned our Honey Nut tub on Friday night. Got our OTP confirmation in five seconds. Fingers crossed for the helicopter ride!",
    image: "/images/sec_04.png",
    alt: "Pooja and Rohan, contest participants",
  },
  {
    name: "Aarav Joshi",
    area: "Camp Parlour",
    quote: "Two scoops of Real Sitaphal in a fresh waffle cone after cricket at Deccan. Best pure dairy cream in Maharashtra.",
    image: "/images/sec_00.png",
    alt: "Aarav Joshi, regular visitor",
  },
  {
    name: "Dr. Meera Patil",
    area: "Bavdhan",
    quote: "Zero vegetable oil aftertaste. You can taste the 100% pure whole milk in the first spoonful. True authentic dairy craftsmanship.",
    image: "/images/sec_08.png",
    alt: "Dr. Meera Patil, dairy food lover",
  },
];

export function PuneVoicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const list = el.querySelector(".people__list");
        if (!list) return;

        const depth = [0.22, 0.42, 0.3, 0.52];
        const timeline = gsap.timeline({
          defaults: { ease: "power1.out" },
          scrollTrigger: {
            id: "people",
            trigger: list,
            start: "top bottom",
            end: "top 22%",
            scrub: 0.6,
          },
        });

        Array.from(list.querySelectorAll(".person")).forEach((person, index) => {
          timeline.fromTo(
            person,
            { y: () => window.innerHeight * depth[index % depth.length] },
            { y: 0, duration: 1 },
            0
          );
          const ring = person.querySelector(".person__ring");
          if (ring) {
            timeline.fromTo(
              ring,
              { scale: 0.78 },
              { scale: 1, duration: 0.5, ease: "back.out(2)" },
              0.42 + (index % 4) * 0.1
            );
          }
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="regulars" data-8b-section="people" data-ground="light" aria-labelledby="voices-title">
      <WaveDivider swell />

      <div className="people__head">
        <div>
          <span className="m-text-4">The Regulars</span>
          <h2 className="m-text-2" id="voices-title">
            Pune&apos;s Own
          </h2>
        </div>
        <p className="people__say m-text">
          Our customers know the difference between frozen vegetable fat and pure dairy cream. Here is what our <LiftText>generations</LiftText> of Pune ice cream lovers have to say.
        </p>
      </div>

      <div className="people__list">
        {PUNE_VOICES.map((person) => (
          <div key={person.name} className="person">
            <div className="person__photo">
              <Image
                src={person.image}
                alt={person.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="person__ring m-ring" aria-hidden="true" />
            </div>
            <h3 className="person__name m-text-2">{person.name}</h3>
            <span className="m-text-4 text-[#8c0d25]">{person.area}</span>
            <p className="m-text text-sm leading-relaxed">&quot;{person.quote}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
}

