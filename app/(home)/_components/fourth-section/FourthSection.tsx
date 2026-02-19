import { FOURTH_SECTION_FEATURES } from "@/constants/fourth-section-features.constants";

import { SectionTitle } from "../SectionTitle";

export const FourthSection = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-28">
      <SectionTitle
        title="왜 다른가?"
        description="엘리오 메이커스만의 차별점"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FOURTH_SECTION_FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-primaryBackColor flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                  <Icon size={22} className="text-white" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-9 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-6 leading-5.5 break-keep">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
