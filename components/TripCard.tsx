import Image from "next/image";
import Link from "next/link";
import { tripPhotos } from "@/lib/photos";
import { tripIcon, type Trip } from "@/lib/trips";

export default function TripCard({ trip, detailed = false }: { trip: Trip; detailed?: boolean }) {
  const photo = tripPhotos[trip.id];

  return (
    <article className="card trip-card" id={trip.id}>
      {photo && (
        <div className="trip-card-photo">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="trip-card-img"
          />
        </div>
      )}
      <div className="trip-card-body">
        <div className="icon">{tripIcon(trip.category)}</div>
        <h3>{trip.name}</h3>
        <p>{trip.summary}</p>
        {detailed && <p>{trip.details}</p>}
        <div className="trip-meta">
          <span>Duration: {trip.duration}</span>
          <span>{detailed ? "Price" : "From"}: {trip.price}</span>
          <span>Capacity: {trip.capacity}</span>
        </div>
        {detailed ? (
          <p>
            Meeting place: {trip.marina}
            <br />
            Boat: {trip.boat}
            <br />
            Included: {trip.included}
          </p>
        ) : (
          <p>
            Departs: {trip.marina}. Boat: {trip.boat}.
          </p>
        )}
        <Link href={`/book?trip=${trip.id}`} className="btn btn-primary">
          Request this trip
        </Link>
      </div>
    </article>
  );
}
