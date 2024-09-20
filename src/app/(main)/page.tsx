import FadeUp from "@/components/aos/FadeUp";
import MainVi from "@/components/main/1-MainVi";
import MainCategory from "@/components/main/2-MainCategory";
import MainBrandBanner from "@/components/main/3-MainBrandBanner";
import MainHighlight from "@/components/main/4-MainHighlight";
import MainCuration from "@/components/main/5-MainCuration";
import MainDailyLook from "@/components/main/6-MainDailyLook";
import MainTodayBest from "@/components/main/7-MainTodayBest";
import MainTimeDeal from "@/components/main/8-MainTimeDeal";
import MainPromotion from "@/components/main/9-MainPromotion";
import MainBrandPick from "@/components/main/A-MainBrandPick";
import StyleNow from "@/components/main/B-StyleNow";
import MainReview from "@/components/main/C-MainReview";
import MainVTV from "@/components/main/D-MainVTV";
import MainHotVideo from "@/components/main/E-MainHotVideo";
import MainBrandLink from "@/components/main/F-MainBrandLink";
import BandShapeBanner from "@/components/main/reuable/BandShapeBanner";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between bg-white">
      <div className="w-full flex flex-col">
        {/* 1-MainVi */}
        <MainVi />

        {/* 2-MainCategory */}
        <MainCategory />

        {/* 3-MainBrandBanner */}
        <FadeUp>
          <MainBrandBanner />
        </FadeUp>

        {/* 4-MainHighlight */}
        <FadeUp>
          <MainHighlight />
        </FadeUp>

        {/* 5-MainCuration */}
        <FadeUp>
          <MainCuration />
        </FadeUp>

        {/* 띠배너 */}
        <div className="mb-[48px]">
          <BandShapeBanner />
        </div>

        {/* 6-MainDailyLook */}
        <FadeUp>
          <MainDailyLook />
        </FadeUp>

        {/* 7-MainTodayBest */}
        <FadeUp>
          <MainTodayBest />
        </FadeUp>

        {/* 8-MainTimeDeal */}
        <FadeUp>
          <MainTimeDeal />
        </FadeUp>

        {/* 9-MainPromotion */}
        <FadeUp>
          <MainPromotion />
        </FadeUp>

        {/* A-MainBrandPick */}
        <FadeUp>
          <MainBrandPick />
        </FadeUp>

        {/* B-StyleNow */}
        <FadeUp>
          <StyleNow />
        </FadeUp>

        {/* C-MainReview */}
        <FadeUp>
          <MainReview />
        </FadeUp>

        {/* D-MainVTV */}
        <FadeUp>
          <MainVTV />
        </FadeUp>

        {/* E-MainHotVideo */}
        <FadeUp>
          <MainHotVideo />
        </FadeUp>

        {/* F-MainBrandLink */}
        <FadeUp>
          <MainBrandLink />
        </FadeUp>
      </div>
    </main>
  );
}
