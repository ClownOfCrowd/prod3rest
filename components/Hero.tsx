"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { Locale } from "@/lib/i18n";

export default function Hero({
  locale,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  microcopy,
  scrollIndicator,
  quickLinks,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  microcopy?: string;
  scrollIndicator?: string;
  quickLinks?: Array<{ label: string; href: string }>;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(11,11,12,0.88), rgba(11,11,12,0.55)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="container-shell relative section-pad min-h-[74vh] content-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl leading-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#e7e1d4] md:text-lg"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href={`/${locale}/reservations`} className="btn-primary">
            {primaryCta}
          </Link>
          <Link href={`/${locale}/menu`} className="btn-secondary">
            {secondaryCta}
          </Link>
        </motion.div>

        {microcopy && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 text-sm text-[var(--muted)]"
          >
            {microcopy}
          </motion.p>
        )}

        {scrollIndicator && (
          <motion.a
            href="#home-story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            {scrollIndicator}
          </motion.a>
        )}

        {quickLinks && quickLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.13em] text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
