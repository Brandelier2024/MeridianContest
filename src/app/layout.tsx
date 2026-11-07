import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Ice Creams — Scan, Scratch & Win Joy! (Festive 2026)",
  description:
    "Buy any Meridian 500ml or 1L tub, scan the secret QR code under the lid, and win helicopter joyrides, movie tickets, or instant free scoops across Pune, Mumbai, and Maharashtra.",
  keywords: [
    "Meridian Ice Creams",
    "Scan and Win",
    "Ice Cream Contest",
    "Helicopter Joyride",
    "Pune Ice Cream",
    "Mumbai Ice Cream",
    "Pure Dairy",
  ],
  openGraph: {
    title: "Meridian Ice Creams — Scan, Scratch & Win Joy!",
    description:
      "Win Helicopter Rides, Couple Movie Tickets, or Instant Free Scoops with Meridian festive tubs.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#dc1e43] selection:text-white">
        {children}
      </body>
    </html>
  );
}

