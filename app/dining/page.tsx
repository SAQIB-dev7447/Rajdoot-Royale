import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

export const metadata: Metadata = { title: "Dining" };
const experiences = [
  { name: "The Crest Table", eyebrow: "ALL-DAY RESTAURANT", image: "photo-1414235077428-338989a2e8c0", text: "A relaxed dining room for leisurely breakfasts, seasonal lunches and elegant dinners. The kitchen follows the market and lets excellent ingredients speak for themselves.", hours: "Breakfast 7:00–10:30 · Lunch 12:00–15:00 · Dinner 18:30–22:30" },
  { name: "The Salon", eyebrow: "LOUNGE & AFTERNOON TEA", image: "photo-1517248135467-4c7edcad34c4", text: "Settle into a favorite chair for a light lunch, a beautifully poured tea or a cocktail before the evening begins. The Salon is made for conversations that have nowhere else to be.", hours: "Daily 11:00–23:00 · Afternoon tea 14:00–17:00" },
  { name: "The High Room", eyebrow: "ROOFTOP BAR", image: "photo-1514933651103-005eec06c04b", text: "As the city lights come on, find a seat above it all. A thoughtful list of signature drinks and small plates is served against an open skyline.", hours: "Daily 16:00–00:00 · Weather permitting" },
];

export default function DiningPage() {
  return <main>
    <PageBanner eyebrow="GATHER AROUND THE TABLE" title={<>Dining &amp; <em>drink</em></>} subtitle="Seasonal cooking, warm rooms and good company, from first coffee to the last pour." image="photo-1414235077428-338989a2e8c0" />
    <section className="page-intro section-wrap"><p className="eyebrow">A TASTE OF RAJDOOT ROYALE</p><h2>Good food, made<br /><em>for good company.</em></h2><p>Every dining room has its own character, but they share the same belief: the best meals feel generous, unhurried and made with care.</p></section>
    <section className="experience-list section-wrap">{experiences.map((item, i) => <article className={`experience-card ${i % 2 ? "reverse" : ""}`} key={item.name}><div className="experience-image" style={{ backgroundImage: `url(https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1400&q=85)` }} /><div className="experience-copy"><p className="eyebrow">{item.eyebrow}</p><h2>{item.name}</h2><p>{item.text}</p><p className="service-hours"><span>HOURS</span>{item.hours}</p><Link className="text-link" href={`/booking?experience=${encodeURIComponent(item.name)}`}>Enquire about a table <span>↗</span></Link></div></article>)}</section>
    <section className="menu-note"><p className="eyebrow">A NOTE FROM THE KITCHEN</p><h2>Fresh from the season.<br /><em>Thoughtful by design.</em></h2><p>Our menus change with the ingredients we find and the moments we want to create. Please speak with our team about dietary preferences and special occasions.</p><Link className="gold-button" href="/contact">Plan a celebration <span>↗</span></Link></section>
  </main>;
}
