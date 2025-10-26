import Hero from "./components/Hero.jsx";
import Plans from "./components/Plans.jsx";
import CoverageForm from "./components/CoverageForm.jsx";
import AdminShowcase from "./components/AdminShowcase.jsx";

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#plans" className="hover:text-gray-900">Plans</a></li>
              <li><a href="#coverage" className="hover:text-gray-900">Coverage</a></li>
              <li><a href="#admin" className="hover:text-gray-900">Admin</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Policies</h4>
            <ul id="policies" className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#refund" className="hover:text-gray-900">Refund Policy</a></li>
              <li><a href="#installation" className="hover:text-gray-900">Installation Policy</a></li>
              <li><a href="#usage" className="hover:text-gray-900">Usage Policy</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-700">
                Note: Payments, admin panel, loyalty, and OTT are shown as a functional UI demo here. To enable real transactions, content management, points ledger, and TV integrations, we can add backend APIs and secure PhonePe merchant callbacks next.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          <section id="privacy" className="rounded-xl border border-gray-200 bg-white p-6">
            <h5 className="text-lg font-semibold text-gray-900">Privacy Policy</h5>
            <p className="mt-2 text-sm text-gray-700">We respect your privacy and handle your data in accordance with Indian IT Act and applicable regulations. Contact support for data requests.</p>
          </section>
          <section id="terms" className="rounded-xl border border-gray-200 bg-white p-6">
            <h5 className="text-lg font-semibold text-gray-900">Terms & Conditions</h5>
            <p className="mt-2 text-sm text-gray-700">Use of our services is subject to fair usage, lawful activities, and timely bill payments. Network performance may vary by location.</p>
          </section>
          <section id="refund" className="rounded-xl border border-gray-200 bg-white p-6">
            <h5 className="text-lg font-semibold text-gray-900">Refund Policy</h5>
            <p className="mt-2 text-sm text-gray-700">Prepaid fees are generally non‑refundable. Device deposits are refundable as per return condition assessments.</p>
          </section>
          <section id="installation" className="rounded-xl border border-gray-200 bg-white p-6">
            <h5 className="text-lg font-semibold text-gray-900">Installation Policy</h5>
            <p className="mt-2 text-sm text-gray-700">Standard installation covers basic wiring and router setup. Non‑standard work may incur additional charges.</p>
          </section>
          <section id="usage" className="rounded-xl border border-gray-200 bg-white p-6">
            <h5 className="text-lg font-semibold text-gray-900">Usage Policy</h5>
            <p className="mt-2 text-sm text-gray-700">No spam, abuse, or unlawful content. We may apply network management during peak demand to ensure fair access.</p>
          </section>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} HiFiber Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Plans />
      <CoverageForm />
      <AdminShowcase />
      <Footer />
    </div>
  );
}
