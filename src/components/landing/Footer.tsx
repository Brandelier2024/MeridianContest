"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="relative w-48 h-12 mb-4">
              <Image
                src="/meridian-logo.svg"
                alt="Meridian Ice Creams"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-6">
              Original taste and premium quality in every scoop. Celebrating over 25 years of authentic dairy ice creams across Pune, Mumbai, and Maharashtra.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Festive Campaign 2026 — Verified &amp; Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Campaign
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="#prizes" className="hover:text-[#dc1e43] transition-colors">
                  Grand Prizes
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#dc1e43] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link href="/enter" className="hover:text-[#dc1e43] transition-colors">
                  Enter Code / Scan QR
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#dc1e43] transition-colors">
                  Contest Rules &amp; FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Menu & Parlours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="#flavours" className="hover:text-[#dc1e43] transition-colors">
                  Signature Flavours
                </a>
              </li>
              <li>
                <a href="#stores" className="hover:text-[#dc1e43] transition-colors">
                  Find Nearest Parlour
                </a>
              </li>
              <li>
                <a
                  href="https://meridianicecreams.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dc1e43] transition-colors"
                >
                  Official Meridian Website
                </a>
              </li>
              <li>
                <a
                  href="https://meridianicecreams.com/franchise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dc1e43] transition-colors"
                >
                  Franchise Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Customer Support
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dc1e43]" />
                <a href="tel:+912025654488" className="hover:text-white">
                  +91 20 2565 4488
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#dc1e43]" />
                <a href="mailto:support@meridianicecreams.com" className="hover:text-white">
                  support@meridianicecreams.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dc1e43] shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-400">
                  Meridian House, FC Road, Shivajinagar, Pune 411004
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Meridian Ice Creams. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-neutral-300">
              Terms &amp; Conditions
            </a>
            <a href="#faq" className="hover:text-neutral-300">
              Privacy Policy
            </a>
            <a href="#faq" className="hover:text-neutral-300">
              Contest Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

