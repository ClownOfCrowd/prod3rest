import type { Locale } from "@/lib/i18n";

export type DishTag =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "spicy"
  | "low-calorie";

export type MenuCategory = "starters" | "mains" | "desserts" | "drinks" | "wine";
export type ServicePeriod = "lunch" | "dinner";

export type Dish = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  calories: number;
  macros: {
    protein: number;
    fat: number;
    carbs: number;
  };
  ingredients: string[];
  allergens: string[];
  tags: DishTag[];
  image: string;
  available: ServicePeriod[];
  chefPick?: boolean;
  seasonal?: boolean;
};

export type Pairing = {
  dishId: string;
  wineId: string;
  note: string;
};

export type MenuUI = {
  title: string;
  subtitle: string;
  categories: Record<MenuCategory, string>;
  service: {
    title: string;
    lunch: string;
    dinner: string;
  };
  filters: {
    title: string;
    vegetarian: string;
    vegan: string;
    glutenFree: string;
    spicy: string;
    lowCalorie: string;
    clear: string;
  };
  nutrition: {
    toggle: string;
    kcal: string;
    protein: string;
    fat: string;
    carbs: string;
  };
  details: {
    view: string;
    close: string;
    ingredients: string;
    allergens: string;
    nutrition: string;
  };
  specials: {
    title: string;
    subtitle: string;
  };
  chefPicks: {
    title: string;
    subtitle: string;
  };
  pairings: {
    title: string;
    subtitle: string;
  };
  tags: Record<DishTag, string>;
  noResults: string;
};

export type MenuContent = {
  ui: MenuUI;
  dishes: Dish[];
  pairings: Pairing[];
};

