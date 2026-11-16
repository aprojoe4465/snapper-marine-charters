import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import TripCard from "@/components/TripCard";
import { captainPhoto, galleryPhotos, heroPhoto } from "@/lib/photos";
import { fishingIncluded, gratuityNote, privateCharterNote, weatherPolicy } from "@/lib/policies";
import { site } from "@/lib/site";
import { trips } from "@/lib/trips";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-photo">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          width={heroPhoto.width}
          height={heroPhoto.height}
          priority
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-overlay" aria-hidden />
        <div className="container hero-content">
          <span className="eyebrow">Treasure Coast charters</span>
          <h1>
            Fishing, sightseeing, and snorkel trips with <span>Captain Joe</span>
          </h1>
          <p className="lead">
            {site.name} offers inshore and nearshore fishing, sightseeing,
            sandbar, and sunset cruises, plus snorkel and spearfishing trips in{" "}
            {site.serviceAreaShort}. A sister brand of{" "}
            <a href={site.sisterBrand.url} rel="noopener noreferrer">
              {site.sisterBrand.name}
            </a>
            , run by {site.captain} aboard {site.boatName}.
          </p>
          <div className="cta-row">
            <Link href="/book" className="btn btn-primary">
              Book a trip
            </Link>
            <Link href="/book" className="btn btn-chrome">
              Contact us and we&apos;ll get right back with you.
            </Link>
            <Link href="/trips" className="btn btn-ghost">
              View trips
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="trips">
        <div className="container">
          <div className="section-head">
            <h2>Choose your trip</h2>
            <p>
              Fishing, a relaxed day on the water, or time in the water —
              request a date and we&apos;ll follow up with availability, meeting
              details, and pricing.
            </p>
          </div>
          <div className="card-grid">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="captain-boat">
        <div className="container about-grid">
          <figure className="captain-photo">
            <Image
              src={captainPhoto.src}
              alt={captainPhoto.alt}
              width={captainPhoto.width}
              height={captainPhoto.height}
              sizes="(max-width: 860px) 100vw, 40vw"
            />
          </figure>
          <div className="prose">
            <span className="eyebrow">The captain and the boat</span>
            <h2>Meet {site.captainShort} and {site.boatName}</h2>
            <p>
              {site.captain} runs {site.name} from {site.city}. Whether you want
              an inshore or nearshore fishing day, a sandbar outing, a sunset
              cruise, or time in the water, you&apos;ll work directly with{" "}
              {site.captainShort} on the plan for your group.
            </p>
            <p>
              Meet {site.boatName}, our Contender center console with twin Honda
              250 outboards.
            </p>
            <div className="cta-row" style={{ marginTop: "1.25rem" }}>
              <Link href="/about" className="btn btn-ghost">
                About Captain Joe
              </Link>
              <Link href="/book" className="btn btn-primary">
                Book a Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <div className="section-head">
            <h2>On the water</h2>
            <p>
              Photos from trips aboard {site.boatName} — fishing, snorkeling,
              spearfishing, and time on the Treasure Coast.
            </p>
          </div>
          <PhotoGallery photos={galleryPhotos} />
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
              <h3>Fishing trips include</h3>
              <p>
                {fishingIncluded} {gratuityNote} Other inclusions, such as food
                or drinks, are still {site.placeholders.included}.
              </p>
            </article>
            <article className="card">
              <h3>Snorkel &amp; spearfishing</h3>
              <p>
                Guests bring or rent their own snorkel or spearfishing gear and
                must follow FWC rules.
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
                {privateCharterNote} Tell us your group size on the
                request form and we&apos;ll confirm whether the date works.
              </p>
            </details>
            <details>
              <summary>What does a trip cost?</summary>
              <p>
                {privateCharterNote} Offshore fishing is $900 for a half day
                (4 hours), $1,200 for a 3/4 day (6 hours), and $1,450 for a full
                day (8 hours). Inshore and nearshore fishing are $750 for 4
                hours, $950 for 6 hours, and $1,150 for 8 hours. A sunset cruise
                is $450 for 2 hours. Sandbar or sightseeing trips are $600 for 3
                hours or $700 for a 4-hour cruise. Fishing trips include{" "}
                {fishingIncluded.toLowerCase()} {gratuityNote} Snorkel and
                spearfishing rates are still {site.placeholders.price} /{" "}
                {site.placeholders.duration}.
              </p>
            </details>
            <details>
              <summary>What boat will we be on?</summary>
              <p>
                You&apos;ll be on {site.boatName}, our Contender center console
                with twin Honda 250 outboards. We&apos;ll share the specifics
                when we confirm your reservation.
              </p>
            </details>
            <details>
              <summary>Do you provide snorkel or spearfishing gear?</summary>
              <p>
                Guests bring or rent their own snorkel or spearfishing gear and
                must follow Florida Fish and Wildlife Conservation Commission
                (FWC) rules.
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
                {weatherPolicy} The standard cancellation policy, including any
                deposit or cancellation window, is still {site.placeholders.cancellation}.
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

      <section className="section">
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Ready to get on the water?</h2>
            <p>
              Send a trip request and we&apos;ll confirm the date, price, and
              meeting details before you go. Contact us and we&apos;ll get right
              back with you.
            </p>
          </div>
          <div className="cta-row">
            <Link href="/book" className="btn btn-primary">
              Request a trip
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
