import Image from 'next/image';
import Link from 'next/link';
import { QuoteForm } from '@/components/Forms';

const services = [
  { n: '01', id: 'static', title: 'Static Guarding', image: '/images/static.webp', text: 'Professional on-site security for access control, patrols, lobby presence, property protection and incident response.' },
  { n: '02', id: 'mobile', title: 'Mobile Patrol', image: '/images/mobile.webp', text: 'Scheduled or randomized patrols, lock checks, exterior inspections and visible mobile response across your property.' },
  { n: '03', id: 'construction', title: 'Construction Security', image: '/images/construction.webp', text: 'After-hours protection for construction sites, gates, equipment, materials, perimeters and vulnerable access points.' },
  { n: '04', id: 'concierge', title: 'Concierge Security', image: '/images/concierge.webp', text: 'Front-desk security and access management delivered with a polished, hospitality-focused client experience.' },
  { n: '05', id: 'event', title: 'Event Security', image: '/images/event.webp', text: 'Entrance control, crowd management, restricted-area coverage, parking support and event-focused incident response.' },
];

export default function HomePage() {
  return <main>
    <section className="hero" id="home">
      <div className="hero-media"><Image src="/images/hero.webp" alt="Martin's Security Solutions officer and patrol vehicle" fill sizes="100vw" preload /></div>
      <div className="container"><div className="hero-copy">
        <div className="eyebrow">Martin&apos;s Security Solutions</div>
        <h1 className="hero-title">Professional Security <span className="goldline">You Can Trust.</span></h1>
        <p>Premium security services built around professional presence, responsive mobile patrol, clear communication and detailed reporting for properties, businesses, construction sites and events.</p>
        <div className="hero-actions"><Link className="btn btn-gold" href="/contact#quote">Request a Quote →</Link><Link className="btn btn-ghost" href="/services">Explore Services</Link></div>
        <div className="hero-micro"><div><b>24/7</b><span>Coverage Options</span></div><div><b>Edmonton</b><span>Local Service Area</span></div><div><b>Custom</b><span>Site-Specific Plans</span></div></div>
      </div></div>
      <div className="hero-side-tag">People<br/>Property<br/>Peace of Mind</div>
      <div className="hero-bottom"><div className="container trust-strip">
        <div className="trust-item"><div className="trust-icon">◇</div><div><b>Professional Presence</b><span>Polished, reliable and client-ready</span></div></div>
        <div className="trust-item"><div className="trust-icon">◷</div><div><b>24/7 Coverage Options</b><span>Built around your operating hours</span></div></div>
        <div className="trust-item"><div className="trust-icon">◎</div><div><b>Trained Professionals</b><span>Site-specific duties and expectations</span></div></div>
        <div className="trust-item"><div className="trust-icon">▤</div><div><b>Detailed Reporting</b><span>Clear activity and incident documentation</span></div></div>
      </div></div>
    </section>

    <section className="section" id="services"><div className="container">
      <div className="section-head reveal"><div className="copy"><div className="eyebrow">Our Security Services</div><h2 className="h2">Complete protection. One premium standard.</h2></div><div className="side">From visible on-site guarding to mobile patrol and specialized coverage, MSS builds security around the real needs of each property.</div></div>
      <div className="services-grid">{services.map(s => <article className="service-card reveal" key={s.id}>
        <div className="service-media"><Image src={s.image} alt={s.title} width={1448} height={1086} sizes="(max-width: 560px) 100vw, (max-width: 1120px) 33vw, 20vw" /></div>
        <div className="service-body"><span className="service-number">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><Link className="text-link" href={`/services#${s.id}`}>Learn More →</Link></div>
      </article>)}</div>
    </div></section>

    <section className="section dark"><div className="container why">
      <div className="logo-panel reveal"><Image src="/images/mss-logo.png" alt="MSS crest" width={512} height={512} /></div>
      <div className="reveal"><div className="eyebrow">Why Choose MSS</div><h2 className="h2">More than security.<br/><span className="gold">A higher standard.</span></h2><p className="lead">Martin&apos;s Security Solutions is designed around professionalism, clear communication and site-specific service. The goal is simple: make security easier to manage and more visible to the people who depend on it.</p>
        <div className="reason-list"><div className="reason"><b>Site-Specific Planning</b><span>Coverage designed around your entrances, risks, schedule and operational needs.</span></div><div className="reason"><b>Professional Presentation</b><span>Consistent branding, uniform standards and a polished client-facing presence.</span></div><div className="reason"><b>Clear Communication</b><span>Defined escalation paths and reporting expectations from the start.</span></div><div className="reason"><b>Flexible Coverage</b><span>Temporary, overnight, project-based and ongoing service options.</span></div></div>
        <div className="values"><span className="value-pill">Trust</span><span className="value-pill">Professionalism</span><span className="value-pill">Accountability</span><span className="value-pill">Service</span></div>
      </div>
    </div></section>

    <section className="stat-band"><div className="container stats">
      <div className="stat reveal"><i>◷</i><div><strong>24/7</strong><span>Coverage options for properties that require around-the-clock support.</span></div></div>
      <div className="stat reveal"><i>➤</i><div><strong>Mobile</strong><span>Flexible patrol presence across one or multiple locations.</span></div></div>
      <div className="stat reveal"><i>⌖</i><div><strong>Site-Specific</strong><span>Post orders and patrol priorities designed around your property.</span></div></div>
      <div className="stat reveal"><i>▤</i><div><strong>Professional</strong><span>Clear reporting and documented activity for management visibility.</span></div></div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head reveal"><div className="copy"><div className="eyebrow">Industries We Serve</div><h2 className="h2">Security for every environment.</h2></div><div className="side">Every property is different. MSS adapts coverage to the environment, operating hours and client expectations.</div></div>
      <div className="industries"><div className="industry reveal"><i>⌂</i><b>Residential Communities</b><span>Apartments, condominiums and mixed-use properties.</span></div><div className="industry reveal"><i>▥</i><b>Commercial Properties</b><span>Offices, retail and professional environments.</span></div><div className="industry reveal"><i>△</i><b>Construction Sites</b><span>Equipment, materials, gates and perimeter coverage.</span></div><div className="industry reveal"><i>◎</i><b>Events & Venues</b><span>Guest flow, entrances, restricted areas and crowd management.</span></div><div className="industry reveal"><i>◇</i><b>Concierge / Front Desk</b><span>Professional security with a hospitality mindset.</span></div></div>
    </div></section>

    <section className="section dark"><div className="container testimonial-wrap">
      <div className="testimonial-copy reveal"><div className="eyebrow">Client Experience</div><h2 className="h2">Built to create confidence.</h2><p className="lead">Security is not only what happens during an incident. It is the confidence clients gain from consistent presence, communication and documented service.</p></div>
      <div className="quote-card reveal"><div className="quote-mark">”</div><blockquote>Professional presentation, clear communication and reliable reporting make the security program easier for property management to oversee.</blockquote><div className="quote-meta"><b>Client-focused service standard</b> • Edmonton, Alberta</div></div>
    </div></section>

    <section className="section quote-section" id="quote"><div className="container quote-grid">
      <div className="reveal"><div className="eyebrow">Get Started</div><h2 className="h2">Request a security proposal.</h2><p className="lead">Tell us about your property, schedule and security concerns. We can use that information to structure the right coverage approach.</p>
        <div className="contact-card"><div className="contact-row"><span className="gold">◆</span><span>Edmonton, Alberta, Canada</span></div><div className="contact-row"><span className="gold">✉</span><a href="mailto:info@martinssecurity.ca">info@martinssecurity.ca</a></div><div className="contact-row"><span className="gold">◷</span><span>24/7 coverage options available</span></div></div>
      </div>
      <QuoteForm />
    </div></section>
  </main>;
}
