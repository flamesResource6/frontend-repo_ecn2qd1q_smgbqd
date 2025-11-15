import { Brain, PiggyBank, BarChart3, BellRing, CreditCard, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Advisory",
    desc: "Personalized strategies to optimize spending and grow wealth.",
  },
  {
    icon: PiggyBank,
    title: "Smart Budgeting",
    desc: "Create dynamic budgets and track expenses with ease.",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    desc: "Understand your cash flow with live analytics and trends.",
  },
  {
    icon: Target,
    title: "Savings Goals",
    desc: "Set goals and automate contributions to reach them faster.",
  },
  {
    icon: BellRing,
    title: "Bill Reminders",
    desc: "Never miss a payment with smart notifications.",
  },
  {
    icon: CreditCard,
    title: "Cards & Subscriptions",
    desc: "Monitor cards and recurring charges in one place.",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0f0f]">
            Everything you need to master your money
          </h2>
          <p className="mt-3 text-gray-700">
            Built for students, professionals, and small business owners.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#00e5cc]/20 to-[#ff006e]/20 blur-2xl" />
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
