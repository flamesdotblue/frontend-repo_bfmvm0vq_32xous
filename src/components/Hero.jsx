import { Rocket, Wifi, Phone, Shield, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Rocket className="h-4 w-4" />
            Introducing HiFi by HiFiber Pvt Ltd
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Lightning‑fast Internet for homes and businesses
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">
            Grow with the ISP that cares about speed, reliability, and service. Switch to HiFi and experience seamless streaming, gaming, and work—without interruptions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#plans" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-indigo-700 px-6 py-3 font-semibold shadow hover:bg-indigo-50 transition">
              <Wifi className="h-5 w-5" />
              View Plans
            </a>
            <a href="#coverage" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700/60 px-6 py-3 font-semibold hover:bg-indigo-700 transition">
              <MapPin className="h-5 w-5" />
              Check Coverage
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white/90">
            <Feature icon={<Shield className="h-5 w-5" />} label="99.9% Uptime SLA" />
            <Feature icon={<Phone className="h-5 w-5" />} label="24/7 Support" />
            <Feature icon={<Wifi className="h-5 w-5" />} label="Wi‑Fi 6 Router" />
            <Feature icon={<Rocket className="h-5 w-5" />} label="Fiber‑backed Speeds" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex items-center justify-center rounded-md bg-white/10 p-2">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}
