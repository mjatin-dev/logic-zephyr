import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { url } from "inspector";

const Portfolio = () => {
  const nextJsProjects = [
    {
      quote:
        "Built a high-speed, intuitive online educational store tailored for early learning and school curriculum support.",
      name: "Modern Teaching Aids",
      designation: "Full Stack Developer | Next.js, React, TypeScript",
      src: "/images/teaching.png",
      url: "https://www.teaching.com.au/",
    },
    {
      quote:
        "Engineered a seamless electronics e-commerce experience with rapid page loads and smooth checkout flows.",
      name: "Electro",
      designation: "Frontend Engineer | Next.js, Node.js",
      src: "/images/electro.png",
      url: "https://www.rhsports.com.au/home",
    },
    {
      quote:
        "Crafted a fast and consistent taxi booking platform for the Australian market with real-time tracking.",
      name: "Apex Maxi Cabs",
      designation: "Frontend Developer | Next.js, Mapbox, AWS",
      src: "/images/apex-maxi.png",
      url: "https://www.apexmaxicabs.com.au/",
    },
    {
      quote:
        "Implemented a responsive taxi app with optimized routing and trip management across Australian cities.",
      name: "Apex Cabs",
      designation: "Frontend Developer | Next.js, TypeScript",
      src: "/images/apex-cabs.png",
      url: "https://www.apexcabs.com.au/",
    },
  ];

  const reactAndReactNativeProjects = [
    {
      quote:
        "Implemented a highly engaging catalog system with smooth navigation for educational product discovery.",
      name: "Modern Star",
      designation: "Frontend Developer | React, AWS",
      src: "/images/modernstar.png",
      url: "https://www.modernstar.com/",
    },
    {
      quote:
        "Launched a meal ordering platform with real-time updates and a smooth user experience.",
      name: "Ghar Ka Khana",
      designation: "Full Stack Developer | React Native, Node.js",
      src: "/images/gharkakhana.png",
      url: "https://gharkakhana.net.in/",
    },
    {
      quote:
        "A SaaS platform that simplifies trading license compliance by automating task management. Built with Next.js for enhanced performance and SEO.",
      name: "Compliance Sutra",
      designation: "Full Stack Developer | Next.js, TypeScript",
      src: "/images/compliance-sutra.png",
      url: "https://www.compliancesutra.com/",
    },
  ];
  const laravelProjects = [
    {
      quote:
        "Built a reliable taxi booking platform using Laravel, offering seamless user experience for ride requests.",
      name: "Express Maxi",
      designation: "Full Stack Developer | Laravel, React, Azure",
      src: "/images/expressmaxi.png",
      url: "https://www.expressmaxi.com.au/",
    },
    {
      quote:
        "Engineered a dynamic online casino platform with engaging gameplay and secure transaction systems.",
      name: "Pentito",
      designation: "Full Stack Developer | Laravel, PHP",
      src: "/images/pentito.png",
      url: "https://pentito.nl/",
    },
  ];

  const wordPressProjects = [
    {
      quote:
        "Delivered a fast, real-time taxi booking website optimized for Australian customers.",
      name: "13 Cabs Maxi",
      designation: "Frontend Developer | WordPress, React Native",
      src: "/images/13cabsmaxi.png",
      url: "https://www.13cabsmaxi.com/",
    },
    {
      quote:
        "Launched a sleek construction website to simplify project planning and showcase services.",
      name: "Astracon Homes",
      designation: "Frontend Developer | WordPress, React Native",
      src: "/images/astraconhomes.png",
      url: "https://astraconhomes.com.au/",
      description:
        "Building Your Dream Homes and Offices Across Australia. We have created a website for our Australian client, Astracon, that provides comprehensive services in building your dream homes and offices. The newly developed website offers a user-friendly interface, making it easier than ever to plan and realize your construction projects with the best in the industry.",
    },
  ];
  return (
    <div className="w-screen min-h-screen h-full">
      <div className="h-[40rem] w-full rounded-md bg-black-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="relative z-10 text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Our Innovative Portfolio
          </h1>
          <p className="text-neutral-500 max-w-lg mt-6 mx-auto my-2 text-sm text-center relative z-10">
            At Lozy, we specialize in delivering cutting-edge solutions to
            empower businesses worldwide. Our innovative tools and services are
            designed to streamline your operations, enhance productivity, and
            drive success. Join us in shaping the future of technology.
          </p>
        </div>
        <BackgroundBeams />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row max-w-6xl gap-10 items-start md:items-center justify-between p-5">
        <div className="container mx-auto flex flex-col max-w-6xl gap-16 items-start justify-between p-5">
          <div className="h-full w-full gap-10">
            <h1 className="text-3xl md:text-4xl font-bold text-left">
              Next.js
            </h1>
            <AnimatedTestimonials testimonials={nextJsProjects} />
          </div>

          <div className="h-full w-full gap-10">
            <h1 className="text-3xl md:text-4xl font-bold text-left">
              React & React Native
            </h1>
            <AnimatedTestimonials testimonials={reactAndReactNativeProjects} />
          </div>

          <div className="h-full w-full gap-10">
            <h1 className="text-3xl md:text-4xl font-bold text-left">
              Laravel
            </h1>
            <AnimatedTestimonials testimonials={laravelProjects} />
          </div>

          <div className="h-full w-full gap-10">
            <h1 className="text-3xl md:text-4xl font-bold text-left">
              WordPress
            </h1>
            <AnimatedTestimonials testimonials={wordPressProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
