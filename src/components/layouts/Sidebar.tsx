"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ourCoreServices } from "@/constants/comman";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

export default function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { push } = useRouter();
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/portfolio", text: "Portfolio" },
  ];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen, closeSidebar]);
  return (
    <>
      <div
        className={`fixed inset-0 z-40 flex items-center justify-end ${
          isSidebarOpen ? "visible" : "invisible"
        }`}
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 pt-20 right-0 bottom-0 left-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur transform ${
            isSidebarOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } transition-transform transition-opacity duration-300 ease-in-out shadow-lg p-6`}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col w-full h-full space-y-6 text-lg font-medium">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="w-full text-left text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                onClick={() => {
                  push(item.href);
                  closeSidebar();
                }}
              >
                {item.text}
              </div>
            ))}

            {/* Services Dropdown */}
            {/* <div className="relative w-full">
              <div
                onClick={toggleDropdown}
                className="w-full flex  text-gray-700 items-center hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              >
                Services
                <ChevronDown className="ml-2" size={16} />
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 w-full shadow-lg">
                  <hr />
                  {ourCoreServices.map((service) => (
                    <div
                      key={service.link}
                      className="block  py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      onClick={() => {
                        push(service.link);
                        closeSidebar();
                        setIsDropdownOpen(false);
                      }}
                    >
                      {service.title}
                    </div>
                  ))}
                  <hr />
                </div>
              )}
            </div> */}
          </nav>
        </div>
      </div>
    </>
  );
}
