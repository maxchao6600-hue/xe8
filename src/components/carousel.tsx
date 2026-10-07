"use client";

import { useRef } from "react";

export function Carousel({
  label,
  previousLabel,
  nextLabel,
  children,
}: {
  label: string;
  previousLabel: string;
  nextLabel: string;
  children: React.ReactNode;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    const node = scroller.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({
      left: direction * Math.max(node.clientWidth * 0.8, 240),
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label={previousLabel}
          onClick={() => move(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-gold"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          onClick={() => move(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-gold"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div
        ref={scroller}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none]"
      >
        {children}
      </div>
    </div>
  );
}
