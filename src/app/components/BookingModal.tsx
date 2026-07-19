import { useEffect } from "react";
import { X } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { useBooking } from "../context/BookingContext";

// Placeholder Calendly URL - replace with your actual link
const BOOKING_URL = "https://calendly.com/scalex/strategy-call";

export function BookingModal() {
  const { isOpen, closeBooking } = useBooking();

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
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto animate-in fade-in duration-200"
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

          {/* Calendly Widget */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <InlineWidget
                url={BOOKING_URL}
                styles={{
                  height: "600px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
