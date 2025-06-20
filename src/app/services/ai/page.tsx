"use client";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { offers } from "@/constants/comman";
import { useScroll, useTransform } from "framer-motion";
import React from "react";

export default function AI() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="h-full w-full flex items-center gap-20 flex-col  ">
      <div
        className="h-[400vh] bg-black w-full   rounded-md relative pt-40"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>

      {/* <div className="container mx-auto mt-20 flex flex-col  max-w-6xl gap-10 items-start  justify-between p-5">
        <p>
          At Lozy, we harness the power of Artificial Intelligence to
          revolutionize the way businesses operate. Our AI services are designed
          to streamline processes, enhance decision-making, and deliver
          cutting-edge solutions tailored to your unique needs.
        </p>
        <h1 className="text-3xl font-bold">What We Offer:</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {offers?.map((item, index) => (
            <WobbleCard
              key={index}
              containerClassName="col-span-1 h-full"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {item.title}
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  {item.description}
                </p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div> */}
    </div>
  );
}
