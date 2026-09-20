import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { CareerForm, QuoteForm } from '@/components/Forms';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contact Martin's Security Solutions to request security coverage in Edmonton, Alberta.",
};

export default function ContactPage() {
  return <main>
    <PageHero
      eyebrow="Contact MSS"
      title="Start with the site. Build the right coverage."
      text="Tell us what type of property you need protected, when coverage is required and what concerns you want the security program to address."
      image="/images/construction.webp"
      tags={['Edmonton, Alberta', 'Request a Proposal', 'Fast Response']}
    />

    <section className="section quote-section" id="quote"><div className="container quote-grid">
      <div className="reveal"><div className="eyebrow">Request a Proposal</div><h2 className="h2">Tell us what needs protecting.</h2><p className="lead">Property location, preferred schedule, service type and your current security concerns are enough to begin a proposal conversation.</p><div className="contact-card"><div className="contact-row"><span className="gold">◆</span><span>Edmonton, Alberta, Canada</span></div><div className="contact-row"><span className="gold">✉</span><a href="mailto:info@martinssecurity.ca">info@martinssecurity.ca</a></div><div className="contact-row"><span className="gold">◷</span><span>24/7 coverage options available</span></div></div></div>
      <QuoteForm />
    </div></section>

    <section className="section dark" id="careers"><div className="container quote-grid">
      <div className="reveal"><div className="eyebrow">Career Interest</div><h2 className="h2">Interested in joining MSS?</h2><p className="lead">Use this short form to express interest in current or future security opportunities.</p></div>
      <CareerForm />
    </div></section>
  </main>;
}
