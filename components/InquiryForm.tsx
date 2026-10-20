"use client";

import { useState } from "react";

export default function InquiryForm({ booking = false, initialRoom = "" }: { booking?: boolean; initialRoom?: string }) {
  const [submitted, setSubmitted] = useState(false);
  return <form className="inquiry-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    {booking && <div className="form-row"><label>Arrival<input type="date" name="arrival" required /></label><label>Departure<input type="date" name="departure" required /></label></div>}
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Full name" required /></label><label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label></div>
    {booking && <div className="form-row"><label>Room preference<select name="room" defaultValue={initialRoom}><option value="" disabled>Select a room</option><option>Deluxe Suite</option><option>Premium Suite</option><option>Penthouse Suite</option><option>Royal Residence</option></select></label><label>Guests<select name="guests" defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4</option></select></label></div>}
    <label>{booking ? "Anything else we should know?" : "How can we help?"}<textarea name="message" rows={4} placeholder={booking ? "Share any preferences or special requests" : "Tell us a little about your enquiry"} required /></label>
    <button className="gold-button" type="submit">{booking ? "Send booking enquiry" : "Send enquiry"}<span>↗</span></button>
    {submitted && <p className="form-notice" role="status">Your details are ready. This preview does not submit or store enquiries; connect the form to the hotel reservations system before launch.</p>}
    <p className="form-privacy">This preview does not transmit or store personal information.</p>
  </form>;
}
