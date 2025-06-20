"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { timelineData } from "@/constants/landingPage";
import { Timeline } from "@/components/ui/timeline";
import { ourCoreServices } from "@/constants/comman";
import { Cover } from "@/components/ui/cover";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  return (
    <div className=" flex flex-col items-center text-center justify-center w-full h-full">
      <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={80}
          particleCount={200}
          baseHue={500}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <h1 className="md:text-7xl text-7xl lg:text-9xl font-bold text-center text-white  mt-6 relative z-20  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            LOZY
          </h1>
          <p className="text-base md:text-lg mt-2 text-white font-normal inter-var text-center">
            Logic Zephyr Solutions Private Limited
          </p>
        </Vortex>
      </div>

      <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Bringing Your Vision to Life <br /> with <Cover>Our Expertise</Cover>
        </h1>
      </div>
      <div className="max-w-6xl mt-24 ">
        <HoverEffect items={ourCoreServices} />
      </div>
      <div className="w-full h-full max-w-6xl overflow-hidden ">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}
