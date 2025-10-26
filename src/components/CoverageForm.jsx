import { useState } from 'react';
import { MapPin, Phone, User } from 'lucide-react';

export default function CoverageForm() {
  const [form, setForm] = useState({ name: '', phone: '', pincode: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10‑digit phone';
    if (!/^\d{5,6}$/.test(form.pincode)) e.pincode = 'Enter a valid PIN/ZIP code';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    // In a real app, send to backend. Here we just simulate success.
    setSubmitted(true);
  }

  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-sm">
              <MapPin className="h-4 w-4" /> Coverage & Lead Form
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Check availability in your area</h2>
            <p className="mt-2 text-gray-600">Share your details and our team will confirm feasibility within minutes.</p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-lg bg-green-50 p-4 text-green-800 border border-green-200">
              Thanks, {form.name}! Our team will call you shortly at {form.phone} with coverage details for PIN {form.pincode}.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
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
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <div className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}>
                  <Phone className="h-4 w-4 text-gray-400" />
                  <input
                    type="tel"
                    className="w-full outline-none"
                    placeholder="10‑digit mobile"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">PIN / ZIP code</label>
                <div className={`mt-1 flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.pincode ? 'border-red-400' : 'border-gray-300'}`}>
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="e.g., 560001"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value.replace(/\D/g, '') })}
                  />
                </div>
                {errors.pincode && <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>}
              </div>

              <button type="submit" className="sm:col-span-2 mt-2 rounded-lg bg-indigo-600 text-white px-4 py-3 font-semibold hover:bg-indigo-700 transition">
                Check & Request Callback
              </button>
              <p className="sm:col-span-2 text-xs text-gray-500">By submitting, you agree to be contacted by HiFiber Pvt Ltd regarding service availability and offers.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
