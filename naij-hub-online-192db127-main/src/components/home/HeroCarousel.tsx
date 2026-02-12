"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../../assets/slide-1.jpg";
import img2 from "../../assets/slide-2.jpg";
import img3 from "../../assets/slide-3.jpg";

type Slide = {
  image: string;
  title: string;
  description: string;
  position?: string;
};

const slides: Slide[] = [
  {
    image: img1,
    title: "Institutionalising Naijá for Generations",
    description: "Preserving Nigerian Pidgin as a living linguistic heritage—rooted in the past, thriving in the present, and evolving for the future.",
    position: "center top",
  },
  {
    image: img2,
    title: "Celebrating Indigenous African Languages",
    description: "Advancing the recognition and global relevance of African languages through strategic research and sustainable development.",
    position: "center center",
  },
  {
    image: img3,
    title: "Collaboration That Drives Growth",
    description: "Building a progressive network of researchers, creators, and advocates working together for impactful language transformation.",
    position: "center center",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

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

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
            }`}
        >
          <div className="absolute inset-0">
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          </div>

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-wide">
              <div className="max-w-2xl space-y-8 animate-in slide-in-from-left duration-1000">
                <div className="space-y-4">
                  <h2 className="font-serif font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
                    {s.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-xl">
                    {s.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <Link
                    to="/about"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-10 sm:py-5 rounded-full font-bold transition-all hover:scale-105 shadow-xl flex items-center gap-2 group text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/media"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-3 sm:px-10 sm:py-5 rounded-full font-bold transition-all hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center text-center"
                  >
                    Watch Media
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute left-[max(2rem,calc((100vw-1280px)/2))] bottom-12 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full ${i === index ? "w-12 h-3 bg-primary" : "w-3 h-3 bg-white/40 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
