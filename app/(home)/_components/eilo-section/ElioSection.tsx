import Image from "next/image";

import LapTopMan from "@/public/images/laptop-man.jpeg";

import { Divider } from "../Divder";

export const ElioSection = () => {
  return (
    <section className="bg-gray-1 w-full py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="relative w-[80%]">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-md">
              <Image
                src={LapTopMan}
                alt="엘리오 프로필 이미지"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <div className="w-full justify-start">
              <Divider />
            </div>
            <h2 className="text-gray-9 mb-8 text-4xl font-bold md:text-5xl">
              엘리오는 누구인가요?
            </h2>

            <div className="text-gray-6 leading-middlePlus space-y-6 text-lg">
              <p>
                저는 개발자이자, 메이커입니다.
                <br />
                코드를 통해 아이디어를 현실로 만드는 과정을 사랑합니다.
              </p>

              <p>
                수많은 사람들이 코딩을 배우고 싶어하지만,
                <br />
                정작 무언가를 만들어본 경험은 없다는 것을 알게 되었습니다.
              </p>

              <p>
                그래서 이 프로그램을 만들었습니다.
                <br />
                강의가 아닌,{" "}
                <span className="text-gray-8 font-semibold">
                  함께 만들어가는 여정
                </span>
                입니다.
              </p>
            </div>

            <div className="border-gray-3 my-10 border-t" />

            <p className="text-gray-6 leading-middlePlus text-base">
              8주 동안 저는 여러분과 함께합니다. 막히는 부분이 있으면 함께
              해결하고, 작은 성공을 함께 기뻐하며, 결국 여러분이 스스로 만들 수
              있는 사람이 되도록 돕습니다.
            </p>

            <div className="mt-10">
              <p className="text-gray-9 text-xl font-semibold">엘리오</p>
              <p className="text-gray-5 mt-1 text-sm">엘리오 메이커스 운영자</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
