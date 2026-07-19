import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

export function About() {
  const negations = [
    "Advertising is not the foundation.",
    "Leads are not the foundation.",
    "Social media is not the foundation.",
  ];

  const [prefersReduced, setPrefersReduced] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReduced(mq.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
      // @ts-ignore — older browsers
      if (mq.addEventListener) mq.addEventListener("change", handler);
      else mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", handler);
        else mq.removeListener(handler as any);
      };
    }
  }, []);

  const pivotStyle = { color: "#648E2D" };

  const revealRef = useRef<HTMLElement | null>(null);
  const [playReveal, setPlayReveal] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setPlayReveal(true);
      return;
    }
    const node = revealRef.current;
    if (!node || typeof window === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayReveal(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [prefersReduced]);

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="absolute inset-0">
          <img
            src="/aboutusedit.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-top sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/0" />
        </div>

        <div className="relative px-6">
          <div className="text-left max-w-[620px] lg:max-w-[680px]">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.38em] text-white/80">
              ABOUT
            </p>

            <motion.h1
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl"
            >
              Client Growth Is Our True North.
            </motion.h1>

            <motion.p
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="mt-6 text-base leading-7 text-black/80 sm:text-lg"
            >
              ScaleX is a growth-focused marketing and sales agency with more than 20
              years of experience building brands that customers trust.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY: NEGATION CARDS + PIVOT CARD */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div ref={revealRef} className="mx-auto max-w-[850px] px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Our philosophy is simple.
            </p>

            {/* Negation cards row */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {negations.map((line, index) => {
                const shouldAnimate = prefersReduced || playReveal;
                return (
                  <motion.article
                    key={line}
                    initial={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.42, delay: shouldAnimate ? index * 0.16 : 0 }}
                    className="rounded-xl bg-[#FBFBF9] border border-border/60 p-5 text-center shadow-sm"
                  >
                    <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                      {line}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            {/* Pivot card */}
            <motion.article
              initial={prefersReduced || playReveal ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
              animate={prefersReduced || playReveal ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.55, delay: prefersReduced ? 0 : negations.length * 0.16 + 0.12, ease: "easeOut" }}
              className="mt-6 rounded-2xl border-l-0 border border-border/60 p-6 sm:p-8 lg:p-10"
              style={{ backgroundColor: "rgba(100,142,45,0.06)", borderTopWidth: 5, borderTopColor: "#648E2D" }}
            >
              <p className="text-lg font-semibold leading-8 text-foreground sm:text-xl lg:text-2xl">
                The real foundation of sustainable growth is strategic brand positioning, customer insight, compelling communication, and a structured sales journey.
              </p>
            </motion.article>

            {/* Closing line */}
            <motion.p
              initial={prefersReduced || playReveal ? { opacity: 1 } : { opacity: 0 }}
              animate={prefersReduced || playReveal ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: prefersReduced ? 0 : negations.length * 0.16 + 0.32 }}
              className="mt-6 text-sm tracking-[0.28em] text-muted-foreground"
            >
              That&apos;s where we begin.
            </motion.p>
          </div>
        </div>
      </section>

      {/* TWO-AUDIENCE CARDS */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
            <motion.article
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.12 }}
              className="rounded-[1.5rem] bg-[#FBFBF9] border border-border/60 shadow-sm p-6 sm:p-8 lg:p-10"
            >
              <div className="-mt-6 h-1 w-full rounded-t-[0.75rem] bg-[#648E2D]" />
              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.34em] text-[#648E2D]">
                REAL ESTATE DEVELOPERS
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                For real estate developers, we operate as a Dedicated Marketing Mandate Partner — combining brand strategy, lead generation, lead nurturing, and sales acceleration into one accountable partnership.
              </p>
            </motion.article>

            <motion.article
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.22 }}
              className="rounded-[1.5rem] bg-[#FBFBF9] border border-border/60 shadow-sm p-6 sm:p-8 lg:p-10"
            >
              <div className="-mt-6 h-1 w-full rounded-t-[0.75rem] bg-[#648E2D]" />
              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.34em] text-[#648E2D]">
                OTHER INDUSTRIES
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                For healthcare, retail, and other businesses, we create performance marketing systems designed to generate measurable business growth.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CLOSING MANIFESTO */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[900px] px-6">
          <motion.blockquote
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-3xl font-semibold leading-relaxed text-foreground sm:text-4xl lg:text-5xl">
              Because strong brands don&apos;t happen by chance.
            </p>
            <p className="mt-4 text-3xl font-semibold leading-relaxed text-foreground sm:text-4xl lg:text-5xl">
              They are built with strategy.
            </p>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
