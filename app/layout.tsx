import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://berrixsoftwaresolution.com'),
  title: {
    default: "Berrix Software Solutions | Custom Software Development & Azure Consulting",
    template: "%s | Berrix Software Solutions"
  },
  description: "Berrix Software Solutions provides custom software development, Azure cloud architecture, DevOps services, and AI-powered solutions. US-based software consulting with 10+ years of experience.",
  keywords: [
    "custom software development",
    "Azure cloud consulting",
    "DevOps services",
    "software solutions",
    "cloud migration",
    "enterprise software",
    "AI solutions",
    "automation services",
    "software consulting",
    "Azure architecture"
  ],
  authors: [{ name: "Berrix Software Solutions" }],
  creator: "Berrix Software Solutions",
  publisher: "Berrix Software Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://berrixsoftwaresolution.com",
    siteName: "Berrix Software Solutions",
    title: "Berrix Software Solutions | Custom Software Development & Azure Consulting",
    description: "Custom applications, Azure cloud, automation, and AI designed to solve real business problems. US-based software consulting with 10+ years of experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Berrix Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berrix Software Solutions | Custom Software Development",
    description: "Custom applications, Azure cloud, automation, and AI designed to solve real business problems.",
    images: ["/og-image.jpg"],
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
  verification: {
    // Add your Google Search Console verification code here when you get it
    // google: "your-google-verification-code",
  },
  other: {
    "msvalidate.01": "4C143E6A8811E4102BADBD14712AA255",
  },
  alternates: {
    canonical: "https://berrixsoftwaresolution.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

