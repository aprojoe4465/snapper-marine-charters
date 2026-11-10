import { promises as fs } from "fs";
import path from "path";

export type BookingRequest = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  tripType: string;
  preferredDate: string;
  partySize: string;
  notes: string;
};

const dataPath = path.join(process.cwd(), "data", "bookings.json");

export async function readBookings(): Promise<BookingRequest[]> {
  try {
    const raw = await fs.readFile(dataPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function appendBooking(
  booking: Omit<BookingRequest, "id" | "createdAt">
): Promise<BookingRequest> {
  const entry: BookingRequest = {
    ...booking,
    id: `bk_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };

  // Vercel's deployed filesystem is read-only and ephemeral; Resend is the
  // production persistence path. Keep the JSON write for local development only.
  if (process.env.VERCEL) {
    console.info(`[booking] Skipping local file write on Vercel for ${entry.id}`);
    return entry;
  }

  try {
    const list = await readBookings();
    list.push(entry);
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(list, null, 2), "utf8");
  } catch (error) {
    console.warn(`[booking] Could not write ${dataPath}; continuing with email`, error);
  }

  return entry;
}
