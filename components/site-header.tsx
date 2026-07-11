"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#prica", label: "Priča" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#atmosfera", label: "Atmosfera" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // NOTE: the mobile nav below is rendered as a SIBLING of <header>, both
  // inside this top-level fragment — never nested inside <header>. The
  // header is intentionally an opaque wood-plank bar (no backdrop-blur), so
  // it can never create the stacking/containing-block trap that clips a
  // fixed-position child. Kept as a sibling anyway as a structural safety
  // net for this component pattern.
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding,box-shadow] duration-300 ${
          scrolled ? "py-2.5 shadow-[0_10px_24px_-16px_rgba(42,33,23,0.55)]" : "py-4"
        }`}
        style={{
          backgroundColor: "var(--wood-dark)",
          backgroundImage: "var(--crate-slat-gradient)",
          borderBottom: "3px solid var(--wood)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#" className="font-display text-xl md:text-2xl" style={{ color: "var(--background)" }}>
            Eko <em className="italic" style={{ color: "var(--paprika)" }}>Dalmacija</em>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.8rem] tracking-wide transition-colors hover:text-[var(--paprika)]"
                style={{ color: "var(--wood-light)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-sm border-2 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] transition-colors hover:bg-[var(--paprika)] hover:text-[var(--background)] hover:border-[var(--paprika)]"
              style={{ borderColor: "var(--wood-light)", color: "var(--background)" }}
            >
              Posjeti nas
            </a>
          </nav>

          <button
            aria-label="Izbornik"
            aria-expanded={open}
            className="md:hidden z-50 text-2xl leading-none"
            style={{ color: "var(--background)" }}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <nav
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-400 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "var(--wood-dark)",
          backgroundImage: "var(--crate-slat-gradient)",
        }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl"
            style={{ color: "var(--background)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          onClick={() => setOpen(false)}
          className="rounded-sm px-6 py-3 text-sm uppercase tracking-[0.14em]"
          style={{ background: "var(--paprika)", color: "var(--background)" }}
        >
          Posjeti nas
        </a>
      </nav>
    </>
  );
}
