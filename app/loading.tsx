export default function Loading() {
  return (
    <main className="route-loading" aria-live="polite" aria-busy="true">
      <div className="container route-loading-inner">
        <div className="route-loading-line route-loading-kicker" />
        <div className="route-loading-line route-loading-title" />
        <div className="route-loading-line route-loading-title short" />
        <div className="route-loading-line route-loading-text" />
        <div className="route-loading-line route-loading-text short" />
      </div>
    </main>
  );
}
