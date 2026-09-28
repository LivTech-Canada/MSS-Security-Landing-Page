"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["/", "Home"], ["/services", "Services"], ["/about", "About Us"], ["/careers", "Careers"], ["/contact", "Contact"],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return <>
    <div className="topbar">
      <div className="container">
        <div className="topbar-primary"><strong>Edmonton, Alberta</strong><span className="topbar-sep"> • </span><span>Professional security coverage for people, property and operations</span></div>
        <div className="topbar-secondary">Professional image • Tailored service programs • Visible deterrence</div>
      </div>
    </div>
    <header className="header">
      <div className="container">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Martin's Security Services logo" />
          <div><b>Martin&apos;s Security Services</b><span>Protection • Professionalism • Presence</span></div>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          <div className={`nav-links${open ? " open" : ""}`}>
            {links.map(([href,label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}
            <Link className="btn gold mobile-quote" href="/contact">Request a Quote</Link>
          </div>
          <Link className="btn gold desktop-quote" href="/contact">Request a Quote</Link>
          <button className="menu" type="button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(v => !v)}>
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>
    {open && <button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
  </>;
}
