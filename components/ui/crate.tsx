import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CrateProps = {
  children: ReactNode;
  className?: string;
  /** Hand-stacked tilt, e.g. "-1.4deg" — applied via Tailwind's `rotate`
   *  CSS property (arbitrary value), never mixed with a `transform` set by
   *  GSAP on the same element (see .reveal / .crate-drop in reveal-init). */
  rotate?: string;
  /** Vertical hand-stacked offset in px, positive = pushed down. */
  offsetY?: number;
  dark?: boolean;
  /** Adds a stamped corner tag, e.g. "BR. 01" or "EKO" */
  tag?: string;
  animated?: boolean;
  style?: CSSProperties;
};

export function Crate({
  children,
  className,
  rotate = "0deg",
  offsetY = 0,
  dark = false,
  tag,
  animated = true,
  style,
}: CrateProps) {
  return (
    <div
      className={cn(
        dark ? "crate-dark" : "crate",
        animated && "crate-drop",
        "relative",
        className
      )}
      style={{
        rotate,
        translate: offsetY ? `0 ${offsetY}px` : undefined,
        ...style,
      }}
    >
      {/* Positioned inside the box (not poking above the border) so it
          reads correctly whether or not this crate clips overflow for a
          photo — a corner tag stapled to the inside of the crate lid. */}
      {tag && (
        <span
          className="stamp-label absolute top-3 left-3 z-10 px-2.5 py-1 text-[0.62rem] rotate-[-2deg]"
          style={{ boxShadow: "0 3px 6px rgba(42,33,23,0.25)" }}
        >
          {tag}
        </span>
      )}
      {/* corner braces — decorative only, own elements so Tailwind's
          `absolute` on them never shares a node with a custom-CSS position */}
      <span className="crate-brace absolute -left-[3px] -top-[3px] h-3 w-3 rounded-[2px]" />
      <span className="crate-brace absolute -right-[3px] -top-[3px] h-3 w-3 rounded-[2px]" />
      <span className="crate-brace absolute -left-[3px] -bottom-[3px] h-3 w-3 rounded-[2px]" />
      <span className="crate-brace absolute -right-[3px] -bottom-[3px] h-3 w-3 rounded-[2px]" />
      {children}
    </div>
  );
}
