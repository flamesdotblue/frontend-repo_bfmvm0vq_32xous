import { Rocket, Wifi, Shield, Settings } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
              <Shield className="h-4 w-4" />
              <span>HiFiber Pvt Ltd • HiFi ISP</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Blazing‑fast Internet for modern homes and businesses
            </h1>
            <p className="mt-4 text-white/90">
              Ultra‑low latency, rock‑solid reliability, and premium support. Stream, work, and play without limits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#plans" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 shadow hover:opacity-95">
                <Rocket className="h-5 w-5" /> View Plans
              </a>
              <a href="#coverage" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/20">
                <Wifi className="h-5 w-5" /> Check Coverage
              </a>
              <a href="#admin" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/20">
                <Settings className="h-5 w-5" /> Admin Panel
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_50%)]" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-3xl font-bold">1 Gbps</p>
                  <p className="text-sm text-white/80">Top Speed</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm text-white/80">Support</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-3xl font-bold">99.9%</p>
                  <p className="text-sm text-white/80">Uptime</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-6">
                <p className="text-white/90">
                  Get Hi points on every bill payment. Redeem 1 Hi point = ₹1 on upgrades and add‑ons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
