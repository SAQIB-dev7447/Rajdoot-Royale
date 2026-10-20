import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

export const metadata: Metadata = { title: "Rooms & Suites" };

const rooms = [
  { name: "Deluxe Suite", image: "photo-1611892440504-42a792e24d32", category: "THE SIGNATURE STAY", description: "An intimate city retreat, where warm timber, soft linens and thoughtful touches create a place to truly unwind.", size: "55 m²", guests: "2 guests", bed: "King bed", features: ["Separate sitting area", "Marble bathroom", "Evening turndown"] },
  { name: "Premium Suite", image: "photo-1616486338812-3dadae4b4ace", category: "ROOM TO UNWIND", description: "A generous suite layered with natural textures and generous light, with considered spaces for work and rest.", size: "72 m²", guests: "2 guests", bed: "King bed", features: ["Lounge and dining area", "Deep soaking tub", "Curated minibar"] },
  { name: "Penthouse Suite", image: "photo-1600210492486-724fe5c67fb0", category: "ABOVE THE CITY", description: "Expansive views and a private terrace make this a remarkable setting for a longer stay or special occasion.", size: "110 m²", guests: "3 guests", bed: "King bed + daybed", features: ["Private terrace", "Panoramic city views", "Dedicated host"] },
  { name: "Royal Residence", image: "photo-1618221195710-dd6b41faaea6", category: "THE GRAND ESCAPE", description: "A private residence with room to gather, slow down, and experience the very best of Rajdoot Royale Residency.", size: "145 m²", guests: "4 guests", bed: "2 bedrooms", features: ["Two ensuite bedrooms", "Private dining room", "Personalized arrival"] },
];

export default function RoomsPage() {
  return <main>
    <PageBanner eyebrow="A PLACE TO CALL YOUR OWN" title={<>Rooms &amp; <em>suites</em></>} subtitle="Find your own rhythm in spaces shaped for rest, connection and a little indulgence." image="photo-1611892440504-42a792e24d32" />
    <section className="page-intro section-wrap"><p className="eyebrow">THE DETAILS MAKE THE STAY</p><h2>Considered comfort.<br /><em>Quietly exceptional.</em></h2><p>From a restful night to an unhurried morning, every room brings together generous space, tactile materials and the thoughtful service that makes Rajdoot Royale Residency feel like your own.</p></section>
    <section className="room-list section-wrap">{rooms.map((room, i) => <article className={`room-detail ${i % 2 ? "reverse" : ""}`} key={room.name}><div className="detail-image" style={{ backgroundImage: `url(https://images.unsplash.com/${room.image}?auto=format&fit=crop&w=1500&q=85)` }}><span>0{i + 1} / 04</span></div><div className="detail-copy"><p className="eyebrow">{room.category}</p><h2>{room.name}</h2><p className="detail-description">{room.description}</p><div className="room-facts"><span>{room.size}</span><span>{room.guests}</span><span>{room.bed}</span></div><ul>{room.features.map(feature => <li key={feature}>{feature}</li>)}</ul><Link className="gold-button" href={`/booking?room=${encodeURIComponent(room.name)}`}>Enquire about this room <span>↗</span></Link></div></article>)}</section>
    <section className="closing"><p className="eyebrow">WE’LL TAKE CARE OF THE DETAILS</p><h2>Your stay starts <em>with a conversation.</em></h2><Link className="gold-button" href="/booking">Plan your stay <span>↗</span></Link></section>
  </main>;
}
