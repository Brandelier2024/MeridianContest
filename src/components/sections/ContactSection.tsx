"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { LiftText } from "@/components/ui/LiftText";
import { gsap } from "@/lib/animation";

export function ContactSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [code, setCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const send = el.querySelector(".contact__send");
        const rings = Array.from(send?.querySelectorAll(".contact__ring") || []);
        if (!send || rings.length === 0) return;

        const timeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            id: "contact",
            trigger: send,
            start: "top bottom",
            end: "center 62%",
            scrub: 0.6,
          },
        });

        rings.forEach((ring, index) => {
          const angle = (index / rings.length) * Math.PI * 2 + 0.4;
          timeline.fromTo(
            ring,
            {
              x: () => Math.cos(angle) * window.innerWidth * 0.38,
              y: () => Math.sin(angle) * window.innerHeight * 0.42 - window.innerHeight * 0.2,
              scale: 0.35 + (index % 3) * 0.3,
            },
            { x: 0, y: 0, scale: 1, duration: 1 },
            index * 0.04
          );
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      router.push(`/enter?code=${encodeURIComponent(code.trim().toUpperCase())}`);
    } else {
      router.push("/enter");
    }
  };

  return (
    <section ref={sectionRef} id="contact" data-8b-section="contact" data-ground="light" aria-labelledby="contact-title">
      <WaveDivider swell />

      <div className="contact__head">
        <span className="m-text-4">Instant Entry Portal</span>
        <h2 className="m-text-2" id="contact-title">
          Ready to Enter?
        </h2>
        <p className="m-text">
          Have your 500ml or 1L Meridian tub code ready? Enter it here or jump straight to the <LiftText>lucky</LiftText> draw gate with your mobile number.
        </p>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__row">
          <label htmlFor="gateCode" className="m-text-4">
            Tub Code (Optional)
          </label>
          <input
            id="gateCode"
            type="text"
            className="m-field font-mono font-bold uppercase"
            placeholder="e.g. MRD-8924"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
          />
        </div>

        <div className="contact__row">
          <label htmlFor="gateMobile" className="m-text-4">
            Mobile Number (10 Digits)
          </label>
          <input
            id="gateMobile"
            type="tel"
            maxLength={10}
            className="m-field font-mono"
            placeholder="98XXXXXXXX"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
          />
        </div>

        <div className="contact__row contact__row--wide text-center">
          <p className="m-text text-sm text-[#8c0d25]">
            Clicking the button will open the official OTP verification gate to finalize your entry.
          </p>
        </div>

        {/* Send Button with 6 Animated Concentric Rings */}
        <div className="contact__send">
          <div className="contact__rings" aria-hidden="true">
            <span className="contact__ring m-ring" />
            <span className="contact__ring m-ring" />
            <span className="contact__ring m-ring" />
            <span className="contact__ring m-ring" />
            <span className="contact__ring m-ring" />
            <span className="contact__ring m-ring" />
          </div>

          <button type="submit" className="contact__submit" aria-label="Submit code and enter lucky draw">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {status && <p className="contact__status m-text-4">{status}</p>}
      </form>
    </section>
  );
}

