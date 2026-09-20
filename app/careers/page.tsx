import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Careers',
  description: "Security guard, mobile patrol and concierge career opportunities with Martin's Security Solutions.",
};

const roles = [
  { n:'01', title:'Security Guard', image:'/images/static.webp', text:'Access control, patrols, client service, incident awareness and professional reporting.' },
  { n:'02', title:'Mobile Patrol Officer', image:'/images/mobile.webp', text:'Vehicle patrols, lock checks, exterior inspections, site attendance and mobile response assignments.' },
  { n:'03', title:'Concierge Security', image:'/images/concierge.webp', text:'Front-desk security, visitor support, access management and premium client-facing service.' },
];

export default function CareersPage() {
  return <main>
    <PageHero
      eyebrow="Careers at MSS"
      title="Professional people build professional security."
      text="We're building a team that values reliability, communication, professional presentation and a strong sense of responsibility on every assignment."
      image="/images/static.webp"
      tags={['Security Guard Roles', 'Mobile Patrol', 'Concierge Opportunities']}
    />

    <section className="section"><div className="container">
      <div className="section-head reveal"><div className="copy"><div className="eyebrow">Opportunities</div><h2 className="h2">Roles built around real security work.</h2></div><div className="side">Availability varies by client demand and contract requirements. Use the application form to express interest in current or upcoming opportunities.</div></div>
      <div className="services-grid careers-grid">{roles.map(role => <article className="service-card reveal" key={role.title}><div className="service-media"><Image src={role.image} alt={role.title} width={1448} height={1086} /></div><div className="service-body"><span className="service-number">{role.n}</span><h3>{role.title}</h3><p>{role.text}</p><Link className="text-link" href="/contact#careers">Apply Interest →</Link></div></article>)}</div>
    </div></section>

    <section className="section dark"><div className="container content-grid">
      <div className="copy-block reveal"><div className="eyebrow">What We Look For</div><h2>Professionalism is more than the uniform.</h2><p>MSS values candidates who communicate clearly, show up prepared, follow site procedures and understand that clients judge the company through every interaction.</p><div className="bullets">
        <div className="bullet"><i>✓</i><div><b>Reliable & punctual</b><span>Consistent attendance and professional time management.</span></div></div>
        <div className="bullet"><i>✓</i><div><b>Clear communicator</b><span>Calm, respectful interaction with clients, tenants and the public.</span></div></div>
        <div className="bullet"><i>✓</i><div><b>Detail-oriented</b><span>Strong reporting habits and attention to site-specific procedures.</span></div></div>
        <div className="bullet"><i>✓</i><div><b>Professional presentation</b><span>Clean uniform standards and a client-ready attitude.</span></div></div>
      </div></div>
      <div className="image-frame reveal"><Image src="/images/event.webp" alt="MSS event security professionals" width={1448} height={1086} /></div>
    </div></section>

    <section className="section quote-section"><div className="container section-head reveal"><div className="copy"><div className="eyebrow">Join the Team</div><h2 className="h2">Ready to apply?</h2><p className="lead">Send your contact information and the type of security role you&apos;re interested in.</p></div><Link className="btn btn-gold" href="/contact#careers">Apply Interest →</Link></div></section>
  </main>;
}
