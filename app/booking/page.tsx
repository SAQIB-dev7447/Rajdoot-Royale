import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import InquiryForm from "../../components/InquiryForm";

export const metadata: Metadata = { title: "Plan Your Stay" };

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ room?: string; experience?: string }> }) {
  const { room, experience } = await searchParams;
  const initialRoom = ["Deluxe Suite", "Premium Suite", "Penthouse Suite", "Royal Residence"].includes(room ?? "") ? room! : "";
  return <main>
    <PageBanner eyebrow="A STAY TO LOOK FORWARD TO" title={<>Plan your <em>stay</em></>} subtitle="Tell us what you have in mind. Our reservations team can help shape the right experience." image="photo-1611892440504-42a792e24d32" />
    <section className="booking-layout section-wrap"><div className="booking-copy"><p className="eyebrow">LET’S MAKE IT YOURS</p><h2>Start with the<br /><em>details you know.</em></h2><p>Share your preferred dates, room and any special requests. This form is a front-end preview and is not connected to a reservations system yet.</p><div className="booking-aside"><span className="line-icon">♧</span><div><h3>Arriving for something special?</h3><p>Let us know about celebrations, accessibility needs or preferences, and we can help plan a thoughtful welcome.</p></div></div></div><div className="booking-form-wrap"><h2>Booking enquiry</h2>{experience && <p className="selected-experience">Enquiry about: <strong>{experience}</strong></p>}<InquiryForm booking initialRoom={initialRoom} /></div></section>
  </main>;
}
