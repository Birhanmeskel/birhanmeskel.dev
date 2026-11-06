import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/site";
import Spotlight from "@/components/Spotlight";
import ThemeToggle from "@/components/ThemeToggle";
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
    // data-theme is corrected before first paint by the script below; suppressHydrationWarning lets the DOM win.
    <html lang="en" data-theme="dark" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes on <body> */}
      <body className="font-sans leading-relaxed" suppressHydrationWarning>
        <Spotlight />
        <ThemeToggle />
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
