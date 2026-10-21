"use client";

import Carousel from "./Carousel";
import { guestFeedback } from "../data/guestFeedback";

export default function GuestFeedbackCarousel() {
  return <Carousel
    className="guest-feedback-carousel"
    label="sample guest feedback"
    items={guestFeedback.map(({ category, quote }) => <article className="guest-quote" key={category}>
      <span className="guest-quote-label">SAMPLE · {category}</span>
      <span className="guest-quote-mark" aria-hidden="true">“</span>
      <blockquote>{quote}</blockquote>
      <span className="guest-quote-source">Illustrative sample</span>
    </article>)}
  />;
}
