"use client";
import { Crown, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { ourCoreServices } from "@/constants/comman";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/portfolio", text: "Portfolio" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b backdrop-blur-lg bg-white/30 dark:border-gray-800 dark:bg-transparent">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {isSidebarOpen ? (
            <div className="loader"></div>
          ) : (
            // <p className="font-extrabold text-2xl text-white">LOZY</p>

            <img
              src="/images/logo.png"
              alt="LOZY Logo"
              className="h-8 w-auto"
            />
          )}
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleSidebar}
          className="text-gray-500 md:hidden dark:text-gray-400"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation for Larger Screens */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              {item.text}
            </Link>
          ))}
          {/* <HoverCard openDelay={100} closeDelay={150}>
            <HoverCardTrigger className="cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              Services
            </HoverCardTrigger>
            <HoverCardContent className="w-fit mt-3">
              <div className="grid grid-cols-2 gap-5">
                {ourCoreServices.map((item) => (
                  <Link key={item.link} href={item.link}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard> */}
        </nav>
      </div>
    </header>
  );
}
