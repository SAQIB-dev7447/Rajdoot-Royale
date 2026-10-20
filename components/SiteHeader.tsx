"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Rooms", "/rooms"],
  ["Dining", "/dining"],
  ["Spa", "/spa"],
  ["Contact", "/contact"],
] as const;

export function Crest() {
  return <Link className="brand" href="/" aria-label="Rajdoot Royale Residency home"><Image className="brand-logo" src="/rajdoot-royale-logo.png" alt="Rajdoot Royale Residency" width={383} height={217} priority /></Link>;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="topbar">
    <nav className={menuOpen ? "nav-left nav-open" : "nav-left"} aria-label="Main navigation">
      {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>)}
    </nav>
    <Crest />
    <Link className="book-button" href="/booking">Book now <span>↗</span></Link>
    <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
  </header>;
}
