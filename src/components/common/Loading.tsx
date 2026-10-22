export default function Loading() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <span className="loading__paw" aria-hidden="true">🐾</span>
      <span>Fetching the pups…</span>
    </div>
  );
}
