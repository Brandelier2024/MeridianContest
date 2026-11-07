import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Ice Creams — Scan & Win Lucky Draw (Pune)",
  description:
    "Buy any Meridian 500ml or 1L tub, scan the secret QR code under the lid, and enter the grand lucky draw to win Helicopter Joyrides and VIP Movie Tickets.",
  keywords: [
    "Meridian Ice Creams",
    "Scan and Win",
    "Helicopter Joyride",
    "Pune Ice Cream",
    "Pure Dairy Milk",
    "Honey Nut Crunch",
    "Ratnagiri Alphonso Mango",
  ],
  openGraph: {
    title: "Meridian Ice Creams — Scan & Win Lucky Draw",
    description:
      "Win a Helicopter Joyride & VIP Movie Tickets with Meridian Ice Creams festive tubs.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500;600;700;800&family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#046bd2] selection:text-white bg-[#F0F5FA] text-[#1e293b]">
        {children}
      </body>
    </html>
  );
}
