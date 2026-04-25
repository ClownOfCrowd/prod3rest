"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="section-pad section-bg-b border-t border-[var(--border)]">
      <div className="container-shell">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <div className="mt-6 space-y-3">
          {items.map((item, index) => {
            const open = index === openIndex;
            return (
              <article key={item.q} className="glass-card rounded-2xl p-4 md:p-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="font-display text-xl">{item.q}</span>
                  <span className="text-[var(--accent)]">{open ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
