import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

export const metadata: Metadata = { title: "Spa & Wellness" };
const treatments = [
  ["01", "Signature restorative massage", "A flowing full-body treatment designed to ease tension and bring the mind back to stillness.", "60 / 90 minutes"],
  ["02", "Botanical renewal facial", "A tailored facial ritual using nourishing botanicals and gentle, restorative techniques.", "60 minutes"],
  ["03", "Warm stone ritual", "Heated stones and slow, grounding movements invite the body to fully let go.", "90 minutes"],
  ["04", "Quiet reset", "A private wellness journey with time in the steam room, a guided stretch and a restorative treatment.", "120 minutes"],
];

export default function SpaPage() {
  return <main>
    <PageBanner eyebrow="A MOMENT THAT BELONGS TO YOU" title={<>Spa &amp; <em>wellness</em></>} subtitle="Make space to slow down, restore your energy and return to the world feeling renewed." image="photo-1540555700478-4be289fbecef" />
    <section className="page-intro section-wrap"><p className="eyebrow">REST, IN YOUR OWN TIME</p><h2>Find your way back<br /><em>to balance.</em></h2><p>At Rajdoot Royale Residency Spa, each experience begins with a conversation. Our therapists shape every treatment around what you need in the moment, in a calm retreat from the pace of the day.</p></section>
    <section className="wellness-feature section-wrap"><div className="wellness-image" /><div><p className="eyebrow">THE SPA SANCTUARY</p><h2>Gentle rituals.<br /><em>Lasting calm.</em></h2><p>Step into softly lit treatment rooms, a restorative steam suite and a quiet relaxation lounge. Take a little time before and after your treatment; there is no need to hurry.</p><div className="spa-hours"><span>SPA HOURS</span><strong>Daily · 9:00–21:00</strong><small>Advance reservations are recommended.</small></div></div></section>
    <section className="treatments section-wrap"><div className="section-heading"><p className="eyebrow">THE TREATMENT MENU</p><h2>Choose your <em>moment.</em></h2></div><div className="treatment-list">{treatments.map(([number, name, description, duration]) => <article key={number}><span className="treatment-number">{number}</span><div><h3>{name}</h3><p>{description}</p></div><span className="treatment-duration">{duration}</span></article>)}</div><p className="menu-disclaimer">Treatment descriptions and durations are a guide. Our team will help you choose the right experience.</p></section>
    <section className="closing"><p className="eyebrow">YOUR TIME, WELL SPENT</p><h2>Begin with a <em>deep breath.</em></h2><Link className="gold-button" href="/booking?experience=spa">Enquire about a treatment <span>↗</span></Link></section>
  </main>;
}
