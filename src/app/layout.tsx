import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";

import { LenisProvider } from "@/components/providers/LenisProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/visuals/ScrollProgress";
import { StructuredData } from "@/components/seo/StructuredData";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gingergroovestudios.com"),
  title: {
    default: "Ginger Groove Studios",
    template: "%s · Ginger Groove Studios",
  },
  description:
    "Ginger Groove Studios - Professional music production studio offering sound recording, mixing, mastering, and music production services. Where your sound takes center stage.",
  keywords: [
    "music production",
    "recording studio",
    "mixing",
    "mastering",
    "audio production",
    "music studio",
    "sound recording",
    "music producer",
    "audio engineer",
    "India",
  ],
  authors: [{ name: "Ginger Groove Studios" }],
  creator: "Ginger Groove Studios",
  publisher: "Ginger Groove Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/Logos/gglogo/Ginger Groove Logo_PNG.png",
    apple: "/assets/Logos/gglogo/Ginger Groove Logo_PNG.png",
  },
  openGraph: {
    title: "Ginger Groove Studios",
    description:
      "Ginger Groove Studios - Professional music production studio offering sound recording, mixing, mastering, and music production services.",
    url: "https://gingergroovestudios.com",
    siteName: "Ginger Groove Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/Logos/gglogo/Ginger Groove Logo_PNG.png",
        width: 1200,
        height: 630,
        alt: "Ginger Groove Studios - Professional Music Production Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ginger Groove Studios",
    description:
      "Professional music production studio offering sound recording, mixing, mastering, and music production services.",
    images: ["/assets/Logos/gglogo/Ginger Groove Logo_PNG.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gingergroovestudios.com",
  },
  verification: {
    // Add verification codes when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${roboto.variable} ${bebasNeue.variable} antialiased`}>
        <LenisProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <ScrollProgress />
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
