import React, { Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PrizeShowcase } from "@/components/landing/PrizeShowcase";
import { RegistrationForm } from "@/components/landing/RegistrationForm";
import { FlavorShowcase } from "@/components/landing/FlavorShowcase";
import { StoreLocator } from "@/components/landing/StoreLocator";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <PrizeShowcase />
        <Suspense
          fallback={
            <div className="py-24 text-center text-slate-500">
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
