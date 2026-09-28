import type { Metadata } from "next";
import RawPage from "@/components/RawPage";
import { contactHtml } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Request a security consultation or quote." };

export default function Page() { return <RawPage html={contactHtml} />; }
