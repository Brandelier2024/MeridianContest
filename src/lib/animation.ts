import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Register reusable GSAP scroll trigger effects matching the template specifications
 */
export function initGlobalMotionEffects() {
  if (typeof window === "undefined") return () => {};

  const ctx = gsap.context(() => {
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Text lift animation on scroll into view
      document.querySelectorAll(".m-lift").forEach((lift) => {
        gsap.fromTo(
          lift,
          { y: 6, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: lift,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 2. Wave divider swelling on scroll
      document.querySelectorAll('[data-8b-motion="swell"]').forEach((wave) => {
        gsap.fromTo(
          wave,
          { scaleY: 0.7 },
          {
            scaleY: 1.25,
            ease: "none",
            scrollTrigger: {
              trigger: wave,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      });

      // 3. Floating rings & photos
      document.querySelectorAll('[data-8b-motion="float"]').forEach((el, idx) => {
        gsap.to(el, {
          y: idx % 2 === 0 ? -12 : 12,
          duration: 3 + (idx % 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // 4. Subtle tilt effect
      document.querySelectorAll('[data-8b-motion="tilt"]').forEach((el) => {
        gsap.fromTo(
          el,
          { rotation: -4 },
          {
            rotation: 4,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });
    });
  });

  return () => ctx.revert();
}

