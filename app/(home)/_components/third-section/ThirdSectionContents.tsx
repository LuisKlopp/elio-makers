"use client";

import { THIRD_SECTION_STEPS } from "@/constants/third-section-steps.constants";

import { SectionTitle } from "../SectionTitle";

export const ThirdSectionContents = () => {
  return (
    <section className="relative w-full p-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          title="8주의 여정"
          description="작은 기능부터, 실제 배포까지"
          isDarkMode
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {THIRD_SECTION_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/10"
            >
              <div className="flex gap-4">
                <div className="bg-primaryBackColor flex h-10 w-10 items-center justify-center rounded-lg text-base font-medium">
                  {step.number}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-4 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
