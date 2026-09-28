import type { Metadata } from "next";
import RawPage from "@/components/RawPage";
import { careersHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Careers", description: "Explore security careers with Martin's Security Services." };

export default function Page() { return <RawPage html={careersHtml} />; }
