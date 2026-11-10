import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { trips } from "@/lib/trips";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-with-photo">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Treasure Coast charters</span>
            <h1>
              Fishing and sightseeing trips with <span>Captain Joe</span>
            </h1>
            <p className="lead">
              {site.name} offers inshore and nearshore fishing, plus sightseeing,
              sandbar, and sunset cruises in {site.serviceAreaShort}. A sister
              brand of{" "}
              <a href={site.sisterBrand.url} rel="noopener noreferrer">
                {site.sisterBrand.name}
              </a>
              , run by {site.captain}.
            </p>
            <div className="cta-row">
              <Link href="/book" className="btn btn-primary">
                Book a trip
              </Link>
              <a href={site.phoneHref} className="btn btn-chrome">
                Call {site.phoneDisplay}
              </a>
              <Link href="/trips" className="btn btn-ghost">
                View trips
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <figure className="captain-badge">
              <Image
                src="/captain-joe.png"
                alt='Captain Joe Snapper Marine badge'
                width={1280}
                height={720}
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="trips">
        <div className="container">
          <div className="section-head">
            <h2>Choose your trip</h2>
            <p>
              Fishing or a relaxed day on the water — request a date and we&apos;ll
              follow up with availability, meeting details, and pricing.
            </p>
          </div>
          <div className="card-grid">
            {trips.map((trip) => (
              <article className="card trip-card" key={trip.id} id={trip.id}>
                <div className="icon">{trip.category === "fishing" ? "🎣" : "🌅"}</div>
                <h3>{trip.name}</h3>
                <p>{trip.summary}</p>
                <div className="trip-meta">
                  <span>Duration: {trip.duration}</span>
                  <span>From: {trip.price}</span>
                  <span>Capacity: {trip.capacity}</span>
                </div>
                <p>
                  Departs: {trip.marina}. Boat: {trip.boat}.
                </p>
                <Link href={`/book?trip=${trip.id}`} className="btn btn-primary">
                  Request this trip
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="what-to-bring">
        <div className="container">
          <div className="section-head">
            <h2>What to bring</h2>
            <p>
              We&apos;ll confirm the full packing list when we book your trip. In
              the meantime, plan on personal items for a day on the Florida water.
            </p>
          </div>
          <div className="bring-list">
            <article className="card">
              <h3>Good to have</h3>
              <p>
                Sunscreen, a hat, polarized sunglasses, non-marking shoes, a
                refillable water bottle, and a camera or phone. Dress for sun and
                spray.
              </p>
            </article>
            <article className="card">
              <h3>We&apos;ll confirm</h3>
              <p>
                What the boat provides — including gear, bait, ice, food, or
                drinks — is still {site.placeholders.included}. Florida fishing
                license rules can depend on the trip; we&apos;ll tell you what you
                need, if anything, before you go.
              </p>
            </article>
            <article className="card">
              <h3>Owner notes</h3>
              <p>
                Additional packing notes: <span className="placeholder-key">{site.placeholders.whatToBring}</span>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
            <p>Straightforward answers — placeholders stay visible until details are confirmed.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Where do we meet?</summary>
              <p>
                The departure marina is {site.placeholders.marina}. We&apos;ll send
                the exact meeting point and timing when we confirm your trip.
                Service is based around {site.serviceAreaShort}.
              </p>
            </details>
            <details>
              <summary>How many people can come?</summary>
              <p>
                Party capacity is {site.placeholders.capacity}. Tell us your group
                size on the request form and we&apos;ll confirm whether the date works.
              </p>
            </details>
            <details>
              <summary>What does a trip cost?</summary>
              <p>
                Rates are {site.placeholders.price}. This site takes requests only —
                we&apos;ll follow up with a firm price, duration ({site.placeholders.duration}),
                and what&apos;s included before anything is booked.
              </p>
            </details>
            <details>
              <summary>What boat will we be on?</summary>
              <p>
                The charter boat is {site.placeholders.boat}. We&apos;ll share the
                specifics when we confirm your reservation.
              </p>
            </details>
            <details>
              <summary>Is Captain Joe licensed?</summary>
              <p>
                License: {site.placeholders.license}. USCG credential:{" "}
                {site.placeholders.uscg}. We&apos;ll post the official credentials
                here once they&apos;re confirmed — we are not listing any until then.
              </p>
            </details>
            <details>
              <summary>What if the weather is bad?</summary>
              <p>
                Safety comes first. If conditions aren&apos;t right, we&apos;ll contact
                you to reschedule. There is no cancellation-fee policy posted yet;
                we&apos;ll go over it when we confirm your trip.
              </p>
            </details>
            <details>
              <summary>Are you related to Snapper Marine?</summary>
              <p>
                Yes. {site.name} is a fictitious name (DBA) of {site.legalName}.
                Our sister brand,{" "}
                <a href={site.sisterBrand.url} rel="noopener noreferrer">
                  {site.sisterBrand.name}
                </a>
                , provides {site.sisterBrand.note} across the same Florida counties.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="sister-banner">
            <span>
              Need work on a boat or trailer? Visit our sister brand{" "}
              <a href={site.sisterBrand.url} rel="noopener noreferrer">
                {site.sisterBrand.name}
              </a>{" "}
              for mobile marine service.
            </span>
            <a href={site.sisterBrand.url} className="btn btn-ghost" rel="noopener noreferrer">
              snappermarine.com
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Ready to get on the water?</h2>
            <p>
              Send a trip request or call {site.captainShort}. We&apos;ll confirm
              the date, price, and meeting details before you go.
            </p>
          </div>
          <div className="cta-row">
            <Link href="/book" className="btn btn-primary">
              Request a trip
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
