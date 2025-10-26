import { Users, TrendingUp, Phone, Shield, Star, Check } from 'lucide-react';

const steps = [
  {
    title: 'Define target segments',
    icon: Users,
    points: [
      'Apartments, gated communities, small offices, gamers/streamers',
      'Map competition presence, speed gaps, and pain points (downtime, support)',
      'Create tailored offers by segment (work‑from‑home, OTT bundles, business uptime)',
    ],
  },
  {
    title: 'Build irresistible plans & hooks',
    icon: Star,
    points: [
      'Intro discounts for first 3 months + free install & router rental',
      'Switcher benefits: waive installation for customers porting from other ISPs',
      'Assured speeds at peak hours; publish transparent fair‑usage policy',
    ],
  },
  {
    title: 'Acquire efficiently',
    icon: TrendingUp,
    points: [
      'Local partnerships with RWAs and builders for exclusive blocks',
      'Door‑to‑door drives with geo‑mapped leads and micro‑events on weekends',
      'Referral program: give 1 month free for both referrer and referee',
    ],
  },
  {
    title: 'Convert competitors’ users',
    icon: Shield,
    points: [
      'Easy‑switch concierge: schedule install + seamless router setup & number port for static IPs',
      'Buyout offer: credit remaining month of current ISP as discount',
      'SLA guarantee with compensation for outages beyond threshold',
    ],
  },
  {
    title: 'Delight and retain',
    icon: Phone,
    points: [
      '24/7 support with WhatsApp bot + 30‑min on‑site escalation for business plans',
      'Proactive outage alerts, live status page, and scheduled maintenance notices',
      'Quarterly check‑ins; upsell speed boosts and mesh Wi‑Fi add‑ons',
    ],
  },
];

export default function StrategyGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-sm">
            <TrendingUp className="h-4 w-4" /> Growth Playbook
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Step‑by‑step strategy to grow HiFi</h2>
          <p className="mt-2 text-gray-600">A practical blueprint to acquire, convert, and retain customers in your service areas.</p>
        </div>

        <div className="mt-10 grid gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-600 text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{idx + 1}. {s.title}</h3>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-indigo-50 p-6 text-indigo-900">
          <h4 className="font-semibold">Conversion Tactics from Other ISPs</h4>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Switch‑in concierge: pre‑configure router, transfer Wi‑Fi names, and align install with old ISP expiry.</li>
            <li>Competitor pain‑point campaigns: highlight uptime, local support, and real speed tests in ads.</li>
            <li>Community exclusives: partner with RWAs for bulk deals and building‑wide fiber pulls.</li>
            <li>Guarantee performance: money‑back first month if promised speeds aren’t met.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
