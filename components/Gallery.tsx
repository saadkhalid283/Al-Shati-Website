"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Snowflake } from "lucide-react";
import { galleryData } from "@/lib/data";
import type { SiteProps } from "@/lib/site-props";
import { SectionHead } from "./SectionHead";

const AUTOPLAY_MS = 3000;
const TRANSITION_MS = 600;

export function Gallery({ L, isAr }: SiteProps) {
  const slides = galleryData;
  const n = slides.length;
  // index runs 0..n (the n-th is a clone of slide 0 for a seamless forward loop)
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceRef.current) setAnimate(false);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused || reduceRef.current) return;
    const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Seamless wrap: after sliding onto the clone, snap back to real first slide.
  const onTransitionEnd = useCallback(() => {
    if (index === n) {
      setAnimate(false);
      setIndex(0);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      );
    }
  }, [index, n]);

  const goTo = (i: number) => {
    if (reduceRef.current) setAnimate(false);
    else setAnimate(true);
    setIndex(i);
  };
  const next = () => goTo(index >= n ? 1 : index + 1);
  const prev = () => goTo(index <= 0 ? n - 1 : index - 1);

  // Track always laid out LTR; sign keeps mechanics simple, captions stay RTL-aware.
  const trackStyle: React.CSSProperties = {
    display: "flex",
    direction: "ltr",
    transform: `translateX(-${index * 100}%)`,
    transition: animate ? `transform ${TRANSITION_MS}ms cubic-bezier(0.5,0,0.2,1)` : "none",
  };

  const activeDot = index % n;
  const renderSlides = [...slides, slides[0]]; // + clone

  return (
    <section
      id="gallery"
      data-reveal
      className="section-wrap"
      style={{ background: "linear-gradient(180deg, #fff 0%, var(--surface) 100%)" }}
    >
      <div className="section-inner" style={{ maxWidth: 980 }}>
        <SectionHead eyebrow={L.galleryEyebrow} title={L.galleryTitle} sub={L.gallerySub} />

        <div
          className="gallery-viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <div style={trackStyle} onTransitionEnd={onTransitionEnd}>
            {renderSlides.map((s, i) => (
              <div className="gallery-slide" key={i} aria-hidden={i !== index}>
                <img
                  src={s.img}
                  alt={isAr ? s.ar : s.en}
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
                <div className="gallery-caption" style={{ textAlign: isAr ? "right" : "left" }}>
                  <div className="gallery-chip">
                    <Snowflake size={13} color="var(--gold-2)" strokeWidth={2} />
                    {L.brand}
                  </div>
                  <div className="gallery-cap-text">{isAr ? s.ar : s.en}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            className="gallery-arrow gallery-arrow--prev"
            onClick={prev}
            aria-label="Previous"
          >
            {isAr ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-arrow--next"
            onClick={next}
            aria-label="Next"
          >
            {isAr ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
          </button>
        </div>

        {/* Dots */}
        <div className="gallery-dots">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`gallery-dot${activeDot === i ? " gallery-dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              aria-current={activeDot === i ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
