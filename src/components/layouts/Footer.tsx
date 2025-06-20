import { Heart, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/",
      icon: Instagram,
    },
    {
      href: "https://www.linkedin.com/company/",
      icon: Linkedin,
    },
  ];
  return (
    <footer className="w-full flex items-center justify-center ">
      <div className="container mx-auto px-4 flex flex-col h-16 max-w-6xl">
        <div className="flex flex-col">
          <div className="flex mb-4 flex-row justify-between">
            <p className="font-extrabold text-2xl text-white">FRITS</p>
            <div className="flex flex-row gap-4 items-center justify-between">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <link.icon size={14} />
                </a>
              ))}
            </div>
          </div>
          <hr className="border-gray-800" />
          <div className="flex flex-col items-center justify-center">
            <p className="my-3 text-[12px] flex items-center text-gray-500 text-center">
               © {new Date().getFullYear()} LZ - Logic Zephyr Solutions
              {/* | Crafted with{" "}
              <Heart size={14} className="mx-1" /> in Punjab */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
