import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Mail, MapPin, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useBooking } from "../context/BookingContext";
import logoImage from "../../imports/1000333189-1.jpg";

export function Navigation() {
  const location = useLocation();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-[#0f1112] text-[11px] uppercase tracking-[0.24em] text-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a
              href="mailto:connectscalex@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail className="size-3.5" />
              <span className="hidden sm:inline">connectscalex@gmail.com</span>
            </a>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <a
              href="https://maps.google.com/?cid=2490081613028603817"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <MapPin className="size-3.5" />
              <span className="hidden sm:inline">Nashik, Maharashtra</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100071871173911"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1.5 transition-colors hover:text-accent"
              aria-label="Visit ScaleX on Facebook"
            >
              <Facebook className="size-3.5" />
            </a>
            <a
              href="https://www.instagram.com/connectscalex/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1.5 transition-colors hover:text-accent"
              aria-label="Visit ScaleX on Instagram"
            >
              <Instagram className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-border/70 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-[96px] sm:h-[108px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center -ml-2 transition-opacity hover:opacity-80">
            <ImageWithFallback
              src={logoImage}
              alt="ScaleX Logo"
              className="h-16 sm:h-20 w-auto max-w-[180px] object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openBooking}
              className="hidden md:inline-flex rounded-lg bg-accent px-6 py-2.5 text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Book a Call
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
              <div>
                <button
                  onClick={openBooking}
                  className="w-full rounded-lg bg-accent px-4 py-2.5 text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Book a Call
                </button>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-sm transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}