import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Star } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import tacosImg from "@/assets/tacos.jpg";
import quesabirriaImg from "@/assets/quesabirria.jpg";
import carneImg from "@/assets/carne-en-su-jugo.jpg";
import tortaImg from "@/assets/torta.jpg";
import aguasImg from "@/assets/aguas-frescas.jpg";
import guacamoleImg from "@/assets/guacamole.jpg";
import churrosImg from "@/assets/churros.jpg";
import interiorImg from "@/assets/interior.jpg";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import {
  DIRECTIONS_URL,
  HOURS,
  MAP_EMBED_URL,
  RESTAURANT,
} from "@/lib/restaurant";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Tepalcates | Authentic Mexican Restaurant in Roscoe Village, Chicago" },
      {
        name: "description",
        content:
          "Authentic Mexican food on Belmont Ave in Chicago: birria and quesabirria tacos, carne en su jugo, tortas and house-made aguas frescas. Call (773) 237-6638.",
      },
      { property: "og:title", content: "Tepalcates | Authentic Mexican Flavors in Chicago" },
      {
        property: "og:description",
        content:
          "Tacos, quesabirria, carne en su jugo and aguas frescas at 2326 W Belmont Ave, Chicago.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const DISHES = [
  {
    name: "Tacos",
    img: tacosImg,
    copy: "Lomo, shrimp, octopus, suadero, birria and cochinita pibil — served on corn tortillas with onion and cilantro.",
  },
  {
    name: "Quesabirria",
    img: quesabirriaImg,
    copy: "Cheese-griddled birria tacos served with a cup of consommé for dipping.",
  },
  {
    name: "Carne en su Jugo",
    img: carneImg,
    copy: "Beef simmered in its own broth with beans — a house favorite in cool Chicago weather.",
  },
  {
    name: "Tortas",
    img: tortaImg,
    copy: "Mexican sandwiches on telera bread with asada, pastor, pollo al pastor or chorizo.",
  },
  {
    name: "Aguas Frescas",
    img: aguasImg,
    copy: "House-made horchata, guava, passion fruit and Mexican lemonade, poured fresh.",
  },
];

const GALLERY = [
  { src: tacosImg, alt: "Assorted Mexican street tacos on a wooden board" },
  { src: quesabirriaImg, alt: "Quesabirria tacos with consommé" },
  { src: carneImg, alt: "Bowl of carne en su jugo" },
  { src: tortaImg, alt: "Mexican torta sandwich" },
  { src: aguasImg, alt: "Colorful aguas frescas in glass jars" },
  { src: guacamoleImg, alt: "Guacamole in a molcajete with tortilla chips" },
  { src: churrosImg, alt: "Churros with dulce de leche and coco flan" },
  { src: interiorImg, alt: "Warm interior of a neighborhood Mexican restaurant" },
];

