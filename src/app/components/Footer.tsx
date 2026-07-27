import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "../../imports/1000333189-1.jpg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <ImageWithFallback 
              src={logoImage} 
              alt="ScaleX Logo" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm text-primary-foreground/70">
              Brand. Leads. Sales.
            </p>
            <p className="text-sm text-primary-foreground/70">
              Beyond an Agency. Beyond Advertising.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-primary-foreground">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-primary-foreground">Services</h4>
            <ul className="space-y-3">
              <li className="text-sm text-primary-foreground/70">
                Performance Marketing
              </li>
              <li className="text-sm text-primary-foreground/70">
                Sales-Ready Lead Generation
              </li>
              <li className="text-sm text-primary-foreground/70">
                Mandate Partner
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-primary-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a
                  href="mailto:connectscalex@gmail.com"
                  className="transition-colors hover:text-accent"
                >
                  connectscalex@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  B 1102 Antriksh App
                  <br />
                  Ambad Link Road, Nashik, Maharashtra 422008
                </span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100071871173911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/connectscalex/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2026 ScaleX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}