"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, QrCode } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#046bd2]/95 backdrop-blur-md shadow-md py-3 text-white border-b border-white/10"
          : "bg-gradient-to-b from-[#045cb4]/90 via-[#046bd2]/70 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Official Meridian Vector */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 sm:w-48 h-10 sm:h-12">
              <Image
                src="/images/meridian-logo-white.svg"
                alt="Meridian Ice Creams - Est. 1999"
                fill
                priority
                className="object-contain object-left group-hover:scale-[1.02] transition-transform"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-white/90 hover:text-[#ffbc7d] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#prizes"
              className="text-sm font-semibold text-white/90 hover:text-[#ffbc7d] transition-colors"
            >
              Prizes
            </a>
            <a
              href="#3d-tub"
              className="text-sm font-semibold text-white/90 hover:text-[#ffbc7d] transition-colors"
            >
              3D Tub
            </a>
            <a
              href="#flavors"
              className="text-sm font-semibold text-white/90 hover:text-[#ffbc7d] transition-colors"
            >
              Flavours
            </a>
            <a
              href="#outlets"
              className="text-sm font-semibold text-white/90 hover:text-[#ffbc7d] transition-colors"
            >
              Pune Parlours
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold text-white/90 hover:text-[#ffbc7d] transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#register"
              className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-[#1e293b] bg-white hover:bg-[#ffbc7d] shadow-sm transition-all gap-2"
            >
              <QrCode className="w-4 h-4 text-[#da0e2f]" />
              <span>Enter Lucky Draw</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#045cb4] border-t border-white/10 px-4 pt-4 pb-6 space-y-1.5">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-3 text-sm font-semibold text-white hover:bg-white/10 active:bg-white/20 rounded-xl transition-colors"
          >
            How It Works
          </a>
          <a
            href="#prizes"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-3 text-sm font-semibold text-white hover:bg-white/10 active:bg-white/20 rounded-xl transition-colors"
          >
            Prizes
          </a>
          <a
            href="#3d-tub"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-3 text-sm font-semibold text-white hover:bg-white/10 active:bg-white/20 rounded-xl transition-colors"
          >
            3D Tub Experience
          </a>
          <a
            href="#flavors"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-3 text-sm font-semibold text-white hover:bg-white/10 active:bg-white/20 rounded-xl transition-colors"
          >
            Flavours Menu
          </a>
          <a
            href="#outlets"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-3 text-sm font-semibold text-white hover:bg-white/10 active:bg-white/20 rounded-xl transition-colors"
          >
            Pune Parlours
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-3 text-sm font-semibold text-white hover:bg-white/10 active:bg-white/20 rounded-xl transition-colors"
          >
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-[#1e293b] bg-white hover:bg-[#ffbc7d] shadow-sm transition-all gap-2"
            >
              <QrCode className="w-4 h-4 text-[#da0e2f]" />
              <span>Enter Lucky Draw</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
