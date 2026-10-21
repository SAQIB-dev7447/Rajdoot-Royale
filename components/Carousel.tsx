"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type CarouselProps = {
  items: ReactNode[];
  label: string;
  className?: string;
};

export default function Carousel({ items, label, className = "" }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const resetTimerRef = useRef<number | undefined>(undefined);
  const moveRef = useRef<(direction: -1 | 1) => void>(() => {});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const getStride = useCallback(() => {
    const viewport = viewportRef.current;
    const firstSlide = viewport?.querySelector<HTMLElement>("[data-carousel-slide]");
    if (!viewport || !firstSlide) return 0;
    const track = viewport.querySelector<HTMLElement>(".carousel-track");
    const gap = Number.parseFloat(track ? getComputedStyle(track).columnGap : "0") || 0;
    return firstSlide.getBoundingClientRect().width + gap;
  }, []);

  const move = useCallback((direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const stride = getStride();
    if (!viewport || !stride || items.length < 2) return;

    const currentIndex = activeIndexRef.current;
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    const behavior: ScrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    if (direction < 0 && currentIndex === 0) {
      viewport.style.scrollBehavior = "auto";
      viewport.scrollLeft = items.length * stride;
      viewport.style.scrollBehavior = "";
      requestAnimationFrame(() => viewport.scrollBy({ left: -stride, behavior }));
    } else {
      viewport.scrollBy({ left: direction * stride, behavior });
    }

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    if (resetTimerRef.current !== undefined) window.clearTimeout(resetTimerRef.current);
    if (direction > 0 && currentIndex === items.length - 1) {
      resetTimerRef.current = window.setTimeout(() => {
        if (viewport.scrollLeft >= items.length * stride - 2) {
          viewport.style.scrollBehavior = "auto";
          viewport.scrollLeft = 0;
          viewport.style.scrollBehavior = "";
        }
      }, 700);
    }
  }, [getStride, items.length]);

  const updatePosition = useCallback(() => {
    const viewport = viewportRef.current;
    const stride = getStride();
    if (!viewport || !stride || items.length === 0) return;
    const index = Math.round(viewport.scrollLeft / stride) % items.length;
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, [getStride, items.length]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    updatePosition();
    viewport.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    return () => {
      viewport.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [updatePosition]);

  useEffect(() => {
    moveRef.current = move;
  }, [move]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setIsPlaying(!preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!isPlaying || items.length < 2) return;
    const timer = window.setInterval(() => moveRef.current(1), 5000);
    return () => window.clearInterval(timer);
  }, [isPlaying, items.length]);

  useEffect(() => () => {
    if (resetTimerRef.current !== undefined) window.clearTimeout(resetTimerRef.current);
  }, []);

  return <div className={`carousel ${className}`}>
    <div className="carousel-viewport" ref={viewportRef} role="region" aria-label={label} aria-roledescription="carousel" tabIndex={0}>
      <div className="carousel-track">{[...items, ...items].map((item, index) => {
        const isClone = index >= items.length;
        const originalIndex = index % items.length;
        return <div className="carousel-slide" data-carousel-slide key={`${originalIndex}-${isClone ? "clone" : "original"}`} role="group" aria-roledescription="slide" aria-label={`${originalIndex + 1} of ${items.length}`} aria-hidden={isClone} inert={isClone || undefined}>{item}</div>;
      })}</div>
    </div>
    {items.length > 1 && <div className="carousel-controls">
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label.toLowerCase()}`}><span aria-hidden="true">←</span></button>
      <span className="carousel-position" aria-live="off">{String(activeIndex + 1).padStart(2, "0")} <i /> {String(items.length).padStart(2, "0")}</span>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${label.toLowerCase()}`}><span aria-hidden="true">→</span></button>
      <button className="carousel-toggle" type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-label={`${isPlaying ? "Pause" : "Play"} ${label.toLowerCase()} auto-rotation`}><span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span></button>
    </div>}
  </div>;
}
