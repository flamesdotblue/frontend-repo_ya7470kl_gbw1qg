import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import CallToAction from './components/CallToAction';

const App = () => {
  return (
    <div className="min-h-screen antialiased text-slate-900 bg-white">
      <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-wide text-slate-900">Dolce & Gabbana</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#products" className="hover:text-slate-900">Products</a>
            <a href="#learn" className="hover:text-slate-900">About</a>
            <a href="#" className="hover:text-slate-900">Stores</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-4 py-2 text-sm hover:border-slate-400 transition-colors">
              Sign in
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition-colors">
              Bag
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <CallToAction />
      </main>

      <footer className="w-full border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dolce & Gabbana Beauty</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
