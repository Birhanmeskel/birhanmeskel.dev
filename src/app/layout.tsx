import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/site";
import Spotlight from "@/components/Spotlight";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const description = `${profile.name} — ${profile.title} based in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description,
  openGraph: {
    title: profile.name,
    description,
    url: "/",
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: profile.name, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes on <body> */}
      <body className="font-sans leading-relaxed" suppressHydrationWarning>
        <Spotlight />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
