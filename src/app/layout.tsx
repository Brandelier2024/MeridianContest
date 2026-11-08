import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Ice Creams — Pure Dairy Milk & Lucky Draw (Pune)",
  description:
    "Pune's favourite pure dairy ice cream since 1999. Churned with 100% whole milk and natural seasonal fruits. Buy any 500ml or 1L tub, scan the secret QR code under the lid, and enter to win a VIP Helicopter Joyride & Movie Tickets.",
  keywords: [
    "Meridian Ice Creams",
    "Pune Ice Cream",
    "Pure Dairy Milk",
    "Scan and Win",
    "Helicopter Joyride",
    "Honey Nut Crunch",
    "Ratnagiri Alphonso Mango",
    "Sitaphal Ice Cream",
  ],
  openGraph: {
    title: "Meridian Ice Creams — The Real Indian Taste",
    description:
      "Win a Helicopter Joyride & VIP Movie Tickets with Meridian Pure Dairy Ice Creams.",
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
          href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500;600;700;800&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,800&family=Montagu+Slab:opsz,wght@16..144,700&family=Nunito:wght@400;500;600;700;800;900&family=Pliant:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#dc1e43] selection:text-white bg-[#dc1e43] text-[#1c0b07]">
        {children}
      </body>
    </html>
  );
}
