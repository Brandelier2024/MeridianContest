"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Phone,
  User,
  Mail,
  MapPin,
  IceCream,
  FileText,
  QrCode,
  ShieldCheck,
  Loader2,
  Copy,
} from "lucide-react";
import { MERIDIAN_FLAVORS } from "@/lib/constants";

export function RegistrationForm() {
  const searchParams = useSearchParams();
  const codeParam = searchParams.get("code") || "";

  // Form State
  const [formData, setFormData] = useState({
    qrCode: codeParam,
    fullName: "",
    mobile: "",
    email: "",
    city: "Pune",
    flavor: "Honey Nut Crunch (Contest Featured)",
    billNumber: "",
    agreedToTerms: true,
  });

  // OTP State
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpTimer, setOtpTimer] = useState(0);

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copied, setCopied] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<null | {
    entryCode: string;
    fullName: string;
    mobile: string;
    flavor: string;
  }>(null);

  useEffect(() => {
    if (codeParam) {
      setFormData((prev) => ({ ...prev, qrCode: codeParam }));
    }
  }, [codeParam]);

  // Countdown timer for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpTimer > 0) {
      interval = setInterval(() => setOtpTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  const handleSendOtp = async () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      setOtpError("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    setOtpLoading(true);
    setOtpError("");

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: formData.mobile }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }

      setOtpSent(true);
      setOtpTimer(45);
      if (data.devOtp) {
        setOtpCode(data.devOtp);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not send OTP. Please try again.";
      setOtpError(message);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpCode || otpCode.length !== 6) {
      setOtpError("Enter the 6-digit OTP sent to your phone");
      return;
    }

    setOtpLoading(true);
    setOtpError("");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: formData.mobile, otpCode }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid OTP");
      }

      setOtpVerified(true);
      setOtpSent(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "OTP verification failed";
      setOtpError(message);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!formData.fullName.trim()) {
      setSubmitError("Please enter your full name.");
      return;
    }

    if (!formData.mobile || formData.mobile.length !== 10) {
      setSubmitError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!otpVerified) {
      setSubmitError("Please verify your mobile number with OTP first.");
      return;
    }

    if (!formData.agreedToTerms) {
      setSubmitError("You must agree to the contest terms & conditions.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        ...formData,
      };

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Registration failed. Please try again.");
      }

      // Trigger Confetti Celebration in Meridian Red & Gold
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#dc1e43", "#ffbc7d", "#b81435", "#e11d48"],
      });

      setSubmissionSuccess({
        entryCode: result.entryCode,
        fullName: formData.fullName,
        mobile: formData.mobile,
        flavor: formData.flavor,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-12 md:py-16 bg-[#fdf8f7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dc1e43]/10 text-[#dc1e43] text-xs font-bold uppercase tracking-wider mb-3">
            <QrCode className="w-3.5 h-3.5 text-[#dc1e43]" />
            <span>Official Entry Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] font-display tracking-tight">
            Register for the Lucky Draw
          </h2>
          <p className="mt-3 text-base text-[#334155] max-w-xl mx-auto">
            Fill in your details to lock in your chance to win the private helicopter ride or movie tickets!
          </p>
        </div>

        {/* Success Ticket View */}
        {submissionSuccess ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[#ffbc7d] text-center relative overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase inline-block mb-3">
              Entry Successfully Confirmed!
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-[#1e293b] font-display mb-2">
              You&apos;re in the Lucky Draw, {submissionSuccess.fullName}!
            </h3>
            <p className="text-sm text-[#334155] max-w-md mx-auto mb-8">
              We&apos;ve registered your entry. Keep your phone handy—winners will be contacted directly via SMS &amp; phone call.
            </p>

            {/* Lucky Draw Ticket Card */}
            <div className="max-w-md mx-auto bg-gradient-to-r from-[#8c0d25] via-[#dc1e43] to-[#b81435] text-white rounded-2xl p-6 shadow-xl border border-white/20 text-left relative overflow-hidden mb-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-4">
                <div>
                  <span className="text-[10px] text-[#ffbc7d] uppercase tracking-widest font-bold">
                    Official Contest Ticket
                  </span>
                  <p className="font-extrabold text-lg text-white font-display">MERIDIAN ICE CREAMS</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-white/80 uppercase">Status</span>
                  <p className="text-xs font-bold text-emerald-300">ACTIVE ENTRY</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-white/75 block text-[11px]">Entry Ticket Code</span>
                  <span className="text-xl font-mono font-black text-[#ffbc7d] tracking-wider">
                    {submissionSuccess.entryCode}
                  </span>
                </div>
                <div>
                  <span className="text-white/75 block text-[11px]">Participant Phone</span>
                  <span className="font-semibold text-white">
                    +91 {submissionSuccess.mobile.replace(/(\d{4})(\d{3})(\d{3})/, "$1-***-$3")}
                  </span>
                </div>
                <div className="col-span-2 pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/75">Flavour Entered:</span>
                  <span className="font-bold text-[#ffbc7d]">{submissionSuccess.flavor}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(submissionSuccess.entryCode);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2500);
                }}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#dc1e43] hover:bg-[#b81435] shadow-md transition-colors gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Copied to Clipboard!" : "Copy Entry Code"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmissionSuccess(null);
                  setFormData({
                    qrCode: "",
                    fullName: "",
                    mobile: "",
                    email: "",
                    city: "Pune",
                    flavor: "Honey Nut Crunch (Contest Featured)",
                    billNumber: "",
                    agreedToTerms: true,
                  });
                  setOtpVerified(false);
                }}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Submit Another Tub Entry
              </button>
            </div>
          </div>
        ) : (
          /* Main Registration Form Card */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Optional QR Code Pre-fill */}
              <div className="bg-[#fff0f3] p-4 rounded-2xl border border-[#dc1e43]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8c0d25] text-[#ffbc7d] flex items-center justify-center shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <label htmlFor="qrCodeInput" className="text-xs font-bold text-[#8c0d25] uppercase tracking-wider block">
                      Tub QR Code / Voucher Code (Optional)
                    </label>
                    <p className="text-xs text-[#b81435]">
                      If your tub has a unique code, enter it here for instant bonus entry.
                    </p>
                  </div>
                </div>
                <input
                  id="qrCodeInput"
                  type="text"
                  placeholder="e.g. MRD-8924"
                  value={formData.qrCode}
                  onChange={(e) => setFormData({ ...formData, qrCode: e.target.value.toUpperCase() })}
                  className="px-4 py-2 bg-white rounded-xl border border-[#dc1e43]/30 text-sm font-mono font-bold text-[#8c0d25] uppercase focus:outline-none focus:ring-2 focus:ring-[#dc1e43] max-w-xs"
                />
              </div>

              {/* Grid 1: Full Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullNameInput" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullNameInput"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mobileInput" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Mobile Number (10 Digits) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-xs">
                      +91
                    </div>
                    <input
                      id="mobileInput"
                      type="tel"
                      required
                      maxLength={10}
                      disabled={otpVerified}
                      placeholder="98XXXXXXXX"
                      value={formData.mobile}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setFormData({ ...formData, mobile: val });
                      }}
                      className={`w-full pl-12 pr-28 py-3 bg-slate-50 border rounded-xl text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent transition-all ${
                        otpVerified ? "border-emerald-500 bg-emerald-50/30 text-emerald-900" : "border-slate-300"
                      }`}
                    />
                    
                    {/* Inline OTP Button / Status */}
                    <div className="absolute right-2">
                      {otpVerified ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1.5 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={otpLoading || formData.mobile.length !== 10 || otpTimer > 0}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#dc1e43] hover:bg-[#b81435] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
                        >
                          {otpLoading ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : otpTimer > 0 ? (
                            `Resend in ${otpTimer}s`
                          ) : (
                            "Verify Phone"
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* OTP Input Field (Appears when OTP is sent) */}
              {otpSent && !otpVerified && (
                <div className="p-4 bg-[#fff0f3] rounded-2xl border border-[#dc1e43]/20 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#8c0d25] uppercase">
                        Enter 6-Digit OTP Sent to +91 {formData.mobile}
                      </p>
                      <p className="text-[11px] text-[#b81435]">
                        Check your SMS for the verification code.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="123456"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                        className="w-32 px-3 py-2 text-center text-base tracking-widest font-mono font-bold bg-white border border-[#dc1e43]/40 rounded-xl focus:ring-2 focus:ring-[#dc1e43] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otpLoading || otpCode.length !== 6}
                        className="px-4 py-2 bg-[#dc1e43] hover:bg-[#b81435] text-white rounded-xl text-xs font-bold disabled:opacity-50 transition-colors shadow-sm"
                      >
                        {otpLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Confirm OTP"}
                      </button>
                    </div>
                  </div>
                  {otpError && (
                    <p className="text-xs font-semibold text-rose-600 mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {otpError}
                    </p>
                  )}
                </div>
              )}

              {/* Grid 2: Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emailInput" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="emailInput"
                      type="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="citySelect" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <select
                      id="citySelect"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent transition-all"
                    >
                      <option value="Pune">Pune</option>
                      <option value="Pimpri-Chinchwad">Pimpri-Chinchwad (PCMC)</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Navi Mumbai">Navi Mumbai</option>
                      <option value="Thane">Thane</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Other">Other City in Maharashtra</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Grid 3: Flavour Purchased & Bill Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="flavorSelect" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Flavour Purchased <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <IceCream className="w-4 h-4" />
                    </div>
                    <select
                      id="flavorSelect"
                      value={formData.flavor}
                      onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent transition-all"
                    >
                      {MERIDIAN_FLAVORS.map((flv) => (
                        <option key={flv} value={flv}>
                          {flv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="billNumberInput" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Bill / Parlour Receipt No. (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <input
                      id="billNumberInput"
                      type="text"
                      placeholder="e.g. INV-10492"
                      value={formData.billNumber}
                      onChange={(e) => setFormData({ ...formData, billNumber: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#dc1e43] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Error Alert */}
              {submitError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                  className="w-4 h-4 mt-1 rounded text-[#dc1e43] border-slate-300 focus:ring-[#dc1e43]"
                />
                <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed">
                  I agree to the{" "}
                  <a href="/#faq" className="text-[#dc1e43] underline font-semibold">
                    Contest Terms &amp; Conditions
                  </a>
                  . I understand that winners must present valid identification (such as PAN, Voter ID, or DL) upon claiming the prize.
                </label>
              </div>

              {/* Anti-Fraud Disclaimer */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Protected against duplicate and automated bot entries. One entry per mobile number.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full min-h-[44px] py-4 rounded-2xl font-bold text-base text-white bg-[#dc1e43] hover:bg-[#b81435] shadow-lg shadow-[#dc1e43]/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Verifying &amp; Registering Entry...</span>
                  </>
                ) : (
                  <>
                    <QrCode className="w-5 h-5 text-[#ffbc7d]" />
                    <span>Confirm Entry in Lucky Draw</span>
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
