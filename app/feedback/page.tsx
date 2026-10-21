import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import GuestFeedbackForm from "../../components/GuestFeedbackForm";
import GuestFeedbackCarousel from "../../components/GuestFeedbackCarousel";

export const metadata: Metadata = { title: "Guest Feedback" };

export default function FeedbackPage() {
  return <main>
    <PageBanner eyebrow="HELP US MAKE IT BETTER" title={<>Your experience <em>matters.</em></>} subtitle="Your perspective helps us make each visit more welcoming, comfortable and memorable." image="photo-1616486338812-3dadae4b4ace" />
    <section className="page-intro section-wrap"><p className="eyebrow">A NOTE FROM YOU</p><h2>Tell us about<br /><em>your stay.</em></h2><p>Share what you enjoyed and where we can improve. You can leave your name and stay date blank if you prefer.</p></section>
    <section className="guest-feedback-form-wrap section-wrap" aria-label="Guest feedback form"><GuestFeedbackForm /></section>
    <section className="feedback-page-reviews section-wrap" aria-labelledby="feedback-samples-title">
      <div className="section-heading"><p className="eyebrow">SAMPLE GUEST FEEDBACK</p><h2 id="feedback-samples-title">Thoughtful stays,<br /><em>well remembered.</em></h2><p className="section-sub">Illustrative examples, not verified guest reviews.</p></div>
      <GuestFeedbackCarousel />
    </section>
  </main>;
}
