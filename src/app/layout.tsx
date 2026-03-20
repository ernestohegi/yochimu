import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";
import { MSWProvider } from "@/components/MSWProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yochimu - Japanese Text Parser & Sentence Analyzer",
    template: "%s | Yochimu Japanese Learning Tool",
  },
  description:
    "Powerful Japanese text parser and sentence analyzer. Look up definitions, break down grammar, save vocabulary lists, and export to Anki for efficient Japanese language learning.",
  keywords: [
    "Japanese parser",
    "Japanese text analyzer",
    "Japanese sentence breakdown",
    "Japanese grammar checker",
    "Japanese learning tool",
    "Anki Japanese export",
  ],
  alternates: {
    canonical: "https://yochimu.app",
  },
  openGraph: {
    title: "Yochimu - Japanese Text Parser & Sentence Analyzer",
    description:
      "Analyze Japanese sentences, look up definitions, and export vocabulary to Anki",
    url: "https://yochimu.app",
    siteName: "Yochimu",
    images: [
      {
        url: "https://yochimu.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yochimu - Japanese Text Parser & Sentence Analyzer",
    description:
      "Analyze Japanese sentences, look up definitions, and export vocabulary to Anki",
    images: ["https://yochimu.app/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-xl`}
      >
        <MSWProvider>
          <ClientLayout>
            <section className="flex flex-col min-h-screen gap-4 p-4 pb-18">
              <Header />
              <main>{children}</main>
              <Footer />
            </section>
          </ClientLayout>
        </MSWProvider>
      </body>
    </html>
  );
}
