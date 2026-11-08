"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { RoundButton } from "@/components/ui/RoundButton";
import { MenuOverlay } from "./MenuOverlay";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [ground, setGround] = useState<"dark" | "light">("dark");
  const [menuGround, setMenuGround] = useState<"dark" | "light">("dark");

  const navRef = useRef<HTMLElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const { stopScroll, startScroll } = useSmoothScroll();

  useEffect(() => {
    let lastY = window.scrollY;
    let travel = 0;

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      if (y < 80) {
        travel = 0;
        setHidden(false);
      } else if (delta > 0) {
        travel = Math.max(0, travel) + delta;
        if (travel > 24) setHidden(true);
      } else if (delta < 0) {
        travel = Math.min(0, travel) + delta;
        if (travel < -24) setHidden(false);
      }

      // Probe sections with light background
      const lightGrounds = Array.from(document.querySelectorAll('[data-ground="light"]'));
      const onLight = (probeY: number) => {
        return lightGrounds.some((el) => {
          const r = el.getBoundingClientRect();
          return r.top <= probeY && r.bottom > probeY;
        });
      };

      setGround(onLight(44) ? "light" : "dark");

      if (menuBtnRef.current) {
        const menuBox = menuBtnRef.current.getBoundingClientRect();
        setMenuGround(onLight(menuBox.top + menuBox.height / 2) ? "light" : "dark");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setMenuOpen(true);
    stopScroll();
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    startScroll();
  };

  return (
    <>
      <header
        ref={navRef}
        id="navigation"
        data-8b-section="navigation"
        data-hidden={hidden ? "" : undefined}
        data-ground={ground}
        data-menu-ground={menuGround}
      >
        <div className="nav__bar">
          {/* Instagram link */}
          <a
            className="m-round nav__social"
            href="https://instagram.com/meridianicecreams"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meridian Ice Creams on Instagram"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r=".6" />
            </svg>
          </a>

          {/* Logo */}
          <Link className="nav__logo" href="/#opening" aria-label="Meridian, back to top">
            <span>MERIDIAN</span>
            <span className="m-lift">CHURNED</span>
          </Link>

          {/* Menu button */}
          <button
            ref={menuBtnRef}
            className="m-round nav__menu"
            type="button"
            onClick={handleOpenMenu}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M5 8h14M5 12h14M5 16h14" />
            </svg>
          </button>
        </div>
      </header>

      <MenuOverlay isOpen={menuOpen} onClose={handleCloseMenu} />
    </>
  );
}

