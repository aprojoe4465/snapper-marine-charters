# Snapper Marine Charters

Public website for **Snapper Marine Charters**, a fictitious name (DBA) of **SNAPPER MARINE, LLC**. Fishing charters and sightseeing / sandbar / sunset trips on the Treasure Coast and South Florida, run by Kenneth "Captain Joe" Barnes from Port St. Lucie, Florida.

This is a sister brand of [Snapper Marine](https://snappermarine.com). The site follows the same Next.js structure, black / chrome / electric-blue styling, and booking spam protection.

## Placeholders to fill in

Do not invent these on the site. Edit `lib/site.ts` (`placeholders`) and `lib/trips.ts`:

- `[Price TBD]`
- `[Duration TBD]`
- `[Marina TBD]`
- `[Boat TBD]`
- `[Capacity TBD]`
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

Booking requests email through Resend, the same path as snappermarine.com (notifications go to `mbarnes@snappermarine.com`).

- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM` — suggested value: `Snapper Marine Charters <bookings@snappermarine.com>` (use a verified Resend sender; the charters domain can be added later)

Until the new domain is purchased and verified in Resend, keep sending from the existing `bookings@snappermarine.com` address.

## Domain

Intended production domain: `snappermarinecharters.com` (to be purchased by the owner). After purchase, add the domain in the Vercel project and point DNS as Vercel instructs. Then add the domain in Resend if you want a matching From address.
