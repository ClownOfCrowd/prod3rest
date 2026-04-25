"use client";

import { useState, useSyncExternalStore } from "react";

import type { Dictionary } from "@/lib/dictionaries";

const CONSENT_KEY = "cookie-consent-aurelien";

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
};

const getSnapshot = () => localStorage.getItem(CONSENT_KEY) ?? "unset";
const getServerSnapshot = () => "hydrating";

export default function CookieBanner({ dict }: { dict: Dictionary }) {
  const [dismissed, setDismissed] = useState(false);
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleDecision = (decision: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, decision);
    setDismissed(true);
  };

  if (dismissed || consent === "hydrating" || consent !== "unset") {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-2xl border border-[var(--border)] bg-[#141417]/95 p-4 shadow-2xl backdrop-blur">
      <p className="font-display text-lg text-[var(--foreground)]">{dict.cookie.title}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{dict.cookie.text}</p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          className="btn-primary flex-1"
          onClick={() => handleDecision("accepted")}
        >
          {dict.cookie.accept}
        </button>
        <button
          type="button"
          className="btn-secondary flex-1"
          onClick={() => handleDecision("declined")}
        >
          {dict.cookie.decline}
        </button>
      </div>
    </div>
  );
}
