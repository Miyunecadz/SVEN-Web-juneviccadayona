"use client";
import { handleScrollToTop, handleSmoothScroll } from "@/app/helpers/smooth-scroll";
import Image from "next/image";
import React from "react";

export default function Navbar() {


  return (
    <header className="absolute top-0 left-0 w-full z-1000">
      <nav className="flex items-center justify-between max-w-[85rem] mx-auto px-6 py-6">
        <a
          href="#"
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Pawtastic Home"
          onClick={handleScrollToTop}
        >
          <Image
            src="/paw-icon.svg"
            alt="Pawtastic Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold text-xl text-black tracking-wide">
            PAWTASTIC
          </span>
        </a>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#about-us"
              className="font-medium text-black hover:text-blue-200 transition-colors duration-200"
              onClick={handleSmoothScroll}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#schedule-a-visit"
              className="font-medium text-black hover:text-blue-200 transition-colors duration-200"
              onClick={handleSmoothScroll}
            >
              Schedule a visit
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
