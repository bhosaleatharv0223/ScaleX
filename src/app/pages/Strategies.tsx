import { motion } from "motion/react";
import { Link } from "react-router";

const strategies = [
  {
    audience: "For Healthcare, Retail & Growth-Focused Businesses",
    title: "Performance Marketing",
    intro:
      "Performance marketing isn't just about running ads—it's about generating measurable business growth.",
    body:
      "We create data-driven campaigns that connect your brand with the right audience, improve conversions, and maximize your marketing investment.",
    label: "WHAT WE DELIVER",
    items: [
      "Meta & Google Ads Strategy",
      "Platform-Specific Creative & Video Content",
      "Landing Page & Conversion Optimization",
      "Advanced Tracking & Analytics",
      "Continuous Campaign Optimization",
      "Transparent Monthly Performance Reports",
    ],
    compact: true,
  },
  {
    audience: "For Real Estate Developers",
    title: "Sales-Ready Lead Generation",
    intro: "Generating leads is only the beginning.",
    body:
      "Most real estate buyers don't make a booking after the first enquiry. They need guidance, follow-up, and confidence before making one of life's biggest investments.",
    secondary: "That's why we don't stop at lead generation.",
    body2:
      "We qualify, nurture, educate, and engage every prospect until they're ready for a meaningful site visit and sales conversation.",
    label: "OUR PROCESS",
    items: [
      "Qualified Lead Generation",
      "Multi-Channel Follow-Up (Calls, WhatsApp & Email)",
      "Lead Qualification & Scoring (Cold, Warm & Hot)",
      "CRM Tracking & Sales Team Coordination",
      "Site Visit Scheduling & Follow-Up",
      "Lead Progress Reporting",
    ],
    narrative: true,
  },
  {
    audience: "For Real Estate Developers",
    title: "Mandate Partner",
    intro: "Beyond an Agency. Beyond Advertising.",
    body:
      "A project doesn't need multiple vendors managing disconnected activities.",
    secondary: "It needs one accountable growth partner.",
    body2:
      "As your Dedicated Marketing Mandate Partner, ScaleX takes responsibility for the complete marketing journey—from brand positioning to qualified leads and sales acceleration.",
    body3: "We work alongside your sales team with one objective:",
    punchline: "Help your project sell faster and more efficiently.",
    label: "OUR MANDATE INCLUDES",
    items: [
      "Brand Strategy & Positioning",
      "Campaign Planning & Creative Development",
      "Performance Marketing & Lead Generation",
      "Lead Nurturing & Site Visit Support",
      "Sales Acceleration Strategy",
      "KPI-Based Reporting & Accountability",
    ],
    flagship: true,
  },
];

export function Strategies() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.38em] text-accent">
            OUR STRATEGIES
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            The Right Strategy For Your Growth Stage
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Tailored strategy paths designed for your business type, your sales motion, and the real revenue you need.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.95fr]">
            {strategies.slice(0, 2).map((strategy, idx) => (
              <motion.article
                key={strategy.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-[1.5rem] border border-border/70 bg-card/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.34em] text-accent">
                  {strategy.audience}
                </div>
                <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  {strategy.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  {strategy.intro}
                </p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {strategy.body}
                </p>
                <div className="mt-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-accent">
                    {strategy.label}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {strategy.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground"
                      >
                        <span className="mr-2 text-accent">—</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.04)] sm:p-10 lg:p-12"
          >
            <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.34em] text-accent">
              {strategies[2].audience}
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {strategies[2].title}
            </h2>
            <p className="mt-8 text-xl leading-9 text-muted-foreground sm:text-2xl">
              {strategies[2].intro}
            </p>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              {strategies[2].body}
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
              {strategies[2].secondary}
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
              {strategies[2].body2}
            </p>
            <p className="mt-8 text-lg font-semibold leading-tight text-foreground">
              {strategies[2].body3}
            </p>
            <p className="mt-3 text-2xl font-semibold leading-tight text-accent sm:text-3xl">
              {strategies[2].punchline}
            </p>
            <div className="mt-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-accent">
                {strategies[2].label}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {strategies[2].items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/70 bg-background/80 px-5 py-4 text-sm text-foreground"
                  >
                    <span className="mr-2 text-accent">—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-20 bg-[#F3F8EE]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Let's Build Your Custom Growth Strategy
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Every real estate project is unique. Schedule a strategy call to discuss your specific challenges and goals.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 transition hover:bg-[#7bb04f]"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
