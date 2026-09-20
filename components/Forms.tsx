'use client';

import { FormEvent, useState } from 'react';

type Status = { kind: 'idle' | 'sending' | 'ok' | 'error'; message?: string };

async function submitForm(form: HTMLFormElement, type: 'quote' | 'career') {
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, ...payload }),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body?.message || 'Unable to submit the form.');
  return body;
}

export function QuoteForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: 'sending' });
    try {
      const body = await submitForm(e.currentTarget, 'quote');
      e.currentTarget.reset();
      setStatus({ kind: 'ok', message: body.message });
    } catch (err) {
      setStatus({ kind: 'error', message: err instanceof Error ? err.message : 'Unable to submit.' });
    }
  }
  return (
    <form className="form reveal" onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field"><label>Full Name *</label><input name="name" required autoComplete="name" placeholder="Your name" /></div>
        <div className="field"><label>Company / Property</label><input name="company" placeholder="Company or property" /></div>
        <div className="field"><label>Email *</label><input name="email" type="email" required autoComplete="email" placeholder="name@company.com" /></div>
        <div className="field"><label>Phone</label><input name="phone" autoComplete="tel" placeholder="Phone number" /></div>
        <div className="field"><label>Service</label><select name="service" defaultValue="Static Guarding"><option>Static Guarding</option><option>Mobile Patrol</option><option>Construction Security</option><option>Concierge Security</option><option>Event Security</option></select></div>
        <div className="field"><label>Coverage</label><select name="coverage" defaultValue="Overnight"><option>Overnight</option><option>Daytime</option><option>24/7</option><option>Temporary</option><option>Ongoing</option></select></div>
        <div className="field full"><label>Project Details</label><textarea name="details" placeholder="Tell us about the property, schedule and security concerns..." /></div>
        <div className="field full"><button className="btn btn-gold" type="submit" disabled={status.kind === 'sending'}>{status.kind === 'sending' ? 'Sending…' : 'Request a Quote →'}</button></div>
      </div>
      {status.kind === 'ok' && <div className="success visible">✓ {status.message}</div>}
      {status.kind === 'error' && <div className="form-error">{status.message}</div>}
    </form>
  );
}

export function CareerForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: 'sending' });
    try {
      const body = await submitForm(e.currentTarget, 'career');
      e.currentTarget.reset();
      setStatus({ kind: 'ok', message: body.message });
    } catch (err) {
      setStatus({ kind: 'error', message: err instanceof Error ? err.message : 'Unable to submit.' });
    }
  }
  return (
    <form className="form reveal" onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field"><label>Full Name *</label><input name="name" required placeholder="Your name" /></div>
        <div className="field"><label>Email *</label><input name="email" type="email" required placeholder="Email address" /></div>
        <div className="field"><label>Phone</label><input name="phone" placeholder="Phone number" /></div>
        <div className="field"><label>Role</label><select name="role" defaultValue="Security Guard"><option>Security Guard</option><option>Mobile Patrol Officer</option><option>Concierge Security</option><option>Event Security</option></select></div>
        <div className="field full"><label>Notes</label><textarea name="notes" placeholder="Tell us about your availability and experience..." /></div>
        <div className="field full"><button className="btn btn-gold" type="submit" disabled={status.kind === 'sending'}>{status.kind === 'sending' ? 'Sending…' : 'Submit Career Interest →'}</button></div>
      </div>
      {status.kind === 'ok' && <div className="success visible">✓ {status.message}</div>}
      {status.kind === 'error' && <div className="form-error">{status.message}</div>}
    </form>
  );
}
