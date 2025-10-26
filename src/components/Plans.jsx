import { Check, Zap, Shield } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 499,
    speed: "50 Mbps",
    features: ["Unlimited Data", "Free Router", "Basic Support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: 799,
    speed: "150 Mbps",
    features: ["Unlimited Data", "Dual‑Band Router", "Priority Support"],
    highlight: true,
  },
  {
    name: "Ultra",
    price: 1199,
    speed: "300 Mbps",
    features: ["Unlimited Data", "Wi‑Fi 6 Router", "24/7 Concierge"],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">No hidden fees. Upgrade anytime. Earn Hi points on every payment.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 shadow-sm ${
                p.highlight ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                {p.highlight ? <Zap className="h-5 w-5 text-indigo-600" /> : <Shield className="h-5 w-5 text-gray-400" />}
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">₹{p.price}<span className="text-base font-normal text-gray-600">/mo</span></p>
              <p className="mt-1 text-sm text-gray-600">Up to {p.speed}</p>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <Check className="h-4 w-4 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#coverage"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium shadow-sm ${
                  p.highlight ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-900 text-white hover:bg-black"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
