import { Link } from "@tanstack/react-router";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";

import { DIRECTIONS_URL, RESTAURANT } from "@/lib/restaurant";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-cream/10 bg-charcoal/95 backdrop-blur lg:hidden">
      <a
        href={`tel:${RESTAURANT.phoneDial}`}
        className="flex flex-col items-center gap-1 py-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream"
      >
        <Phone className="h-5 w-5 text-gold" aria-hidden />
        Call
      </a>
      <Link
        to="/menu"
        className="flex flex-col items-center gap-1 border-x border-cream/10 py-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream"
      >
        <UtensilsCrossed className="h-5 w-5 text-gold" aria-hidden />
        Menu
      </Link>
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 py-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream"
      >
        <MapPin className="h-5 w-5 text-gold" aria-hidden />
        Directions
      </a>
    </div>
  );
}
