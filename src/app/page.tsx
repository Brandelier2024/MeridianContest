import React, { Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PrizeShowcase } from "@/components/landing/PrizeShowcase";
import { Tub3DExperience } from "@/components/landing/Tub3DExperience";
import { RegistrationForm } from "@/components/landing/RegistrationForm";
import { FlavorShowcase } from "@/components/landing/FlavorShowcase";
import { StoreLocator } from "@/components/landing/StoreLocator";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F5FA]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <PrizeShowcase />

        {/* 3D Web Experience Section */}
        <section id="3d-tub" className="py-20 md:py-28 bg-white border-y border-[#D1D5DB]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#046bd2]/10 text-[#046bd2] text-xs font-bold uppercase tracking-wider mb-3">
                <span>WebGL 3D Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] font-display tracking-tight">
                Inspect Your Contest Tub in 3D
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#334155]">
                Rotate the 500ml Party Tub in real-time 3D, switch authentic flavors, and find where your secret QR code is printed.
              </p>
            </div>

            <Tub3DExperience />
          </div>
        </section>

        {/* Embedded Lucky Draw Entry Form */}
        <Suspense
          fallback={
            <div className="py-24 text-center text-[#64748b] font-medium">
              Loading entry form...
            </div>
          }
        >
          <RegistrationForm />
        </Suspense>

        <FlavorShowcase />
        <StoreLocator />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
