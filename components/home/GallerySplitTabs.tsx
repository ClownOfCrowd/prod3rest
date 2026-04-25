"use client";

import { useState } from "react";

type SplitContent = {
  title: string;
  tabs: {
    food: string;
    interior: string;
    atmosphere: string;
  };
  items: {
    food: Array<{ caption: string; image: string }>;
    interior: Array<{ caption: string; image: string }>;
    atmosphere: Array<{ caption: string; image: string }>;
  };
};

type Tab = "food" | "interior" | "atmosphere";

export default function GallerySplitTabs({ content }: { content: SplitContent }) {
  const [tab, setTab] = useState<Tab>("food");

  return (
    <section className="section-pad border-y border-[var(--border)] bg-[#10171d]/55">
      <div className="container-shell">
        <h2 className="font-display text-3xl md:text-4xl">{content.title}</h2>
        <div className="mt-5 flex w-full gap-2 overflow-x-auto">
          {(["food", "interior", "atmosphere"] as Tab[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                tab === key
                  ? "bg-[var(--accent)] text-[#13231b]"
                  : "border border-[var(--border)] text-[var(--muted)]"
              }`}
            >
              {content.tabs[key]}
            </button>
          ))}
        </div>

        <div key={tab} className="mt-6 grid gap-4 md:grid-cols-2">
          {content.items[tab].map((item, index) => (
            <article
              key={`${tab}-${item.caption}`}
              className="overflow-hidden rounded-2xl border border-[var(--border)] opacity-0"
              style={{
                animation: `galleryCardIn 420ms ease-out ${index * 90}ms forwards`,
              }}
            >
              <div
                className="aspect-[16/10] bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <p className="bg-[#131c22] px-4 py-3 text-sm text-[var(--muted)]">{item.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
