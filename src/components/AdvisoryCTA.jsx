import { Sparkles } from "lucide-react";

export default function AdvisoryCTA() {
  return (
    <section id="advisory" className="relative bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Personalized advisory, automated by AI
            </h2>
            <p className="mt-3 text-gray-300">
              Dhanvam learns your habits, risk profile, and goals to deliver
              tailored investment recommendations and spending strategies—without
              the jargon.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 text-[#00e5cc] mt-0.5" /> Actionable insights you can apply instantly</li>
              <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 text-[#00e5cc] mt-0.5" /> Scenario planning and what-if simulations</li>
              <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 text-[#00e5cc] mt-0.5" /> Nudges to keep you on track with goals</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e5cc]/20 to-[#ff006e]/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm text-gray-200">
                "I started saving 22% more each month with Dhanvam's smart budgeting and got clear guidance on where to invest next."
              </p>
              <div className="mt-4 text-xs text-gray-400">— Early user, working professional</div>
              <div className="mt-6">
                <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-[#0f0f0f] font-semibold px-5 py-3 shadow-sm hover:shadow-md transition">Try the advisor</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
