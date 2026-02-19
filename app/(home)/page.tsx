import { ElioSection } from "./_components/eilo-section/ElioSection";
import { FourthSection } from "./_components/fourth-section/FourthSection";
import { HeroSection } from "./_components/hero-section/HeroSection";
import { JoinSection } from "./_components/join-section/JoinSection";
import { SecondSection } from "./_components/second-section/SecondSection";
import { ThirdSection } from "./_components/third-section/ThirdSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <ElioSection />
      <JoinSection />
    </div>
  );
}
