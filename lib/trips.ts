import { fishingIncluded, gratuityNote } from "@/lib/policies";
import { site } from "@/lib/site";

export type TripRate = {
  id: string;
  label: string;
  price: string;
};

export type Trip = {
  id: string;
  name: string;
  category: "fishing" | "sightseeing" | "snorkel";
  summary: string;
  details: string;
  duration: string;
  price: string;
  capacity: string;
  marina: string;
  boat: string;
  included: string;
  rates?: TripRate[];
};

export const inshoreNearshoreRates: TripRate[] = [
  { id: "4hr", label: "4 hours", price: "$750" },
  { id: "6hr", label: "6 hours", price: "$950" },
  { id: "8hr", label: "8 hours", price: "$1,150" },
];

export const offshoreRates: TripRate[] = [
  { id: "half-day", label: "Half day (4 hours)", price: "$900" },
  { id: "three-quarter", label: "3/4 day (6 hours)", price: "$1,200" },
  { id: "full-day", label: "Full day (8 hours)", price: "$1,450" },
];

export const sightseeingRates: TripRate[] = [
  { id: "sandbar-3hr", label: "Sandbar / sightseeing (3 hours)", price: "$600" },
  { id: "cruise-4hr", label: "4-hour cruise", price: "$700" },
];

export const sunsetRates: TripRate[] = [
  { id: "sunset-2hr", label: "Sunset cruise (2 hours)", price: "$450" },
];

const fishingPackage = `${fishingIncluded} ${gratuityNote}`;

/**
 * Trip catalog. Marina, captain credentials, and the standard
 * cancellation/deposit window stay as clearly marked placeholders.
 * Boat, capacity, and the listed fishing and sightseeing rates are confirmed.
 */
export const trips: Trip[] = [
  {
    id: "inshore-fishing",
    name: "Inshore Fishing",
    category: "fishing",
    summary:
      "Fish the backwaters, flats, and inshore waters around the Port St. Lucie, Stuart, and Fort Pierce area with Captain Joe.",
    details:
      "Inshore trips are a good fit if you want a guided fishing day close to shore. Target species and the day's plan depend on conditions. We'll confirm meeting details when we book.",
    duration: "4, 6, or 8 hours",
    price: "From $750",
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: fishingPackage,
    rates: inshoreNearshoreRates,
  },
  {
    id: "nearshore-fishing",
    name: "Nearshore Fishing",
    category: "fishing",
    summary:
      "Head a little farther out for a nearshore fishing trip on the Treasure Coast, planned around the day's weather and bite.",
    details:
      "Nearshore trips are requested by anglers who want to fish outside the inlet when conditions allow. We'll confirm the plan and meeting place before you go.",
    duration: "4, 6, or 8 hours",
    price: "From $750",
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: fishingPackage,
    rates: inshoreNearshoreRates,
  },
  {
    id: "offshore-fishing",
    name: "Offshore Fishing",
    category: "fishing",
    summary:
      "Head offshore with Captain Joe for a half day, 3/4 day, or full day fishing trip, planned around the day's weather and bite.",
    details:
      "Offshore trips are for anglers who want more time and range when conditions allow. We'll confirm the plan and meeting place before you go.",
    duration: "Half day (4 hours), 3/4 day (6 hours), or full day (8 hours)",
    price: "From $900",
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: fishingPackage,
    rates: offshoreRates,
  },
  {
    id: "sightseeing-sandbar",
    name: "Sightseeing & Sandbar",
    category: "sightseeing",
    summary:
      "A relaxed cruise for sightseeing and sandbar time along the Treasure Coast — no fishing required.",
    details:
      "Sightseeing and sandbar trips are for families, couples, and groups who want time on the water. The route depends on tide, weather, and what you want to see. Meeting place and boat details will be confirmed when you book.",
    duration: "3 or 4 hours",
    price: "From $600",
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: `${site.placeholders.included} ${gratuityNote}`,
    rates: sightseeingRates,
  },
  {
    id: "sunset-cruise",
    name: "Sunset Cruise",
    category: "sightseeing",
    summary:
      "An evening cruise to watch the sunset over the water in the Port St. Lucie, Stuart, and Fort Pierce area.",
    details:
      "Sunset cruises are scheduled around the evening light. Timing shifts with the season. We'll confirm the departure window, meeting place, and boat when we follow up on your request.",
    duration: "2 hours",
    price: "$450",
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: `${site.placeholders.included} ${gratuityNote}`,
    rates: sunsetRates,
  },
  {
    id: "snorkel-spearfishing",
    name: "Snorkel & Spearfishing",
    category: "snorkel",
    summary:
      "Get in the water for snorkeling or spearfishing with Captain Joe — a good fit if you want more than a ride on the boat.",
    details:
      "Guests bring or rent their own snorkel or spearfishing gear and must follow Florida Fish and Wildlife Conservation Commission (FWC) rules. We'll confirm the plan, meeting place, and other details when we book.",
    duration: site.placeholders.duration,
    price: site.placeholders.price,
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: `${site.placeholders.included} ${gratuityNote}`,
  },
];

export const tripTypeOptions = [
  ...trips.map((trip) => ({ value: trip.id, label: trip.name })),
  { value: "unsure", label: "Not sure — help me choose" },
] as const;

export function tripById(id: string): Trip | undefined {
  return trips.find((trip) => trip.id === id);
}

export function ratesForTrip(tripType: string): TripRate[] {
  return tripById(tripType)?.rates ?? [];
}

export function rateById(tripType: string, rateId: string): TripRate | undefined {
  return ratesForTrip(tripType).find((rate) => rate.id === rateId);
}

export function formatRate(rate: TripRate): string {
  return `${rate.label} — ${rate.price}`;
}

export function tripIcon(category: Trip["category"]): string {
  if (category === "fishing") return "🎣";
  if (category === "snorkel") return "🤿";
  return "🌅";
}
