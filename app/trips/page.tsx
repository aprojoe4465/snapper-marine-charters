import type { Metadata } from "next";
import TripCard from "@/components/TripCard";
import { privateCharterNote, weatherPolicy } from "@/lib/policies";
import { site } from "@/lib/site";
import { trips } from "@/lib/trips";

export const metadata: Metadata = {
  title: "Trips",
  description: `Inshore, nearshore, and offshore fishing, sightseeing and sandbar trips, sunset cruises, and snorkel or spearfishing with ${site.name} in ${site.serviceAreaShort}.`,
};

export default function TripsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Charter trips</span>
          <h1>Fishing, sightseeing, and snorkel</h1>
          <p>
            Choose a trip type and send a request. {privateCharterNote}{" "}
            The departure marina is still {site.placeholders.marina}. Trips run
            aboard {site.boatName}, a Contender center console with twin Honda
            250 outboards.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid" id="pricing">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} detailed />
            ))}
          </div>
          <aside className="policy-box" id="weather-policy" style={{ marginTop: "2.5rem" }}>
            <h2>Weather and cancellation</h2>
            <p>{weatherPolicy}</p>
            <p>
              The standard cancellation policy, including any deposit or
              cancellation window, is still {site.placeholders.cancellation}.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
