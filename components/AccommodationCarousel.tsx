"use client";

import Link from "next/link";
import Carousel from "./Carousel";

const stays = [
  { name: "Deluxe Suite", image: "photo-1611892440504-42a792e24d32", note: "A quiet retreat, beautifully appointed" },
  { name: "Premium Suite", image: "photo-1616486338812-3dadae4b4ace", note: "Room to slow down and settle in" },
  { name: "Penthouse Suite", image: "photo-1600210492486-724fe5c67fb0", note: "The city, framed from above" },
];

export default function AccommodationCarousel() {
  return <Carousel className="accommodation-carousel" label="accommodations" items={stays.map((suite, index) => <Link className="room-card" href="/rooms" key={suite.name}>
    <span className="room-image" style={{ backgroundImage: `url(https://images.unsplash.com/${suite.image}?auto=format&fit=crop&w=1100&q=85)` }}><span className="room-number">0{index + 1}</span><span className="room-name">{suite.name}</span><span className="room-link">↗</span></span>
    <span className="room-note">{suite.note}</span>
  </Link>)} />;
}
