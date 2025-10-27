import React from 'react';

const products = [
  {
    name: 'Skin Veil Tint',
    tagline: 'Sheer, breathable coverage',
    colorFrom: 'from-purple-200',
    colorTo: 'to-indigo-100',
  },
  {
    name: 'Glow Serum Primer',
    tagline: 'Weightless radiance boost',
    colorFrom: 'from-indigo-200',
    colorTo: 'to-sky-100',
  },
  {
    name: 'Soft Touch Powder',
    tagline: 'Sets without the set look',
    colorFrom: 'from-pink-200',
    colorTo: 'to-purple-100',
  },
];

const ProductCard = ({ name, tagline, colorFrom, colorTo }) => (
  <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden">
    <div className={`h-56 bg-gradient-to-br ${colorFrom} ${colorTo}`} />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{tagline}</p>
      <div className="mt-4 flex items-center gap-3">
        <button className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition-colors">
          Add to bag
        </button>
        <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-4 py-2 text-sm hover:border-slate-400 transition-colors">
          Details
        </button>
      </div>
    </div>
  </div>
);

const ProductShowcase = () => {
  return (
    <section id="products" className="relative w-full py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900">The Fresh Skin Ritual</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Three modern essentials that work in harmony for a soft-focus, luminous complexion.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-5 py-2.5 text-sm hover:border-slate-400 transition-colors self-start md:self-auto"
          >
            Explore all products
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
