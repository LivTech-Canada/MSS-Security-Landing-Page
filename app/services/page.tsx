import type { Metadata } from "next";
import RawPage from "@/components/RawPage";
import { servicesHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Services", description: "Static guarding, mobile patrol, construction, concierge and event security." };

export default function Page() { return <RawPage html={servicesHtml} />; }
