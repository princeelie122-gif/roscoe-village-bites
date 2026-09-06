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

export type MenuItem = { name: string; description?: string; price?: string };
export type MenuCategory = { id: string; title: string; note?: string; items: MenuItem[] };

// Prices intentionally left blank where they cannot be verified.
export const MENU: MenuCategory[] = [
  {
    id: "tacos",
    title: "Tacos",
    note: "Served on corn tortillas with onion and cilantro.",
    items: [
      { name: "Pescado", description: "Fish taco." },
      { name: "Gobernador", description: "Shrimp and melted cheese." },
      { name: "Pulpo", description: "Octopus." },
      { name: "Vegetariano", description: "Vegetarian." },
      { name: "Asada", description: "Grilled steak." },
      { name: "Pastor", description: "Marinated pork." },
      { name: "Pollo al Pastor", description: "Marinated chicken." },
      { name: "Chorizo", description: "Mexican sausage." },
      { name: "Suadero", description: "Slow-cooked beef." },
      { name: "Birria", description: "Stewed beef birria." },
      { name: "Cochinita Pibil", description: "Yucatán-style pork." },
      { name: "Ribeye", description: "Ribeye steak." },
    ],
  },
  {
    id: "specialties",
    title: "Specialties",
    items: [
      { name: "Quesabirrias", description: "Griddled cheese birria tacos served with consommé." },
      { name: "Tacos de Pescado" },
      { name: "Tacos Gobernador" },
      { name: "Tacos de Cochinita Pibil" },
    ],
  },
  {
    id: "tortas",
    title: "Tortas",
    note: "Mexican sandwiches served on telera bread.",
    items: [
      { name: "Asada" },
      { name: "Pastor" },
      { name: "Pollo al Pastor" },
      { name: "Chorizo" },
    ],
  },
  {
    id: "caldos",
    title: "Soups / Caldos",
    items: [
      { name: "Carne en su Jugo", description: "Beef in its own broth with beans." },
      { name: "Birria de Res", description: "Beef birria." },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      { name: "Machaca con Huevo" },
      { name: "Huevo con Chorizo" },
      { name: "Chile Relleno Omelette" },
      { name: "Breakfast Burrito" },
      { name: "Chilaquiles Verdes" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [{ name: "Nachos" }, { name: "Guacamole & Chips" }, { name: "Chips & Salsa" }],
  },
  {
    id: "sides",
    title: "Sides / Extras",
    items: [
      { name: "Fries" },
      { name: "Rice & Beans" },
      { name: "Corn Tortillas" },
      { name: "Avocado" },
      { name: "Guacamole" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [{ name: "Coco Flan Impossible" }, { name: "Churros with Dulce de Leche Dip" }],
  },
  {
    id: "drinks",
    title: "Drinks",
    note: "House-made aguas frescas, rotating daily.",
    items: [
      { name: "Horchata" },
      { name: "Mexican Lemonade" },
      { name: "Guava Agua Fresca" },
      { name: "Passion Fruit Agua Fresca" },
      { name: "Ask about today's aguas frescas" },
    ],
  },
];
