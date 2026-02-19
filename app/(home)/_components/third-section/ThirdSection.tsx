import Image from "next/image";

import ThirdSectionImage from "@/public/images/third-section-image.webp";

import { ThirdSectionContents } from "./ThirdSectionContents";

export const ThirdSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <Image
        src={ThirdSectionImage}
        alt="third-section"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <ThirdSectionContents />
    </div>
  );
};
