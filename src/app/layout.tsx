import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/site";
import Spotlight from "@/components/Spotlight";
import ThemeToggle from "@/components/ThemeToggle";
import { TechIconSprite } from "@/components/TechIcon";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

// Kept short for search/social previews: title 50–60 chars, description ≤ ~125 chars.
const title = `${profile.name} — Full-Stack Software Engineer, Ethiopia`;
const description =
  "Software engineer in Addis Ababa building web and mobile apps with Next.js, NestJS, React Native and Power Platform.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
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
        <TechIconSprite />
        <Spotlight />
        <ThemeToggle />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
