import { Check, Wifi, Shield, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    speed: '100 Mbps',
    price: '₹499',
    period: 'mo',
    features: ['Unlimited Data', 'Wi‑Fi 6 Router', 'Free Installation'],
    highlight: false,
  },
  {
    name: 'Turbo',
    speed: '300 Mbps',
    price: '₹799',
    period: 'mo',
    features: ['Unlimited Data', 'Wi‑Fi 6 Router', 'Priority Support'],
    highlight: true,
  },
  {
    name: 'Gigabit',
    speed: '1 Gbps',
    price: '₹1499',
    period: 'mo',
    features: ['Unlimited Data', 'Static IP (Optional)', 'Premium Support'],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-sm">
            <Wifi className="h-4 w-4" /> Plans & Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Choose speed that fits you</h2>
          <p className="mt-2 text-gray-600">Simple, transparent pricing with no hidden fees. Upgrade anytime.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border ${
                p.highlight ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-200'
              } bg-white p-6 shadow-sm`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-semibold shadow">
                  <Star className="h-3 w-3" /> Popular
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <span className="text-indigo-700 font-bold">{p.speed}</span>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-gray-900">{p.price}</span>
                <span className="text-gray-600">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <Check className="h-4 w-4 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-3 font-semibold transition ${
                p.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-black'
              }`}>
                Get {p.name}
              </button>
              <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                <Shield className="h-3 w-3" /> 30‑day happiness guarantee
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
