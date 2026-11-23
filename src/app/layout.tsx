import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: `https://${site.domain}`,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
