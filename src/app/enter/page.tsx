"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { RegistrationForm } from "@/components/landing/RegistrationForm";
import { Footer } from "@/components/landing/Footer";
import { QrCode, CheckCircle2 } from "lucide-react";

function EnterPageContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";

  const [validating, setValidating] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (code) {
      setValidating(true);
      fetch("/api/validate-qr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsValid(data.valid);
          setMessage(data.message || data.error || "");
        })
        .catch(() => {
          setIsValid(false);
          setMessage("Could not connect to verify QR code. Please check your connection and try again.");
        })
        .finally(() => setValidating(false));
    }
  }, [code]);

  return (
    <div className="pt-28 pb-16">
      {/* Code Status Banner */}
      {code && (
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <div
            className={`p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg ${
              isValid === false
                ? "bg-rose-50 border-rose-200 text-rose-900"
                : "bg-gradient-to-r from-[#8c0d25] via-[#dc1e43] to-[#b81435] border-white/20 text-white"
            }`}
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#ffbc7d] text-[#1e293b] flex items-center justify-center font-bold text-xl shrink-0">
                <QrCode className="w-6 h-6 text-[#dc1e43]" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#ffbc7d] block">
                  Scanned Tub Code Detected
                </span>
                <p className="font-mono font-extrabold text-2xl text-white">
                  {code}
                </p>
                <p className="text-xs text-white/90 mt-0.5">
                  {validating ? "Validating your tub code..." : message || "Code verified! Complete your entry below."}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold border border-emerald-400/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Tub Code Applied</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Registration Form */}
      <RegistrationForm />
    </div>
  );
}

export default function EnterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8f7]">
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="py-32 text-center text-[#64748b]">
              Loading entry screen...
            </div>
          }
        >
          <EnterPageContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
