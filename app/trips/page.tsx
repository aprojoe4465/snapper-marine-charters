import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { trips } from "@/lib/trips";

export const metadata: Metadata = {
  title: "Trips",
  description: `Inshore and nearshore fishing, sightseeing and sandbar trips, and sunset cruises with ${site.name} in ${site.serviceAreaShort}.`,
};

export default function TripsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Charter trips</span>
          <h1>Fishing and sightseeing</h1>
          <p>
            Choose a trip type and send a request. Durations, prices, the
            departure marina, and the boat are listed as placeholders until we
            confirm them with you.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {trips.map((trip) => (
              <article className="card trip-card" key={trip.id} id={trip.id}>
                <div className="icon">{trip.category === "fishing" ? "🎣" : "🌅"}</div>
                <h3>{trip.name}</h3>
                <p>{trip.summary}</p>
                <p>{trip.details}</p>
                <div className="trip-meta">
                  <span>Duration: {trip.duration}</span>
                  <span>Price: {trip.price}</span>
                  <span>Capacity: {trip.capacity}</span>
                </div>
                <p>
                  Meeting place: {trip.marina}
                  <br />
                  Boat: {trip.boat}
                  <br />
                  Included: {trip.included}
                </p>
                <Link href={`/book?trip=${trip.id}`} className="btn btn-primary">
                  Request this trip
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
