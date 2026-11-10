import { NextResponse } from "next/server";
import { Resend } from "resend";
import { appendBooking, type BookingRequest } from "@/lib/bookings";
import { site } from "@/lib/site";
import { tripTypeOptions } from "@/lib/trips";
import { clientIp, contentSpamReason, rateLimited, timingProblem } from "@/lib/spam";

export const runtime = "nodejs";

const TRIP_TYPES = new Set(tripTypeOptions.map((opt) => opt.value));

function required(value: unknown, label: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${label} is required`);
  }
  return value.trim();
}

function formValue(form: FormData, key: string): string | undefined {
  const value = form.get(key);
  return typeof value === "string" ? value : undefined;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function describeResendError(error: unknown): string {
  try {
    if (error instanceof Error) {
      const details = error as Error & { statusCode?: unknown; body?: unknown };
      return JSON.stringify({
        name: details.name,
        message: details.message,
        statusCode: details.statusCode,
        body: details.body,
      });
    }
    const serialized = JSON.stringify(error);
    return serialized || String(error);
  } catch {
    return String(error);
  }
}

function tripLabel(id: string): string {
  return tripTypeOptions.find((opt) => opt.value === id)?.label || id;
}

function bookingEmailText(entry: BookingRequest): string {
  return [
    "New Snapper Marine Charters trip request",
    `Booking ID: ${entry.id}`,
    `Received: ${entry.createdAt}`,
    "",
    `Name: ${entry.name}`,
    `Phone: ${entry.phone}`,
    `Email: ${entry.email}`,
    `Trip type: ${tripLabel(entry.tripType)}`,
    `Preferred date: ${entry.preferredDate || "Not specified"}`,
    `Party size: ${entry.partySize}`,
    "",
    "Notes:",
    entry.notes || "(none)",
  ].join("\n");
}

function bookingEmailHtml(entry: BookingRequest): string {
  const row = (label: string, value: string) =>
    `<tr><th align="left" style="padding:6px 12px 6px 0;vertical-align:top">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`;
  return `<!doctype html>
<html><body style="font-family:Arial,sans-serif;color:#1b1b22">
  <h2>New Snapper Marine Charters trip request</h2>
  <p><strong>Booking ID:</strong> ${escapeHtml(entry.id)}</p>
  <table>${row("Name", entry.name)}${row("Phone", entry.phone)}${row("Email", entry.email)}${row("Trip type", tripLabel(entry.tripType))}${row("Preferred date", entry.preferredDate || "Not specified")}${row("Party size", entry.partySize)}</table>
  <h3>Notes</h3>
  <p>${escapeHtml(entry.notes || "(none)").replace(/\n/g, "<br />")}</p>
</body></html>`;
}

async function notifyByEmail(entry: BookingRequest): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(`[booking] RESEND_API_KEY is not set; email skipped for ${entry.id}`);
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM || "Snapper Marine Charters <bookings@snappermarine.com>";
    const result = await resend.emails.send({
      from,
      to: [site.email],
      subject: `New Snapper Marine Charters trip request — ${entry.name}`,
      text: bookingEmailText(entry),
      html: bookingEmailHtml(entry),
    });

    if (result.error) {
      console.error(`[booking] Resend failed for ${entry.id}: ${describeResendError(result.error)}`);
      return;
    }
    console.info(`[booking] Email sent for ${entry.id}: ${result.data?.id || "accepted"}`);
  } catch (error) {
    console.error(`[booking] Email notification failed for ${entry.id}: ${describeResendError(error)}`);
  }
}

function fakeOk() {
  return NextResponse.json({
    ok: true,
    id: `bk_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
  });
}

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    if (rateLimited(ip)) {
      console.warn(`[booking] rate limited ${ip}`);
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes or call us." },
        { status: 429 }
      );
    }

    const form = await req.formData();

    if ((formValue(form, "company_website") || "").trim()) {
      console.warn(`[booking] honeypot tripped (${ip})`);
      return fakeOk();
    }
    const timing = timingProblem(formValue(form, "formStartedAt"));
    if (timing) {
      console.warn(`[booking] spam rejected (${ip}): ${timing}`);
      return fakeOk();
    }

    const name = required(formValue(form, "name"), "Name");
    const phone = required(formValue(form, "phone"), "Phone");
    const email = required(formValue(form, "email"), "Email");
    const tripType = required(formValue(form, "tripType"), "Trip type");
    const preferredDate = required(formValue(form, "preferredDate"), "Preferred date");
    const partySize = required(formValue(form, "partySize"), "Party size");
    const notes = (formValue(form, "notes") || "").trim();

    if (!TRIP_TYPES.has(tripType)) {
      return NextResponse.json({ error: "Invalid trip type" }, { status: 400 });
    }

    const party = Number(partySize);
    if (!Number.isInteger(party) || party < 1 || party > 20) {
      return NextResponse.json({ error: "Party size must be between 1 and 20" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const spamReason = contentSpamReason({
      name,
      phone,
      email,
      notes,
      tripType,
      partySize,
      preferredDate,
    });
    if (spamReason) {
      console.warn(`[booking] spam rejected (${ip}): ${spamReason}`);
      return fakeOk();
    }

    const entry = await appendBooking({
      name,
      phone,
      email,
      tripType,
      preferredDate,
      partySize: String(party),
      notes,
    });

    await notifyByEmail(entry);

    return NextResponse.json({ ok: true, id: entry.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid request";
    const status = message.includes("required") || message.includes("Invalid") ? 400 : 500;
    console.error(`[booking] ${message}`);
    return NextResponse.json({ error: message }, { status });
  }
}
