"use client";

import React from "react";
import Image from "next/image";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PillButton } from "@/components/ui/PillButton";
import { LiftText } from "@/components/ui/LiftText";

const PRIZE_LIST = [
  {
    prize: "Grand Prize: VIP Private Helicopter Joyride",
    desc: "Private 2-passenger aerial skyline tour over Pune with personal pilot & HD flight photos.",
    badge: "1 Winner",
  },
  {
    prize: "Weekly Draw: Luxury Recliner Movie Experience",
    desc: "VIP premium recliner cinema tickets with unlimited gourmet popcorn & beverages combo.",
    badge: "10 Weekly",
  },
  {
    prize: "Parlour Perks: Free 500ml Family Tub Voucher",
    desc: "Instant redeemable voucher for any 500ml flavour across all official Pune parlours.",
    badge: "Daily Drops",
  },
  {
    prize: "Festival Draw: Authentic Pure Dairy Hamper",
    desc: "Curated celebration cooler with 6 assorted handcrafted family pack flavours.",
    badge: "Festival Finale",
  },
];

export function LuckyDrawSection() {
  return (
    <section id="prizes" data-8b-section="slices" aria-labelledby="prizes-title">
      <WaveDivider swell />

      {/* Floating Rings */}
      <span className="slices__ring m-ring" aria-hidden="true" />
      <span className="slices__ring m-ring" aria-hidden="true" />

      {/* Tilted Photo */}
      <div className="slices__photo" data-8b-motion="tilt">
        <div className="m-pill">
          <Image
            src="/images/sec_06.png"
            alt="Helicopter skyline aerial joyride over Pune"
            width={900}
            height={1500}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Prize Content */}
      <div className="slices__text">
        <span className="m-text-4">Scan Under The Lid</span>
        <h2 className="m-text-2" id="prizes-title">
          Prizes That Take You High
        </h2>
        <p className="m-text">
          Every single 500ml or 1L tub of Meridian Ice Cream purchased at Pune parlours or stores has a <LiftText>secret</LiftText> QR code printed inside the lid seal. Scan it to enter our weekly draws and grand aerial joyride finale.
        </p>

        <dl className="slices__menu">
          {PRIZE_LIST.map((item) => (
            <div key={item.prize} className="slices__row">
              <dt>
                <strong className="m-text-4 block text-white">{item.prize}</strong>
                <span className="m-text text-white/80 text-xs">{item.desc}</span>
              </dt>
              <dd>
                <span className="m-badge bg-white/10 text-[#ffbc7d] border-[#ffbc7d]/40">
                  {item.badge}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div>
          <PillButton variant="solid" href="/enter">
            Scan &amp; Enter Lucky Draw Now →
          </PillButton>
        </div>
      </div>
    </section>
  );
}

