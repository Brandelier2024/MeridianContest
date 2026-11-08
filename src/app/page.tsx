import React from "react";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { OpeningHeroSection } from "@/components/sections/OpeningHeroSection";
import { ChurnSequenceSection } from "@/components/sections/ChurnSequenceSection";
import { BrandRuleSection } from "@/components/sections/BrandRuleSection";
import { SignatureTubsSection } from "@/components/sections/SignatureTubsSection";
import { FlavoursSliderSection } from "@/components/sections/FlavoursSliderSection";
import { LuckyDrawSection } from "@/components/sections/LuckyDrawSection";
import { PuneVoicesSection } from "@/components/sections/PuneVoicesSection";
import { WeeklyDrawsSection } from "@/components/sections/WeeklyDrawsSection";
import { ParloursSection } from "@/components/sections/ParloursSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BrandFooter } from "@/components/sections/BrandFooter";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <OpeningHeroSection />
        <ChurnSequenceSection />
        <BrandRuleSection />
        <SignatureTubsSection />
        <FlavoursSliderSection />
        <LuckyDrawSection />
        <PuneVoicesSection />
        <WeeklyDrawsSection />
        <ParloursSection />
        <FaqSection />
        <ContactSection />
      </main>
      <BrandFooter />
    </SmoothScrollProvider>
  );
}
