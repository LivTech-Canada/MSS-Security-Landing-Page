import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return NextResponse.json({ message: "The website form is ready, but email delivery is not configured yet." }, { status: 503 });
    }
    const rows = Object.entries(payload)
      .filter(([k]) => k !== "formType")
      .map(([k,v]) => `<tr><td style="padding:8px;border:1px solid #ddd"><strong>${escapeHtml(k)}</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(String(v ?? ""))}</td></tr>`)
      .join("");
    const subject = `MSS website ${String(payload.formType || "contact")} submission`;
    const res = await fetch("https://api.resend.com/emails", {
      method:"POST",
      headers:{ Authorization:`Bearer ${apiKey}`, "Content-Type":"application/json" },
      body: JSON.stringify({ from, to:[to], subject, html:`<h2>${escapeHtml(subject)}</h2><table style="border-collapse:collapse">${rows}</table>` }),
    });
    if (!res.ok) return NextResponse.json({ message: "Email delivery failed. Please try again." }, { status: 502 });
    return NextResponse.json({ message: "Thank you. Your request has been submitted." });
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (ch) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[ch] || ch));
}
