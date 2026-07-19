import { useEffect, useRef } from "react";

type Platform = {
  name: string;
  src: string;
  alt?: string;
  description: string;
};

export function PlatformCards({ platforms }: { platforms: Platform[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // show immediately
      el.querySelectorAll('.pcard').forEach((c) => {
        (c as HTMLElement).style.opacity = '1';
        (c as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const cards = Array.from(el.querySelectorAll('.pcard')) as HTMLElement[];
    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, idx) => {
            card.style.animation = `platformFade 0.55s ease-out ${idx * 0.09}s both`;
          });
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.18 });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="platform-cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {platforms.map((p, i) => (
          <div key={p.name} className="pcard bg-[#FAFAF8] rounded-xl border border-slate-200/60 shadow-sm p-6 flex flex-col items-start text-left">
            <div className="w-full flex items-center justify-start mb-4">
              <img src={p.src} alt={p.alt || p.name} className="h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center gap-2 w-full">
              <h4 className="text-lg font-medium text-foreground">{p.name}</h4>
              <span className="ml-2 block h-2 w-2 rounded-full bg-accent" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        .pcard { opacity: 0; transform: translateY(18px); }
        @keyframes platformFade {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pcard { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}
