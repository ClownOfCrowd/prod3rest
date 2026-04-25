"use client";

import { useEffect, useMemo, useState } from "react";

type ReservePrefill = {
  date?: string;
  time?: string;
  guests?: string;
  occasion?: string;
};

export default function FloatingReserveModal({
  labels,
}: {
  labels: {
    fab: string;
    title: string;
    subtitle: string;
    occasion: string;
    occasionPlaceholder: string;
    submit: string;
    close: string;
    successTitle: string;
    successText: string;
    summaryLabel: string;
    date: string;
    time: string;
    guests: string;
  };
}) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "2",
    occasion: "",
  });

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const onOpenRequest = (event: Event) => {
      const customEvent = event as CustomEvent<ReservePrefill>;
      const detail = customEvent.detail ?? {};

      setForm((prev) => ({
        date: detail.date ?? prev.date,
        time: detail.time ?? prev.time,
        guests: detail.guests ?? prev.guests,
        occasion: detail.occasion ?? prev.occasion,
      }));
      setSuccess(false);
      setOpen(true);
    };

    window.addEventListener("aurelien:open-reserve", onOpenRequest);
    return () => window.removeEventListener("aurelien:open-reserve", onOpenRequest);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSuccess(false), 180);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 hidden rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#122019] shadow-xl transition hover:brightness-105 md:inline-flex"
      >
        {labels.fab}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4" onClick={handleClose}>
          <div
            className="glass-card w-full max-w-xl rounded-3xl p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {!success ? (
              <>
                <h3 className="font-display text-3xl">{labels.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{labels.subtitle}</p>

                <form onSubmit={onSubmit} className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm text-[var(--muted)]">
                      {labels.date}
                      <input
                        required
                        type="date"
                        min={minDate}
                        value={form.date}
                        onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))}
                        className="rounded-xl border border-[var(--border)] bg-black/20 px-3 py-2 text-[var(--foreground)]"
                      />
                    </label>

                    <label className="grid gap-2 text-sm text-[var(--muted)]">
                      {labels.time}
                      <input
                        required
                        type="time"
                        value={form.time}
                        onChange={(event) => setForm((prev) => ({ ...prev, time: event.target.value }))}
                        className="rounded-xl border border-[var(--border)] bg-black/20 px-3 py-2 text-[var(--foreground)]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm text-[var(--muted)]">
                      {labels.guests}
                      <select
                        value={form.guests}
                        onChange={(event) =>
                          setForm((prev) => ({ ...prev, guests: event.target.value }))
                        }
                        className="rounded-xl border border-[var(--border)] bg-black/20 px-3 py-2 text-[var(--foreground)]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                          <option key={count} value={String(count)}>
                            {count}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-2 text-sm text-[var(--muted)]">
                      {labels.occasion}
                      <input
                        value={form.occasion}
                        onChange={(event) =>
                          setForm((prev) => ({ ...prev, occasion: event.target.value }))
                        }
                        placeholder={labels.occasionPlaceholder}
                        className="rounded-xl border border-[var(--border)] bg-black/20 px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)]"
                      />
                    </label>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button type="submit" className="btn-primary">
                      {labels.submit}
                    </button>
                    <button type="button" onClick={handleClose} className="btn-secondary">
                      {labels.close}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div>
                <h3 className="font-display text-3xl text-[var(--foreground)]">{labels.successTitle}</h3>
                <p className="mt-2 text-[var(--muted)]">{labels.successText}</p>
                <div className="mt-5 rounded-2xl border border-[var(--border)] p-4 text-sm text-[var(--muted)]">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                    {labels.summaryLabel}
                  </p>
                  <p className="mt-2">
                    {labels.date}: {form.date || "-"}
                  </p>
                  <p>
                    {labels.time}: {form.time || "-"}
                  </p>
                  <p>
                    {labels.guests}: {form.guests}
                  </p>
                  {form.occasion && (
                    <p>
                      {labels.occasion}: {form.occasion}
                    </p>
                  )}
                </div>
                <button type="button" onClick={handleClose} className="btn-primary mt-5">
                  {labels.close}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
