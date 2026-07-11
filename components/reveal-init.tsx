"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealInit() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Progressive enhancement: `.reveal` and `.crate-drop` elements are
    // visible by default (see globals.css — nothing sets opacity: 0 in CSS).
    // If JS is slow, blocked, or hydration fails, visitors still see full
    // content instead of a blank page. GSAP only opts elements INTO a
    // hidden starting point here, at runtime, via gsap.from().
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // Crates "drop" onto the stall — bouncier ease, larger travel. Static
      // hand-stacked rotation stays on the element the whole time via a
      // Tailwind `rotate-[]` utility (its own CSS `rotate` property, not
      // `transform`), so GSAP animating y/opacity here never fights it.
      gsap.utils.toArray<HTMLElement>(".crate-drop").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: -40,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      const heroImg = document.getElementById("heroImg");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.1 },
          { scale: 1.02, duration: 2.2, ease: "power2.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
