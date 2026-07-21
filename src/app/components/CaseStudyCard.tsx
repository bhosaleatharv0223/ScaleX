import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  projectName: string;
  category: string;
  result?: string;
  teaser?: string;
  image?: string;
  slug?: string;
}

export function CaseStudyCard({
  projectName,
  category,
  result,
  teaser,
  image,
  slug,
}: CaseStudyCardProps) {
  const resolvedImage =
    image ??
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80";
  const resolvedResult = result ?? "Results available on request";
  const resolvedTeaser =
    teaser ??
    "A focused growth strategy designed to turn attention into qualified opportunities.";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 shadow-[0_24px_80px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.1)]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={resolvedImage}
          alt={`${projectName} project preview`}
          className="h-full w-full object-cover object-top sm:object-center"
        />
      </div>

      <div className="flex-1 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.35em] text-accent">
            {category}
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Case study
          </span>
        </div>

        <div className="mt-5 h-px w-full bg-accent/70" />

        <div className="mt-6 flex flex-col justify-between gap-7">
          <div>
            <h3 className="text-2xl font-semibold text-foreground">{projectName}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{resolvedTeaser}</p>
          </div>

          <div className="rounded-[1.5rem] border border-accent/15 bg-accent/5 p-5">
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Highlight result
            </div>
            <div className="mt-3 text-xl font-semibold text-accent sm:text-2xl">
              {resolvedResult}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 p-6 md:p-8">
        <Link
          to={slug || "/case-studies"}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          View project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
