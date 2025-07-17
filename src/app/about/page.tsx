"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials, words } from "@/constants/comman";
import React from "react";

export default function About() {
  return (
    <div className=" flex flex-col items-center p-3 text-center justify-center w-full max-w-6xl  h-full">
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal leading-snug text-neutral-600 dark:text-neutral-400">
          Shaping
          <FlipWords words={words} /> <br />
          Digital Experiences with Logic Zephyr{" "}
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-4xl mx-auto font-normal leading-snug text-left text-black dark:text-white mb-5">
          Who We Are?
        </h1>
        <p className="text-xl mx-auto font-normal leading-snug text-left mb-20 text-neutral-600 dark:text-neutral-400">
          Logic Zephyr is a global IT solutions provider dedicated to helping
          businesses succeed in the digital space. We offer a full spectrum of
          services, including custom web design, web development, SEO, hosting,
          and technical support. With deep industry expertise and a commitment
          to excellence, Logic Zephyr delivers quality-driven, end-to-end
          solutions tailored to our clients' unique needs.
        </p>
      </div>
      <div className="h-[20rem] mb-20 w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
