# Snapper Marine Charters

Public website for **Snapper Marine Charters**, a fictitious name (DBA) of **SNAPPER MARINE, LLC**. Fishing charters and sightseeing / sandbar / sunset trips on the Treasure Coast and South Florida, run by Kenneth "Captain Joe" Barnes from Port St. Lucie, Florida.

This is a sister brand of [Snapper Marine](https://snappermarine.com). The site follows the same Next.js structure, black / chrome / electric-blue styling, and booking spam protection.

## Placeholders to fill in

Do not invent these on the site. Edit `lib/site.ts` (`placeholders`) and `lib/trips.ts`:

- `[Price TBD]`
- `[Duration TBD]`
- `[Marina TBD]`
- Boat is set: Contender center console with twin Honda 250 outboards
- Capacity is set: Up to 6 guests
- `[License TBD]`
- `[USCG credential TBD]`
- `[Included items TBD]`
- `[What to bring TBD]`

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Booking requests email through Resend after they pass the site's spam checks.

- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM` — suggested value: `Snapper Marine Charters <bookings@snappermarinecharters.com>` (the sending domain must be verified in Resend)
- `BOOKING_NOTIFY_TO` — notification inbox; defaults to `jbarnes@snappermarinecharters.com` if unset
- `BOOKING_ALERT_WEBHOOK_URL` — optional URL that receives a JSON POST of each booking (`name`, `email`, `phone`, `trip`, `date`, `partySize`, `message`, `submittedAt`). Skipped when unset. Failures are logged and do not block the booking or the email.
- `BOOKING_ALERT_WEBHOOK_AUTH` — optional full `Authorization` header value sent with the webhook request

## Domain

Intended production domain: `snappermarinecharters.com` (to be purchased by the owner). After purchase, add the domain in the Vercel project and point DNS as Vercel instructs. Then add the domain in Resend if you want a matching From address.
