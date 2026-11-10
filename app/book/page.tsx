import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
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
            Tell us the trip type, date, and party size. This is a request, not
            a confirmed reservation — we&apos;ll follow up to confirm
            availability, price, and the meeting place. Prefer to talk? Call{" "}
            <a href={site.phoneHref}>{site.phoneDisplay}</a>.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Suspense fallback={<p className="form-hint">Loading form…</p>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
