import { JoinButton } from "@/components/button/JoinButton";

export const JoinSectionCta = () => {
  return (
    <div className="mx-auto mt-24 max-w-3xl px-6">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0F172A] to-[#1E293B] px-8 py-12 text-center text-white shadow-xl">
        <p className="text-gray-3 mb-2 text-sm">지금 바로 시작하세요</p>

        <h2 className="mb-10 text-3xl font-bold md:text-3xl">
          메이커가 되는 첫 번째 단계
        </h2>
        <JoinButton />
        <p className="mt-6 text-sm text-gray-400">지원 마감: 2026년 3월 31일</p>
      </div>
    </div>
  );
};
