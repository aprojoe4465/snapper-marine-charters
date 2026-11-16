import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import { privateCharterNote, weatherPolicy } from "@/lib/policies";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Trip",
  description:
    `Request a fishing or sightseeing charter with ${site.name} in ${site.serviceAreaShort}.`,
};

export default function BookPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Schedule</span>
          <h1>Request a trip</h1>
          <p>
            Tell us the trip type, duration, date, and party size. This is a
            request, not a confirmed reservation — contact us and we&apos;ll get
            right back with you to confirm availability and the meeting place.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <aside className="policy-box" id="weather-policy">
            <h2>Weather and cancellation</h2>
            <p>{weatherPolicy}</p>
            <p>
              The standard cancellation policy, including any deposit or
              cancellation window, is still {site.placeholders.cancellation}.
            </p>
            <p>{privateCharterNote}</p>
          </aside>
          <Suspense fallback={<p className="form-hint">Loading form…</p>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
