"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { tripTypeOptions } from "@/lib/trips";

type FormState = {
  name: string;
  phone: string;
  email: string;
  tripType: string;
  preferredDate: string;
  partySize: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  tripType: "",
  preferredDate: "",
  partySize: "",
  notes: "",
};

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const presetTrip = searchParams.get("trip") || "";
  const [form, setForm] = useState<FormState>({
    ...initial,
    tripType: tripTypeOptions.some((opt) => opt.value === presetTrip) ? presetTrip : "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const startedAtRef = useRef<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      payload.append("company_website", honeypotRef.current?.value || "");
      payload.append("formStartedAt", String(startedAtRef.current || ""));

      const res = await fetch("/api/book", {
        method: "POST",
        body: payload,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Could not submit request. Please try again or call us.");
      }
      router.push(`/book/success?id=${encodeURIComponent(data.id || "")}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Company website
          <input ref={honeypotRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div className="form-row two">
        <label>
          Full name *
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
          />
        </label>
        <label>
          Phone *
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(772) 555-1234"
          />
        </label>
      </div>

      <label>
        Email *
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <label>
        Trip type *
        <select
          required
          name="tripType"
          value={form.tripType}
          onChange={(e) => update("tripType", e.target.value)}
        >
          <option value="" disabled>
            Select a trip
          </option>
          {tripTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <div className="form-row two">
        <label>
          Preferred date *
          <input
            required
            type="date"
            name="preferredDate"
            value={form.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
          />
        </label>
        <label>
          Party size *
          <input
            required
            type="number"
            name="partySize"
            min={1}
            max={6}
            inputMode="numeric"
            value={form.partySize}
            onChange={(e) => update("partySize", e.target.value)}
            placeholder="e.g. 4"
          />
        </label>
      </div>

      <label>
        Notes
        <textarea
          name="notes"
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Anything we should know — occasion, experience level, or questions…"
        />
        <span className="form-hint">Optional. This is a request, not a confirmed reservation. We&apos;ll follow up to confirm details, pricing, and availability.</span>
      </label>

      {error && <p className="form-error" role="alert">{error}</p>}

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Sending…" : "Submit trip request"}
      </button>
    </form>
  );
}
