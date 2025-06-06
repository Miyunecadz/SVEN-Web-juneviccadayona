'use client'

import { handleSmoothScroll } from "@/app/helpers/smooth-scroll";
import FullScreenWrapper from "../FullScreenWrapper";
import Image from "next/image";

interface AboutUsPageProps {
  className?: string;
  id: string;
}

const pets = [
  {
    name: "Mr. Mittens",
    src: "/cat.jpg",
  },
  {
    name: "Percy",
    src: "/bird.jpg",
  },
  {
    name: "Noodle",
    src: "/dog.jpg",
  },
  {
    name: "Bunbun",
    src: "/bunny.jpg",
  },
];

const AboutUsPage: React.FC<AboutUsPageProps> = ({ className = "", id }) => {
  return (
    <FullScreenWrapper
      className={`relative flex items-center justify-center ${className}`}
      id={id}
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-12 py-16">
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Expert care for your<br />
            furry, feathery, or<br />
            scaley friend
          </h2>
          <p className="mb-8 text-gray-700 text-base sm:text-lg max-w-md">
            We know how stressful it is to leave your pets at home alone. We&apos;re a team of experienced animal caregivers, well connected to local veterinarians. Trust us to love them like our own, and to keep them safe and happy till you&apos;re home.
          </p>
          <a
            href="#schedule-a-visit"
            className="inline-block bg-gray-700 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-gray-900 transition"
            onClick={handleSmoothScroll}
          >
            Schedule a visit
          </a>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 max-w-md">
          {pets.map((pet) => (
            <div
              key={pet.name}
              className="relative rounded-lg overflow-hidden aspect-square bg-gray-200"
            >
              <Image
                src={pet.src}
                alt={pet.name}
                fill
                sizes="(max-width: 768px) 45vw, 240px"
                className="object-cover"
              />
              <span className="absolute left-3 bottom-3 text-white text-sm font-semibold drop-shadow">
                {pet.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FullScreenWrapper>
  );
};

export default AboutUsPage;