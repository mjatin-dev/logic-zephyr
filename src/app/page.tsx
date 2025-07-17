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
          <div className="h-auto w-auto flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-4 md:gap-8">
            <img
              src="/images/logo.png"
              alt="Logic Zephyr Logo"
              className="h-[100px] w-auto md:h-[200px]"
            />
            <div className="h-full w-auto flex items-center md:items-start justify-center md:justify-end flex-col">
              <p className="text-lg md:text-6xl font-extrabold text-white font-normal inter-var text-center md:text-left flex items-center">
                Logic Zephyr
              </p>
              <p className="text-lg md:text-6xl font-extrabold text-white font-normal inter-var text-center md:text-left flex items-center">
                solutions
              </p>
            </div>
          </div>
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
