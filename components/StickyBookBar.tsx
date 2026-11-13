"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyBookBar() {
  const pathname = usePathname();
  if (pathname === "/book" || pathname.startsWith("/book/")) {
    return null;
  }

  return (
    <div className="sticky-book">
      <Link href="/book" className="btn btn-primary">
        Book a Trip
      </Link>
    </div>
  );
}
