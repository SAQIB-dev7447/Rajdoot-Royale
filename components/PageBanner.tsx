export default function PageBanner({ eyebrow, title, subtitle, image }: { eyebrow: string; title: React.ReactNode; subtitle: string; image: string }) {
  return <section className="page-banner" style={{ backgroundImage: `linear-gradient(90deg,rgba(10,8,9,.87),rgba(10,8,9,.35)),linear-gradient(0deg,rgba(10,8,9,.3),transparent),url(https://images.unsplash.com/${image}?auto=format&fit=crop&w=2200&q=85)` }}>
    <div className="page-banner-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{subtitle}</p></div>
    <span className="banner-index">RAJDOOT ROYALE RESIDENCY&nbsp; / &nbsp;A PRIVATE WORLD OF DISTINCTION</span>
  </section>;
}
