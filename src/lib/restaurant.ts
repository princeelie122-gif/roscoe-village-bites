// Editable business content for the Tepalcates website demo.
// Every value below is meant to be reviewed/updated by the restaurant.

export const RESTAURANT = {
  name: "Tepalcates",
  tagline: "Authentic Mexican cuisine",
  street: "2326 W Belmont Ave",
  city: "Chicago",
  state: "IL",
  zip: "60618",
  neighborhood: "Roscoe Village",
  phoneDisplay: "(773) 237-6638",
  phoneDial: "+17732376638",
  get address() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  },
};

export const MAPS_QUERY = encodeURIComponent(
  `${RESTAURANT.name}, ${RESTAURANT.street}, ${RESTAURANT.city}, ${RESTAURANT.state} ${RESTAURANT.zip}`,
);
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;
export const REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

// Editable hours — directories show slightly different Sunday hours.
export const HOURS: { day: string; hours: string }[] = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "10:00 AM – 9:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 9:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 9:00 PM" },
  { day: "Friday", hours: "10:00 AM – 9:30 PM" },
  { day: "Saturday", hours: "10:00 AM – 9:30 PM" },
  { day: "Sunday", hours: "11:00 AM – 7:00 PM" },
];

export type MenuItem = { name: string; description?: string; price: number };
export type MenuCategory = { id: string; title: string; note?: string; items: MenuItem[] };

// Email where online orders are sent. Replace with the restaurant's real inbox.
export const ORDER_EMAIL = "orders@tepalcateschicago.com";

export const TAX_RATE = 0.1075; // Chicago restaurant tax

export const MENU: MenuCategory[] = [
  {
    id: "tacos",
    title: "Tacos",
    note: "Served on corn tortillas with onion and cilantro.",
    items: [
      { name: "Pescado", description: "Fish taco.", price: 5.25 },
      { name: "Gobernador", description: "Shrimp and melted cheese.", price: 5.75 },
      { name: "Pulpo", description: "Octopus.", price: 6.25 },
      { name: "Vegetariano", description: "Vegetarian.", price: 4.25 },
      { name: "Asada", description: "Grilled steak.", price: 4.75 },
      { name: "Pastor", description: "Marinated pork.", price: 4.25 },
      { name: "Pollo al Pastor", description: "Marinated chicken.", price: 4.25 },
      { name: "Chorizo", description: "Mexican sausage.", price: 4.25 },
      { name: "Suadero", description: "Slow-cooked beef.", price: 4.75 },
      { name: "Birria", description: "Stewed beef birria.", price: 5.25 },
      { name: "Cochinita Pibil", description: "Yucatán-style pork.", price: 4.75 },
      { name: "Ribeye", description: "Ribeye steak.", price: 6.5 },
    ],
  },
  {
    id: "specialties",
    title: "Specialties",
    items: [
      {
        name: "Quesabirrias (3)",
        description: "Griddled cheese birria tacos served with consommé.",
        price: 16.95,
      },
      { name: "Tacos de Pescado (3)", price: 15.5 },
      { name: "Tacos Gobernador (3)", price: 16.95 },
      { name: "Tacos de Cochinita Pibil (3)", price: 14.5 },
    ],
  },
  {
    id: "tortas",
    title: "Tortas",
    note: "Mexican sandwiches served on telera bread.",
    items: [
      { name: "Asada", price: 13.5 },
      { name: "Pastor", price: 12.5 },
      { name: "Pollo al Pastor", price: 12.5 },
      { name: "Chorizo", price: 12.5 },
    ],
  },
  {
    id: "caldos",
    title: "Soups / Caldos",
    items: [
      { name: "Carne en su Jugo", description: "Beef in its own broth with beans.", price: 14.95 },
      { name: "Birria de Res", description: "Beef birria.", price: 15.95 },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      { name: "Machaca con Huevo", price: 12.95 },
      { name: "Huevo con Chorizo", price: 11.95 },
      { name: "Chile Relleno Omelette", price: 12.95 },
      { name: "Breakfast Burrito", price: 11.5 },
      { name: "Chilaquiles Verdes", price: 12.95 },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Nachos", price: 11.95 },
      { name: "Guacamole & Chips", price: 9.5 },
      { name: "Chips & Salsa", price: 4.5 },
    ],
  },
  {
    id: "sides",
    title: "Sides / Extras",
    items: [
      { name: "Fries", price: 4.5 },
      { name: "Rice & Beans", price: 4.95 },
      { name: "Corn Tortillas", price: 1.5 },
      { name: "Avocado", price: 2.5 },
      { name: "Guacamole", price: 3.5 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Coco Flan Impossible", price: 7.5 },
      { name: "Churros with Dulce de Leche Dip", price: 7.5 },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    note: "House-made aguas frescas, rotating daily.",
    items: [
      { name: "Horchata", price: 4.25 },
      { name: "Mexican Lemonade", price: 4.25 },
      { name: "Guava Agua Fresca", price: 4.25 },
      { name: "Passion Fruit Agua Fresca", price: 4.25 },
      { name: "Jarritos", price: 3.5 },
    ],
  },
];

export const money = (value: number) =>
  value.toLocaleString("en-US", { style: "currency", currency: "USD" });

export type Review = {
  author: string;
  rating: number;
  date: string;
  text: string;
  dish: string;
};

// Illustrative guest reviews written from the themes that recur in public
// reviews. Swap in verbatim Google reviews once the restaurant approves them.
export const REVIEWS: Review[] = [
  {
    author: "Marisol R.",
    rating: 5,
    date: "March 2026",
    text: "The quesabirria is the real deal — crisp on the griddle, and the consommé is rich without being greasy. Easily the best birria I've had in Roscoe Village.",
    dish: "Quesabirrias",
  },
  {
    author: "Danny K.",
    rating: 5,
    date: "February 2026",
    text: "Carne en su jugo tastes like somebody's abuela is back there. Big portion, warm service, and we were in and out on a lunch break.",
    dish: "Carne en su Jugo",
  },
  {
    author: "Priya S.",
    rating: 5,
    date: "January 2026",
    text: "Tacos gobernador with that melted cheese and shrimp are worth the trip alone. The horchata is house-made and not too sweet.",
    dish: "Tacos Gobernador",
  },
  {
    author: "Alex T.",
    rating: 4,
    date: "December 2025",
    text: "Small spot on Belmont, always friendly. The pulpo taco surprised me — tender, smoky, great salsa selection.",
    dish: "Taco de Pulpo",
  },
  {
    author: "Jordan M.",
    rating: 5,
    date: "November 2025",
    text: "Weekend breakfast here is a neighborhood secret. Chilaquiles verdes with a side of churros and we left very happy.",
    dish: "Chilaquiles Verdes",
  },
  {
    author: "Elena V.",
    rating: 5,
    date: "October 2025",
    text: "Fresh aguas frescas every day, guacamole made to order, and they remember your name after two visits. Real neighborhood hospitality.",
    dish: "Aguas Frescas",
  },
];

