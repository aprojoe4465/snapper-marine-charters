import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in ${site.city} — call, email, or request a fishing or sightseeing charter online.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact</h1>
          <p>Call, email, or send a trip request — we&apos;ll follow up to confirm details.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            <article className="card">
              <div className="icon">📞</div>
              <h3>Phone</h3>
              <p>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </p>
              <p style={{ marginTop: "0.5rem" }}>Best for same-day questions or a quick check on a date.</p>
            </article>
            <article className="card">
              <div className="icon">✉</div>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Email us anytime and we&apos;ll get back to you promptly.
              </p>
            </article>
            <article className="card">
              <div className="icon">📋</div>
              <h3>Book online</h3>
              <p>Tell us the trip type, date, and party size. We&apos;ll confirm the rest.</p>
              <Link href="/book" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Trip request form
              </Link>
            </article>
          </div>

          <p style={{ marginTop: "2rem", color: "var(--text-muted)" }}>
            Based in {site.city}. Serving {site.serviceAreaSummary}.
            <br />
            Meeting place: {site.placeholders.marina}.
          </p>
          <p className="legal-line" style={{ marginTop: "1rem" }}>
            {site.name} is a fictitious name (DBA) of {site.legalName}.
          </p>
        </div>
      </section>
    </>
  );
}
