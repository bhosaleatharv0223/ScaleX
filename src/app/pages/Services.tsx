import { motion } from "motion/react";
import { ServiceCard } from "../components/ServiceCard";

const serviceCards = [
  {
    title: "Performance Marketing",
    tag: "For Healthcare, Retail & Growth-Focused Businesses",
    description:
      "Data-driven campaigns designed to build brand demand, maximize conversions, and lower acquisition costs.",
    features: [
      "Meta & Google Ads strategy tailored for higher-intent traffic",
      "Creative concepts for video, display, and landing page conversion",
      "Real-time campaign optimization powered by first-party data",
      "Analytics tracking that ties ads to actual sales outcomes",
    ],
    href: "#performance-marketing",
    ctaLabel: "Explore performance",
  },
  {
    title: "Sales-Ready Lead Generation",
    tag: "For Real Estate Developers",
    description:
      "Every lead is qualified, nurtured, and moved closer to booking before handoff to sales.",
    features: [
      "Lead scoring and qualification for serious buyer intent",
      "Multichannel nurture across WhatsApp, email, and calls",
      "CRM-ready handoff with appointment scheduling",
      "Weekly lead quality reports with funnel insights",
    ],
    href: "#sales-ready-lead-generation",
    ctaLabel: "See lead gen",
  },
  {
    title: "Mandate Partner",
    tag: "For Real Estate Developers",
    description:
      "A single growth partner accountable for positioning, demand, and sales acceleration.",
    features: [
      "Full marketing ownership from launch to booking",
      "Campaign, creative, and sales coordination under one team",
      "KPI-driven reporting and milestone accountability",
      "Continuous refinement to reduce cost per booking",
    ],
    href: "#mandate-partner",
    ctaLabel: "View mandate",
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0">
          <img
            src="/servicesedit2.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-top sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.38em] text-black/70">
              SERVICES
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
              Three Ways We Drive Growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/70 sm:text-xl">
              Every business needs a different growth strategy. We deliver specialized solutions designed to build stronger brands, generate qualified opportunities, and accelerate sales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.08 }}
                className="h-full"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="rounded-[2.5rem] border border-border/70 bg-card/80 p-10 shadow-[0_30px_100px_rgba(0,0,0,0.05)] sm:p-12 lg:p-14"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-accent">
                For Real Estate Developers
              </span>
            </div>

            <h2 id="mandate-partner" className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Beyond an Agency. Beyond Advertising.
            </h2>

            <p className="mt-8 text-base leading-8 text-muted-foreground sm:text-lg">
              A project doesn't need multiple vendors managing disconnected activities.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
              It needs one accountable growth partner.
            </p>

            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              As your Dedicated Marketing Mandate Partner, ScaleX takes responsibility for the complete marketing journey—from brand positioning to qualified leads and sales acceleration.
            </p>

            <div className="mt-10">
              <p className="text-lg leading-8 text-foreground">
                We work alongside your sales team with one objective:
              </p>
              <p className="mt-3 text-2xl font-semibold leading-tight text-accent sm:text-3xl">
                Help your project sell faster and more efficiently.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-accent">
                OUR MANDATE INCLUDES
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Brand Strategy & Positioning",
                  "Campaign Planning & Creative Development",
                  "Performance Marketing & Lead Generation",
                  "Lead Nurturing & Site Visit Support",
                  "Sales Acceleration Strategy",
                  "KPI-Based Reporting & Accountability",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.03 }}
                    className="rounded-2xl border border-border/70 bg-background/80 px-5 py-4 text-sm leading-7 text-foreground"
                  >
                    <span className="mr-2 text-accent">—</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-20 bg-accent/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Let's Build Your Custom Growth Strategy
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Every real estate project is unique. Schedule a strategy call to discuss your specific challenges and goals.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 transition hover:bg-[#7f9e53]"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
}
