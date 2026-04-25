"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import type { Locale } from "@/lib/i18n";
import type {
  Dish,
  DishTag,
  MenuCategory,
  MenuContent,
  ServicePeriod,
} from "@/lib/menu-content";

const categoryOrder: MenuCategory[] = [
  "starters",
  "mains",
  "desserts",
  "drinks",
  "wine",
];

const filterOrder: DishTag[] = [
  "vegetarian",
  "vegan",
  "gluten-free",
  "spicy",
  "low-calorie",
];

const isDishMatchingTag = (dish: Dish, tag: DishTag) => {
  if (tag === "vegetarian") {
    return dish.tags.includes("vegetarian") || dish.tags.includes("vegan");
  }

  return dish.tags.includes(tag);
};

const NutritionLine = ({ label, value }: { label: string; value: number }) => (
  <p className="text-xs text-[var(--muted)]">
    {label}: <span className="text-[var(--foreground)]">{value}g</span>
  </p>
);

export default function MenuExperience({
  locale,
  content,
}: {
  locale: Locale;
  content: MenuContent;
}) {
  const [service, setService] = useState<ServicePeriod>("dinner");
  const [showNutrition, setShowNutrition] = useState(false);
  const [activeFilters, setActiveFilters] = useState<DishTag[]>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");

  const sectionRefs = useRef<Partial<Record<MenuCategory, HTMLElement | null>>>({});

  const dishById = useMemo(() => {
    return content.dishes.reduce<Record<string, Dish>>((acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    }, {});
  }, [content.dishes]);

  const serviceDishes = useMemo(
    () => content.dishes.filter((dish) => dish.available.includes(service)),
    [content.dishes, service],
  );

  const filteredDishes = useMemo(() => {
    if (!activeFilters.length) {
      return serviceDishes;
    }

    return serviceDishes.filter((dish) =>
      activeFilters.every((tag) => isDishMatchingTag(dish, tag)),
    );
  }, [activeFilters, serviceDishes]);

  const categoryMap = useMemo(() => {
    return categoryOrder.map((category) => ({
      category,
      dishes: filteredDishes.filter((dish) => dish.category === category),
    }));
  }, [filteredDishes]);

  const seasonalDishes = useMemo(
    () => filteredDishes.filter((dish) => dish.seasonal).slice(0, 3),
    [filteredDishes],
  );

  const chefDishes = useMemo(
    () => filteredDishes.filter((dish) => dish.chefPick).slice(0, 4),
    [filteredDishes],
  );

  const pairings = useMemo(() => {
    return content.pairings.filter((pairing) => {
      const dish = dishById[pairing.dishId];
      const wine = dishById[pairing.wineId];
      return (
        dish &&
        wine &&
        filteredDishes.some((filtered) => filtered.id === dish.id) &&
        filteredDishes.some((filtered) => filtered.id === wine.id)
      );
    });
  }, [content.pairings, dishById, filteredDishes]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const key = visible.target.getAttribute("data-category") as MenuCategory | null;
        if (key) {
          setActiveCategory(key);
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    categoryOrder.forEach((category) => {
      const node = sectionRefs.current[category];
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [categoryMap]);

  useEffect(() => {
    if (!selectedDish) {
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedDish(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedDish]);

  const toggleFilter = (tag: DishTag) => {
    setActiveFilters((current) =>
      current.includes(tag) ? current.filter((value) => value !== tag) : [...current, tag],
    );
  };

  const scrollToCategory = (category: MenuCategory) => {
    const target = sectionRefs.current[category];
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-12">
      <section className="section-pad section-bg-a border-b border-[var(--border)]">
        <div className="container-shell">
          <h1 className="font-display text-4xl md:text-5xl">{content.ui.title}</h1>
          <p className="mt-4 max-w-4xl text-[var(--muted)]">{content.ui.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              {content.ui.service.title}
            </span>
            <button
              type="button"
              onClick={() => setService("lunch")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                service === "lunch"
                  ? "bg-[var(--accent)] text-[#122019]"
                  : "border border-[var(--border)] text-[var(--muted)]"
              }`}
            >
              {content.ui.service.lunch}
            </button>
            <button
              type="button"
              onClick={() => setService("dinner")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                service === "dinner"
                  ? "bg-[var(--accent)] text-[#122019]"
                  : "border border-[var(--border)] text-[var(--muted)]"
              }`}
            >
              {content.ui.service.dinner}
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              {content.ui.filters.title}
            </span>
            <div className="flex w-full gap-2 overflow-x-auto pb-1 sm:w-auto">
              {filterOrder.map((tag) => {
                const isActive = activeFilters.includes(tag);
                const labelKey =
                  tag === "gluten-free"
                    ? "glutenFree"
                    : tag === "low-calorie"
                      ? "lowCalorie"
                      : tag;

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleFilter(tag)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                      isActive
                        ? "bg-[var(--accent)] text-[#122019]"
                        : "border border-[var(--border)] text-[var(--muted)]"
                    }`}
                  >
                    {content.ui.filters[labelKey as keyof typeof content.ui.filters] as string}
                  </button>
                );
              })}
            </div>

            {activeFilters.length > 0 && (
              <button
                type="button"
                onClick={() => setActiveFilters([])}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                {content.ui.filters.clear}
              </button>
            )}

            <button
              type="button"
              onClick={() => setShowNutrition((value) => !value)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                showNutrition
                  ? "bg-[var(--accent)] text-[#122019]"
                  : "border border-[var(--border)] text-[var(--muted)]"
              }`}
            >
              {content.ui.nutrition.toggle}
            </button>
          </div>
        </div>
      </section>

      {(seasonalDishes.length > 0 || chefDishes.length > 0) && (
        <section className="section-pad section-bg-b">
          <div className="container-shell grid gap-6 lg:grid-cols-2">
          {seasonalDishes.length > 0 && (
            <article className="glass-card rounded-3xl p-6">
              <h2 className="font-display text-3xl">{content.ui.specials.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{content.ui.specials.subtitle}</p>
              <div className="mt-5 space-y-3">
                {seasonalDishes.map((dish) => (
                  <button
                    key={dish.id}
                    type="button"
                    onClick={() => setSelectedDish(dish)}
                    className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] px-4 py-3 text-left hover:bg-white/3"
                  >
                    <div>
                      <p className="font-display text-lg">{dish.name}</p>
                      <p className="text-xs text-[var(--muted)]">{dish.description}</p>
                    </div>
                    <p className="text-sm text-[var(--accent)]">{dish.price}</p>
                  </button>
                ))}
              </div>
            </article>
          )}

          {chefDishes.length > 0 && (
            <article className="glass-card rounded-3xl p-6">
              <h2 className="font-display text-3xl">{content.ui.chefPicks.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{content.ui.chefPicks.subtitle}</p>
              <div className="mt-5 space-y-3">
                {chefDishes.map((dish) => (
                  <button
                    key={dish.id}
                    type="button"
                    onClick={() => setSelectedDish(dish)}
                    className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] px-4 py-3 text-left hover:bg-white/3"
                  >
                    <div>
                      <p className="font-display text-lg">{dish.name}</p>
                      <p className="text-xs text-[var(--muted)]">{dish.description}</p>
                    </div>
                    <p className="text-sm text-[var(--accent)]">{dish.price}</p>
                  </button>
                ))}
              </div>
            </article>
          )}
          </div>
        </section>
      )}

      <div className="container-shell sticky top-20 z-20">
        <div className="glass-card rounded-2xl p-2">
          <div className="flex gap-2 overflow-x-auto">
            {categoryMap
              .filter((entry) => entry.dishes.length > 0)
              .map((entry) => (
                <button
                  key={entry.category}
                  type="button"
                  onClick={() => scrollToCategory(entry.category)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm transition ${
                    activeCategory === entry.category
                      ? "bg-[var(--accent)] text-[#122019]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {content.ui.categories[entry.category]}
                </button>
              ))}
          </div>
        </div>
      </div>

      <section className="section-pad section-bg-c">
        <div className="container-shell space-y-10 pb-4">
        {categoryMap.every((entry) => entry.dishes.length === 0) && (
          <div className="glass-card rounded-2xl p-8 text-center text-[var(--muted)]">
            {content.ui.noResults}
          </div>
        )}

        {categoryMap
          .filter((entry) => entry.dishes.length > 0)
          .map((entry) => (
            <section
              key={entry.category}
              id={`${locale}-${entry.category}`}
              data-category={entry.category}
              ref={(node) => {
                sectionRefs.current[entry.category] = node;
              }}
              className="scroll-mt-36"
            >
              <h2 className="font-display text-3xl md:text-4xl">
                {content.ui.categories[entry.category]}
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {entry.dishes.map((dish) => (
                  <article key={dish.id} className="glass-card group overflow-hidden rounded-2xl">
                    <button type="button" className="w-full text-left" onClick={() => setSelectedDish(dish)}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div
                          className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url('${dish.image}')` }}
                        />
                      </div>

                      <div className="p-5">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h3 className="font-display text-2xl leading-tight">{dish.name}</h3>
                          <p className="text-sm font-semibold text-[var(--accent)]">{dish.price}</p>
                        </div>
                        <p className="text-sm leading-relaxed text-[var(--muted)]">{dish.description}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {dish.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]"
                            >
                              {content.ui.tags[tag]}
                            </span>
                          ))}
                        </div>

                        {showNutrition && (
                          <div className="mt-4 rounded-xl border border-[var(--border)] p-3">
                            <p className="text-xs text-[var(--muted)]">
                              {dish.calories} {content.ui.nutrition.kcal}
                            </p>
                            <div className="mt-1 grid grid-cols-3 gap-2">
                              <NutritionLine label={content.ui.nutrition.protein} value={dish.macros.protein} />
                              <NutritionLine label={content.ui.nutrition.fat} value={dish.macros.fat} />
                              <NutritionLine label={content.ui.nutrition.carbs} value={dish.macros.carbs} />
                            </div>
                          </div>
                        )}

                        <span className="gold-link mt-4 inline-block text-sm">
                          {content.ui.details.view}
                        </span>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {pairings.length > 0 && (
        <section className="section-pad section-bg-d border-t border-[var(--border)]">
          <div className="container-shell">
            <h2 className="font-display text-3xl md:text-4xl">{content.ui.pairings.title}</h2>
            <p className="mt-3 text-[var(--muted)]">{content.ui.pairings.subtitle}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {pairings.map((pairing) => {
                const dish = dishById[pairing.dishId];
                const wine = dishById[pairing.wineId];

                if (!dish || !wine) {
                  return null;
                }

                return (
                  <article key={`${pairing.dishId}-${pairing.wineId}`} className="glass-card rounded-2xl p-5">
                    <p className="font-display text-2xl">{dish.name}</p>
                    <p className="mt-2 text-sm text-[var(--accent)]">{wine.name}</p>
                    <p className="mt-3 text-sm text-[var(--muted)]">{pairing.note}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="glass-card max-h-full w-full max-w-4xl overflow-auto rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[280px] bg-cover bg-center" style={{ backgroundImage: `url('${selectedDish.image}')` }} />
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl">{selectedDish.name}</h3>
                  <button
                    type="button"
                    onClick={() => setSelectedDish(null)}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                  >
                    {content.ui.details.close}
                  </button>
                </div>

                <p className="mt-3 text-[var(--muted)]">{selectedDish.description}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">{selectedDish.price}</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                      {content.ui.details.ingredients}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {selectedDish.ingredients.join(", ")}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                      {content.ui.details.allergens}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {selectedDish.allergens.join(", ")}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                      {content.ui.details.nutrition}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {selectedDish.calories} {content.ui.nutrition.kcal}
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <NutritionLine
                        label={content.ui.nutrition.protein}
                        value={selectedDish.macros.protein}
                      />
                      <NutritionLine label={content.ui.nutrition.fat} value={selectedDish.macros.fat} />
                      <NutritionLine
                        label={content.ui.nutrition.carbs}
                        value={selectedDish.macros.carbs}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
