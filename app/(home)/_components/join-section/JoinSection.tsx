import { Briefcase, Calendar, Users, Wallet } from "lucide-react";

import { SectionTitle } from "../SectionTitle";
import { JoinSectionContact } from "./JoinSectionContact";
import { JoinSectionCta } from "./JoinSectionCta";

export const JoinSection = () => {
  return (
    <section className="bg-gray-2 w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="모집 안내"
          description="엘리오 메이커스 1기를 모집합니다."
        />
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          <InfoCard title="모집 인원" value="4명" icon={Users} />
          <InfoCard title="프로그램 기간" value="8주" icon={Calendar} />
          <InfoCard title="참가비" value="70만원" icon={Wallet} />
          <InfoCard
            title="대상"
            value="코딩을 모르는 직장인"
            icon={Briefcase}
          />
        </div>

        <div>
          <h3 className="text-gray-9 mb-10 text-2xl font-bold">선발 과정</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ProcessCard
              step="1"
              title="지원서 제출"
              desc="간단한 지원 동기와 만들고 싶은 것을 작성해주세요"
            />
            <ProcessCard
              step="2"
              title="서류 검토"
              desc="진정성과 의지를 중심으로 검토합니다"
            />
            <ProcessCard
              step="3"
              title="최종 선발"
              desc="4명의 메이커를 선발하고 개별 안내드립니다"
            />
          </div>
        </div>
      </div>
      <JoinSectionCta />
      <JoinSectionContact />
    </section>
  );
};

const InfoCard = ({
  title,
  value,
  icon: Icon,
  multiline,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  multiline?: boolean;
}) => {
  return (
    <div className="border-gray-3 flex flex-col items-center justify-center rounded-2xl border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="my-2 flex items-center justify-center rounded-lg">
        <Icon className="text-primaryBackColor h-8 w-8" />
      </div>

      <p className="text-gray-6 mb-2 text-sm">{title}</p>

      <p
        className={`text-gray-9 text-xl font-semibold ${
          multiline ? "leading-relaxed break-keep" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
};
const ProcessCard = ({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="border-gray-3 rounded-2xl border bg-white p-8 break-keep transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
        {step}
      </div>
      <h4 className="text-gray-9 mb-3 text-lg font-semibold">{title}</h4>
      <p className="text-gray-6 leading-middlePlus">{desc}</p>
    </div>
  );
};
