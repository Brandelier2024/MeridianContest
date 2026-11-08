"use client";

import React from "react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { LiftText } from "@/components/ui/LiftText";
import { PillButton } from "@/components/ui/PillButton";
import { createGenericPlaceholder } from "@/lib/placeholders";

const DRAW_EVENTS = [
  {
    day: "Mon",
    time: "Every Monday • 7:00 PM",
    title: "Weekly Movie Pass Draw",
    desc: "Ten lucky winners picked live every Monday evening for luxury recliner cinema tickets and gourmet snacks.",
    badge: "10 Lucky Winners",
    image: "/images/sec_08.png",
    alt: "VIP Movie experience draw",
    fallback: createGenericPlaceholder("Movie Pass Draw", "10 Weekly Winners", 600, 338, "#1c0d0d", "#ffdd78"),
  },
  {
    day: "Fri",
    time: "Every Friday • 6:00 PM",
    title: "Weekend Parlour Festival",
    desc: "Special celebration twin tub packs at all Pune counters. Every purchase receives bonus scratch entries.",
    badge: "Pune Parlours",
    image: "/images/sec_02.png",
    alt: "Weekend parlour festival",
    fallback: createGenericPlaceholder("Parlour Festival", "Bonus Entries", 600, 338, "#2a1a08", "#f59e0b"),
  },
  {
    day: "Sun",
    time: "Campaign Grand Finale • 8:00 PM",
    title: "Helicopter Joyride Draw",
    desc: "The big moment! One lucky participant wins the private aerial tour over the Pune city skyline for two.",
    badge: "Grand Finale",
    image: "/images/sec_06.png",
    alt: "Helicopter joyride grand draw",
    fallback: createGenericPlaceholder("Helicopter Finale", "Aerial Skyline Tour", 600, 338, "#4a0a10", "#ffbc7d"),
  },
];

export function WeeklyDrawsSection() {
  return (
    <section id="nights" data-8b-section="nights" aria-labelledby="nights-title">
      <span id="draws" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <WaveDivider swell />

      <div className="nights__head">
        <div>
          <span className="m-text-4">Contest Calendar</span>
          <h2 className="m-text-2" id="nights-title">
            Draw Schedule
          </h2>
        </div>
        <p className="m-text">
          Draws happen live and transparently. Winners are notified immediately via <LiftText>verified</LiftText> SMS and published directly on our website.
        </p>
      </div>

      <div className="nights__list">
        {DRAW_EVENTS.map((event) => (
          <div key={event.title} className="night">
            <span className="night__day m-text-3">{event.day}</span>
            <div className="night__text">
              <span className="m-text-4 text-[#ffbc7d]">{event.time}</span>
              <h3 className="night__title m-text-2">{event.title}</h3>
              <p className="m-text text-white/90">{event.desc}</p>
              <span className="m-badge bg-white/10 text-[#ffbc7d] border-[#ffbc7d]/40">
                {event.badge}
              </span>
            </div>
            <div className="night__photo" data-8b-motion="float">
              <div className="m-pill">
                <img
                  src={event.image}
                  alt={event.alt}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{ background: "#260c0c" }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = event.fallback;
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="nights__more flex flex-wrap justify-center items-center gap-4 mt-12">
        <PillButton variant="solid" href="/enter">
          Enter This Week&apos;s Draw →
        </PillButton>
        <PillButton variant="outline" href="#faq">
          View Draw Transparency Rules
        </PillButton>
      </div>
    </section>
  );
}
