"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { gsap } from "@/lib/animation";

export function BrandFooter() {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const mark = el.querySelector(".footer__mark");
        const bar = el.querySelector(".footer__bar");
        const rings = Array.from(el.querySelectorAll(".footer__ring"));
        if (!mark || !bar) return;

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            id: "footer",
            trigger: el,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        timeline
          .fromTo(".footer__mark", { yPercent: 55, rotation: 6 }, { yPercent: 0, rotation: 0, duration: 1, ease: "power2.out" }, 0)
          .fromTo(".footer__bar", { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.45);

        rings.forEach((ring, index) => {
          timeline.fromTo(ring, { y: 160 + (index % 3) * 120 }, { y: 0, duration: 0.9 }, 0);
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} id="footer" data-8b-section="footer">
      <WaveDivider swell />

      {/* Concentric Floating Rings */}
      <div className="footer__rings" aria-hidden="true">
        <span className="footer__ring m-ring" />
        <span className="footer__ring m-ring" />
        <span className="footer__ring m-ring" />
        <span className="footer__ring m-ring" />
        <span className="footer__ring m-ring" />
      </div>

      <div className="footer__cols">
        {/* Col 1 */}
        <div className="footer__col">
          <h4 className="m-text-4 text-[#ffbc7d]">Meridian Ice Creams</h4>
          <p className="m-text text-sm text-white/80">
            Crafting pure dairy churned ice cream in Pune since 1999. Made with 100% whole milk and natural seasonal fruits.
          </p>
          <p className="m-text-4 text-xs text-[#ffbc7d]">
            &quot;The Real Indian Taste&quot;
          </p>
        </div>

        {/* Col 2 */}
        <div className="footer__col">
          <h4 className="m-text-4 text-[#ffbc7d]">Contest Navigation</h4>
          <div className="footer__links">
            <Link className="m-link m-text text-sm" href="/#tubs">Signature Tubs</Link>
            <Link className="m-link m-text text-sm" href="/#flavours">Parlour Flavours</Link>
            <Link className="m-link m-text text-sm" href="/#churn">The Churn Story</Link>
            <Link className="m-link m-text text-sm" href="/#rule">The Meridian Promise</Link>
            <Link className="m-link m-text text-sm" href="/#prizes">Helicopter Prizes</Link>
            <Link className="m-link m-text text-sm" href="/#draws">Weekly Draw Schedule</Link>
            <Link className="m-link m-text text-sm font-bold text-[#ffbc7d]" href="/enter">
              Enter Lucky Draw →
            </Link>
          </div>
        </div>

        {/* Col 3 */}
        <div className="footer__col">
          <h4 className="m-text-4 text-[#ffbc7d]">Fair Play &amp; Terms</h4>
          <div className="footer__links">
            <span className="m-text text-sm text-white/80">One Entry Per Phone Number</span>
            <Link className="m-link m-text text-sm" href="/#faq">Prize Eligibility Rules</Link>
            <Link className="m-link m-text text-sm" href="/#faq">ID Verification Guidelines</Link>
            <a
              className="m-link m-text text-sm"
              href="https://meridianicecreams.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website ↗
            </a>
          </div>
        </div>

        {/* Col 4 */}
        <div className="footer__col">
          <h4 className="m-text-4 text-[#ffbc7d]">Customer Support</h4>
          <div className="footer__links">
            <span className="m-text text-sm text-white/80">Head Office: Pune, Maharashtra</span>
            <a className="m-link m-text text-sm" href="mailto:contest@meridianicecreams.com">
              contest@meridianicecreams.com
            </a>
            <a className="m-link m-text text-sm" href="tel:+919822000000">
              Mon-Sat • 10 AM to 7 PM
            </a>
          </div>
        </div>
      </div>

      {/* Giant Tilted Wordmark Reveal */}
      <div className="footer__brand">
        <span
          className="footer__mark m-text-3 font-display"
          style={{ "--len": 8 } as React.CSSProperties}
        >
          MERIDIAN
        </span>
        <span className="footer__bar" aria-hidden="true" />
      </div>

      {/* Legal Footer Bar */}
      <div className="footer__legal">
        <p className="m-text-4 text-xs text-white/70">
          © {new Date().getFullYear()} Meridian Ice Creams. All rights reserved.
        </p>
        <p className="m-text-4 text-xs text-white/70">
          The Real Indian Taste • Pune, Maharashtra, India
        </p>
      </div>
    </footer>
  );
}
