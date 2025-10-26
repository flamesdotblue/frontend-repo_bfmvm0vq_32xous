import Hero from './components/Hero';
import Plans from './components/Plans';
import CoverageForm from './components/CoverageForm';
import StrategyGuide from './components/StrategyGuide';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} HiFi — HiFiber Pvt Ltd. All rights reserved.</p>
        <nav className="text-sm flex gap-4">
          <a href="#plans" className="hover:text-white">Plans</a>
          <a href="#coverage" className="hover:text-white">Coverage</a>
          <a href="#guide" className="hover:text-white">Strategy</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <main className="flex-1">
        <Plans />
        <CoverageForm />
        <div id="guide">
          <StrategyGuide />
        </div>
      </main>
      <Footer />
    </div>
  );
}
