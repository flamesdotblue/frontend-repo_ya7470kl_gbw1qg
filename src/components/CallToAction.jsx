import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-medium text-slate-900">Find your Fresh Skin Match</h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Discover the shade and finish that’s right for you with our effortless, two-minute quiz.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm md:text-base hover:bg-slate-800 transition-colors"
            >
              Start shade finder
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-6 py-3 text-sm md:text-base hover:border-slate-400 transition-colors"
            >
              Book a consultation
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.35em] text-slate-500">Dolce & Gabbana Beauty</p>
      </div>
    </section>
  );
};

export default CallToAction;
