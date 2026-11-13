export default function PageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl animate-page-in px-5 py-16 lg:px-8" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading content</span>
      <div className="skeleton h-3 w-28 rounded-full" />
      <div className="skeleton mt-4 h-12 w-full max-w-xl rounded-2xl" />
      <div className="skeleton mt-4 h-16 w-full max-w-2xl rounded-2xl" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {["one", "two", "three"].map((key) => (
          <div key={key} className="overflow-hidden rounded-3xl border border-line bg-white">
            <div className="skeleton h-56 w-full" />
            <div className="space-y-3 p-5">
              <div className="skeleton h-5 w-4/5 rounded-full" />
              <div className="skeleton h-4 w-full rounded-full" />
              <div className="skeleton h-4 w-2/3 rounded-full" />
              <div className="skeleton mt-4 h-9 w-28 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
