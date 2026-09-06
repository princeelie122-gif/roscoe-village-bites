import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import logo from "@/assets/logo.png";
import { RESTAURANT } from "@/lib/restaurant";

const NAV = [
  { label: "Home", to: "/", hash: undefined as string | undefined },
  { label: "Menu", to: "/menu", hash: undefined },
  { label: "Our Story", to: "/", hash: "story" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "Reviews", to: "/", hash: "reviews" },
  { label: "Visit Us", to: "/", hash: "visit" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "surface-dark shadow-warm" : "bg-charcoal/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Tepalcates logo" width={44} height={44} className="h-11 w-11" />
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-widest text-cream">
              {RESTAURANT.name}
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gold">
              Cocina Mexicana
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-sm font-medium uppercase tracking-widest text-cream/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/menu"
            className="hidden rounded-full bg-terracotta px-5 py-2.5 font-display text-lg tracking-widest text-primary-foreground shadow-warm transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            View Menu
          </Link>
          <a
            href={`tel:${RESTAURANT.phoneDial}`}
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-2.5 font-display text-lg tracking-widest text-gold lg:hidden"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="surface-dark border-t border-cream/10 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 py-3 font-display text-2xl tracking-widest text-cream last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