const LOVE = [
  "Authentic Mexican flavors",
  "Friendly service",
  "Welcoming atmosphere",
  "Fresh house-made drinks",
  "Unique taco selection",
  "Quesabirria",
  "Carne en su jugo",
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
          <img
            src={heroImg}
            alt="Authentic Mexican tacos, birria consommé and salsas at Tepalcates"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          <div className="relative mx-auto max-w-4xl px-5 pt-28 pb-24 text-center">
            <span className="eyebrow text-gold">{RESTAURANT.neighborhood} • Chicago</span>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
              Authentic Mexican Flavors in Chicago
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-cream/85 sm:text-lg">
              Tepalcates brings bold Mexican flavors, handmade specialties and a welcoming
              neighborhood atmosphere to Belmont Avenue.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="w-full rounded-full bg-terracotta px-8 py-4 font-display text-xl tracking-widest text-primary-foreground shadow-lift transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Explore Our Menu
              </Link>
              <a
                href={`tel:${RESTAURANT.phoneDial}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/70 px-8 py-4 font-display text-xl tracking-widest text-gold transition-colors hover:bg-gold hover:text-charcoal sm:w-auto"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {RESTAURANT.phoneDisplay}
              </a>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal/70 px-5 py-2 text-sm text-cream/85">
              <MapPin className="h-4 w-4 text-gold" aria-hidden />
              {RESTAURANT.address}
            </p>
          </div>
        </section>

        {/* FEATURED DISHES */}
        <section className="mx-auto max-w-7xl px-4 py-20 md:px-8" id="dishes">
          <div className="text-center">
            <span className="eyebrow text-terracotta">Favorites</span>
            <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
              A Taste of Tepalcates
            </h2>
            <div className="greca-rule mx-auto mt-5 w-40" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISHES.map((dish, i) => (
              <article
                key={dish.name}
                className={`group overflow-hidden rounded-2xl bg-card shadow-warm ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={dish.img}
                    alt={dish.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-foreground">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dish.copy}</p>
                </div>
              </article>
            ))}
            <div className="flex flex-col justify-center gap-4 rounded-2xl bg-verde p-8 text-secondary-foreground shadow-warm">
              <h3 className="font-display text-4xl">Hungry yet?</h3>
              <p className="text-sm text-secondary-foreground/85">
                See the full menu — tacos, tortas, caldos, breakfast, desserts and drinks.
              </p>
              <Link
                to="/menu"
                className="w-fit rounded-full bg-gold px-6 py-3 font-display text-lg tracking-widest text-charcoal"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section id="story" className="surface-dark scroll-mt-24">
          <div className="greca-rule" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:px-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={interiorImg}
                alt="Warm neighborhood Mexican restaurant dining room"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="eyebrow text-gold">Our Story</span>
              <h2 className="mt-3 font-display text-5xl text-cream sm:text-6xl">
                Made for the Neighborhood
              </h2>
              <div className="mt-6 space-y-4 text-cream/80">
                <p>
                  Tepalcates is a local Mexican restaurant on Belmont Avenue, cooking the flavors of
                  Mexico for Roscoe Village and the neighborhoods around it.
                </p>
                <p>
                  The kitchen leans on Mexican culinary traditions: meats slow-cooked for tacos and
                  birria, salsas made fresh, aguas frescas mixed in house, and dishes put together
                  by hand every day.
                </p>
                <p>
                  It is a friendly, family-friendly room — the kind of place where regulars are
                  greeted by name and first-timers are helped through the menu.
                </p>
              </div>
              <p className="mt-8 font-display text-4xl text-gold">Come hungry. Leave happy.</p>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="scroll-mt-24 bg-background">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center md:px-8">
            <span className="eyebrow text-terracotta">Word on Belmont</span>
            <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
              Why People Love Tepalcates
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              These are the themes that come up again and again in public reviews of the
              restaurant.
            </p>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {LOVE.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-card px-5 py-3 text-sm font-medium text-foreground shadow-warm"
                >
                  <Star className="h-4 w-4 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/reviews"
              className="mt-10 inline-flex rounded-full bg-charcoal px-8 py-4 font-display text-xl tracking-widest text-cream transition-transform hover:scale-[1.03]"
            >
              Read Our Reviews
            </Link>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="scroll-mt-24 bg-muted/60 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="text-center">
              <span className="eyebrow text-terracotta">Gallery</span>
              <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
                Straight from the Kitchen
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              {GALLERY.map((img, i) => (
                <div
                  key={img.alt}
                  className={`overflow-hidden rounded-xl shadow-warm ${
                    i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Images shown are illustrative food photography for this website concept.
            </p>
          </div>
        </section>

        {/* VISIT / LOCATION + HOURS */}
        <section id="visit" className="scroll-mt-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
            <div className="text-center">
              <span className="eyebrow text-terracotta">Location</span>
              <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
                Find Us in Roscoe Village
              </h2>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <iframe
                  title="Map showing Tepalcates at 2326 W Belmont Ave, Chicago"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[380px] w-full border-0 lg:h-full lg:min-h-[460px]"
                />
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-card p-7 shadow-warm">
                  <h3 className="font-display text-3xl text-foreground">{RESTAURANT.name}</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic text-muted-foreground">
                    <p>{RESTAURANT.street}</p>
                    <p>
                      {RESTAURANT.city}, {RESTAURANT.state} {RESTAURANT.zip}
                    </p>
                  </address>
                  <a
                    href={`tel:${RESTAURANT.phoneDial}`}
                    className="mt-3 inline-block font-display text-3xl tracking-wide text-terracotta"
                  >
                    {RESTAURANT.phoneDisplay}
                  </a>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full bg-terracotta px-6 py-3 text-center font-display text-lg tracking-widest text-primary-foreground"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${RESTAURANT.phoneDial}`}
                      className="flex-1 rounded-full border border-charcoal/25 px-6 py-3 text-center font-display text-lg tracking-widest text-foreground"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-charcoal p-7 text-cream shadow-warm">
                  <h3 className="eyebrow text-gold">Hours</h3>
                  <ul className="mt-4 divide-y divide-cream/10 text-sm">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6 py-2.5">
                        <span className="text-cream/80">{h.day}</span>
                        <span className={h.hours === "Closed" ? "text-cream/45" : "text-cream"}>
                          {h.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-cream/50">
                    Hours can change — please call to confirm, especially on Sundays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ORDER / CTA */}
        <section className="relative overflow-hidden bg-verde py-20 text-secondary-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="font-display text-5xl sm:text-6xl">Ready for Tacos?</h2>
            <p className="mt-4 text-secondary-foreground/85">
              Visit Tepalcates in Chicago or contact us to learn more about today's menu.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${RESTAURANT.phoneDial}`}
                className="rounded-full bg-gold px-7 py-3.5 font-display text-lg tracking-widest text-charcoal"
              >
                Call Now
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cream/50 px-7 py-3.5 font-display text-lg tracking-widest text-cream"
              >
                Get Directions
              </a>
              <Link
                to="/menu"
                className="rounded-full bg-terracotta px-7 py-3.5 font-display text-lg tracking-widest text-primary-foreground"
              >
                View Menu
              </Link>
            </div>
            <p className="mt-6 text-xs text-secondary-foreground/70">
              Online ordering can be added here once the restaurant confirms its ordering provider.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="surface-dark py-24 text-center">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-6xl leading-[0.95] text-cream sm:text-7xl">
              Come Taste Tepalcates
            </h2>
            <p className="mt-5 text-cream/80">
              Authentic Mexican food. Bold flavors. Chicago neighborhood hospitality.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="rounded-full bg-terracotta px-8 py-4 font-display text-xl tracking-widest text-primary-foreground"
              >
                View Menu
              </Link>
              <Link
                to="/"
                hash="visit"
                className="rounded-full border border-gold/70 px-8 py-4 font-display text-xl tracking-widest text-gold"
              >
                Visit Us
              </Link>
              <a
                href={`tel:${RESTAURANT.phoneDial}`}
                className="rounded-full bg-cream px-8 py-4 font-display text-xl tracking-widest text-charcoal"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileBar />
    </div>
  );
}
