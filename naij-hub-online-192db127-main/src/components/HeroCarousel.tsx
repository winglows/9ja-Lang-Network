"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  image: string | StaticImageData;
  title: string;
  description: string;
};

// Example images: ensure these files exist in `src/assets` (Slide-1..Slide-4)
import Slide1 from "@/assets/Slide-1.jpg";
import Slide2 from "@/assets/Slide-2.jpg";
import Slide3 from "@/assets/Slide-3.jpg";
import Slide4 from "@/assets/Slide-4.jpg";

const defaultSlides: Slide[] = [
  {
    image: Slide1,
    title: "Institutionalising Naijá for Generations",
    description:
      "Preserving Naijá (Nigerian Pidgin) as a living linguistic heritage—rooted in the past, thriving in the present, and evolving for future generations within a global cultural space.",
  import React, { useEffect, useRef, useState } from "react";

  type Slide = {
    image: string;
    title: string;
    description: string;
  };

  // Use existing assets from the project (ensure these filenames exist in src/assets)
  import Slide1 from "@/assets/9JA-WEBSITE-RESOURCE-IMAGE-1.jpg";
  import Slide2 from "@/assets/9JA-WEBSITE-RESOURCE-IMAGE-2.jpg";
  import Slide3 from "@/assets/9JA-WEBSITE-RESOURCE-IMAGE-3.jpg";
  import Slide4 from "@/assets/9JA-WEBSITE-RESOURCE-IMAGE-4.jpg";

  const defaultSlides: Slide[] = [
    {
      image: Slide1,
      title: "Institutionalising Naijá for Generations",
      description:
        "Preserving Naijá (Nigerian Pidgin) as a living linguistic heritage—rooted in the past, thriving in the present, and evolving for future generations within a global cultural space.",
    },
    {
      image: Slide2,
      title: "Celebrating Indigenous African Languages",
      description:
        "Advancing the recognition, documentation, and global relevance of Nigerian and African indigenous languages through strategic branding, research, and sustainable language development initiatives.",
    },
    {
      image: Slide3,
      title: "Collaboration That Drives Language Growth",
      description:
        "Building a progressive network of researchers, translators, language technologists, educators, media experts, content creators, artists, and cultural advocates working together for impactful language transformation.",
    },
    {
      image: Slide4,
      title: "From Culture to Sustainable Impact",
      description:
        "Harnessing creative, technological, and policy-driven interventions to ensure African languages remain functional, influential, and economically viable in education, media, and digital innovation.",
    },
  ];

  export interface HeroCarouselProps {
    slides?: Slide[];
    intervalMs?: number;
  }

  export default function HeroCarousel({
    slides = defaultSlides,
    intervalMs = 5000,
  }: HeroCarouselProps) {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<number | null>(null);
    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
      if (isPaused) return;
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, intervalMs);
      return () => {
        if (timerRef.current) window.clearInterval(timerRef.current);
      };
    }, [isPaused, intervalMs, slides.length]);

    function goTo(i: number) {
      setIndex(((i % slides.length) + slides.length) % slides.length);
    }

    function prev() {
      goTo(index - 1);
    }

    function next() {
      goTo(index + 1);
    }

    // touch handlers for mobile swipe
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

    // keyboard accessibility
    useEffect(() => {
      function onKey(e: KeyboardEvent) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
      <section
        aria-roledescription="carousel"
        aria-label="Hero carousel"
        className="relative w-full h-[70vh] md:h-screen overflow-hidden"
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
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Text content */}
            <div className="relative z-20 flex items-center h-full">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl text-white">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    {s.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/90">
                    {s.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="sr-only">Previous</span>
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M12 15L7 10l5-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="sr-only">Next</span>
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
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
}
