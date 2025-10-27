import React from 'react';

const features = [
  {
    title: 'Breathable Finish',
    desc: 'Featherlight textures that feel like nothing — yet perfect everything.',
  },
  {
    title: 'Radiant Complexion',
    desc: 'A soft, skin-first glow that enhances rather than masks.',
  },
  {
    title: 'Clean Formulas',
    desc: 'Thoughtfully crafted with a minimalist approach your skin will love.',
  },
  {
    title: 'All-Day Comfort',
    desc: 'Long-wear performance designed to move naturally with you.',
  },
];

const Features = () => {
  return (
    <section id="learn" className="relative w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900">Why Fresh Skin</h2>
          <p className="mt-3 text-slate-600">
            Designed for purity, comfort, and effortless beauty — a ritual that lets your skin
            look and feel like itself, only fresher.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-200 to-indigo-200" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
