"use client";

import { useMemo, useState } from "react";

export default function ReservationForm({
  labels,
}: {
  labels: {
    date: string;
    time: string;
    guests: string;
    submit: string;
    successTitle: string;
    successText: string;
  };
}) {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ date: "", time: "", guests: "2" });

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center">
        <p className="font-display text-3xl text-[var(--foreground)]">
          {labels.successTitle}
        </p>
        <p className="mt-3 text-[var(--muted)]">{labels.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-3">
        <label className="grid gap-2 text-sm text-[var(--muted)]">
          {labels.date}
          <input
            required
            type="date"
            min={minDate}
            value={form.date}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, date: event.target.value }))
            }
            className="rounded-xl border border-[var(--border)] bg-black/20 px-3 py-2 text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
          />
        </label>

        <label className="grid gap-2 text-sm text-[var(--muted)]">
          {labels.time}
          <input
            required
            type="time"
            value={form.time}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, time: event.target.value }))
            }
            className="rounded-xl border border-[var(--border)] bg-black/20 px-3 py-2 text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
          />
        </label>

        <label className="grid gap-2 text-sm text-[var(--muted)]">
          {labels.guests}
          <select
            value={form.guests}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, guests: event.target.value }))
            }
            className="rounded-xl border border-[var(--border)] bg-black/20 px-3 py-2 text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
              <option key={count} value={String(count)}>
                {count}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full md:w-auto">
        {labels.submit}
      </button>
    </form>
  );
}
