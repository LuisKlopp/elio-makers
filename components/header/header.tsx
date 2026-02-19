"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-12",
        "transition-all duration-300 ease-in-out",
        scrolled
          ? "text-gray-8 bg-white/80 shadow-sm backdrop-blur-md"
          : "bg-transparent text-white"
      )}
    >
      <div className={cn("text-2xl font-bold")}>
        Elio{" "}
        <span className={cn(scrolled ? "text-primaryBackColor" : "")}>
          Makers
        </span>
      </div>

      <button className="text-lg font-semibold">지원하기</button>
    </header>
  );
};
