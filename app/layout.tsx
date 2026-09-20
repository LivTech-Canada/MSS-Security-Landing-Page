import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealInit from '@/components/RevealInit';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://martinssecurity.ca'),
  title: {
    default: "Martin's Security Solutions | Professional Security in Edmonton",
    template: "%s | Martin's Security Solutions",
  },
  description: 'Premium static guarding, mobile patrol, construction, concierge and event security services in Edmonton, Alberta.',
  icons: {
    icon: '/images/icon-32.png',
    apple: '/images/icon-180.png',
  },
  openGraph: {
    title: "Martin's Security Solutions",
    description: 'Professional security services built around visible presence, mobile response, clear communication and site-specific coverage.',
    type: 'website',
    images: ['/images/hero.webp'],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false, date: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <RevealInit />
      </body>
    </html>
  );
}
