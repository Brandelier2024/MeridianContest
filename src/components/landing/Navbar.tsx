"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Gift, Sparkles, MapPin, HelpCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Grand Prizes", href: "#prizes", icon: Gift },
  { label: "How It Works", href: "#how-it-works", icon: Sparkles },
  { label: "Menu & Flavours", href: "#flavours", icon: null },
  { label: "Find Parlours", href: "#stores", icon: MapPin },
  { label: "Rules & FAQ", href: "#faq", icon: HelpCircle },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-white py-4.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform focus:outline-none focus:ring-2 focus:ring-[#dc1e43] rounded-lg p-1"
          aria-label="Meridian Ice Creams Home"
        >
          <div className="relative w-44 sm:w-52 h-11">
            <Image
              src="/meridian-logo.svg"
              alt="Meridian Ice Creams - Original Taste and Quality"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-[#dc1e43] transition-colors focus:outline-none focus:text-[#dc1e43]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/enter"
            className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-extrabold text-white bg-[#dc1e43] hover:bg-[#b91535] shadow-md shadow-red-500/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dc1e43]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Enter Contest</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/enter"
            className="min-h-[44px] px-4 inline-flex items-center justify-center rounded-full text-xs font-bold text-white bg-[#dc1e43] hover:bg-[#b91535]"
          >
            Enter
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-[#dc1e43] focus:outline-none focus:ring-2 focus:ring-[#dc1e43] rounded-md"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#dc1e43]"
                >
                  {Icon && <Icon className="w-4 h-4 text-[#dc1e43]" />}
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-100 mt-2">
              <Link
                href="/enter"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-bold text-white bg-[#dc1e43] hover:bg-[#b91535] shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enter Lucky Draw Now</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
