export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const heroPhoto: Photo = {
  id: "hero",
  src: "/photos/sunrise-from-the-bow.webp",
  width: 1600,
  height: 1200,
  alt: "Sunrise over the ocean from the bow of Deep Blue Hunter",
};

export const captainPhoto: Photo = {
  id: "captain-joe",
  src: "/photos/captain-joe-selfie.webp",
  width: 1600,
  height: 1200,
  alt: "Captain Joe taking a selfie under the T-top while running the boat on the river",
};

export const tripPhotos: Record<string, Photo> = {
  "inshore-fishing": {
    id: "inshore",
    src: "/photos/inshore-contender-honda-wake.webp",
    width: 1600,
    height: 1200,
    alt: "Wake behind Deep Blue Hunter, a Contender center console with twin Honda 250 outboards, on the river",
  },
  "nearshore-fishing": {
    id: "nearshore",
    src: "/photos/nearshore-rainbow-honda-wake.webp",
    width: 1600,
    height: 1200,
    alt: "A rainbow over the wake behind twin Honda 250 outboards offshore",
  },
  "sightseeing-sandbar": {
    id: "sightseeing",
    src: "/photos/sightseeing-snorkeler-lighthouse.webp",
    width: 1600,
    height: 1200,
    alt: "A snorkeler waving in turquoise water beside a reef lighthouse",
  },
  "sunset-cruise": {
    id: "sunset",
    src: "/photos/sunrise-from-the-bow-2.webp",
    width: 1600,
    height: 1200,
    alt: "Sunrise over open water from the bow of Deep Blue Hunter",
  },
  "snorkel-spearfishing": {
    id: "spearfishing",
    src: "/photos/spearfisher-camo-wetsuit-bow.webp",
    width: 1200,
    height: 1600,
    alt: "A spearfisher in a camouflage wetsuit holding a speargun on the bow",
  },
};

export const galleryPhotos: Photo[] = [
  {
    id: "bow-blue-lights",
    src: "/photos/hero-bow-blue-lights-dusk.webp",
    width: 1600,
    height: 1200,
    alt: "Blue LED lights in the bow of Deep Blue Hunter, a Contender center console, at dusk on the Intracoastal Waterway",
  },
  {
    id: "spearfisher-stern",
    src: "/photos/gallery-spearfisher-stern.webp",
    width: 1600,
    height: 1200,
    alt: "A spearfisher at the stern with a speargun, beachfront condos in the background",
  },
  {
    id: "snorkeler-gunwale",
    src: "/photos/gallery-snorkeler-gunwale.webp",
    width: 1200,
    height: 1600,
    alt: "A snorkeler in a wetsuit leaning over the gunwale",
  },
  {
    id: "snorkeler-green-water",
    src: "/photos/gallery-snorkeler-green-water.webp",
    width: 1600,
    height: 1200,
    alt: "A snorkeler swimming in green water beside the boat",
  },
  {
    id: "rainbow-wake",
    src: "/photos/gallery-rainbow-over-wake.webp",
    width: 1600,
    height: 1200,
    alt: "A rainbow over the boat's wake",
  },
  {
    id: "hogfish",
    src: "/photos/gallery-hogfish-on-deck.webp",
    width: 1200,
    height: 1600,
    alt: "A hogfish on the deck of the boat",
  },
  {
    id: "fish-school-turquoise",
    src: "/photos/gallery-fish-school-turquoise.webp",
    width: 1600,
    height: 1200,
    alt: "A school of fish in clear turquoise water",
  },
  {
    id: "fish-school-clear",
    src: "/photos/gallery-fish-school-clear-water.webp",
    width: 1600,
    height: 1200,
    alt: "Fish swimming in clear blue water",
  },
  {
    id: "mahi-haul-1",
    src: "/photos/gallery-mahi-haul-1.webp",
    width: 604,
    height: 453,
    alt: "Mahi catch laid out after a trip",
  },
  {
    id: "mahi-haul-2",
    src: "/photos/gallery-mahi-haul-2.webp",
    width: 604,
    height: 453,
    alt: "A lineup of mahi from a fishing trip",
  },
];
