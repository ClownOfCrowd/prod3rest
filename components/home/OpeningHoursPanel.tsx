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
    <article className="glass-card rounded-3xl p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-3xl">{content.title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
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
              className={`flex items-center justify-between rounded-xl px-3 py-2 ${
                isToday ? "border border-[var(--border)] bg-white/3" : ""
              }`}
            >
              <span className="text-[var(--foreground)]">{slot.day}</span>
              <span className="text-[var(--muted)]">{slot.hours}</span>
              {isToday && (
                <span className="ml-3 text-[10px] uppercase tracking-[0.13em] text-[var(--accent)]">
                  {content.today}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
