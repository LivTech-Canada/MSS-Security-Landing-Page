import Link from "next/link";

export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-grid">
    <div><Link className="brand" href="/"><img src="/images/logo.png" alt="Martin's Security Services logo" /><div><b>Martin&apos;s Security Services</b><span>Protection • Professionalism • Presence</span></div></Link><p style={{marginTop:16}}>Premium security coverage for residential communities, commercial properties, construction sites, event environments and client-facing spaces.</p></div>
    <div><h5>Navigate</h5><ul><li><Link href="/">Home</Link></li><li><Link href="/services">Services</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/careers">Careers</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
    <div><h5>Service Areas</h5><ul><li>Static Guarding</li><li>Mobile Patrol</li><li>Construction Security</li><li>Concierge Security</li><li>Event Security</li></ul></div>
    <div><h5>Client Focus</h5><ul><li>Professional presentation</li><li>Tailored security programs</li><li>Detailed reporting</li><li>Responsive communication</li></ul></div>
  </div><div className="footer-bottom"><span>© 2026 Martin&apos;s Security Services</span><span>Edmonton, Alberta</span></div></div></footer>;
}
