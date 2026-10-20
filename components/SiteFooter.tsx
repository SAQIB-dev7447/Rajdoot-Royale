import Link from "next/link";
import { Crest } from "./SiteHeader";

export default function SiteFooter() {
  return <footer className="site-footer"><Crest /><span>© {new Date().getFullYear()} Rajdoot Royale Residency</span><nav aria-label="Footer navigation"><Link href="/contact">Contact</Link><Link href="/booking">Reservations</Link><Link href="/dining">Dining</Link><Link href="/spa">Spa & wellness</Link></nav></footer>;
}
