"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Trophy, Menu, X, MapPin, IceCream } from "lucide-react";

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
          ? "bg-[#0b3b8c]/95 backdrop-blur-md shadow-lg shadow-blue-950/20 py-3"
          : "bg-gradient-to-b from-blue-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <IceCream className="w-6 h-6 text-blue-950" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-wide text-white block leading-tight">
                MERIDIAN
              </span>
              <span className="text-[10px] sm:text-xs text-amber-300 tracking-widest uppercase font-semibold block">
                Ice Creams • Est. 1999
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-blue-100 hover:text-amber-300 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#prizes"
              className="text-sm font-medium text-blue-100 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              Prizes
            </a>
            <a
              href="#flavors"
              className="text-sm font-medium text-blue-100 hover:text-amber-300 transition-colors"
            >
              Flavors
            </a>
            <a
              href="#outlets"
              className="text-sm font-medium text-blue-100 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-blue-300" />
              Parlours
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-blue-100 hover:text-amber-300 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#register"
              className="min-h-[44px] relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm text-blue-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/30 hover:shadow-lg hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 mr-2 text-blue-950" />
              Enter Lucky Draw
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-950/95 backdrop-blur-xl border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block min-h-[44px] px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            How It Works
          </a>
          <a
            href="#prizes"
            onClick={() => setMobileMenuOpen(false)}
            className="block min-h-[44px] px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            Prizes
          </a>
          <a
            href="#flavors"
            onClick={() => setMobileMenuOpen(false)}
            className="block min-h-[44px] px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            Flavors
          </a>
          <a
            href="#outlets"
            onClick={() => setMobileMenuOpen(false)}
            className="block min-h-[44px] px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            Parlour Locations
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block min-h-[44px] px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
          >
            Rules &amp; FAQs
          </a>
          <div className="pt-2">
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] flex items-center justify-center px-5 py-3 rounded-xl font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 shadow-md"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Enter Lucky Draw Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
