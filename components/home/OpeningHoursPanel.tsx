"use client";

import { useMemo } from "react";

type OpeningHours = {
  title: string;
  openNow: string;
  closedNow: string;
  today: string;
  schedule: Array<{ day: string; hours: string }>;
};

const hasServiceNow = (hours: string, nowMinutes: number): boolean => {
  if (/closed|выходной|cerrado/i.test(hours)) {
    return false;
  }

  const windows = hours.split(",").map((item) => item.trim());
  return windows.some((window) => {
    const [start, end] = window.split("-").map((value) => value.trim());
    if (!start || !end) {
      return false;
    }

    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    if (
      Number.isNaN(startHour) ||
      Number.isNaN(startMinute) ||
      Number.isNaN(endHour) ||
      Number.isNaN(endMinute)
    ) {
      return false;
    }

    const from = startHour * 60 + startMinute;
    const to = endHour * 60 + endMinute;

    if (to >= from) {
      return nowMinutes >= from && nowMinutes <= to;
    }

    return nowMinutes >= from || nowMinutes <= to;
  });
};

export default function OpeningHoursPanel({ content }: { content: OpeningHours }) {
  const now = useMemo(() => new Date(), []);
  const todayIndex = now.getDay();
  const mondayBasedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const todayHours = content.schedule[mondayBasedIndex]?.hours ?? "";
  const isOpen = hasServiceNow(todayHours, nowMinutes);

  return (
    <article className="glass-card rounded-3xl p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <h3 className="font-display text-2xl sm:text-3xl">{content.title}</h3>
        <span
          className={`self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] sm:self-auto sm:tracking-[0.15em] ${
            isOpen
              ? "bg-[var(--accent)]/25 text-[var(--accent)]"
              : "border border-[var(--border)] text-[var(--muted)]"
          }`}
        >
          {isOpen ? content.openNow : content.closedNow}
        </span>
      </div>

      <ul className="mt-5 space-y-2 text-sm">
        {content.schedule.map((slot, index) => {
          const isToday = index === mondayBasedIndex;
          return (
            <li
              key={slot.day}
              className={`grid gap-1 rounded-xl px-3 py-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center ${
                isToday ? "border border-[var(--border)] bg-white/3" : ""
              }`}
            >
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="text-[var(--foreground)]">{slot.day}</span>
                {isToday && (
                  <span className="rounded-full border border-[var(--accent)]/35 px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-[var(--accent)]">
                    {content.today}
                  </span>
                )}
              </div>
              <span className="break-words text-[var(--muted)] md:text-right">{slot.hours}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
