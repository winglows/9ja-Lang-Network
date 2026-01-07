"use client";

import React, { useEffect, useRef, useState } from "react";

import img1 from "../../assets/slide-1.jpg";
import img2 from "../../assets/slide-2.jpg";
import img3 from "../../assets/slide-3.jpg";

type Slide = {
  image: string;
  title: string;
  description: string;
  position?: string; // CSS object-position value (e.g. 'center top')
};

const slides: Slide[] = [
  {
    image: img1,
    title: "Institutionalising Naijá for Generations",
    description:
      "Preserving Naijá (Nigerian Pidgin) as a living linguistic heritage—rooted in the past, thriving in the present, and evolving for future generations within a global cultural space.",
    position: "center top",
  },
  {
    image: img2,
    title: "Celebrating Indigenous African Languages",
    description:
      "Advancing the recognition, documentation, and global relevance of Nigerian and African indigenous languages through strategic branding, research, and sustainable language development initiatives.",
    position: "center center",
  },
  {
    image: img3,
    title: "Collaboration That Drives Language Growth",
    description:
      "Building a progressive network of researchers, translators, language technologists, educators, media experts, content creators, artists, and cultural advocates working together for impactful language transformation.",
    position: "center center",
  },
  // Fourth slide removed per request; carousel now contains 3 slides
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPaused]);

  function goTo(i: number) {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }

  function prev() {
    goTo(index - 1);
  }

  function next() {
    goTo(index + 1);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + slides.length) % slides.length);
      }
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % slides.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Hero carousel"
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
          aria-hidden={i === index ? "false" : "true"}
        >
          <div className="absolute inset-0 bg-black">
            {/*
              Use object-contain so the image fits the viewport without awkward cropping.
              Keep the image centered; overlay reduced so text doesn't fully block the image.
            */}
            <img
              src={s.image}
              alt={s.title}
              style={{ objectPosition: s.position || "center" }}
              className="w-full h-full object-cover object-center bg-black"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="max-w-3xl text-center">
                <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-4 text-gray-300">
                  {s.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6">
                  {s.description}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <a
                    href="/about"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-none font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                  >
                    Learn More
                  </a>

                  <a
                    href="/media"
                    className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-none font-semibold border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                  >
                    See Media
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev/Next */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span className="sr-only">Previous</span>
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M12 15L7 10l5-5"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span className="sr-only">Next</span>
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M8 5l5 5-5 5"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
