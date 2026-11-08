"use client";

import React from "react";
import Image from "next/image";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { LiftText } from "@/components/ui/LiftText";
import { PillButton } from "@/components/ui/PillButton";

const DRAW_EVENTS = [
  {
    day: "Mon",
    time: "Every Monday • 7:00 PM",
    title: "Weekly Movie Pass Draw",
    desc: "Ten lucky winners picked live every Monday evening for luxury recliner cinema tickets and gourmet snacks.",
    badge: "10 Lucky Winners",
    image: "/images/sec_08.png",
    alt: "VIP Movie experience draw",
  },
  {
    day: "Fri",
    time: "Every Friday • 6:00 PM",
    title: "Weekend Parlour Festival",
    desc: "Special celebration twin tub packs at all Pune counters. Every purchase receives bonus scratch entries.",
    badge: "Pune Parlours",
    image: "/images/sec_02.png",
    alt: "Weekend parlour festival",
  },
  {
    day: "Sun",
    time: "Campaign Grand Finale • 8:00 PM",
    title: "Helicopter Joyride Draw",
    desc: "The big moment! One lucky participant wins the private aerial tour over the Pune city skyline for two.",
    badge: "Grand Finale",
    image: "/images/sec_06.png",
    alt: "Helicopter joyride grand draw",
  },
];

export function WeeklyDrawsSection() {
  return (
    <section id="draws" data-8b-section="nights" aria-labelledby="draws-title">
      <WaveDivider swell />

      <div className="nights__head">
        <div>
          <span className="m-text-4">Contest Calendar</span>
          <h2 className="m-text-2" id="draws-title">
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
                <Image
                  src={event.image}
                  alt={event.alt}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12 text-center">
        <PillButton variant="solid" href="/enter">
          Check Your Tub Code &amp; Register Now →
        </PillButton>
      </div>
    </section>
  );
}

