"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PillButton } from "@/components/ui/PillButton";
import { LiftText } from "@/components/ui/LiftText";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { gsap } from "@/lib/animation";

export function OpeningHeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const first = el.querySelector(".opening__first");
        const windowFrame = el.querySelector(".opening__window");
        const rings = Array.from(el.querySelectorAll(".opening__ring"));

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            id: "opening",
            trigger: first,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(".opening__line--1", { xPercent: -42, duration: 1 }, 0)
          .to(".opening__line--2", { xPercent: 34, duration: 1 }, 0)
          .to(
            ".opening__pill",
            { y: () => window.innerHeight * 0.3, rotation: 34, duration: 0.85, ease: "power1.in" },
            0
          )
          .to(".opening__wave", { scaleY: 3.2, duration: 0.42, ease: "power1.out" }, 0)
          .to(".opening__wave", { scaleY: 1, duration: 0.34, ease: "power1.inOut" }, 0.42)
          .fromTo(
            ".opening__window",
            { clipPath: "circle(6% at 50% 50%)" },
            { clipPath: "circle(76% at 50% 50%)", duration: 0.62, ease: "power2.inOut" },
            0.38
          )
          .fromTo(
            ".opening__window img",
            { scale: 1.35 },
            { scale: 1, duration: 0.62 },
            0.38
          )
          .set(".opening__window", { clipPath: "none" }, 1);

        rings.forEach((ring, index) => {
          timeline.to(
            ring,
            { y: () => -window.innerHeight * (0.35 + (index % 3) * 0.18), duration: 1 },
            0
          );
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="opening" data-8b-section="opening" aria-labelledby="opening-title">
      {/* Red First Screen */}
      <div className="opening__first">
        <div className="opening__rings" aria-hidden="true">
          <span className="opening__ring"><i className="m-ring" /></span>
          <span className="opening__ring"><i className="m-ring" /></span>
          <span className="opening__ring"><i className="m-ring" /></span>
          <span className="opening__ring"><i className="m-ring" /></span>
          <span className="opening__ring"><i className="m-ring" /></span>
          <span className="opening__ring"><i className="m-ring" /></span>
        </div>

        <h1 className="opening__title" id="opening-title">
          <span
            className="opening__line opening__line--1 m-text-2"
            style={{ "--len": 17 } as React.CSSProperties}
          >
            <span className="opening__line-in">ICE CREAM FOR THE</span>
          </span>
          <span
            className="opening__line opening__line--2 m-text-3"
            style={{ "--len": 12 } as React.CSSProperties}
          >
            <span className="opening__line-in">WHOLE FAMILY</span>
          </span>
        </h1>

        {/* Central Capsule Floating Tub Photo */}
        <div className="opening__pill" aria-hidden="false">
          <div className="opening__pill-intro">
            <div className="opening__pill-bob">
              <div className="m-pill">
                <Image
                  src="/images/sec_02.png"
                  alt="Meridian Honey Nut Crunch contest tub"
                  width={900}
                  height={1350}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Foot of first screen */}
        <div className="opening__foot">
          <p className="opening__intro m-text-4">
            Since 1999 on Pune&apos;s favourite streets. Made strictly with 100% pure whole milk and fresh seasonal fruit. Peel the secret lid seal to enter our grand helicopter lucky draw!
          </p>
          <div className="opening__actions">
            <PillButton variant="solid" href="#tubs">
              See Our Tubs
            </PillButton>
            <PillButton variant="outline" href="/enter">
              Enter Lucky Draw
            </PillButton>
          </div>
        </div>
      </div>

      {/* Cream Second Screen */}
      <div className="opening__second" data-ground="light">
        <WaveDivider className="opening__wave" swell={false} />
        
        <figure className="opening__window">
          <Image
            src="/images/sec_00.png"
            alt="Real Alphonso Mango pure dairy ice cream scoop"
            width={1600}
            height={1067}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="opening__say">
          <p className="m-text-5">
            As you&apos;ll taste, we never use vegetable oils or frozen desserts. We&apos;re all about{" "}
            <LiftText>real</LiftText> whole milk, <LiftText>slow</LiftText> vat churning, and{" "}
            <LiftText>pure</LiftText> seasonal fruits.
          </p>
          <div>
            <PillButton variant="outline" href="#churn">
              How We Churn Our Milk →
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
