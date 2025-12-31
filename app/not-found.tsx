import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-xs tracking-[0.22em] text-white/50">404</p>

        <h1 className="mt-4 text-3xl font-bold">
          Page not found
        </h1>

        <p className="mt-4 text-white/55">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-black"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
