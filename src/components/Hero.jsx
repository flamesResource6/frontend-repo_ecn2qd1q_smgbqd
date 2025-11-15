import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5 mb-4">AI-powered personal advisory</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0f0f0f]">
              Take control of your financial health with Dhanvam
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Smart budgets, real-time insights, and personalized investment strategies—
              all in one intuitive platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 pointer-events-auto">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-[#00e5cc] text-[#0f0f0f] font-semibold px-5 py-3 shadow-sm hover:shadow-md transition">Start for free</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-[#0f0f0f] text-white font-semibold px-5 py-3 shadow-sm hover:shadow-md transition">Explore features</a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
