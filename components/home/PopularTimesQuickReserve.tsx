"use client";

export default function PopularTimesQuickReserve({
  times,
}: {
  times: string[];
}) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
      {times.map((slot) => (
        <li key={slot}>
          <button
            type="button"
            onClick={() => {
              const timeMatch = slot.match(/\d{2}:\d{2}/);
              const date = new Date();
              if (timeMatch?.[0]) {
                const [hour, minute] = timeMatch[0].split(":").map(Number);
                if (!Number.isNaN(hour) && !Number.isNaN(minute)) {
                  date.setHours(hour, minute, 0, 0);
                }
              }

              const dateString = date.toISOString().split("T")[0];
              const timeString =
                timeMatch?.[0] ??
                `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

              window.dispatchEvent(
                new CustomEvent("aurelien:open-reserve", {
                  detail: {
                    date: dateString,
                    time: timeString,
                    occasion: slot,
                  },
                }),
              );
            }}
            className="text-left text-[var(--muted)] underline decoration-transparent underline-offset-4 transition hover:decoration-[var(--accent)] hover:text-[var(--foreground)]"
          >
            {slot}
          </button>
        </li>
      ))}
    </ul>
  );
}
