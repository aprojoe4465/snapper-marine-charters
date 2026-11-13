import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookBar from "@/components/StickyBookBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Fishing & Sightseeing Charters`,
    template: `%s | ${site.shortName}`,
  },
  description:
    `${site.name} offers fishing, sightseeing, and snorkel charters in ${site.serviceAreaSummary} aboard ${site.boatName}. Book a trip with ${site.captainShort}.`,
  metadataBase: new URL(`https://${site.domain}`),
  keywords: [
    "Snapper Marine Charters",
    "Captain Joe",
    "Deep Blue Hunter",
    "fishing charter Treasure Coast",
    "Port St. Lucie fishing charter",
    "Stuart fishing charter",
    "Fort Pierce sightseeing cruise",
    "sandbar trip Florida",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.tagline,
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBookBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: site.name,
                  legalName: site.legalName,
                  url: `https://${site.domain}`,
                  email: site.email,
                  description: `${site.name} offers fishing, sightseeing, and snorkel charters in ${site.serviceAreaSummary} aboard ${site.boatName}, a Contender center console with twin Honda 250 outboards.`,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Port St. Lucie",
                    addressRegion: "FL",
                    addressCountry: "US",
                  },
                  employee: {
                    "@type": "Person",
                    name: site.captain,
                    jobTitle: "Captain",
                  },
                },
                {
                  "@type": "Boat",
                  name: site.boatName,
                  description:
                    "Contender center console with twin Honda 250 outboards",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
