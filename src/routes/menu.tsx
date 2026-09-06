import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Minus, Phone, Plus, Send, ShoppingBag } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { MENU, RESTAURANT } from "@/lib/restaurant";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu | Tepalcates — Tacos, Birria & Tortas in Chicago" },
      {
        name: "description",
        content:
          "Full Tepalcates menu: birria and quesabirria tacos, pulpo and gobernador tacos, tortas, carne en su jugo, breakfast, churros and house-made aguas frescas in Chicago.",
      },
      { property: "og:title", content: "Tepalcates Menu — Authentic Mexican Food in Chicago" },
      {
        property: "og:description",
        content: "Tacos, tortas, caldos, breakfast, desserts and aguas frescas on Belmont Ave.",
      },
      { property: "og:url", content: "/menu" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

type Cart = Record<string, number>;

function MenuPage() {
  const [cart, setCart] = useState<Cart>({});
  const [name, setName] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");

  const lines = useMemo(
    () => Object.entries(cart).filter(([, qty]) => qty > 0),
    [cart],
  );
  const count = lines.reduce((sum, [, qty]) => sum + qty, 0);

  const add = (key: string, delta: number) =>
    setCart((c) => ({ ...c, [key]: Math.max(0, (c[key] ?? 0) + delta) }));

  const orderText = useMemo(() => {
    const items = lines.map(([item, qty]) => `${qty}x ${item}`).join(", ");
    return [
      `Pickup order for ${RESTAURANT.name}:`,
      items,
      name ? `Name: ${name}` : "",
      pickupTime ? `Pickup time: ${pickupTime}` : "",
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join(" | ");
  }, [lines, name, pickupTime, notes]);

  const smsHref = `sms:${RESTAURANT.phoneDial}?&body=${encodeURIComponent(orderText)}`;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24">
        <section className="surface-dark">
          <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-8">
            <span className="eyebrow text-gold">Belmont Ave, Chicago</span>
            <h1 className="mt-3 font-display text-6xl text-cream sm:text-7xl">Our Menu</h1>
            <p className="mx-auto mt-4 max-w-2xl text-cream/75">
              Build your order below and send it straight to the restaurant, or call
              {" "}
              <a href={`tel:${RESTAURANT.phoneDial}`} className="text-gold underline">
                {RESTAURANT.phoneDisplay}
              </a>
              . Items and prices should be confirmed with the restaurant.
            </p>
          </div>
          <div className="greca-rule" />
        </section>

        <nav className="sticky top-[68px] z-40 border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 md:px-8">
            {MENU.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:border-terracotta hover:text-terracotta"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-14">
            {MENU.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-36">
                <h2 className="font-display text-4xl text-foreground sm:text-5xl">{cat.title}</h2>
                {cat.note ? (
                  <p className="mt-1 text-sm text-muted-foreground">{cat.note}</p>
                ) : null}
                <div className="greca-rule mt-4 w-28" />
                <ul className="mt-6 divide-y divide-border rounded-2xl bg-card shadow-warm">
                  {cat.items.map((item) => {
                    const key = `${cat.title} — ${item.name}`;
                    const qty = cart[key] ?? 0;
                    return (
                      <li key={key} className="flex items-center gap-4 p-4 sm:p-5">
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-2xl leading-tight text-foreground">
                            {item.name}
                          </p>
                          {item.description ? (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          ) : null}
                        </div>
                        <span className="hidden text-sm font-medium text-muted-foreground sm:block">
                          {item.price ?? "Market price"}
                        </span>
                        <div className="flex items-center gap-2">
                          {qty > 0 ? (
                            <>
                              <button
                                type="button"
                                aria-label={`Remove one ${item.name}`}
                                onClick={() => add(key, -1)}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-5 text-center font-semibold">{qty}</span>
                            </>
                          ) : null}
                          <button
                            type="button"
                            aria-label={`Add ${item.name} to order`}
                            onClick={() => add(key, 1)}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-primary-foreground"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          {/* ORDER PANEL */}
          <aside className="lg:sticky lg:top-36 lg:h-fit">
            <div className="rounded-2xl bg-charcoal p-6 text-cream shadow-lift">
              <h2 className="flex items-center gap-2 font-display text-3xl text-cream">
                <ShoppingBag className="h-6 w-6 text-gold" aria-hidden />
                Your Order
                {count > 0 ? (
                  <span className="ml-auto rounded-full bg-terracotta px-3 py-1 text-sm">
                    {count}
                  </span>
                ) : null}
              </h2>

              {lines.length === 0 ? (
                <p className="mt-4 text-sm text-cream/70">
                  Tap the + next to any dish to start an order.
                </p>
              ) : (
                <ul className="mt-4 space-y-2 text-sm">
                  {lines.map(([item, qty]) => (
                    <li key={item} className="flex justify-between gap-4 border-b border-cream/10 pb-2">
                      <span className="text-cream/85">{item}</span>
                      <span className="text-gold">x{qty}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 space-y-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-cream/20 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />
                <input
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  placeholder="Pickup time (e.g. 6:30 PM)"
                  className="w-full rounded-lg border border-cream/20 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes (extra salsa, no onion...)"
                  rows={3}
                  className="w-full rounded-lg border border-cream/20 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />
              </div>

              <div className="mt-5 space-y-3">
                <a
                  href={count > 0 ? smsHref : undefined}
                  aria-disabled={count === 0}
                  className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-lg tracking-widest ${
                    count > 0
                      ? "bg-terracotta text-primary-foreground"
                      : "pointer-events-none bg-cream/15 text-cream/40"
                  }`}
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Send Order by Text
                </a>
                <a
                  href={`tel:${RESTAURANT.phoneDial}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-gold/70 px-6 py-3.5 font-display text-lg tracking-widest text-gold"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call to Order
                </a>
              </div>
              <p className="mt-4 text-xs text-cream/50">
                Your order opens in your phone's messaging app addressed to the restaurant, so
                nothing is lost in between. Please call to confirm large orders.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
      <MobileBar />
    </div>
  );
}
