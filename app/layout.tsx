import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: { default: "Rajdoot Royale Residency | A Stay Above the Ordinary", template: "%s | Rajdoot Royale Residency" },
  description: "Discover a world of quiet luxury at Rajdoot Royale Residency. Explore rooms, dining, spa experiences, and plan your stay.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><ScrollReveal /><SiteHeader />{children}<SiteFooter /></body></html>;
}
