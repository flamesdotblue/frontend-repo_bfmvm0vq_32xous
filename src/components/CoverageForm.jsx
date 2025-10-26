import { useState } from 'react';
import { MapPin, Phone, User, Globe } from 'lucide-react';

export default function CoverageForm() {
  const [form, setForm] = useState({ name: '', phone: '', pincode: '' });
  const [submitted, setSubmitted] = useState(false);
  const [available, setAvailable] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    // India mobile validation: starts with 6-9 and is 10 digits
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10‑digit Indian mobile (starts with 6‑9)';
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6‑digit PIN code';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    // Availability logic: India only and currently only Kalyan, Mumbai PIN 421301
    const isAvailable = form.pincode === '421301';
    setAvailable(isAvailable);
    setSubmitted(true);
  }

  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-sm">
              <MapPin className="h-4 w-4" /> Coverage & Availability (India)
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Check availability in your area</h2>
            <p className="mt-2 text-gray-600">Currently serving Kalyan, Mumbai — PIN 421301. Enter your details to check.</p>
          </div>

          {submitted ? (
            available ? (
              <div className="mt-8 rounded-lg bg-green-50 p-4 text-green-800 border border-green-200">
                Great news, {form.name}! HiFi service is available at PIN {form.pincode} (Kalyan, Mumbai). Our team will call you shortly at {form.phone} to schedule installation.
              </div>
            ) : (
              <div className="mt-8 rounded-lg bg-yellow-50 p-4 text-yellow-800 border border-yellow-200">
                Thanks, {form.name}. We currently serve Kalyan, Mumbai (PIN 421301). It looks like your PIN {form.pincode} is outside our live coverage. We’ll notify you when we launch in your area.
              </div>
            )
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2 border-gray-300 bg-gray-50">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <input type="text" value="India" readOnly className="w-full bg-transparent outline-none text-gray-700" />
                </div>
                <p className="mt-1 text-xs text-gray-500">Service currently limited to select locations in India.</p>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <div className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}>
                  <User className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="e.g., Priya Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Mobile number</label>
                <div className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}>
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-500 text-sm">+91</span>
                  <input
                    type="tel"
                    className="w-full outline-none"
                    placeholder="10‑digit mobile (6‑9xxxx xxxx)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                    maxLength={10}
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">PIN code</label>
                <div className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.pincode ? 'border-red-400' : 'border-gray-300'}`}>
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="Try 421301 (Kalyan, Mumbai)"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value.replace(/\D/g, '') })}
                    maxLength={6}
                  />
                </div>
                {errors.pincode && <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>}
              </div>

              <button type="submit" className="sm:col-span-2 mt-2 rounded-lg bg-indigo-600 text-white px-4 py-3 font-semibold hover:bg-indigo-700 transition">
                Check Availability
              </button>
              <p className="sm:col-span-2 text-xs text-gray-500">By submitting, you agree to be contacted by HiFiber Pvt Ltd regarding service availability and offers.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
