import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer"><div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/images/mss-logo.png" alt="MSS logo" width={86} height={86} />
          <h4>Martin&apos;s Security Solutions</h4>
          <p>Professional security services built around visible presence, mobile response, clear communication and site-specific coverage.</p>
        </div>
        <div><h5>Navigation</h5><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About Us</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
        <div><h5>Services</h5><Link href="/services#static">Static Guarding</Link><Link href="/services#mobile">Mobile Patrol</Link><Link href="/services#construction">Construction Security</Link><Link href="/services#concierge">Concierge Security</Link><Link href="/services#event">Event Security</Link></div>
        <div><h5>Contact</h5><a href="mailto:info@martinssecurity.ca">info@martinssecurity.ca</a><Link href="/contact#quote">Request a Quote</Link><Link href="/contact">Edmonton, Alberta</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Martin&apos;s Security Solutions. All rights reserved.</span><span>People • Property • Peace of Mind</span></div>
    </div></footer>
  );
}
