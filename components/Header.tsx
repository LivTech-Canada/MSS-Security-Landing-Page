'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/about', 'About Us'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact'],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <div className="utility">
        <div className="container">
          <div className="utility-left">
            <span>◆ Edmonton, Alberta</span><span className="dot" />
            <a href="mailto:info@martinssecurity.ca">info@martinssecurity.ca</a><span className="dot" />
            <span>24/7 Coverage Options</span>
          </div>
          <div className="utility-right"><span className="gold">Professional Security • Mobile Patrol • Site Protection</span></div>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" href="/" prefetch aria-label="Martin's Security Solutions home" onClick={() => setOpen(false)}>
            <Image src="/images/mss-logo.png" alt="Martin's Security Solutions logo" width={62} height={62} priority />
            <span className="brand-copy"><strong>MARTIN&apos;S</strong><span>Security Solutions</span></span>
          </Link>
          <nav className={`navlinks${open ? ' open' : ''}`} aria-label="Primary navigation">
            {links.map(([href, label]) => {
              const active = hydrated && (href === '/' ? pathname === '/' : pathname.startsWith(href));
              return <Link key={href} className={active ? 'active' : ''} href={href} prefetch onClick={() => setOpen(false)}>{label}</Link>;
            })}
          </nav>
          <Link className="btn btn-gold" href="/contact#quote" prefetch>Request a Quote →</Link>
          <button className="menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>☰</button>
        </div>
      </header>
    </>
  );
}
