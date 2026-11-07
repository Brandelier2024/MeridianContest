"use client";

import React from "react";
import Link from "next/link";
import { IceCream, Phone, Mail, MapPin, Heart, Shield } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-blue-950 font-black">
                <IceCream className="w-5 h-5" />
              </div>
              <span className="font-black text-xl text-white tracking-wider">
                MERIDIAN
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Crafting authentic dairy ice creams in Pune since 1999. Made with 100% pure milk and natural seasonal fruits.
            </p>
            <p className="text-[11px] text-amber-300 font-serif italic">
              &quot;{BRAND.subtagline}&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contest Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-amber-300 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-amber-300 transition-colors">
                  Helicopter &amp; Movie Prizes
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-amber-300 transition-colors">
                  Enter Lucky Draw
                </a>
              </li>
              <li>
                <a href="#flavors" className="hover:text-amber-300 transition-colors">
                  Flavour Menu
                </a>
              </li>
              <li>
                <a href="#outlets" className="hover:text-amber-300 transition-colors">
                  Pune Parlours
                </a>
              </li>
            </ul>
          </div>

          {/* Contest T&C & Security */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Fair Play &amp; Security
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-400">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Anti-Duplication Protection</span>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Contest Rules &amp; Regulations
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Prize Verification Terms
                </a>
              </li>
              <li>
                <a
                  href={BRAND.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Visit Official Website →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Head Office: Pune, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contest@meridianicecreams.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon-Sat • 10 AM to 7 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Meridian Ice Creams. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>The Real Indian Taste</span>
            <span>•</span>
            <span>Pune, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
