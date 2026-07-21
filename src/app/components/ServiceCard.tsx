import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  tag?: string;
  description: string;
  features?: string[];
  href?: string;
  ctaLabel?: string;
}

export function ServiceCard({ title, tag, description, features = [], href, ctaLabel = "Learn more →" }: ServiceCardProps) {
  const cardContent = (
    <div className="flex h-full flex-col rounded-[2rem] border border-border/70 bg-white/95 p-6 sm:p-8 shadow-[0_28px_90px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.12)]">
      <div className="mb-6">
        {tag ? (
          <span className="inline-flex rounded-full bg-slate-950/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm">
            {tag}
          </span>
        ) : null}
      </div>

      <div className="flex-1">
        <h3 className="mb-4 text-2xl sm:text-3xl font-semibold leading-tight text-foreground">
          {title}
        </h3>
        <p className="text-base leading-8 text-muted-foreground">
          {description}
        </p>

        {features.length > 0 ? (
          <div className="mt-6 space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex gap-3 text-sm leading-7 text-slate-700">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {href ? (
        <div className="mt-8 flex items-center">
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 group-hover:bg-accent-foreground">
            {ctaLabel}
          </span>
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="group block h-full hover:no-underline">
        {cardContent}
      </Link>
    );
  }

  return <div className="group block h-full">{cardContent}</div>;
}
