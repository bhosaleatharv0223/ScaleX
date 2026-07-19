import { useState } from "react";
import { Mail, MapPin, Facebook, Instagram, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectStage: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Page Header */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl mb-6">Let's Talk Growth</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a strategy call to discuss how we can help accelerate your
              sales.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-accent/10 border border-accent rounded-xl p-8 text-center">
                  <CheckCircle2 className="size-16 text-accent mx-auto mb-4" />
                  <h2 className="text-2xl mb-3">Thank You!</h2>
                  <p className="text-muted-foreground mb-6">
                    We've received your inquiry. Our team will reach out within 24
                    hours to schedule your strategy call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2">
                      Company / Project Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectStage" className="block mb-2">
                      Project Stage *
                    </label>
                    <select
                      id="projectStage"
                      name="projectStage"
                      required
                      value={formData.projectStage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select stage</option>
                      <option value="pre-launch">Pre-Launch Planning</option>
                      <option value="launch">Launch Phase</option>
                      <option value="ongoing">Ongoing Sales</option>
                      <option value="inventory">Slow-Moving Inventory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Tell Us About Your Challenge
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="What are your current marketing challenges? What outcomes are you looking for?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg"
                  >
                    Book Your Strategy Call
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Mail className="size-6" />
                    </div>
                    <div>
                      <div className="mb-1">Email</div>
                      <a
                        href="mailto:hello@scalex.agency"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        hello@scalex.agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <div className="mb-1">Office</div>
                      <p className="text-muted-foreground">
                        B 1102 Antriksh App
                        <br />
                        Ambad Link Road, Nashik, Maharashtra 422008
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100071871173911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
                  >
                    <Facebook className="size-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/connectscalex/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
                  >
                    <Instagram className="size-5" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4">
                <iframe
                  title="ScaleX office location"
                  src="https://maps.google.com/maps?q=19.9800473,73.7460054&z=16&output=embed"
                  className="h-[280px] w-full rounded-xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* What Happens After You Submit */}
              <div className="bg-muted/50 rounded-xl p-8 mt-12">
                <h3 className="mb-6">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 text-sm">
                      1
                    </div>
                    <div>
                      <div className="mb-1">Initial Review</div>
                      <p className="text-sm text-muted-foreground">
                        We review your project details and challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 text-sm">
                      2
                    </div>
                    <div>
                      <div className="mb-1">Strategy Call</div>
                      <p className="text-sm text-muted-foreground">
                        45-minute video call to discuss your goals and explore fit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 text-sm">
                      3
                    </div>
                    <div>
                      <div className="mb-1">Custom Proposal</div>
                      <p className="text-sm text-muted-foreground">
                        Tailored growth plan with projected outcomes and investment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
