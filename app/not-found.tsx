import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white flex items-center justify-center px-6 transition-colors overflow-hidden">
      {/* Background Pattern - Matches your site's aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-black/65" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center max-w-xl">
        <div className="flex justify-center mb-8">
            <img
              src="/white.png"
              alt="ThreatNest"
              className="h-12 w-12 invert dark:invert-0 opacity-20"
            />
        </div>

        <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/45 uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black dark:text-white">
          Lost in the stack.
        </h1>

        <p className="mt-6 text-neutral-600 dark:text-white/55 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          The page you’re looking for doesn’t exist or has been shifted to a new endpoint.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto rounded-xl bg-black px-10 py-4 text-sm font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-lg"
          >
            Return to home
          </Link>
          
          <Link
            href="/services"
            className="w-full sm:w-auto rounded-xl border border-neutral-200 bg-white/50 px-10 py-4 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
          >
            View services
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-white/5">
            <p className="text-xs text-neutral-400 dark:text-white/30">
                THREATNEST
            </p>
        </div>
      </div>
    </main>
  );
}