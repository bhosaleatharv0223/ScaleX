import { useState } from "react";
import { CaseStudyCard } from "../components/CaseStudyCard";

export function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const caseStudies = [
    {
      projectName: "Godrej Riverside",
      category: "Residential",
      industry: "Premium Residential",
      servicesDelivered: ["Brand Strategy", "Performance Marketing", "Launch Campaign"],
      result: "204% increase in site visits",
      teaser:
        "A luxury apartment launch in Pune needed sharper positioning and a more efficient funnel to convert awareness into qualified buyer interest.",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Increase in Site Visits", value: "204%" },
        { label: "Cost per Lead", value: "-38%" },
      ],
      featured: true,
    },
    {
      projectName: "Brigade Orchards",
      category: "Plotted Development",
      industry: "Plotted Community",
      servicesDelivered: ["Lead Funnel", "Creative Strategy", "CRM Nurture"],
      result: "127 units sold in 90 days",
      teaser:
        "A large plotted community launch needed a more compelling story for NRI and investment buyers across digital channels.",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Lead Quality Score", value: "8.4/10" },
        { label: "Units Sold", value: "127" },
      ],
    },
    {
      projectName: "Prestige Tech Park",
      category: "Commercial",
      industry: "Commercial Office",
      servicesDelivered: ["B2B Positioning", "Content Systems", "Demand Gen"],
      result: "43 enterprise leads in the first quarter",
      teaser:
        "An emerging tech corridor launch required a B2B narrative that could speak to occupiers and investor stakeholders alike.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Enterprise Leads", value: "43" },
        { label: "Occupancy Rate", value: "92%" },
      ],
    },
    {
      projectName: "Oberoi Sky City",
      category: "Luxury",
      industry: "Ultra-Luxury Residences",
      servicesDelivered: ["Luxury Branding", "Performance Media", "Sales Enablement"],
      result: "156% stronger sales velocity",
      teaser:
        "An ultra-luxury launch in Mumbai needed a more selective, high-value buyer acquisition approach with elevated storytelling.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Avg Deal Value", value: "₹4.2Cr" },
        { label: "Sales Velocity", value: "+156%" },
      ],
    },
    {
      projectName: "Sobha Forest Edge",
      category: "Residential",
      industry: "Nature-led Residential",
      servicesDelivered: ["Campaign Design", "Social Strategy", "Lead Tracking"],
      result: "892 qualified leads within 8 weeks",
      teaser:
        "A nature-inspired residential community needed a more emotionally resonant story for millennial buyers and family decision-makers.",
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Qualified Leads", value: "892" },
        { label: "Booking Rate", value: "34%" },
      ],
    },
    {
      projectName: "Shapoorji Downtown",
      category: "Commercial",
      industry: "Mixed-Use Development",
      servicesDelivered: ["Cross-Segment Strategy", "Content Engine", "Conversion Lift"],
      result: "1,240 total inquiries with 42% lower CAC",
      teaser:
        "A mixed-use launch needed dual messaging for residential and commercial audiences without losing clarity or momentum.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      stats: [
        { label: "Total Inquiries", value: "1,240" },
        { label: "CAC Reduction", value: "-42%" },
      ],
    },
  ];

  const categories = ["all", "Residential", "Commercial", "Luxury", "Plotted Development"];

  const filteredCaseStudies =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <img
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
          src="/case%20studies1.png"
          alt="Case studies background"
        />
        <div className="absolute inset-0 bg-slate-950/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.38em] text-accent">
              WORK
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
              Brands We&apos;ve Helped Grow
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/80 sm:text-xl">
              Growth isn&apos;t measured by impressions. It&apos;s measured by stronger brands, qualified enquiries, site visits, and sales.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
              Explore how ScaleX has partnered with developers and businesses to build meaningful growth through strategy-first marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-3 items-center overflow-x-auto scrollbar-hide py-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "border-accent/40 bg-accent text-accent-foreground"
                      : "border-border/70 bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          </div>

          {filteredCaseStudies.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.projectName} {...caseStudy} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-border/70 py-20 text-center">
              <p className="text-lg text-muted-foreground">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl text-white">Cumulative Impact Across Projects</h2>
            <p className="text-xl text-white/70">
              Real numbers from real partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-3 text-5xl md:text-6xl text-accent">₹840Cr+</div>
              <div className="text-white/70">Total Sales Value</div>
            </div>
            <div className="text-center">
              <div className="mb-3 text-5xl md:text-6xl text-accent">35+</div>
              <div className="text-white/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="mb-3 text-5xl md:text-6xl text-accent">156%</div>
              <div className="text-white/70">Avg Lead Quality Lift</div>
            </div>
            <div className="text-center">
              <div className="mb-3 text-5xl md:text-6xl text-accent">-41%</div>
              <div className="text-white/70">Avg CAC Reduction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
