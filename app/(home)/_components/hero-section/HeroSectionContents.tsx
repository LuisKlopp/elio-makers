import { JoinButton } from "@/components/button/JoinButton";

export const HeroSectionContents = () => {
  return (
    <div className="fade-up relative z-10 flex flex-col items-center rounded-xl p-24 text-center text-white">
      <div className="mb-6 rounded-full border border-white/40 px-6 py-2 text-sm backdrop-blur-md">
        1기 모집 중
      </div>

      <h1 className="mb-6 text-6xl font-bold tracking-wide">
        엘리오 <span className="text-primaryTextColor">메이커스</span>
      </h1>

      <p className="mb-4 text-2xl font-medium text-white/90">
        단 <span className="text-primaryTextColor font-bold">4명</span>의
        메이커를 선발합니다.
      </p>

      <p className="mb-10 text-lg leading-relaxed text-white/80">
        코딩을 전혀 모르는 직장인이 두 달 동안 엘리오와 함께
        <br />
        직접 작동하는 웹을 만들어보는 프로그램입니다.
      </p>

      <JoinButton />

      <div className="mt-14 flex gap-8 text-sm text-white">
        <div className="flex items-center gap-2">
          <div className="bg-primaryBackColor h-2 w-2 rounded-full" />
          8주 프로그램
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-primaryBackColor h-2 w-2 rounded-full" />
          소수정예 4명
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-primaryBackColor h-2 w-2 rounded-full" />
          실습 중심
        </div>
      </div>
    </div>
  );
};
