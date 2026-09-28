import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: { default: "Martin's Security Services", template: "%s | Martin's Security Services" },
  description: "Premium security services for residential, commercial, construction and event environments in Edmonton, Alberta.",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><SiteEffects /><Header />{children}<Footer /></body></html>;
}
