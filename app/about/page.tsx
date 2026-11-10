import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Captain Joe",
  description: `Meet ${site.captain}, captain of ${site.name} in ${site.city}. Fishing and sightseeing charters on the Treasure Coast.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">The captain</span>
          <h1>About {site.captainShort}</h1>
          <p>
            {site.captain} runs {site.name} from {site.city}.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <figure className="captain-badge">
            <Image
              src="/captain-joe.png"
              alt="Captain Joe Snapper Marine badge"
              width={1280}
              height={720}
            />
          </figure>
          <div className="prose">
            <h2>{site.captain}</h2>
            <p>
              {site.captainShort} is the owner of {site.legalName}, based in{" "}
              {site.city}. Through the {site.name} fictitious name, he offers
              fishing charters and sightseeing or sandbar trips in{" "}
              {site.serviceAreaSummary}.
            </p>
            <p>
              Whether you want an inshore or nearshore fishing day, a sandbar
              outing, or a sunset cruise, you&apos;ll work directly with{" "}
              {site.captainShort} on the plan for your group.
            </p>
            <h3>Credentials</h3>
            <p>
              Official credentials will be posted here once they are confirmed.
              We are not listing a license or Coast Guard rating until then.
            </p>
            <ul>
              <li>License: {site.placeholders.license}</li>
              <li>USCG credential: {site.placeholders.uscg}</li>
            </ul>
            <h3>Sister brand</h3>
            <p>
              {site.name} is a DBA of {site.legalName}. The same company also
              operates{" "}
              <a href={site.sisterBrand.url} rel="noopener noreferrer">
                {site.sisterBrand.name}
              </a>
              , a {site.sisterBrand.note} business at snappermarine.com.
            </p>
            <div className="cta-row" style={{ marginTop: "1.5rem" }}>
              <Link href="/book" className="btn btn-primary">
                Book a trip
              </Link>
              <a href={site.phoneHref} className="btn btn-chrome">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
