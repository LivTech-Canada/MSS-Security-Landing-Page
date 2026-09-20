'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="error-fallback">
          <div className="container error-fallback-inner">
            <h1>Martin&apos;s Security Solutions</h1>
            <p>The website hit an unexpected error.</p>
            <button className="btn btn-gold" onClick={() => reset()}>Reload Website →</button>
          </div>
        </main>
      </body>
    </html>
  );
}
