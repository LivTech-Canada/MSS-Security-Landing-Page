import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Security Services',
  description: 'Static guarding, mobile patrol, construction, concierge and event security services in Edmonton.',
};

function Bullet({ title, text }: { title: string; text: string }) {
  return <div className="bullet"><i>✓</i><div><b>{title}</b><span>{text}</span></div></div>;
}

export default function ServicesPage() {
  return <main>
    <PageHero
      eyebrow="Security Services"
      title="Protection designed around the property."
      text="Choose one service or combine multiple layers into a site-specific security program built around your schedule, risks and operating environment."
      image="/images/mobile.webp"
      tags={['Static Guarding', 'Mobile Patrol', 'Construction', 'Concierge', 'Event Security']}
    />

    <section className="section" id="static"><div className="container content-grid">
      <div className="image-frame reveal"><Image src="/images/static.webp" alt="Static guarding" width={1448} height={1086} /></div>
      <div className="copy-block reveal"><div className="eyebrow">01 • Static Guarding</div><h2>Visible protection. Professional presence.</h2><p>On-site officers can support access control, lobby presence, interior and exterior patrols, incident response and property protection while maintaining a polished client-facing standard.</p><div className="bullets">
        <Bullet title="Access control & visitor awareness" text="Support entrances, restricted areas and site-specific access procedures." />
        <Bullet title="Interior & exterior patrols" text="Visible patrol activity focused on priority areas of the property." />
        <Bullet title="Incident documentation" text="Clear written reporting for management visibility and follow-up." />
      </div><div style={{marginTop:25}}><Link className="btn btn-gold" href="/contact#quote">Request Static Coverage →</Link></div></div>
    </div></section>

    <section className="section dark" id="mobile"><div className="container content-grid">
      <div className="copy-block reveal"><div className="eyebrow">02 • Mobile Patrol</div><h2>Flexible security where you need it.</h2><p>Mobile patrol provides a visible deterrent and documented site attendance without requiring full-time static coverage at every location.</p><div className="bullets">
        <Bullet title="Scheduled or randomized patrols" text="Reduce predictability while maintaining visible security presence." />
        <Bullet title="Door, perimeter & parking checks" text="Focus patrols on entrances, exterior areas and client priorities." />
        <Bullet title="Multi-property coverage" text="Support portfolios that need flexible attendance across several sites." />
      </div><div style={{marginTop:25}}><Link className="btn btn-gold" href="/contact#quote">Request Patrol Coverage →</Link></div></div>
      <div className="image-frame reveal"><Image src="/images/mobile.webp" alt="MSS mobile patrol vehicle" width={1448} height={1086} /></div>
    </div></section>

    <section className="section" id="construction"><div className="container content-grid">
      <div className="image-frame reveal"><Image src="/images/construction.webp" alt="Construction security" width={1448} height={1086} /></div>
      <div className="copy-block reveal"><div className="eyebrow">03 • Construction Security</div><h2>Protect the site. Protect the investment.</h2><p>Construction security can focus on gates, perimeter activity, materials, equipment and after-hours access points where theft, trespassing or property damage may create costly delays.</p><div className="bullets">
        <Bullet title="Gate & perimeter presence" text="Visible coverage around site access and vulnerable boundaries." />
        <Bullet title="Equipment & material protection" text="Patrol areas can prioritize high-value or theft-prone assets." />
        <Bullet title="After-hours documentation" text="Activity and incidents are recorded for project management review." />
      </div><div style={{marginTop:25}}><Link className="btn btn-gold" href="/contact#quote">Request Construction Coverage →</Link></div></div>
    </div></section>

    <section className="section dark" id="concierge"><div className="container content-grid">
      <div className="copy-block reveal"><div className="eyebrow">04 • Concierge Security</div><h2>Security presence with a hospitality mindset.</h2><p>Concierge security combines access awareness and professional front-desk presence with polished communication for residential, commercial and mixed-use properties.</p><div className="bullets">
        <Bullet title="Front desk & lobby coverage" text="Professional presence for residents, tenants, visitors and vendors." />
        <Bullet title="Visitor & access support" text="Site-specific verification and escalation procedures." />
        <Bullet title="Client-facing presentation" text="A polished security experience designed for premium properties." />
      </div><div style={{marginTop:25}}><Link className="btn btn-gold" href="/contact#quote">Request Concierge Coverage →</Link></div></div>
      <div className="image-frame reveal"><Image src="/images/concierge.webp" alt="Concierge security" width={1448} height={1086} /></div>
    </div></section>

    <section className="section" id="event"><div className="container content-grid">
      <div className="image-frame reveal"><Image src="/images/event.webp" alt="Event security" width={1448} height={1086} /></div>
      <div className="copy-block reveal"><div className="eyebrow">05 • Event Security</div><h2>Control access. Support the crowd. Protect the event.</h2><p>Event coverage can support entrances, guest flow, crowd management, restricted areas, backstage zones and parking while helping organizers maintain a professional security presence.</p><div className="bullets">
        <Bullet title="Entrance & credential control" text="Support guest screening and restricted-area access procedures." />
        <Bullet title="Crowd & venue awareness" text="Visible security presence around high-traffic areas." />
        <Bullet title="Event-focused response" text="Escalation procedures aligned with organizer expectations." />
      </div><div style={{marginTop:25}}><Link className="btn btn-gold" href="/contact#quote">Request Event Coverage →</Link></div></div>
    </div></section>

    <section className="section quote-section"><div className="container section-head reveal"><div className="copy"><div className="eyebrow">Need a combined plan?</div><h2 className="h2">Build the right coverage mix.</h2><p className="lead">MSS can combine static guarding, mobile patrol, construction, concierge and event services around the actual needs of your property or project.</p></div><div><Link className="btn btn-gold" href="/contact#quote">Build My Security Plan →</Link></div></div></section>
  </main>;
}
