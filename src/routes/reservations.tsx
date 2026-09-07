import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarDays, Mail, Phone, Users } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { HOURS, ORDER_EMAIL, RESTAURANT } from "@/lib/restaurant";

export const Route = createFileRoute("/reservations")({
  component: ReservationsPage,
  head: () => ({
    meta: [
      { title: "Reserve a Table | Tepalcates — Roscoe Village, Chicago" },
      {
        name: "description",
        content:
          "Reserve a table at Tepalcates on Belmont Ave in Roscoe Village, Chicago. Pick your date, time and party size and send your request straight to the restaurant.",
      },
      { property: "og:title", content: "Reserve a Table at Tepalcates" },
      {
        property: "og:description",
        content:
          "Book a table for authentic Mexican food in Roscoe Village, Chicago — date, time and party size in one quick request.",
      },
      { property: "og:url", content: "/reservations" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
});

const PARTY_SIZES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

function ReservationsPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [party, setParty] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const ready = date !== "" && time !== "" && name.trim() !== "" && phone.trim() !== "";

  const mailHref = useMemo(() => {
    const body = [
      `Table request for ${RESTAURANT.name}`,
      "",
      `Date: ${date || "—"}`,
      `Time: ${time || "—"}`,
      `Party size: ${party}`,
      "",
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Email: ${email || "—"}`,
      `Notes: ${notes || "—"}`,
      "",
      "Please reply to confirm this table.",
    ].join("\n");
    return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
      `Table request — ${name || "Guest"}, party of ${party} on ${date || "TBD"}`,
    )}&body=${encodeURIComponent(body)}`;
  }, [date, time, party, name, phone, email, notes]);

  const fieldClass =
    "w-full rounded-lg border border-cream/20 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none";

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <p className="eyebrow text-terracotta">Roscoe Village, Chicago</p>
        <h1 className="mt-2 font-display text-5xl tracking-wide text-foreground md:text-6xl">
          Reserve a Table
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Tell us when you'd like to come in and how many are joining. Your request goes straight
          to the restaurant, and we'll reply to confirm. For same-day tables, calling{" "}
          {RESTAURANT.phoneDisplay} is fastest.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            className="surface-dark rounded-2xl p-6 shadow-warm md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  <CalendarDays className="h-4 w-4" aria-hidden /> Date
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-widest text-gold">Time</span>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  <Users className="h-4 w-4" aria-hidden /> Party size
                </span>
                <select
                  value={party}
                  onChange={(e) => setParty(e.target.value)}
                  className={fieldClass}
                >
                  {PARTY_SIZES.map((size) => (
                    <option key={size} value={size} className="text-charcoal">
                      {size} {size === "1" ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-widest text-gold">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  placeholder="Your name"
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-widest text-gold">
                  Phone
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputMode="tel"
                  maxLength={40}
                  placeholder="(773) 000-0000"
                  className={fieldClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs uppercase tracking-widest text-gold">
                  Email (optional)
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs uppercase tracking-widest text-gold">
                  Notes (optional)
                </span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  maxLength={1000}
                  placeholder="High chair, birthday, allergies..."
                  className={fieldClass}
                />
              </label>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={ready ? mailHref : undefined}
                aria-disabled={!ready}
                className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-lg tracking-widest ${
                  ready
                    ? "bg-terracotta text-primary-foreground"
                    : "pointer-events-none bg-cream/15 text-cream/40"
                }`}
              >
                <Mail className="h-4 w-4" aria-hidden />
                Send Reservation Request
              </a>
              <a
                href={`tel:${RESTAURANT.phoneDial}`}
                className="flex items-center justify-center gap-2 rounded-full border border-gold/70 px-6 py-3.5 font-display text-lg tracking-widest text-gold"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {RESTAURANT.phoneDisplay}
              </a>
              <p className="text-xs text-cream/50">
                Add the date, time, your name and phone number, then the button opens your email app
                with the request addressed to {ORDER_EMAIL}. A table is only held once the
                restaurant replies.
              </p>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl text-foreground">Hours</h2>
              <dl className="mt-3 space-y-1.5 text-sm">
                {HOURS.map((row) => (
                  <div key={row.day} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{row.day}</dt>
                    <dd className="text-foreground">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl text-foreground">Find Us</h2>
              <p className="mt-2 text-sm text-muted-foreground">{RESTAURANT.address}</p>
              <a
                href={`tel:${RESTAURANT.phoneDial}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-terracotta"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {RESTAURANT.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
      <MobileBar />
    </div>
  );
}
