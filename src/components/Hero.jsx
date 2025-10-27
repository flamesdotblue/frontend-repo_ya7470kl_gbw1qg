import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-gradient-to-b from-indigo-50 via-purple-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <span className="uppercase tracking-[0.35em] text-xs md:text-sm text-slate-700/80">Dolce & Gabbana Beauty</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-slate-900">
          Fresh Skin
          <span className="block text-slate-500 font-normal">Radiant. Weightless. You.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-600">
          A clean, minimalist ritual for luminous, natural-looking skin. Crafted with
          modern textures that breathe with you throughout the day.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm md:text-base hover:bg-slate-800 transition-colors"
          >
            Shop the Collection
          </a>
          <a
            href="#learn"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-6 py-3 text-sm md:text-base hover:border-slate-400 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Soft vignette to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30" />
    </section>
  );
};

export default Hero;
