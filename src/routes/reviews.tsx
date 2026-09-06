import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { REVIEWS, REVIEWS_URL, RESTAURANT } from "@/lib/restaurant";

import quesabirria from "@/assets/quesabirria.jpg";
import carne from "@/assets/carne-en-su-jugo.jpg";
import tacos from "@/assets/tacos.jpg";
import torta from "@/assets/torta.jpg";
import churros from "@/assets/churros.jpg";
import aguas from "@/assets/aguas-frescas.jpg";

const PHOTOS = [quesabirria, carne, tacos, torta, churros, aguas];

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews | Tepalcates — Mexican Restaurant in Roscoe Village" },
      {
        name: "description",
        content:
          "What guests say about Tepalcates on Belmont Ave in Chicago: quesabirria, carne en su jugo, tacos gobernador and house-made aguas frescas.",
      },
      { property: "og:title", content: "Tepalcates Reviews — Roscoe Village, Chicago" },
      {
        property: "og:description",
        content: "Guest reviews of Tepalcates, plus a link to the full listing on Google Maps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-gold text-gold" : "text-muted-foreground/40"}`}
          aria-hidden
        />
      ))}
    </span>
  );
}

function ReviewsPage() {
  const average = (
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-24 lg:pb-0">
        <section className="surface-dark">
          <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-8">
            <span className="eyebrow text-gold">Roscoe Village, Chicago</span>
            <h1 className="mt-3 font-display text-6xl text-cream sm:text-7xl">Guest Reviews</h1>
            <p className="mx-auto mt-4 max-w-2xl text-cream/75">
              {average} average across {REVIEWS.length} recent guest reviews of {RESTAURANT.name} on
              Belmont Ave.
            </p>
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 font-display text-xl tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <MapPin className="h-5 w-5" aria-hidden />
              See Us on Google Maps
            </a>
          </div>
          <div className="greca-rule" />
        </section>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <article
              key={review.author}
              className="overflow-hidden rounded-2xl bg-card shadow-warm"
            >
              <img
                src={PHOTOS[i % PHOTOS.length]}
                alt={`${review.dish} at ${RESTAURANT.name}`}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <Stars rating={review.rating} />
                <p className="mt-3 text-sm leading-relaxed text-foreground">“{review.text}”</p>
                <p className="mt-4 font-display text-2xl text-foreground">{review.author}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {review.date} · {review.dish}
                </p>
              </div>
            </article>
          ))}
        </div>

        <section className="bg-muted/60 py-16 text-center">
          <h2 className="font-display text-5xl text-foreground">Tasted something great?</h2>
          <p className="mx-auto mt-3 max-w-xl px-4 text-muted-foreground">
            Leave a review on Google, or come try the menu for yourself.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
            <Link
              to="/menu"
              className="rounded-full bg-charcoal px-8 py-4 font-display text-xl tracking-widest text-cream"
            >
              View Menu
            </Link>
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-charcoal/30 px-8 py-4 font-display text-xl tracking-widest text-foreground"
            >
              Write a Review
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileBar />
    </div>
  );
}
