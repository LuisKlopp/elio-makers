import Image from "next/image";

import HeroSectionImage from "@/public/images/hero-section-image.webp";

export const SecondSection = () => {
  return (
    <section className="bg-gray-1 w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <div className="bg-primaryBackColor mb-6 h-0.75 w-10" />

            <h2 className="mb-6 text-4xl leading-tight font-bold text-black">
              AI 시대,
              <br />
              코딩 교육의 한계
            </h2>

            <p className="text-gray-6 mb-8 text-lg leading-6.5">
              수많은 강의를 듣고, 튜토리얼을 따라해도
              <br />
              정작 내 손으로 무언가를 만들어본 적은 없습니다.
            </p>

            <div className="border-primaryTextColor bg-primaryTextColor/7 rounded-xl border-l-2 p-6">
              <p className="text-gray-9 mb-3 text-lg leading-6.5 font-semibold">
                저는 코딩을 가르치지 않습니다.
                <br />
                메이커를 만듭니다.
              </p>

              <p className="text-gray-6 leading-6.5">
                강의를 듣는 사람이 아니라,
                <br />
                직접 만들어보는 사람이 되는 여정입니다.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={HeroSectionImage}
                alt="코딩 모니터 이미지"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="border-gray-4 mt-20 border-t pt-10">
          <p className="text-gray-7 max-w-3xl text-lg leading-relaxed">
            작은 기능부터, 실제로 작동하는 웹사이트를 배포하는 경험까지.
            <br />
            8주 동안 당신은 단순히 코드를 배우는 것이 아니라,
            <span className="text-gray-9 font-semibold">
              {" "}
              무언가를 만들 수 있는 사람
            </span>
            으로 성장합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
