'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-fallback">
      <div className="container error-fallback-inner">
        <div className="eyebrow">Martin&apos;s Security Solutions</div>
        <h1>We couldn&apos;t load this page.</h1>
        <p>Please try again. If the issue continues, return to the homepage.</p>
        <div className="hero-actions">
          <button className="btn btn-gold" onClick={() => reset()}>Try Again →</button>
          <a className="btn btn-ghost" href="/">Go Home</a>
        </div>
      </div>
    </main>
  );
}
