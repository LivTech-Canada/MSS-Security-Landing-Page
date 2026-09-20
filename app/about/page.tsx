import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About MSS',
  description: "Learn about Martin's Security Solutions and our professional, site-specific approach to security.",
};

export default function AboutPage() {
  return <main>
    <PageHero
      eyebrow="About MSS"
      title="A premium security brand built around professional presence."
      text="Martin's Security Solutions is positioned around clear service standards, professional presentation and site-specific coverage that helps clients feel confident in the security program protecting their people and property."
      image="/images/hero.webp"
      tags={['Professional Presence', 'Clear Communication', 'Site-Specific Coverage']}
    />

    <section className="section"><div className="container content-grid">
      <div className="logo-panel reveal"><Image src="/images/mss-logo.png" alt="MSS logo" width={512} height={512} /></div>
      <div className="copy-block reveal"><div className="eyebrow">Our Standard</div><h2>Professional from the first impression to the final report.</h2><p>MSS brings together visual presence, responsive operations and polished client communication. The goal is not simply to place a guard at a property—it is to build a security program the client can understand, manage and trust.</p><div className="bullets">
        <div className="bullet"><i>✓</i><div><b>Professional presentation</b><span>Brand, uniform and client communication work together to create confidence.</span></div></div>
        <div className="bullet"><i>✓</i><div><b>Site-specific operations</b><span>Coverage priorities are designed around the property, schedule and environment.</span></div></div>
        <div className="bullet"><i>✓</i><div><b>Documented accountability</b><span>Clear reporting supports visibility and follow-up for management.</span></div></div>
      </div></div>
    </div></section>

    <section className="stat-band"><div className="container stats">
      <div className="stat reveal"><i>◇</i><div><strong>Trust</strong><span>Built through consistency, visibility and clear communication.</span></div></div>
      <div className="stat reveal"><i>★</i><div><strong>Professionalism</strong><span>A premium client-facing standard across every touchpoint.</span></div></div>
      <div className="stat reveal"><i>▤</i><div><strong>Accountability</strong><span>Documented activity and defined site responsibilities.</span></div></div>
      <div className="stat reveal"><i>◎</i><div><strong>Service</strong><span>Coverage designed around the client&apos;s real operational needs.</span></div></div>
    </div></section>

    <section className="section dark"><div className="container why">
      <div className="image-frame reveal"><Image src="/images/hero.webp" alt="MSS officer and patrol vehicle" width={1672} height={941} /></div>
      <div className="reveal"><div className="eyebrow">The MSS Approach</div><h2 className="h2">Security that looks as professional as the property it protects.</h2><p className="lead">The brand is deliberately built to feel organized, responsive and premium—from the website and proposal experience to the officer on site and the reporting delivered to management.</p><div className="reason-list"><div className="reason"><b>Consult</b><span>Understand the property, risks, schedule and expectations.</span></div><div className="reason"><b>Plan</b><span>Define responsibilities, priorities and escalation procedures.</span></div><div className="reason"><b>Deploy</b><span>Launch coverage with a clear site-specific service standard.</span></div><div className="reason"><b>Review</b><span>Use reporting and client feedback to refine the program.</span></div></div></div>
    </div></section>

    <section className="section quote-section"><div className="container section-head reveal"><div className="copy"><div className="eyebrow">Talk to MSS</div><h2 className="h2">Tell us what needs protecting.</h2><p className="lead">A strong security plan starts with a clear understanding of the property and the outcome you need.</p></div><Link className="btn btn-gold" href="/contact#quote">Request a Consultation →</Link></div></section>
  </main>;
}
