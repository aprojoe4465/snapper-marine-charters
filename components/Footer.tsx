import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{site.name}</h4>
            <p>{site.tagline}</p>
            <p style={{ marginTop: "0.75rem" }}>
              Based in {site.city}. Serving {site.serviceAreaSummary}.
            </p>
            <p className="legal-line" style={{ marginTop: "0.75rem" }}>
              {site.name} is a fictitious name (DBA) of {site.legalName}.
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <div className="footer-links">
              <Link href="/trips">Trips</Link>
              <Link href="/about">About Captain Joe</Link>
              <Link href="/book">Book a trip</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <a href={site.sisterBrand.url} rel="noopener noreferrer">
                {site.sisterBrand.name}
              </a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <Link href="/book" className="btn btn-primary" style={{ marginTop: "0.75rem", width: "fit-content" }}>
                Request a trip
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {year} {site.legalName}. All rights reserved.
          </span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
