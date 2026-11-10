export const site = {
  name: "Snapper Marine Charters",
  legalName: "SNAPPER MARINE, LLC",
  shortName: "Snapper Marine Charters",
  tagline: "Fishing and sightseeing charters on the Treasure Coast",
  domain: "snappermarinecharters.com",
  phone: "7726268149",
  phoneDisplay: "(772) 626-8149",
  phoneHref: "tel:+17726268149",
  email: "mbarnes@snappermarine.com",
  captain: 'Kenneth "Captain Joe" Barnes',
  captainShort: "Captain Joe",
  city: "Port St. Lucie, Florida",
  serviceAreaShort: "the Port St. Lucie, Stuart, and Fort Pierce area",
  serviceAreaSummary:
    "the Treasure Coast and South Florida — Port St. Lucie, Stuart, and Fort Pierce, including St. Lucie, Martin, Palm Beach, and Broward counties",
  sisterBrand: {
    name: "Snapper Marine",
    url: "https://snappermarine.com",
    note: "mobile marine service",
  },
  // Easy-to-edit values. Replace the bracketed placeholders once details are confirmed.
  placeholders: {
    price: "[Price TBD]",
    duration: "[Duration TBD]",
    marina: "[Marina TBD]",
    boat: "[Boat TBD]",
    capacity: "[Capacity TBD]",
    license: "[License TBD]",
    uscg: "[USCG credential TBD]",
    included: "[Included items TBD]",
    whatToBring: "[What to bring TBD]",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book a Trip" },
] as const;
