import { Settings, CreditCard, Gift, Tv2, FileText } from "lucide-react";

export default function AdminShowcase() {
  return (
    <section id="admin" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Control everything from a unified dashboard</h2>
          <p className="mt-3 text-gray-600">
            A modern admin panel inspired by the best of WordPress — manage pages, pricing, blogs, themes, add‑ons, and settings.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Payments with PhonePe (Merchant)</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Accept instant payments through PhonePe merchant flows. Secure callbacks, payment status, and invoice receipts. This demo shows the UI; backend wiring can be added next.
            </p>
            <a href="#coverage" className="mt-4 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Start Setup</a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center gap-3">
              <Gift className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Loyalty: Hi points (1 = ₹1)</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Reward users on every bill. Redeem Hi points 1:1 for plan upgrades and add‑ons. Configure earn rates, caps, and expiry policies.
            </p>
            <button className="mt-4 inline-flex rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-white">Configure</button>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Policies and Pages</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Quickly publish Privacy Policy, Terms & Conditions, Refunds, Installation, and Usage policy. Edit content visually.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <a href="#policies" className="rounded-md bg-white px-3 py-1.5 text-gray-700 shadow-sm hover:bg-gray-50">Manage Pages</a>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center gap-3">
              <Tv2 className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Free OTT & Live TV</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Bundle OTT apps and live TV channels with select plans. Showcase EPG, channel list, and partner offers.
            </p>
            <button className="mt-4 inline-flex rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black">Preview</button>
          </div>
        </div>
      </div>
    </section>
  );
}
