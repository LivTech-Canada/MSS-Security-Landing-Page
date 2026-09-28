import type { Metadata } from "next";
import RawPage from "@/components/RawPage";
import { aboutHtml } from "@/lib/content";

export const metadata: Metadata = { title: "About Us", description: "About Martin's Security Services and our professional security approach." };

export default function Page() { return <RawPage html={aboutHtml} />; }
