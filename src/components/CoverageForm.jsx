import { useState } from "react";
import { MapPin, Phone, User, Globe } from "lucide-react";

export default function CoverageForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pin, setPin] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [available, setAvailable] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!/^\d{10}$/.test(mobile) || !/^[6-9]/.test(mobile)) e.mobile = "Enter a valid Indian mobile (10 digits, starts 6-9)";
    if (!/^\d{6}$/.test(pin)) e.pin = "Enter a valid 6-digit PIN";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const isAvailable = pin === "421301"; // Kalyan, Mumbai
    setAvailable(isAvailable);
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setAvailable(false);
  };

  return (
    <section id="coverage" className="py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Check coverage in your area</h2>
        <p className="mt-1 text-gray-600">Currently serving India. Priority rollout in Kalyan, Mumbai (PIN 421301).</p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Country</label>
              <div className="flex items-center gap-2 rounded-lg border bg-gray-50 px-3 py-2 text-gray-700">
                <Globe className="h-4 w-4" />
                <input readOnly value="India" className="w-full bg-transparent outline-none" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
              <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}>
                <User className="h-4 w-4 text-gray-500" />
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full bg-transparent outline-none" />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Mobile (India)</label>
              <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.mobile ? "border-red-500" : "border-gray-300"}`}>
                <Phone className="h-4 w-4 text-gray-500" />
                <input value={mobile} onChange={(e) => setMobile(e.target.value.replace(/[^\d]/g, ""))} placeholder="10-digit mobile" maxLength={10} className="w-full bg-transparent outline-none" />
              </div>
              {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">PIN Code</label>
              <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${errors.pin ? "border-red-500" : "border-gray-300"}`}>
                <MapPin className="h-4 w-4 text-gray-500" />
                <input value={pin} onChange={(e) => setPin(e.target.value.replace(/[^\d]/g, ""))} placeholder="6-digit PIN" maxLength={6} className="w-full bg-transparent outline-none" />
              </div>
              {errors.pin && <p className="mt-1 text-xs text-red-600">{errors.pin}</p>}
            </div>
            <div className="sm:col-span-2 mt-2">
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-700">
                Check Availability
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6 space-y-4">
            {available ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                <p className="font-semibold">Great news! Service is available in Kalyan, Mumbai (421301).</p>
                <p className="text-sm">Proceed to signup and bill payments. You’ll earn Hi points on every transaction.</p>
              </div>
            ) : (
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-yellow-800">
                <p className="font-semibold">We’re not live there yet.</p>
                <p className="text-sm">Outside coverage for now. We’re expanding rapidly across India. Leave your details and we’ll notify you.</p>
              </div>
            )}
            <div className="flex gap-3">
              <a href="#plans" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black">View Plans</a>
              <button onClick={reset} className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">Check another PIN</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
