import { site } from "@/lib/site";

export type Trip = {
  id: string;
  name: string;
  category: "fishing" | "sightseeing";
  summary: string;
  details: string;
  duration: string;
  price: string;
  capacity: string;
  marina: string;
  boat: string;
  included: string;
};

/**
 * Trip catalog. Every duration, price, marina, boat, capacity, and inclusions
 * value is a clearly marked placeholder until the owner fills it in.
 * Edit this file (and lib/site.ts) — no other files need changing for those facts.
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
    duration: site.placeholders.duration,
    price: site.placeholders.price,
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: site.placeholders.included,
  },
  {
    id: "nearshore-fishing",
    name: "Nearshore Fishing",
    category: "fishing",
    summary:
      "Head a little farther out for a nearshore fishing trip on the Treasure Coast, planned around the day's weather and bite.",
    details:
      "Nearshore trips are requested by anglers who want to fish outside the inlet when conditions allow. Exact run, duration, and what is provided will be confirmed before you go.",
    duration: site.placeholders.duration,
    price: site.placeholders.price,
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: site.placeholders.included,
  },
  {
    id: "sightseeing-sandbar",
    name: "Sightseeing & Sandbar",
    category: "sightseeing",
    summary:
      "A relaxed cruise for sightseeing and sandbar time along the Treasure Coast — no fishing required.",
    details:
      "Sightseeing and sandbar trips are for families, couples, and groups who want time on the water. The route depends on tide, weather, and what you want to see. Meeting place and boat details will be confirmed when you book.",
    duration: site.placeholders.duration,
    price: site.placeholders.price,
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: site.placeholders.included,
  },
  {
    id: "sunset-cruise",
    name: "Sunset Cruise",
    category: "sightseeing",
    summary:
      "An evening cruise to watch the sunset over the water in the Port St. Lucie, Stuart, and Fort Pierce area.",
    details:
      "Sunset cruises are scheduled around the evening light. Timing shifts with the season. We'll confirm the departure window, meeting place, and boat when we follow up on your request.",
    duration: site.placeholders.duration,
    price: site.placeholders.price,
    capacity: site.placeholders.capacity,
    marina: site.placeholders.marina,
    boat: site.placeholders.boat,
    included: site.placeholders.included,
  },
];

export const tripTypeOptions = [
  ...trips.map((trip) => ({ value: trip.id, label: trip.name })),
  { value: "unsure", label: "Not sure — help me choose" },
] as const;

export function tripById(id: string): Trip | undefined {
  return trips.find((trip) => trip.id === id);
}
