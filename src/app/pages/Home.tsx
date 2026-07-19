import { Link } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Target, TrendingUp, Zap, Handshake, Building2, Users, Trophy, Calendar } from "lucide-react";
import { LogoMarquee } from "../components/LogoMarquee";
import { PlatformCards } from "../components/PlatformCards";
import { ServiceCard } from "../components/ServiceCard";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { HeroBackground } from "../components/HeroBackground";
import { useBooking } from "../context/BookingContext";
export function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { openBooking } = useBooking();
  const clientLogos = [
    { name: "Godrej Properties", src: "/logos/godrej-properties.png", alt: "Godrej Properties logo" },
    { name: "Lodha Group", src: "/logos/lodha-group.jpg", alt: "Lodha Group logo" },
    { name: "Prestige Group", src: "/logos/prestige-group.jpg", alt: "Prestige Group logo" },
    { name: "Brigade Group", src: "/logos/brigade-group.jpg", alt: "Brigade Group logo" },
    { name: "Oberoi Realty", src: "/logos/oberoi-realty.webp", alt: "Oberoi Realty logo" },
    { name: "Mahindra Lifespaces", src: "/logos/mahindra-lifespaces.png", alt: "Mahindra Lifespaces logo" },
    { name: "Shapoorji Pallonji", src: "/logos/shapoorji-pallonji.jpg", alt: "Shapoorji Pallonji logo" },
    { name: "Sobha Limited", src: "/logos/sobha-limited.webp", alt: "Sobha Limited logo" },
  ];
  const platformLogos = [
    { name: "Meta Ads" },
    { name: "Google Ads" },
    { name: "LinkedIn" },
    { name: "MagicBricks" },
    { name: "99acres" },
    { name: "Housing.com" },
    { name: "Salesforce" },
    { name: "HubSpot" },
  ];
  const services = [
    {
      title: "Performance Marketing",
      tag: "For Healthcare, Retail & Growth-Focused Businesses",
      description:
        "Data-driven campaigns that connect your brand with the right audience and improve conversions without wasting budget.",
      href: "/services#performance-marketing",
    },
    {
      title: "Sales-Ready Lead Generation",
      tag: "For Real Estate Developers",
      description:
        "We qualify, nurture, and guide every enquiry until the buyer is ready for a meaningful site visit and sales conversation.",
      href: "/services#sales-ready-lead-generation",
    },
    {
      title: "Mandate Partner",
      tag: "For Real Estate Developers",
      description:
        "One accountable growth partner for your full marketing journey—from positioning to leads and sales acceleration.",
      href: "/services#mandate-partner",
    },
  ];

  const caseStudies = [
    {
      projectName: "Godrej Riverside",
      category: "Residential",
      teaser: "Premium apartments in Pune's prime location needed to convert awareness into sales",
      stats: [
        { label: "Increase in Site Visits", value: "204%" },
        { label: "Cost per Lead", value: "-38%" },
      ],
    },
    {
      projectName: "Brigade Orchards",
      category: "Plotted Development",
      teaser: "Large-scale plotted community launch targeting NRI and investment buyers",
      stats: [
        { label: "Lead Quality Score", value: "8.4/10" },
        { label: "Units Sold", value: "127" },
      ],
    },
    {
      projectName: "Prestige Tech Park",
      category: "Commercial",
      teaser: "Office space launch in emerging tech corridor required B2B positioning",
      stats: [
        { label: "Enterprise Leads", value: "43" },
        { label: "Occupancy Rate", value: "92%" },
      ],
    },
    {
      projectName: "Oberoi Sky City",
      category: "Luxury",
      teaser: "Ultra-luxury high-rise targeting HNI buyers in Mumbai metro",
      stats: [
        { label: "Avg Deal Value", value: "₹4.2Cr" },
        { label: "Sales Velocity", value: "+156%" },
      ],
    },
  ];

  const methodSteps = [
    {
      number: "01",
      title: "Position",
      description: [
        "Understand your audience.",
        "Define a clear market position.",
        "Create a compelling brand story.",
      ],
      isList: true,
    },
    {
      number: "02",
      title: "Create",
      description:
        "Develop creatives, videos, landing pages, and content that speak directly to your ideal customer.",
      isList: false,
    },
    {
      number: "03",
      title: "Activate",
      description:
        "Launch performance campaigns and respond immediately when new enquiries arrive, because speed improves conversion.",
      isList: false,
    },
    {
      number: "04",
      title: "Nurture",
      description:
        "Every lead is followed up through structured communication until they either book a site visit or make an informed buying decision.",
      isList: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "ScaleX transformed our approach to digital marketing. Their mandate partnership model means we have one team accountable for everything from brand to bookings. The results speak for themselves.",
      author: "Rajesh Mehta",
      title: "VP Sales & Marketing",
      company: "Godrej Properties",
    },
    {
      quote:
        "Finally, an agency that understands real estate. They don't just drive traffic—they understand our sales cycle, our buyer personas, and optimize for actual revenue.",
      author: "Priya Sharma",
      title: "Chief Marketing Officer",
      company: "Brigade Group",
    },
    {
      quote:
        "The difference is night and day. Our previous agency focused on vanity metrics. ScaleX focuses on qualified leads and conversion rates. Our cost per booking is down 40%.",
      author: "Ankit Desai",
      title: "Director",
      company: "Prestige Estates",
    },
  ];

  const filteredCaseStudies =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[48vh] sm:min-h-[58vh] md:min-h-[72vh]">
        {/* Background Images with Crossfade */}
        <HeroBackground />

        {/* Content */}
        <div className="relative w-full z-10 flex min-h-full flex-col justify-center py-5 sm:py-8">
          <div className="flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-[88vw] sm:max-w-xl md:max-w-2xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-4 leading-[1.05] sm:leading-tight text-white font-bold drop-shadow-lg">
                  Turn Unsold Inventory Into{" "}
                  <span className="text-accent">Booked Sales</span>
                </h1>
                {/* Subheading removed per request; badge/CTAs moved up into hero */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.42 }}
                  className="inline-flex items-center justify-center rounded-[10px] border-l-4 border-accent bg-slate-950/35 px-3 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl text-white/95 mt-3 mx-auto max-w-[22rem] w-full"
                  style={{ borderColor: "rgba(88, 189, 62, 0.92)" }}
                >
                  <span className="text-[11px] tracking-[0.3em] font-semibold uppercase">
                    Nashik&apos;s first dedicated real estate marketing mandate partner
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.58 }}
                  className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                  <button
                    onClick={openBooking}
                    className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-[#78d665] focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    Book a Strategy Call
                  </button>
                  <Link
                    to="/strategies"
                    className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    View Strategies
                  </Link>
                </motion.div>
                <div className="mt-4 sm:mt-6">
                  <LogoMarquee
                      logos={clientLogos}
                      background="transparent"
                      speed={32}
                      logoHeight={28}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms & Tools */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-muted-foreground mb-8">
            Platforms & Tools We Work With
          </h3>
          {/* Platform cards grid */}
          <div>
            {/* provide platform metadata (logo files should be in public/logos/) */}
            <PlatformCards
              platforms={[
                { name: 'Meta Ads', src: '/meta-ads.png', description: 'Precision-targeted campaigns across Facebook & Instagram to reach ready-to-buy audiences.' },
                { name: 'Google Ads', src: '/google-ads.png', description: 'Search and display campaigns that capture high-intent buyers actively looking for their next property.' },
                { name: 'YouTube Ads', src: '/youtube-adds.png', description: 'Video-first storytelling that builds brand trust and showcases projects at scale.' },
                { name: 'Instagram', src: '/instagram-adds.png', description: 'Visual-first content and reels that build brand presence and drive qualified enquiries.' },
                { name: 'WhatsApp Business', src: '/whatsapp-adds.png', description: 'Instant, structured follow-up that keeps leads warm from first enquiry to site visit.' },
                { name: 'Google Analytics', src: '/google-analytics.png', description: 'Transparent tracking and reporting tied to real business outcomes, not vanity metrics.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Approach Statement */}
      <section className="py-12 sm:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-3xl rounded-[16px] border border-slate-200/60 bg-[#FAFAF8] p-5 sm:p-7"
          >
            <div className="border-l-4 border-accent pl-5">
              <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Beyond an Agency. Beyond Advertising.
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">
              We're not a traditional ad agency that hands you a campaign and walks
              away. We're your <strong>Real Estate Marketing Mandate Partner</strong>{" "}
              — a single, accountable team responsible for your entire marketing-to-sales
              funnel.
            </p>
            <p className="mt-6 text-lg font-semibold text-accent sm:text-xl">
              No platform bias. No vanity metrics. Just measurable outcomes tied to
              your revenue goals.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Service Pillars */}
      <section className="py-12 sm:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl mb-4">One Partner. Every Stage of the Sale.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategic positioning to qualified leads to sales acceleration —
              all under one roof, all accountable to your bottom line.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="h-full"
              >
                <ServiceCard key={idx} {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Method */}
      <section className="py-12 sm:py-14 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.38em] text-accent">
              OUR METHOD
            </p>
            <h2 className="text-3xl sm:text-4xl mb-4">Foundation Before Promotion</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every successful campaign begins long before the first advertisement goes live.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-7">
              Our four-step framework ensures every marketing activity is built on strategy — not guesswork.
            </p>
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {methodSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: 0.12 * index, duration: 0.55, ease: "easeOut" }}
                    className="rounded-[2rem] border border-white/10 bg-slate-950/95 p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl text-left"
                  >
                    <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent shadow-sm shadow-accent/10">
                      {step.number}
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>

                    {step.isList ? (
                      <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                        {step.description.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-6 text-base leading-8 text-slate-300">
                        {step.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mt-16 text-center text-sm leading-7 text-muted-foreground"
          >
            This foundation-first approach powers every service we deliver — from individual campaigns to full mandate partnerships.
          </motion.p>
        </div>
      </section>

      {/* Big Stats Band */}
      <section className="py-12 sm:py-14 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-2 text-white">
              Proof Over Promises
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 text-accent">20+</div>
              <div className="text-white/70">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 text-accent">₹840Cr+</div>
              <div className="text-white/70">Sales Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 text-accent">156%</div>
              <div className="text-white/70">Avg Lead Quality Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 text-accent">35+</div>
              <div className="text-white/70">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 sm:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl mb-4">Real Results, Real Developers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Every case study shows specific outcomes: lead quality, cost efficiency,
              and sales velocity.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["all", "Residential", "Commercial", "Luxury", "Plotted Development"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-lg text-sm transition-all ${
                      activeCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-accent/10"
                    }`}
                  >
                    {category === "all" ? "All Projects" : category}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((caseStudy, idx) => (
              <CaseStudyCard key={idx} {...caseStudy} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-14 sm:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-5">Ready to Scale Your Sales?</h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Let's discuss how a mandate partnership model can transform your marketing
            into measurable revenue.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            Book Your Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
