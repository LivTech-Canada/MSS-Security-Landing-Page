import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Submission = Record<string, unknown> & { type?: 'quote' | 'career' };

function clean(value: unknown, max = 3000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let body: Submission;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const type = body.type === 'career' ? 'career' : 'quote';
  const name = clean(body.name, 160);
  const email = clean(body.email, 254);

  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: 'Please provide a valid name and email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'info@martinssecurity.ca';
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      { message: 'Email delivery is not configured yet. Add RESEND_API_KEY and CONTACT_FROM_EMAIL in Vercel Environment Variables.' },
      { status: 503 },
    );
  }

  const rows = type === 'career'
    ? [
        ['Type', 'Career interest'],
        ['Name', name],
        ['Email', email],
        ['Phone', clean(body.phone, 80)],
        ['Role', clean(body.role, 120)],
        ['Notes', clean(body.notes)],
      ]
    : [
        ['Type', 'Security quote request'],
        ['Name', name],
        ['Company / Property', clean(body.company, 200)],
        ['Email', email],
        ['Phone', clean(body.phone, 80)],
        ['Service', clean(body.service, 120)],
        ['Coverage', clean(body.coverage, 120)],
        ['Project details', clean(body.details)],
      ];

  const text = rows.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join('\n');
  const subject = type === 'career' ? `MSS career interest — ${name}` : `MSS quote request — ${name}`;

  const resend = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!resend.ok) {
    console.error('Resend error:', await resend.text());
    return NextResponse.json({ message: 'Your message could not be delivered. Please email info@martinssecurity.ca.' }, { status: 502 });
  }

  return NextResponse.json({
    message: type === 'career'
      ? 'Thank you. Your career interest has been submitted.'
      : 'Thank you. Your quote request has been submitted.',
  });
}
