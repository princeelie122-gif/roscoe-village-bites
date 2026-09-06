import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import { DIRECTIONS_URL, HOURS, RESTAURANT } from "@/lib/restaurant";

export function SiteFooter() {
  return (
    <footer className="surface-dark pb-28 lg:pb-10">
      <div className="greca-rule" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={48} height={48} className="h-12 w-12" loading="lazy" />
            <span className="font-display text-3xl tracking-widest text-cream">
              {RESTAURANT.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/70">
            {RESTAURANT.tagline} in {RESTAURANT.neighborhood}, Chicago. Come hungry. Leave happy.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Visit</h3>
          <address className="mt-4 space-y-1 text-sm not-italic text-cream/80">
            <p>{RESTAURANT.street}</p>
            <p>
              {RESTAURANT.city}, {RESTAURANT.state} {RESTAURANT.zip}
            </p>
            <p>
              <a href={`tel:${RESTAURANT.phoneDial}`} className="text-gold hover:underline">
                {RESTAURANT.phoneDisplay}
              </a>
            </p>
          </address>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="text-cream/80 underline-offset-4 hover:text-gold hover:underline">
              Get directions
            </a>
            <Link to="/menu" className="text-cream/80 underline-offset-4 hover:text-gold hover:underline">
              View menu
            </Link>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Hours</h3>
          <ul className="mt-4 space-y-1 text-sm text-cream/80">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span className={h.hours === "Closed" ? "text-cream/45" : ""}>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-cream/10 px-4 py-6 text-xs text-cream/50 md:px-8">
        <p>
          This site is an independent website concept created to show how {RESTAURANT.name} could
          present itself online. Menu items, prices and hours should be confirmed with the
          restaurant before publishing.
        </p>
      </div>
    </footer>
  );
}
