import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="error-fallback">
      <div className="container error-fallback-inner">
        <div className="eyebrow">404</div>
        <h1>Page not found.</h1>
        <p>The page you requested does not exist or has moved.</p>
        <Link className="btn btn-gold" href="/">Return Home →</Link>
      </div>
    </main>
  );
}
