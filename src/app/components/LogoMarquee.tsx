import { useEffect, useRef, useState } from "react";

interface LogoMarqueeProps {
  logos: { name: string; src: string; alt: string; }[];
  speed?: number;
  background?: 'white' | 'transparent';
  logoHeight?: number; // in px (desktop)
}

export function LogoMarquee({ logos, speed = 35, background = 'white', logoHeight = 48 }: LogoMarqueeProps) {
  const duplicatedLogos = [...logos, ...logos];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(1);
  const mobileSpeed = speed * 1.2;
  const bgClass = background === 'white' ? 'bg-white/95' : 'bg-slate-950/15';
  const leftGradient = background === 'white' ? 'bg-gradient-to-r from-white to-transparent' : 'bg-gradient-to-r from-slate-950/15 to-transparent';
  const rightGradient = background === 'white' ? 'bg-gradient-to-l from-white to-transparent' : 'bg-gradient-to-l from-slate-950/15 to-transparent';
  const labelClass = background === 'white' ? 'text-muted-foreground' : 'text-white/80';

  useEffect(() => {
    function update() {
      const visible = marqueeRef.current?.offsetWidth ?? window.innerWidth;
      const setWidth = trackRef.current?.offsetWidth ?? 0;
      if (!setWidth) {
        setRepeatCount(2);
        setTrackWidth(0);
        return;
      }

      const desiredRepeats = Math.max(2, Math.ceil((visible * 1.5) / setWidth));
      setRepeatCount(desiredRepeats);
      setTrackWidth(setWidth);
    }

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [logos, logoHeight]);

  return (
    <div className={`w-full ${bgClass} py-6 relative`}>
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-slate-950/6 via-transparent to-transparent pointer-events-none" />

      <div className="relative">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className={`text-xs font-medium tracking-widest uppercase ${labelClass}`}>
              Trusted by leading developers
            </p>
          </div>
        </div>

        {/* full-bleed marquee container: positioned to touch both viewport edges */}
        <div style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-slate-950/14 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
            <div className={`absolute left-0 top-0 bottom-0 w-6 ${leftGradient} z-10 pointer-events-none`} />
            <div className={`absolute right-0 top-0 bottom-0 w-6 ${rightGradient} z-10 pointer-events-none`} />

              <div className="marquee-wrapper relative overflow-hidden">
                <div className="marquee-inner flex items-center" ref={marqueeRef}>
                  <div
                    className="marquee-content flex items-center gap-16 py-6"
                    style={{ animationDuration: `${speed}s`, ['--track-width' as any]: trackWidth ? `${trackWidth}px` : '0px' }}
                  >
                    {/* render two explicit sets so we can measure one set's width and animate by that exact pixel value */}
                    <div className="marquee-set flex items-center" ref={trackRef}>
                      {Array.from({ length: repeatCount }).flatMap(() => logos).map((logo, index) => (
                        <div
                          key={`a-${index}`}
                          className="logo-slot flex items-center justify-center"
                          style={{
                            minWidth: Math.max(110, logoHeight * 2) + "px",
                            height: `${logoHeight}px`,
                            marginRight: logo.name === 'Godrej Properties' ? '14px' : undefined,
                          }}
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            style={{ maxHeight: logoHeight + "px" }}
                            className="w-auto object-contain transition duration-300"
                            loading="eager"
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="marquee-set flex items-center" aria-hidden>
                      {Array.from({ length: repeatCount }).flatMap(() => logos).map((logo, index) => (
                        <div
                          key={`b-${index}`}
                          className="logo-slot flex items-center justify-center"
                          style={{
                            minWidth: Math.max(110, logoHeight * 2) + "px",
                            height: `${logoHeight}px`,
                            marginRight: logo.name === 'Godrej Properties' ? '14px' : undefined,
                          }}
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            style={{ maxHeight: logoHeight + "px" }}
                            className="w-auto object-contain transition duration-300"
                            loading="eager"
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-wrapper:hover .marquee-content { animation-play-state: paused; }
        .marquee-content { animation: marquee ${speed}s linear infinite; will-change: transform; }

        .marquee-inner { padding-left: 0; padding-right: 0; }

        /* marquee-content will be animated by the measured track width (CSS var --track-width) */
        .marquee-content { display: flex; }
        .marquee-set { display: flex; }

        .logo-slot { display: flex; align-items: center; justify-content: center; }
        .logo-slot img { display: block; max-width: 100%; }

        @media (max-width: 767px) {
          .marquee-content { animation-duration: ${mobileSpeed}s; gap: 12px; }
          .logo-slot { min-width: 110px !important; height: 40px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content { animation: none !important; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--track-width))); }
        }
      `}</style>
    </div>
  );
}