const en: MenuContent = {
  ui: {
    title: "Menu",
    subtitle:
      "A full dining program built for midday precision and late-evening depth. Filter by preference and open each dish for full ingredient and nutrition detail.",
    categories: {
      starters: "Starters",
      mains: "Main courses",
      desserts: "Desserts",
      drinks: "Drinks",
      wine: "Wine",
    },
    service: {
      title: "Service",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    filters: {
      title: "Filters",
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      glutenFree: "Gluten-free",
      spicy: "Spicy",
      lowCalorie: "Low-calorie",
      clear: "Clear",
    },
    nutrition: {
      toggle: "Show nutrition",
      kcal: "kcal",
      protein: "Protein",
      fat: "Fat",
      carbs: "Carbs",
    },
    details: {
      view: "View details",
      close: "Close",
      ingredients: "Ingredients",
      allergens: "Allergens",
      nutrition: "Nutrition",
    },
    specials: {
      title: "Seasonal specials",
      subtitle: "Available for a limited window while produce is at its peak.",
    },
    chefPicks: {
      title: "Chef's picks",
      subtitle: "Signature plates the kitchen recommends first.",
    },
    pairings: {
      title: "Wine pairings",
      subtitle: "Suggested cellar pairings for key dishes.",
    },
    tags: {
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      "gluten-free": "Gluten-free",
      spicy: "Spicy",
      "low-calorie": "Low-calorie",
    },
    noResults: "No dishes match this filter set. Try clearing one or two filters.",
  },
  dishes: [
    {
      id: "st-scallop",
      category: "starters",
      name: "Hand-dived Scallop Crudo",
      description: "Citrus kosho, compressed melon, and coastal herbs.",
      price: "$23",
      calories: 210,
      macros: { protein: 22, fat: 7, carbs: 13 },
      ingredients: ["Scallop", "melon", "yuzu kosho", "chervil", "olive oil"],
      allergens: ["Shellfish"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "st-beet",
      category: "starters",
      name: "Roasted Beet Carpaccio",
      description: "Goat curd, toasted walnut, and dill pollen vinaigrette.",
      price: "$18",
      calories: 250,
      macros: { protein: 8, fat: 15, carbs: 20 },
      ingredients: ["Beetroot", "goat cheese", "walnut", "dill", "sherry vinegar"],
      allergens: ["Milk", "Tree nuts"],
      tags: ["vegetarian", "gluten-free"],
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "st-mushroom",
      category: "starters",
      name: "Wild Mushroom Veloute",
      description: "Cep espuma, black garlic oil, and rye crisp.",
      price: "$19",
      calories: 280,
      macros: { protein: 10, fat: 14, carbs: 28 },
      ingredients: ["Wild mushrooms", "shallot", "cream", "black garlic", "rye crisp"],
      allergens: ["Milk", "Gluten"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "st-octopus",
      category: "starters",
      name: "Charred Octopus Terrine",
      description: "Smoked pepper emulsion and pickled shallot petals.",
      price: "$24",
      calories: 265,
      macros: { protein: 25, fat: 9, carbs: 18 },
      ingredients: ["Octopus", "piquillo pepper", "shallot", "parsley", "lemon"],
      allergens: ["Mollusks"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "st-burrata",
      category: "starters",
      name: "Burrata & Heirloom Tomato",
      description: "Aged balsamic pearls and basil stem oil.",
      price: "$21",
      calories: 320,
      macros: { protein: 14, fat: 24, carbs: 12 },
      ingredients: ["Burrata", "heirloom tomato", "basil", "balsamic", "sea salt"],
      allergens: ["Milk"],
      tags: ["vegetarian", "gluten-free"],
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "mn-seabass",
      category: "mains",
      name: "Sea Bass a la Plancha",
      description: "Saffron fennel broth, confit artichoke, and sea lettuce.",
      price: "$43",
      calories: 460,
      macros: { protein: 41, fat: 19, carbs: 24 },
      ingredients: ["Sea bass", "fennel", "saffron", "artichoke", "fish stock"],
      allergens: ["Fish"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "mn-lamb",
      category: "mains",
      name: "Heritage Lamb Saddle",
      description: "Charred aubergine puree and rosemary jus reduction.",
      price: "$48",
      calories: 620,
      macros: { protein: 44, fat: 36, carbs: 18 },
      ingredients: ["Lamb saddle", "aubergine", "rosemary", "veal jus", "garlic"],
      allergens: ["None"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "mn-risotto",
      category: "mains",
      name: "Truffle Barley Risotto",
      description: "Aged comte, roasted leek ash, and shaved black truffle.",
      price: "$36",
      calories: 520,
      macros: { protein: 16, fat: 22, carbs: 60 },
      ingredients: ["Pearl barley", "comte", "leek", "black truffle", "vegetable stock"],
      allergens: ["Milk", "Gluten"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1633436375795-12b3b339712f?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "mn-duck",
      category: "mains",
      name: "Slow Confit Duck",
      description: "Cherry gastrique, chicory leaves, and buckwheat crumb.",
      price: "$44",
      calories: 590,
      macros: { protein: 39, fat: 33, carbs: 29 },
      ingredients: ["Duck leg", "sour cherry", "chicory", "buckwheat", "duck jus"],
      allergens: ["None"],
      tags: [],
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "mn-celeriac",
      category: "mains",
      name: "Celeriac Steak",
      description: "Burnt onion glaze, lentil ragout, and herb pistou.",
      price: "$31",
      calories: 390,
      macros: { protein: 14, fat: 12, carbs: 56 },
      ingredients: ["Celeriac", "green lentils", "onion", "parsley", "olive oil"],
      allergens: ["Celery"],
      tags: ["vegan", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "mn-veal",
      category: "mains",
      name: "Milk-fed Veal Tenderloin",
      description: "Parsnip cream, caper leaf, and marrow sauce.",
      price: "$49",
      calories: 640,
      macros: { protein: 48, fat: 38, carbs: 16 },
      ingredients: ["Veal", "parsnip", "bone marrow", "caper", "thyme"],
      allergens: ["Milk"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "ds-lemon",
      category: "desserts",
      name: "Lemon Verbena Tart",
      description: "Toasted meringue and bergamot glaze.",
      price: "$16",
      calories: 360,
      macros: { protein: 6, fat: 17, carbs: 44 },
      ingredients: ["Lemon", "verbena", "egg", "butter", "wheat flour"],
      allergens: ["Egg", "Milk", "Gluten"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "ds-souffle",
      category: "desserts",
      name: "Dark Chocolate Souffle",
      description: "Single-origin cocoa, sea salt caramel core.",
      price: "$18",
      calories: 420,
      macros: { protein: 8, fat: 21, carbs: 52 },
      ingredients: ["Dark chocolate", "egg", "cream", "raw sugar", "sea salt"],
      allergens: ["Egg", "Milk"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
      chefPick: true,
    },
    {
      id: "ds-semifreddo",
      category: "desserts",
      name: "Pistachio Semifreddo",
      description: "Candied citrus and almond sable crumble.",
      price: "$15",
      calories: 390,
      macros: { protein: 7, fat: 24, carbs: 36 },
      ingredients: ["Pistachio", "almond", "cream", "citrus peel", "vanilla"],
      allergens: ["Milk", "Tree nuts", "Egg"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "ds-pear",
      category: "desserts",
      name: "Poached Winter Pear",
      description: "Saffron syrup, vanilla bean, and oat praline.",
      price: "$14",
      calories: 290,
      macros: { protein: 4, fat: 8, carbs: 50 },
      ingredients: ["Pear", "saffron", "vanilla", "oats", "raw honey"],
      allergens: ["Gluten"],
      tags: ["low-calorie"],
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "dr-kombucha",
      category: "drinks",
      name: "House Kombucha",
      description: "Green tea ferment with quince and elderflower.",
      price: "$11",
      calories: 90,
      macros: { protein: 0, fat: 0, carbs: 20 },
      ingredients: ["Green tea", "quince", "elderflower", "kombucha culture"],
      allergens: ["None"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "dr-spritz",
      category: "drinks",
      name: "Smoked Grapefruit Spritz",
      description: "Citrus cordial, rosemary smoke, and sparkling brut.",
      price: "$14",
      calories: 160,
      macros: { protein: 0, fat: 0, carbs: 16 },
      ingredients: ["Grapefruit", "sparkling wine", "rosemary", "citrus cordial"],
      allergens: ["Sulfites"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "dr-coldbrew",
      category: "drinks",
      name: "Cold Brew Tonic",
      description: "Single-origin coffee, tonic, and orange zest mist.",
      price: "$12",
      calories: 55,
      macros: { protein: 1, fat: 0, carbs: 12 },
      ingredients: ["Cold brew coffee", "tonic water", "orange zest"],
      allergens: ["None"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "dr-cooler",
      category: "drinks",
      name: "Cucumber Elderflower Cooler",
      description: "Pressed cucumber, elderflower, and mint distillate.",
      price: "$10",
      calories: 70,
      macros: { protein: 1, fat: 0, carbs: 16 },
      ingredients: ["Cucumber", "elderflower", "mint", "lime"],
      allergens: ["None"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "wn-chablis",
      category: "wine",
      name: "Chablis Premier Cru 2021",
      description: "Mineral-driven Chardonnay with saline finish.",
      price: "$19 / glass",
      calories: 122,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Chardonnay grapes"],
      allergens: ["Sulfites"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "wn-rioja",
      category: "wine",
      name: "Rioja Reserva 2018",
      description: "Tempranillo with black fruit and cedar spice.",
      price: "$21 / glass",
      calories: 126,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Tempranillo grapes"],
      allergens: ["Sulfites"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "wn-brunello",
      category: "wine",
      name: "Brunello di Montalcino 2017",
      description: "Structured Sangiovese with tobacco and dried cherry.",
      price: "$26 / glass",
      calories: 128,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Sangiovese grapes"],
      allergens: ["Sulfites"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "wn-etna",
      category: "wine",
      name: "Etna Bianco 2022",
      description: "Volcanic white blend with citrus and stone notes.",
      price: "$18 / glass",
      calories: 120,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Carricante grapes"],
      allergens: ["Sulfites"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
  ],
  pairings: [
    {
      dishId: "mn-seabass",
      wineId: "wn-chablis",
      note: "The saline finish cuts through the saffron broth with clarity.",
    },
    {
      dishId: "mn-lamb",
      wineId: "wn-rioja",
      note: "Cedar spice reinforces the rosemary-driven jus.",
    },
    {
      dishId: "mn-risotto",
      wineId: "wn-etna",
      note: "Volcanic freshness balances truffle richness.",
    },
    {
      dishId: "mn-veal",
      wineId: "wn-brunello",
      note: "Firm tannins support marrow depth and veal sweetness.",
    },
    {
      dishId: "st-scallop",
      wineId: "wn-etna",
      note: "Citrus tension mirrors yuzu and melon brightness.",
    },
  ],
};

const es: MenuContent = {
  ui: {
    title: "Menú",
    subtitle:
      "Un programa gastronómico completo para precisión al mediodía y profundidad por la noche. Filtra por preferencia y abre cada plato para ver ingredientes y nutrición.",
    categories: {
      starters: "Entrantes",
      mains: "Platos principales",
      desserts: "Postres",
      drinks: "Bebidas",
      wine: "Vinos",
    },
    service: {
      title: "Servicio",
      lunch: "Almuerzo",
      dinner: "Cena",
    },
    filters: {
      title: "Filtros",
      vegetarian: "Vegetariano",
      vegan: "Vegano",
      glutenFree: "Sin gluten",
      spicy: "Picante",
      lowCalorie: "Bajo en calorías",
      clear: "Limpiar",
    },
    nutrition: {
      toggle: "Mostrar nutrición",
      kcal: "kcal",
      protein: "Proteína",
      fat: "Grasa",
      carbs: "Carbohidratos",
    },
    details: {
      view: "Ver detalle",
      close: "Cerrar",
      ingredients: "Ingredientes",
      allergens: "Alérgenos",
      nutrition: "Nutrición",
    },
    specials: {
      title: "Especiales de temporada",
      subtitle: "Disponibles por tiempo limitado mientras el producto está en su punto.",
    },
    chefPicks: {
      title: "Selección del chef",
      subtitle: "Platos insignia recomendados por cocina.",
    },
    pairings: {
      title: "Maridajes de vino",
      subtitle: "Recomendaciones de bodega para platos clave.",
    },
    tags: {
      vegetarian: "Vegetariano",
      vegan: "Vegano",
      "gluten-free": "Sin gluten",
      spicy: "Picante",
      "low-calorie": "Bajo en calorías",
    },
    noResults: "Ningún plato coincide con estos filtros. Prueba limpiar uno o dos.",
  },
  dishes: [
    {
      id: "st-scallop",
      category: "starters",
      name: "Crudo de vieira de inmersión",
      description: "Kosho cítrico, melón comprimido y hierbas costeras.",
      price: "$23",
      calories: 210,
      macros: { protein: 22, fat: 7, carbs: 13 },
      ingredients: ["Vieira", "melón", "yuzu kosho", "perifollo", "aceite de oliva"],
      allergens: ["Mariscos"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "st-beet",
      category: "starters",
      name: "Carpaccio de remolacha asada",
      description: "Cuajada de cabra, nuez tostada y vinagreta de eneldo.",
      price: "$18",
      calories: 250,
      macros: { protein: 8, fat: 15, carbs: 20 },
      ingredients: ["Remolacha", "queso de cabra", "nuez", "eneldo", "vinagre de jerez"],
      allergens: ["Lácteos", "Frutos secos"],
      tags: ["vegetarian", "gluten-free"],
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "st-mushroom",
      category: "starters",
      name: "Velouté de setas silvestres",
      description: "Espuma de cep, aceite de ajo negro y crujiente de centeno.",
      price: "$19",
      calories: 280,
      macros: { protein: 10, fat: 14, carbs: 28 },
      ingredients: ["Setas silvestres", "chalota", "nata", "ajo negro", "centeno"],
      allergens: ["Lácteos", "Gluten"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "st-octopus",
      category: "starters",
      name: "Terrina de pulpo a la brasa",
      description: "Emulsión de pimiento ahumado y pétalos de chalota encurtida.",
      price: "$24",
      calories: 265,
      macros: { protein: 25, fat: 9, carbs: 18 },
      ingredients: ["Pulpo", "pimiento piquillo", "chalota", "perejil", "limón"],
      allergens: ["Moluscos"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "st-burrata",
      category: "starters",
      name: "Burrata con tomate heirloom",
      description: "Perlas de balsámico añejo y aceite de tallo de albahaca.",
      price: "$21",
      calories: 320,
      macros: { protein: 14, fat: 24, carbs: 12 },
      ingredients: ["Burrata", "tomate heirloom", "albahaca", "balsámico", "sal marina"],
      allergens: ["Lácteos"],
      tags: ["vegetarian", "gluten-free"],
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "mn-seabass",
      category: "mains",
      name: "Lubina a la plancha",
      description: "Caldo de hinojo y azafrán, alcachofa confitada y lechuga de mar.",
      price: "$43",
      calories: 460,
      macros: { protein: 41, fat: 19, carbs: 24 },
      ingredients: ["Lubina", "hinojo", "azafrán", "alcachofa", "fumet"],
      allergens: ["Pescado"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "mn-lamb",
      category: "mains",
      name: "Silla de cordero heritage",
      description: "Puré de berenjena a la brasa y reducción de jugo al romero.",
      price: "$48",
      calories: 620,
      macros: { protein: 44, fat: 36, carbs: 18 },
      ingredients: ["Cordero", "berenjena", "romero", "jugo oscuro", "ajo"],
      allergens: ["Ninguno"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "mn-risotto",
      category: "mains",
      name: "Risotto de cebada y trufa",
      description: "Comté curado, ceniza de puerro y láminas de trufa negra.",
      price: "$36",
      calories: 520,
      macros: { protein: 16, fat: 22, carbs: 60 },
      ingredients: ["Cebada perlada", "comté", "puerro", "trufa negra", "caldo vegetal"],
      allergens: ["Lácteos", "Gluten"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1633436375795-12b3b339712f?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "mn-duck",
      category: "mains",
      name: "Confit de pato lento",
      description: "Gastrique de cereza, hojas de achicoria y migas de trigo sarraceno.",
      price: "$44",
      calories: 590,
      macros: { protein: 39, fat: 33, carbs: 29 },
      ingredients: ["Pato", "cereza ácida", "achicoria", "trigo sarraceno", "jugo de pato"],
      allergens: ["Ninguno"],
      tags: [],
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "mn-celeriac",
      category: "mains",
      name: "Steak de apionabo",
      description: "Glaseado de cebolla quemada, ragú de lentejas y pistou de hierbas.",
      price: "$31",
      calories: 390,
      macros: { protein: 14, fat: 12, carbs: 56 },
      ingredients: ["Apionabo", "lenteja verde", "cebolla", "perejil", "aceite de oliva"],
      allergens: ["Apio"],
      tags: ["vegan", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "mn-veal",
      category: "mains",
      name: "Solomillo de ternera lechal",
      description: "Crema de chirivía, hoja de alcaparra y salsa de tuétano.",
      price: "$49",
      calories: 640,
      macros: { protein: 48, fat: 38, carbs: 16 },
      ingredients: ["Ternera", "chirivía", "tuétano", "alcaparra", "tomillo"],
      allergens: ["Lácteos"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "ds-lemon",
      category: "desserts",
      name: "Tarta de limón y verbena",
      description: "Merengue tostado y glaseado de bergamota.",
      price: "$16",
      calories: 360,
      macros: { protein: 6, fat: 17, carbs: 44 },
      ingredients: ["Limón", "verbena", "huevo", "mantequilla", "harina de trigo"],
      allergens: ["Huevo", "Lácteos", "Gluten"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "ds-souffle",
      category: "desserts",
      name: "Soufflé de chocolate negro",
      description: "Cacao de origen único y centro de caramelo salado.",
      price: "$18",
      calories: 420,
      macros: { protein: 8, fat: 21, carbs: 52 },
      ingredients: ["Chocolate negro", "huevo", "nata", "azúcar", "sal marina"],
      allergens: ["Huevo", "Lácteos"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
      chefPick: true,
    },
    {
      id: "ds-semifreddo",
      category: "desserts",
      name: "Semifrío de pistacho",
      description: "Cítrico confitado y crumble sablé de almendra.",
      price: "$15",
      calories: 390,
      macros: { protein: 7, fat: 24, carbs: 36 },
      ingredients: ["Pistacho", "almendra", "nata", "piel cítrica", "vainilla"],
      allergens: ["Lácteos", "Frutos secos", "Huevo"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "ds-pear",
      category: "desserts",
      name: "Pera de invierno pochada",
      description: "Jarabe de azafrán, vainilla y praliné de avena.",
      price: "$14",
      calories: 290,
      macros: { protein: 4, fat: 8, carbs: 50 },
      ingredients: ["Pera", "azafrán", "vainilla", "avena", "miel"],
      allergens: ["Gluten"],
      tags: ["low-calorie"],
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "dr-kombucha",
      category: "drinks",
      name: "Kombucha de la casa",
      description: "Fermento de té verde con membrillo y flor de saúco.",
      price: "$11",
      calories: 90,
      macros: { protein: 0, fat: 0, carbs: 20 },
      ingredients: ["Té verde", "membrillo", "flor de saúco", "cultivo kombucha"],
      allergens: ["Ninguno"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "dr-spritz",
      category: "drinks",
      name: "Spritz de pomelo ahumado",
      description: "Cordial cítrico, humo de romero y brut espumoso.",
      price: "$14",
      calories: 160,
      macros: { protein: 0, fat: 0, carbs: 16 },
      ingredients: ["Pomelo", "vino espumoso", "romero", "cordial cítrico"],
      allergens: ["Sulfitos"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "dr-coldbrew",
      category: "drinks",
      name: "Cold brew tonic",
      description: "Café de origen único, tónica y bruma de piel de naranja.",
      price: "$12",
      calories: 55,
      macros: { protein: 1, fat: 0, carbs: 12 },
      ingredients: ["Café cold brew", "agua tónica", "piel de naranja"],
      allergens: ["Ninguno"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "dr-cooler",
      category: "drinks",
      name: "Cooler de pepino y saúco",
      description: "Pepino prensado, flor de saúco y destilado de menta.",
      price: "$10",
      calories: 70,
      macros: { protein: 1, fat: 0, carbs: 16 },
      ingredients: ["Pepino", "flor de saúco", "menta", "lima"],
      allergens: ["Ninguno"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "wn-chablis",
      category: "wine",
      name: "Chablis Premier Cru 2021",
      description: "Chardonnay mineral con final salino.",
      price: "$19 / copa",
      calories: 122,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Uva Chardonnay"],
      allergens: ["Sulfitos"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "wn-rioja",
      category: "wine",
      name: "Rioja Reserva 2018",
      description: "Tempranillo con fruta negra y especia de cedro.",
      price: "$21 / copa",
      calories: 126,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Uva Tempranillo"],
      allergens: ["Sulfitos"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "wn-brunello",
      category: "wine",
      name: "Brunello di Montalcino 2017",
      description: "Sangiovese estructurado con tabaco y cereza seca.",
      price: "$26 / copa",
      calories: 128,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Uva Sangiovese"],
      allergens: ["Sulfitos"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "wn-etna",
      category: "wine",
      name: "Etna Bianco 2022",
      description: "Blanco volcánico con notas cítricas y minerales.",
      price: "$18 / copa",
      calories: 120,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Uva Carricante"],
      allergens: ["Sulfitos"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
  ],
  pairings: [
    {
      dishId: "mn-seabass",
      wineId: "wn-chablis",
      note: "El final salino limpia el caldo de azafrán con precisión.",
    },
    {
      dishId: "mn-lamb",
      wineId: "wn-rioja",
      note: "La especia de cedro refuerza el jugo al romero.",
    },
    {
      dishId: "mn-risotto",
      wineId: "wn-etna",
      note: "La frescura volcánica equilibra la riqueza de la trufa.",
    },
    {
      dishId: "mn-veal",
      wineId: "wn-brunello",
      note: "Taninos firmes para la profundidad del tuétano.",
    },
    {
      dishId: "st-scallop",
      wineId: "wn-etna",
      note: "La tensión cítrica refleja yuzu y brillo de melón.",
    },
  ],
};

const ru: MenuContent = {
  ui: {
    title: "Меню",
    subtitle:
      "Полноценная гастрономическая программа для дневного и вечернего сервиса. Фильтруйте по предпочтениям и открывайте каждое блюдо для полного состава и питания.",
    categories: {
      starters: "Закуски",
      mains: "Основные блюда",
      desserts: "Десерты",
      drinks: "Напитки",
      wine: "Вино",
    },
    service: {
      title: "Сервис",
      lunch: "Ланч",
      dinner: "Ужин",
    },
    filters: {
      title: "Фильтры",
      vegetarian: "Вегетарианское",
      vegan: "Веганское",
      glutenFree: "Без глютена",
      spicy: "Острое",
      lowCalorie: "Низкокалорийное",
      clear: "Сбросить",
    },
    nutrition: {
      toggle: "Показать питание",
      kcal: "ккал",
      protein: "Белки",
      fat: "Жиры",
      carbs: "Углеводы",
    },
    details: {
      view: "Подробнее",
      close: "Закрыть",
      ingredients: "Состав",
      allergens: "Аллергены",
      nutrition: "Пищевая ценность",
    },
    specials: {
      title: "Сезонные позиции",
      subtitle: "Доступны ограниченное время, пока продукт в пике.",
    },
    chefPicks: {
      title: "Выбор шефа",
      subtitle: "Фирменные блюда, с которых кухня рекомендует начать.",
    },
    pairings: {
      title: "Винные пары",
      subtitle: "Рекомендации сомелье к ключевым блюдам.",
    },
    tags: {
      vegetarian: "Вегетарианское",
      vegan: "Веганское",
      "gluten-free": "Без глютена",
      spicy: "Острое",
      "low-calorie": "Низкокалорийное",
    },
    noResults: "По текущим фильтрам блюд не найдено. Попробуйте убрать часть фильтров.",
  },
  dishes: [
    {
      id: "st-scallop",
      category: "starters",
      name: "Крудо из гребешка",
      description: "Цитрусовый кошо, компрессованный дынный акцент и прибрежные травы.",
      price: "$23",
      calories: 210,
      macros: { protein: 22, fat: 7, carbs: 13 },
      ingredients: ["Гребешок", "дыня", "юдзу кошо", "кервель", "оливковое масло"],
      allergens: ["Морепродукты"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "st-beet",
      category: "starters",
      name: "Карпаччо из печеной свеклы",
      description: "Козий крем, поджаренный грецкий орех и укропная винегретная нота.",
      price: "$18",
      calories: 250,
      macros: { protein: 8, fat: 15, carbs: 20 },
      ingredients: ["Свекла", "козий сыр", "грецкий орех", "укроп", "хересный уксус"],
      allergens: ["Молоко", "Орехи"],
      tags: ["vegetarian", "gluten-free"],
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "st-mushroom",
      category: "starters",
      name: "Велюто из лесных грибов",
      description: "Пена из белых грибов, масло черного чеснока и ржаной крисп.",
      price: "$19",
      calories: 280,
      macros: { protein: 10, fat: 14, carbs: 28 },
      ingredients: ["Лесные грибы", "шалот", "сливки", "черный чеснок", "рожь"],
      allergens: ["Молоко", "Глютен"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "st-octopus",
      category: "starters",
      name: "Террин из осьминога на углях",
      description: "Копченая эмульсия из перца и маринованные лепестки шалота.",
      price: "$24",
      calories: 265,
      macros: { protein: 25, fat: 9, carbs: 18 },
      ingredients: ["Осьминог", "перец пикильо", "шалот", "петрушка", "лимон"],
      allergens: ["Моллюски"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "st-burrata",
      category: "starters",
      name: "Буррата с heirloom-томатами",
      description: "Жемчуг выдержанного бальзамика и масло стеблей базилика.",
      price: "$21",
      calories: 320,
      macros: { protein: 14, fat: 24, carbs: 12 },
      ingredients: ["Буррата", "томат", "базилик", "бальзамик", "морская соль"],
      allergens: ["Молоко"],
      tags: ["vegetarian", "gluten-free"],
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "mn-seabass",
      category: "mains",
      name: "Сибас а-ля планча",
      description: "Шафраново-фенхелевый бульон, артишок конфи и морской салат.",
      price: "$43",
      calories: 460,
      macros: { protein: 41, fat: 19, carbs: 24 },
      ingredients: ["Сибас", "фенхель", "шафран", "артишок", "рыбный бульон"],
      allergens: ["Рыба"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "mn-lamb",
      category: "mains",
      name: "Седло фермерского ягненка",
      description: "Пюре из обожженного баклажана и насыщенный розмариновый jus.",
      price: "$48",
      calories: 620,
      macros: { protein: 44, fat: 36, carbs: 18 },
      ingredients: ["Ягненок", "баклажан", "розмарин", "мясной jus", "чеснок"],
      allergens: ["Нет"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "mn-risotto",
      category: "mains",
      name: "Ризотто из перловки с трюфелем",
      description: "Выдержанный comte, пепел порея и слайсы черного трюфеля.",
      price: "$36",
      calories: 520,
      macros: { protein: 16, fat: 22, carbs: 60 },
      ingredients: ["Перловка", "comte", "порей", "черный трюфель", "овощной бульон"],
      allergens: ["Молоко", "Глютен"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1633436375795-12b3b339712f?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      chefPick: true,
    },
    {
      id: "mn-duck",
      category: "mains",
      name: "Томленый утиный конфи",
      description: "Вишневый гастрик, листья цикория и крошка из гречки.",
      price: "$44",
      calories: 590,
      macros: { protein: 39, fat: 33, carbs: 29 },
      ingredients: ["Утка", "кислая вишня", "цикорий", "гречка", "утиный jus"],
      allergens: ["Нет"],
      tags: [],
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "mn-celeriac",
      category: "mains",
      name: "Стейк из корня сельдерея",
      description: "Глазурь из жженого лука, рагу из чечевицы и травяной pistou.",
      price: "$31",
      calories: 390,
      macros: { protein: 14, fat: 12, carbs: 56 },
      ingredients: ["Корень сельдерея", "зеленая чечевица", "лук", "петрушка", "оливковое масло"],
      allergens: ["Сельдерей"],
      tags: ["vegan", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "mn-veal",
      category: "mains",
      name: "Телячья вырезка молочного откорма",
      description: "Крем из пастернака, лист каперса и соус из костного мозга.",
      price: "$49",
      calories: 640,
      macros: { protein: 48, fat: 38, carbs: 16 },
      ingredients: ["Телятина", "пастернак", "костный мозг", "каперс", "тимьян"],
      allergens: ["Молоко"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "ds-lemon",
      category: "desserts",
      name: "Тарт с лимоном и вербеной",
      description: "Поджаренная меренга и бергамотовая глазурь.",
      price: "$16",
      calories: 360,
      macros: { protein: 6, fat: 17, carbs: 44 },
      ingredients: ["Лимон", "вербена", "яйцо", "сливочное масло", "пшеничная мука"],
      allergens: ["Яйцо", "Молоко", "Глютен"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "ds-souffle",
      category: "desserts",
      name: "Суфле из темного шоколада",
      description: "Какао single-origin и центр из соленой карамели.",
      price: "$18",
      calories: 420,
      macros: { protein: 8, fat: 21, carbs: 52 },
      ingredients: ["Темный шоколад", "яйцо", "сливки", "сахар", "морская соль"],
      allergens: ["Яйцо", "Молоко"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
      chefPick: true,
    },
    {
      id: "ds-semifreddo",
      category: "desserts",
      name: "Фисташковый семифреддо",
      description: "Цукаты цитруса и миндальная sablé-крошка.",
      price: "$15",
      calories: 390,
      macros: { protein: 7, fat: 24, carbs: 36 },
      ingredients: ["Фисташка", "миндаль", "сливки", "цитрусовая цедра", "ваниль"],
      allergens: ["Молоко", "Орехи", "Яйцо"],
      tags: ["vegetarian"],
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "ds-pear",
      category: "desserts",
      name: "Пошированная зимняя груша",
      description: "Шафрановый сироп, ваниль и овсяное пралине.",
      price: "$14",
      calories: 290,
      macros: { protein: 4, fat: 8, carbs: 50 },
      ingredients: ["Груша", "шафран", "ваниль", "овес", "мед"],
      allergens: ["Глютен"],
      tags: ["low-calorie"],
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
      seasonal: true,
    },
    {
      id: "dr-kombucha",
      category: "drinks",
      name: "Домашняя комбуча",
      description: "Ферментация зеленого чая с айвой и бузиной.",
      price: "$11",
      calories: 90,
      macros: { protein: 0, fat: 0, carbs: 20 },
      ingredients: ["Зеленый чай", "айва", "бузина", "комбуча-культура"],
      allergens: ["Нет"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "dr-spritz",
      category: "drinks",
      name: "Копченый грейпфрутовый спритц",
      description: "Цитрусовый кордиал, дым розмарина и игристый brut.",
      price: "$14",
      calories: 160,
      macros: { protein: 0, fat: 0, carbs: 16 },
      ingredients: ["Грейпфрут", "игристое вино", "розмарин", "цитрусовый кордиал"],
      allergens: ["Сульфиты"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "dr-coldbrew",
      category: "drinks",
      name: "Тоник с cold brew",
      description: "Кофе single-origin, тоник и апельсиновый mist.",
      price: "$12",
      calories: 55,
      macros: { protein: 1, fat: 0, carbs: 12 },
      ingredients: ["Cold brew", "тоник", "цедра апельсина"],
      allergens: ["Нет"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "dr-cooler",
      category: "drinks",
      name: "Кулер огурец-бузина",
      description: "Прессованный огурец, бузина и дистиллят мяты.",
      price: "$10",
      calories: 70,
      macros: { protein: 1, fat: 0, carbs: 16 },
      ingredients: ["Огурец", "бузина", "мята", "лайм"],
      allergens: ["Нет"],
      tags: ["vegan", "gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "wn-chablis",
      category: "wine",
      name: "Chablis Premier Cru 2021",
      description: "Минеральный Chardonnay с солоноватым финишем.",
      price: "$19 / бокал",
      calories: 122,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Виноград Chardonnay"],
      allergens: ["Сульфиты"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
    {
      id: "wn-rioja",
      category: "wine",
      name: "Rioja Reserva 2018",
      description: "Tempranillo с темными ягодами и кедровой специей.",
      price: "$21 / бокал",
      calories: 126,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Виноград Tempranillo"],
      allergens: ["Сульфиты"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "wn-brunello",
      category: "wine",
      name: "Brunello di Montalcino 2017",
      description: "Структурный Sangiovese с нотами табака и сушеной вишни.",
      price: "$26 / бокал",
      calories: 128,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Виноград Sangiovese"],
      allergens: ["Сульфиты"],
      tags: ["gluten-free"],
      image:
        "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1400&q=80",
      available: ["dinner"],
    },
    {
      id: "wn-etna",
      category: "wine",
      name: "Etna Bianco 2022",
      description: "Вулканический белый купаж с цитрусом и каменной минеральностью.",
      price: "$18 / бокал",
      calories: 120,
      macros: { protein: 0, fat: 0, carbs: 4 },
      ingredients: ["Виноград Carricante"],
      allergens: ["Сульфиты"],
      tags: ["gluten-free", "low-calorie"],
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=80",
      available: ["lunch", "dinner"],
    },
  ],
  pairings: [
    {
      dishId: "mn-seabass",
      wineId: "wn-chablis",
      note: "Соленый финиш точно очищает шафрановый бульон.",
    },
    {
      dishId: "mn-lamb",
      wineId: "wn-rioja",
      note: "Кедровая специя поддерживает розмариновый jus.",
    },
    {
      dishId: "mn-risotto",
      wineId: "wn-etna",
      note: "Вулканическая свежесть балансирует трюфельную насыщенность.",
    },
    {
      dishId: "mn-veal",
      wineId: "wn-brunello",
      note: "Плотные танины удерживают глубину костного мозга.",
    },
    {
      dishId: "st-scallop",
      wineId: "wn-etna",
      note: "Цитрусовое напряжение подчеркивает юдзу и дыню.",
    },
  ],
};

const menuByLocale: Record<Locale, MenuContent> = {
  en,
  es,
  ru,
};

export const getMenuContent = (locale: Locale): MenuContent => menuByLocale[locale];
