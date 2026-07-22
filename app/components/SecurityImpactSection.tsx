import Link from "next/link";
import StatCounter from "@/app/components/StatCounter";
import MinuteCounter from "@/app/components/MinuteCounter";

const ATTACKS_PER_DAY = 600_000_000;
const ATTACKS_PER_MIN = Math.round(ATTACKS_PER_DAY / 1440);

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
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div data-tn-reveal="left" data-tn-reveal-state="hidden">
            <h2 className="text-4xl font-bold leading-[1.02] text-black dark:text-white md:text-5xl">
              Your website is already being tested.
            </h2>
          </div>

          <div data-tn-reveal="right" data-tn-reveal-state="hidden">
            <p className="max-w-3xl text-xl font-medium leading-8 text-neutral-700 dark:text-white/60">
              Automated traffic looks for the same openings every day, including weak login controls,
              exposed files, missing browser protections, and predictable admin URLs. Organization
              size is not part of the decision.
            </p>
          </div>
        </div>

        <div
          className="tn-attack-visual mt-12"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <div className="tn-attack-daily">
            <p className="tn-attack-label">Microsoft daily report</p>
            <div className="tn-attack-number">
              <StatCounter end={ATTACKS_PER_DAY} compact compactSuffix="M" />
            </div>
            <p className="tn-attack-copy">
              Cyberattacks reported each day across Microsoft&apos;s security ecosystem. At this
              scale, automated probing is normal background activity on the public internet.
            </p>
          </div>

          <div className="tn-attack-live">
            <p className="tn-live-heading">Estimate for the current minute</p>
            <MinuteCounter perMinute={ATTACKS_PER_MIN} />
            <p className="tn-live-reset">The meter resets every 60 seconds</p>
          </div>
        </div>

        <div
          className="mt-14 border-t border-neutral-200 pt-8 dark:border-white/10"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white">What the audit includes</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <ProtectionBlock
              title="Manual Testing"
              text="Every finding is manually verified before it reaches your report."
            />
            <ProtectionBlock
              title="Evidence"
              text="Each vulnerability includes proof, severity, affected assets, and business impact."
            />
            <ProtectionBlock
              title="Developer Blueprint"
              text="Every issue includes practical remediation guidance for your development team."
            />
            <ProtectionBlock
              title="Fast Delivery"
              text="Critical findings may be reported early. The standard assessment is designed for delivery within seven calendar days after all engagement prerequisites are complete."
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
            View audit scope
          </Link>
          <Link
            href="/start"
            className="tn-button-secondary"
          >
            Request audit
          </Link>
        </div>

        <p
          className="mt-6 text-xs text-neutral-500 dark:text-white/35"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          The per minute figure is calculated from Microsoft&apos;s reported 600 million cyberattacks
          per day.
        </p>
      </div>
    </section>
  );
}
