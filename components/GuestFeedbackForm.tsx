"use client";

import { useState } from "react";

const ratings = [1, 2, 3, 4, 5];

export default function GuestFeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  return <form className="inquiry-form guest-feedback-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    <div className="form-row">
      <label>Your name (optional)<input name="name" autoComplete="name" placeholder="How should we address you?" /></label>
      <label>When did you stay? (optional)<input type="date" name="stayDate" /></label>
    </div>
    <fieldset className="feedback-rating">
      <legend>How would you rate your stay?</legend>
      <div className="feedback-rating-options">{ratings.map((rating) => <label key={rating}><input type="radio" name="rating" value={rating} required /><span>{rating}</span></label>)}</div>
      <div className="feedback-rating-scale"><span>Needs attention</span><span>Exceptional</span></div>
    </fieldset>
    <label>What would you like us to know?<textarea name="message" rows={5} placeholder="Share a moment you appreciated or something we could improve" required /></label>
    <button className="gold-button" type="submit">Share feedback <span>↗</span></button>
    {submitted && <p className="form-notice" role="status">Thank you for sharing. This preview does not submit or store feedback yet.</p>}
    <p className="form-privacy">This preview does not transmit or store personal information.</p>
  </form>;
}
