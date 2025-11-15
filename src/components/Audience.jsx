import { GraduationCap, BriefcaseBusiness, Store } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "College Students",
    desc: "Build habits early: track expenses, set limits, and save toward essentials.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    desc: "Automate budgets, plan investments, and get bill reminders in one place.",
  },
  {
    icon: Store,
    title: "Small Business Owners",
    desc: "Monitor cash flow, separate business expenses, and optimize spending.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0f0f]">
            Designed for every stage of your financial journey
          </h2>
          <p className="mt-3 text-gray-700">
            Whether you’re studying, building a career, or running a business—Dhanvam adapts to you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#00e5cc] to-[#ff006e] grid place-items-center shadow">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0f0f0f]">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
