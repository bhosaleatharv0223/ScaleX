import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/herosectionbackground.png",
  "/herosectionbackground2.png",
  "/herosectionbackground3.png",
  "/herosectionbackground4.png",
];

const ROTATION_INTERVAL = 5000; // 5 seconds

export function HeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setNextImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setIsTransitioning(false);
      }, 500); // Mid-transition timing
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Current Image */}
      <img
        src={HERO_IMAGES[currentImageIndex]}
        alt="Hero background"
        className={`absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        loading="eager"
      />

      {/* Next Image (preloaded for crossfade) */}
      <img
        src={HERO_IMAGES[nextImageIndex]}
        alt="Hero background next"
        className={`absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-opacity duration-1000 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />

      {/* Dark Overlay - gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 pointer-events-none" />

      {/* Additional vignette for extra contrast on edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
