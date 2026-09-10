import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="landing-shell">
      <div className="landing-copy">
        <div className="brand-mark" aria-hidden="true">R</div>
        <h1>Risheh Website Template Factory</h1>
        <p>
          Compose an industry archetype, Design DNA, pages, patterns and brand inputs into a validated
          implementation-ready Build Spec.
        </p>
        <Link className="primary-button" href="/generator">Open Generator</Link>
      </div>
    </main>
  );
}
