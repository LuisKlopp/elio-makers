import Image from "next/image";

import HeroSectionImage from "@/public/images/hero-section-image.webp";

import { HeroSectionContents } from "./HeroSectionContents";

export const HeroSection = () => {
  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-center">
      <Image
        src={HeroSectionImage}
        alt="hero-section"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/70" />
      <HeroSectionContents />
    </div>
  );
};
