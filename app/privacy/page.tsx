import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}, a fictitious name of ${site.legalName}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Your privacy</span>
          <h1>Privacy Policy</h1>
          <p>How {site.name} handles information submitted through this website.</p>
        </div>
      </div>

      <section className="section">
        <div className="container prose" style={{ maxWidth: 720 }}>
          <p className="legal-line">
            {site.name} is a fictitious name (DBA) of {site.legalName}. This
            policy applies to this website and to trip requests you send us.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you contact us or submit a booking request, we may collect your
            name, phone number, email address, preferred trip date, party size,
            trip type, and any notes you include.
          </p>

          <h2>How we use it</h2>
          <p>
            We use this information to respond to trip requests, communicate
            with you, and schedule charters. We do not sell your personal
            information.
          </p>

          <h2>Email delivery</h2>
          <p>
            Trip requests may be delivered to us by an email provider so we can
            follow up. We keep that information only as long as we need it to
            handle your request and run the business.
          </p>

          <h2>Payments</h2>
          <p>
            This site does not collect payment card details. If payment is
            arranged later, a payment processor&apos;s own privacy policy will
            apply to that transaction.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Contact {site.name} at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
