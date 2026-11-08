"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const container = overlayRef.current;
        if (!container) return;
        const focusables = Array.from(
          container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="nav__overlay"
      id="site-menu"
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label="Main Navigation Menu"
    >
      <div className="nav__overlay-top">
        <p className="m-text-4">MERIDIAN • Pune, Maharashtra • Est. 1999</p>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="m-round nav__close"
          aria-label="Close the menu"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <nav className="nav__links" aria-label="Main Navigation Links">
        <Link className="m-text-2" href="/#tubs" onClick={onClose}>
          <span>Signature Tubs</span>
        </Link>
        <Link className="m-text-2" href="/#churn" onClick={onClose}>
          <span>The Churn Story</span>
        </Link>
        <Link className="m-text-2" href="/#rule" onClick={onClose}>
          <span>The Pure Milk Rule</span>
        </Link>
        <Link className="m-text-2" href="/#prizes" onClick={onClose}>
          <span>Scan &amp; Win Prizes</span>
        </Link>
        <Link className="m-text-2" href="/#draws" onClick={onClose}>
          <span>Weekly Draws</span>
        </Link>
        <Link className="m-text-2" href="/#parlours" onClick={onClose}>
          <span>Pune Parlours</span>
        </Link>
        <Link className="m-text-2 text-[#dc1e43]" href="/enter" onClick={onClose}>
          <span>Enter Lucky Draw →</span>
        </Link>
      </nav>

      <div className="nav__overlay-foot">
        <a className="m-text-4 m-link" href="tel:+919822000000">
          +91 98220 00000
        </a>
        <a className="m-text-4 m-link" href="mailto:contest@meridianicecreams.com">
          contest@meridianicecreams.com
        </a>
      </div>
    </div>
  );
}
