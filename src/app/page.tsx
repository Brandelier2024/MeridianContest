import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PrizeShowcase from "@/components/landing/PrizeShowcase";
import HowItWorks from "@/components/landing/HowItWorks";
import FlavoursMenu from "@/components/landing/FlavoursMenu";
import StoreLocator from "@/components/landing/StoreLocator";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section with Interactive 3D WebGL Experience */}
      <Hero />

      {/* 3. Grand Prizes Showcase */}
      <PrizeShowcase />

      {/* 4. How It Works (3 Simple Steps) */}
      <HowItWorks />

      {/* 5. Signature Real Dairy Flavours */}
      <FlavoursMenu />

      {/* 6. Parlour Store Locator */}
      <StoreLocator />

      {/* 7. Frequently Asked Questions */}
      <FAQ />

      {/* 8. Official Brand Footer */}
      <Footer />
    </main>
  );
}

