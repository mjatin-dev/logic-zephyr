"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

const ServicesLayout = ({
  children,
  service,
}: {
  children: React.ReactNode;
  service?: string;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-black">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-stone-300 to-stone-500 py-4 bg-clip-text text-center text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-transparent"
        >
          <p>{service}</p>
        </motion.h1>
      </LampContainer>
      <div className="w-full h-full bg-black">
        <div className="container mx-auto flex flex-col md:flex-row h-full my-8 sm:my-12 md:my-16 max-w-full lg:max-w-6xl items-center justify-center md:justify-between px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
