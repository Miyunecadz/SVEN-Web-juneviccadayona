'use client'
import React from "react";
import FullScreenWrapper from "../FullScreenWrapper";
import { handleSmoothScroll } from "@/app/helpers/smooth-scroll";

interface LandingPageProps {
  className?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ className = "" }) => {
  return (
    <FullScreenWrapper
      className={`relative ${className}`}
      style={{
        backgroundImage: `url("/doggy-landpage.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div
        className="
          relative z-10 flex flex-col
          items-center sm:items-start
          max-w-full sm:max-w-xl
          w-full px-4 sm:px-8
          pt-24 sm:pt-28 md:pt-36
          text-center sm:text-left
          md:ml-[7vw]
        "
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 animate-slide-down">
          We care for your furry little loved ones while you’re away
        </h1>
        <p className="text-base xs:text-lg sm:text-xl text-white/90 mb-8 drop-shadow animate-fade-in">
          Your pet deserves the best care—even when you can’t be there.
          <br />
          Book a visit with us and relax knowing your companion is in loving
          hands.
          <br />
          <span className="italic opacity-90">
            Trusted. Caring. Experienced.
          </span>
        </p>
        <a
          href="#schedule-a-visit"
          className="
            px-6 py-2 sm:px-8 sm:py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg
            hover:bg-blue-100 transition animate-bounce-in text-base sm:text-lg
          "
          onClick={handleSmoothScroll}
        >
          Schedule a visit
        </a>
      </div>
    </FullScreenWrapper>
  );
};

export default LandingPage;
