"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/", "Home"], ["/services", "Services"], ["/about", "About Us"], ["/careers", "Careers"], ["/contact", "Contact"],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="container"><div><strong>Edmonton, Alberta</strong> • Premium security coverage for people, property and operations</div><div>Professional image • Tailored service programs • Visible deterrence</div></div></div>
    <header className="header"><div className="container">
      <Link className="brand" href="/" onClick={() => setOpen(false)}><img src="/images/logo.png" alt="Martin's Security Services logo" /><div><b>Martin&apos;s Security Services</b><span>Protection • Professionalism • Presence</span></div></Link>
      <nav className="nav">
        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map(([href,label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </div>
        <Link className="btn gold" href="/contact" onClick={() => setOpen(false)}>Request a Quote</Link>
        <button className="menu" type="button" aria-expanded={open} onClick={() => setOpen(v => !v)}>Menu</button>
      </nav>
    </div></header>
  </>;
}
