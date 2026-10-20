import Link from "next/link";

const stays = [
  { name: "Deluxe Suite", image: "photo-1611892440504-42a792e24d32", note: "A quiet retreat, beautifully appointed" },
  { name: "Premium Suite", image: "photo-1616486338812-3dadae4b4ace", note: "Room to slow down and settle in" },
  { name: "Penthouse Suite", image: "photo-1600210492486-724fe5c67fb0", note: "The city, framed from above" },
];
const amenities = [
  ["♧", "Spa & Wellness", "Restorative rituals and thoughtful treatments."], ["♨", "Fine Dining", "Seasonal ingredients and intimate evenings."],
  ["pool", "Rooftop Pool", "A serene horizon above the city."], ["♙", "Fitness Center", "A calm space to keep your routine in motion."],
  ["⌘", "Airport Transfers", "Arrive with ease, every detail handled."], ["♜", "Concierge", "Local knowledge, around the clock."],
];

export default function Home() {
  return <main>
    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-copy"><p className="eyebrow">A PRIVATE WORLD OF DISTINCTION</p><h1>Welcome to<br />the epitome of<br /><em>luxury</em></h1><p className="intro">An exceptional stay, shaped by thoughtful details, timeless design and warm, attentive service.</p><Link className="gold-button" href="/rooms">Discover your stay <span>↗</span></Link></div>
      <div className="hero-caption"><span>01</span><i /> AN EXPERIENCE ABOVE THE ORDINARY</div>
    </section>

    <section className="signature" aria-label="Stay at Rajdoot Royale Residency"><div className="signature-inner">
      {[["⌂", "Superior Rooms", "Considered comfort, with the details that make a stay."], ["♧", "Deluxe Suites", "Room to unwind in a world of quiet refinement."], ["♙", "Executive Rooms", "A seamless balance of work, rest and ritual."]].map(([icon, title, desc]) => <Link className="signature-item" href="/rooms" key={title}><span className="line-icon">{icon}</span><div><h2>{title}</h2><p>{desc}</p></div><span className="item-arrow">↗</span></Link>)}
    </div></section>

    <section className="residency-story">
      <div className="story-image" role="img" aria-label="A warmly lit, thoughtfully appointed hotel interior" />
      <div className="story-copy">
        <p className="eyebrow">A WARMER KIND OF WELCOME</p>
        <h2>Arrive, exhale,<br /><em>and feel at home.</em></h2>
        <p>At Rajdoot Royale Residency, the best moments unfold at your own pace. Thoughtful spaces, attentive service and a sense of calm make room for a stay that feels entirely your own.</p>
        <Link className="text-link" href="/contact">Get to know the residency <span>↗</span></Link>
      </div>
      <span className="story-index">A PLACE TO PAUSE&nbsp; / &nbsp;RAJDOOT ROYALE</span>
    </section>

    <section className="rooms section-wrap" id="rooms"><div className="section-heading"><p className="eyebrow">STAY A LITTLE LONGER</p><h2>Discover our <em>luxury accommodations</em></h2><p className="section-sub">Spaces that invite you to exhale, settle in, and feel entirely at home.</p></div>
      <div className="room-grid">{stays.map((suite, index) => <Link className="room-card" href="/rooms" key={suite.name}><span className="room-image" style={{ backgroundImage: `url(https://images.unsplash.com/${suite.image}?auto=format&fit=crop&w=1100&q=85)` }}><span className="room-number">0{index + 1}</span><span className="room-name">{suite.name}</span><span className="room-link">↗</span></span><span className="room-note">{suite.note}</span></Link>)}</div>
      <div className="center-action"><Link className="text-link" href="/rooms">View all accommodations <span>↗</span></Link></div>
    </section>

    <section className="moments-section section-wrap">
      <div className="moments-heading"><div><p className="eyebrow">MAKE A DAY OF IT</p><h2>Find your own <em>rhythm.</em></h2></div><p>From a lingering meal to a restorative pause, discover the experiences that make a stay feel complete.</p></div>
      <div className="moments-grid">
        <Link className="moment-card moment-dining" href="/dining"><span className="moment-image" /><span className="moment-content"><span className="eyebrow">SAVOUR THE MOMENT</span><strong>The pleasure of a table</strong><span className="moment-arrow">Explore dining&nbsp; ↗</span></span></Link>
        <Link className="moment-card moment-wellness" href="/spa"><span className="moment-image" /><span className="moment-content"><span className="eyebrow">MAKE SPACE FOR YOU</span><strong>A little time to unwind</strong><span className="moment-arrow">Discover wellness&nbsp; ↗</span></span></Link>
        <Link className="moment-card moment-stay" href="/rooms"><span className="moment-image" /><span className="moment-content"><span className="eyebrow">THE VIEW FROM HERE</span><strong>Stay above the everyday</strong><span className="moment-arrow">Explore your stay&nbsp; ↗</span></span></Link>
      </div>
    </section>

    <section className="amenities section-wrap" id="amenities"><div className="amenity-title"><span></span><div><p className="eyebrow">THE ART OF A WELL SPENT DAY</p><h2>Hotel amenities <em>& services</em></h2></div><span></span></div><div className="amenity-grid">{amenities.map(([icon, title, desc]) => <Link className="amenity" href={title === "Fine Dining" ? "/dining" : "/spa"} key={title}><span className="amenity-icon">{icon === "pool" ? <svg className="pool-mark" viewBox="0 0 48 48" aria-label="Swimming pool" role="img"><path d="M8 15h32M8 23c4-5 8 5 12 0s8 5 12 0 6-1 8 0M8 31c4-5 8 5 12 0s8 5 12 0 6-1 8 0M8 38h32M14 9l2-3 2 3M31 9l2-3 2 3" /></svg> : icon}</span><h3>{title}</h3><p>{desc}</p></Link>)}</div></section>
    <section className="home-manifesto"><span className="manifesto-rule" /><p className="eyebrow">THE RAJDOOT ROYALE WAY</p><h2>It is the little things<br />that make a stay <em>stay with you.</em></h2><p>Warm welcomes. Unhurried moments. Details that feel considered.<br className="desktop-break" /> We invite you to make them your own.</p><span className="manifesto-rule" /></section>
    <section className="closing"><p className="eyebrow">YOUR OWN PRIVATE ESCAPE</p><h2>Make room for <em>something wonderful.</em></h2><Link className="gold-button" href="/booking">Plan your stay <span>↗</span></Link></section>
  </main>;
}
