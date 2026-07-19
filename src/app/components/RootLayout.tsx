import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { BookingProvider } from "../context/BookingContext";
import { BookingModal } from "./BookingModal";

export function RootLayout() {
  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}