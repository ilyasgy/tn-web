import Link from "next/link";
import MinuteCounter from "@/app/components/MinuteCounter";
import StatCounter from "@/app/components/StatCounter";

const ATTACKS_PER_DAY = 600_000_000;
const ATTACKS_PER_MIN = Math.round(ATTACKS_PER_DAY / 1440);

function StatCard({
  label,
  value,
  text,
  accent = false,
}: {
  label: string;
  value: React.ReactNode;
  text: string;
  accent?: boolean;
}) {
  return (
    <article className={`rounded-lg border p-5 ${accent ? "border-neutral-200 bg-white/95 dark:bg-[#08101a]" : "border-neutral-200 bg-white/95 dark:bg-[#08101a]"}`}>
      <p className="text-sm font-bold text-neutral-500 dark:text-white/45">{label}</p>
      <div
        className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${
          accent ? "text-[#2563eb] dark:text-[#93c5fd]" : "text-black dark:text-white"
        }`}
      >
        {value}
      </div>
      <p className="mt-3 text-base font-medium leading-7 text-neutral-600 dark:text-white/60">
        {text}
      </p>
    </article>
  );
}

function ProtectionBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-black dark:text-white">{title}</p>
      <p className="mt-4 text-lg font-medium leading-8 text-neutral-600 dark:text-white/60">
        {text}
      </p>
    </div>
  );
}

export default function SecurityImpactSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-20 text-neutral-900 transition-colors dark:bg-black md:py-24">

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <div data-tn-reveal="left" data-tn-reveal-state="hidden">
            <p className="text-sm font-bold text-neutral-500 dark:text-white/45">
              The Security Reality
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[0.98] text-black dark:text-white md:text-5xl">
              Small sites get attacked, too.
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-neutral-700 dark:text-white/60">
              Bots do not care how big your brand is. Microsoft reports roughly 600 million
              cyberattacks a day, roughly 416,667 attempts every minute.
            </p>
          </div>

          <div
            className="rounded-lg border border-neutral-200 bg-white/95 p-6 dark:bg-[#08101a]"
            data-tn-reveal="right"
            data-tn-reveal-state="hidden"
          >
            <p className="text-sm font-bold text-neutral-500 dark:text-white/45">
              Bots are constantly scanning for
            </p>
            <div className="mt-4 space-y-3 text-lg font-bold leading-8 text-black dark:text-white">
              <p>Weak auth</p>
              <p>Exposed files</p>
              <p>Bad headers</p>
              <p>Easy admin paths</p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 grid gap-5 md:grid-cols-3"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <StatCard
            label="Reported each day"
            value={<StatCounter end={ATTACKS_PER_DAY} />}
            text="Microsoft reports roughly 600 million cyberattacks a day."
          />
          <StatCard
            label="Estimated each minute"
            value={<StatCounter end={ATTACKS_PER_MIN} />}
            text="That works out to roughly 416,667 attempts every minute."
          />
          <StatCard
            label="This minute"
            value={<MinuteCounter perMinute={ATTACKS_PER_MIN} />}
            text="A live counter based on the same estimate."
            accent
          />
        </div>

        <div
          className="mt-10 max-w-4xl text-lg font-medium leading-8 text-neutral-700 dark:text-white/60"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <p>
            Bots are constantly scanning for weak auth, exposed files, bad headers, and easy
            admin paths.
          </p>
        </div>

        <div
          className="mt-14 border-t border-neutral-200 pt-8 dark:border-white/10"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <p className="text-sm font-bold text-neutral-500 dark:text-white/45">
            How we protect you
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <ProtectionBlock
              title="Manual testing"
              text="We rely on human expertise, not just raw automated scan output."
            />
            <ProtectionBlock
              title="Clear proof"
              text="Every issue we report includes proof and fixes your team can actually execute."
            />
            <ProtectionBlock
              title="Fast results"
              text="Critical issues are flagged immediately, full reports follow in 48 hours, and one free retest is included within 14 days."
            />
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-4 sm:flex-row"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <Link
            href="/services/website-security"
            className="tn-button-primary"
          >
            View security review
          </Link>
          <Link
            href="/start"
            className="tn-button-secondary"
          >
            Start Security Review
          </Link>
        </div>

        <p
          className="mt-6 text-xs text-neutral-500 dark:text-white/35"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          Figures use Microsoft's reported 600 million cyberattacks per day.
        </p>
      </div>
    </section>
  );
}
