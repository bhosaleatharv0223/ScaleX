import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useBooking } from "../context/BookingContext";

// Replace with your admin WhatsApp number in international format without + or spaces
const ADMIN_WHATSAPP_NUMBER = "919876543210";

export function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectStage, setProjectStage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");
  const [hasNotifiedAdmin, setHasNotifiedAdmin] = useState(false);

  const whatsappMessage = useMemo(() => {
    const lines = [
      "New booking request from ScaleX website:",
      "",
      `Name: ${name || "(not provided)"}`,
      `Email: ${email || "(not provided)"}`,
      `Phone: ${phone || "(not provided)"}`,
      `Project stage: ${projectStage || "(not provided)"}`,
      `Preferred date: ${selectedDate || "(not provided)"}`,
      `Preferred time: ${selectedTime || "(not provided)"}`,
      "",
      `Message: ${message || "(not provided)"}`,
      "",
      "Please follow up and confirm the final date/time with the client.",
    ];

    return encodeURIComponent(lines.join("\n"));
  }, [name, email, phone, projectStage, selectedDate, selectedTime, message]);

  const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const canNotify = name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";

  const notifyAdmin = () => {
    setHasNotifiedAdmin(true);
    window.open(whatsappUrl, "_blank");
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBooking();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay - click outside to close */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-200"
        onClick={closeBooking}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto animate-in fade-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
            <h2 className="text-xl font-semibold text-foreground">Book Your Strategy Call</h2>
            <button
              onClick={closeBooking}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden lg:flex lg:flex-row">
            <div className="lg:w-1/2 overflow-y-auto border-b border-border lg:border-b-0 lg:border-r bg-slate-50">
              <div className="p-6 space-y-6">
                <p className="text-sm text-muted-foreground">
                  Enter your details, pick a date/time in the Calendly panel, then notify the admin on WhatsApp.
                </p>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium">Name *</span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">Email *</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">Phone *</span>
                    <input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">Project Stage</span>
                    <select
                      value={projectStage}
                      onChange={(event) => setProjectStage(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select stage</option>
                      <option value="Pre-launch">Pre-launch Planning</option>
                      <option value="Launch">Launch Phase</option>
                      <option value="Ongoing">Ongoing Sales</option>
                      <option value="Slow-moving inventory">Slow-moving inventory</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium">Preferred Date *</span>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(event) => setSelectedDate(event.target.value)}
                        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium">Preferred Time *</span>
                      <input
                        type="time"
                        value={selectedTime}
                        onChange={(event) => setSelectedTime(event.target.value)}
                        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        required
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-medium">Message</span>
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Any specific goals or notes for the admin"
                    />
                  </label>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={notifyAdmin}
                    disabled={!canNotify}
                    className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      canNotify
                        ? "bg-accent text-slate-950 hover:bg-accent/90"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    Notify Admin on WhatsApp
                  </button>
                  <p className="text-xs text-muted-foreground">
                    After choosing a date and time, tap the button to send the booking details to admin WhatsApp.
                  </p>
                  {hasNotifiedAdmin ? (
                    <p className="text-sm text-accent">
                      WhatsApp notification launched. Admin can now follow up with the client.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 overflow-y-auto">
              <div className="p-6">
                <div className="mb-4 text-sm font-medium">Selected slot</div>
                <div className="rounded-3xl border border-border bg-slate-50 p-5 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Date</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">{selectedDate || "No date selected"}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Time</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">{selectedTime || "No time selected"}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-border">
                    <p className="text-sm font-medium">Important</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Select a preferred date and time, then notify the admin on WhatsApp so they can confirm the call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
