import type { Metadata } from "next";
import RawPage from "@/components/RawPage";
import { homeHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Home", description: "Premium security services in Edmonton, Alberta." };

export default function Page() { return <RawPage html={homeHtml} />; }
