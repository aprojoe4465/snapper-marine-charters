import type { Metadata } from "next";
import TripCard from "@/components/TripCard";
import { site } from "@/lib/site";
import { trips } from "@/lib/trips";

export const metadata: Metadata = {
  title: "Trips",
  description: `Inshore and nearshore fishing, sightseeing and sandbar trips, sunset cruises, and snorkel or spearfishing with ${site.name} in ${site.serviceAreaShort}.`,
};

export default function TripsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Charter trips</span>
          <h1>Fishing, sightseeing, and snorkel</h1>
          <p>
            Choose a trip type and send a request. Durations, prices, and the
            departure marina are listed as placeholders until we confirm them
            with you. Trips run on a {site.placeholders.boat}.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} detailed />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
