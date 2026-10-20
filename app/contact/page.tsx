import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";
import InquiryForm from "../../components/InquiryForm";

export const metadata: Metadata = { title: "Contact & Guest Services" };

export default function ContactPage() {
  return <main className="contact-page">
    <PageBanner eyebrow="WE’RE HERE TO HELP" title={<>Contact <em>our team</em></>} subtitle="Whether you are planning a visit or already with us, our team is ready to help with the details." image="photo-1600210492486-724fe5c67fb0" />
    <section className="contact-intro section-wrap"><p className="eyebrow">A PERSONAL RESPONSE</p><h2>Tell us what<br /><em>you need.</em></h2><p>Send a note to our guest relations team and we’ll help direct your request. For room availability and stay planning, visit our booking enquiry page.</p><Link className="text-link" href="/booking">Go to booking enquiries <span>↗</span></Link></section>
    <section className="contact-layout section-wrap"><div className="contact-services"><article><span>01</span><div><h3>Reservations</h3><p>Room availability, special requests and stay planning.</p><Link href="/booking">Plan a stay ↗</Link></div></article><article><span>02</span><div><h3>Dining & celebrations</h3><p>Table enquiries and special occasions at the hotel.</p><Link href="/dining">Explore dining ↗</Link></div></article><article><span>03</span><div><h3>Spa & wellness</h3><p>Treatment enquiries and wellness experiences.</p><Link href="/spa">Explore the spa ↗</Link></div></article><article><span>04</span><div><h3>Guest services</h3><p>Questions about an upcoming or current stay.</p></div></article></div><div className="contact-form-wrap"><h2>Send an enquiry</h2><InquiryForm /></div></section>
  </main>;
}
