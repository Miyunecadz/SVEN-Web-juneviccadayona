"use client";
import { handleScrollToTop } from "@/app/helpers/smooth-scroll";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

const HeroSub: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`h-full flex flex-col justify-between bg-[#3b4252] p-10 ${className}`}
    >
      {/* Logo and Heading */}
      <div className="lg:ml-[60px]">
        <div className="flex items-center gap-3 mb-8">
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
            <span className="font-semibold text-xl text-white tracking-wide">
              PAWTASTIC
            </span>
          </a>
        </div>
        <h2 className="font-semibold text-2xl mb-4 text-white">
          All services include:
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-base text-white">
          <li className="mt-8">A photo update for you along</li>
          <li className="mt-8">Notifications of sitter arrival</li>
          <li className="mt-8">Treats for your pet, with your</li>
        </ul>
      </div>
      {/* Dog image at the bottom */}
      <div className="flex justify-center mt-8">
        <Image
          src="/doggy_1.png"
          alt="Happy pet"
          className="object-cover rounded-xl"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default HeroSub;
