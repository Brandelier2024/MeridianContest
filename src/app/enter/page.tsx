"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, QrCode, CheckCircle, ShieldCheck } from "lucide-react";

export default function EnterContestPage() {
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().length >= 6 && phone.trim().length === 10) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F5FA] to-white flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-xl mx-auto w-full flex items-center justify-between mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#dc1e43] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="relative w-36 h-9">
          <Image
            src="/meridian-logo.svg"
            alt="Meridian Ice Creams"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content Box */}
      <div className="max-w-md mx-auto w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
        {!submitted ? (
          <div>
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4 text-[#dc1e43]">
                <QrCode className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-black text-[#111111]">
                Enter Your Tub Code
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Found under the freshness seal of any 500ml or 1L Meridian tub.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="code"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  10-Character Secret Code
                </label>
                <input
                  id="code"
                  type="text"
                  required
                  maxLength={10}
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="e.g. MRDN7829XQ"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-center text-lg font-mono font-bold tracking-widest text-[#111111] uppercase placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Mobile Number (For Prize SMS)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="9876543210"
                    className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-slate-200 text-base font-semibold text-[#111111] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-base font-extrabold text-white bg-[#dc1e43] hover:bg-[#b91535] shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Verify &amp; Claim Prize</span>
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Secure &amp; Official Contest Entry</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-[#111111] mb-2">
              Entry Verified!
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Your code <strong className="font-mono text-slate-900">{code}</strong> has been entered into the weekly Helicopter Joyride draw. A confirmation SMS has been dispatched to +91 {phone}.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left mb-6">
              <strong>Instant Reward Note:</strong> Show the SMS voucher at any authorized Meridian parlour across Maharashtra to redeem your free scoop!
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setCode("");
              }}
              className="px-6 py-3 rounded-full text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Enter Another Tub Code
            </button>
          </div>
        )}
      </div>

      {/* Footer Slogan */}
      <p className="text-center text-xs text-slate-400 mt-8">
        Meridian Ice Creams &mdash; Original Taste and Quality in Every Scoop.
      </p>
    </div>
  );
}

