import FadeUp from "@/components/aos/FadeUp";
import MainVi from "@/components/template/page/main/1-MainVi";
import MainCategory from "@/components/template/page/main/2-MainCategory";
import MainBrandBanner from "@/components/template/page/main/3-MainBrandBanner";
import MainHighlight from "@/components/template/page/main/4-MainHighlight";
import MainCuration from "@/components/template/page/main/5-MainCuration";
import MainDailyLook from "@/components/template/page/main/6-MainDailyLook";
import MainTodayBest from "@/components/template/page/main/7-MainTodayBest";
import MainTimeDeal from "@/components/template/page/main/8-MainTimeDeal";
import MainPromotion from "@/components/template/page/main/9-MainPromotion";
import MainBrandPick from "@/components/template/page/main/A-MainBrandPick";
import StyleNow from "@/components/template/page/main/B-StyleNow";
import MainReview from "@/components/template/page/main/C-MainReview";
import MainVTV from "@/components/template/page/main/D-MainVTV";
import MainHotVideo from "@/components/template/page/main/E-MainHotVideo";
import MainBrandLink from "@/components/template/page/main/F-MainBrandLink";
import BandShapeBanner from "@/components/template/page/main/reuable/BandShapeBanner";

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
        {/* <FadeUp>
          <MainHighlight />
        </FadeUp> */}

        {/* 5-MainCuration */}
        <FadeUp>
          <MainCuration />
        </FadeUp>

        {/* 6-MainDailyLook */}
        <FadeUp>
          <MainDailyLook start={10} end={18} />
        </FadeUp>

        {/* 5-MainCuration */}
        <FadeUp>
          <MainCuration
            title="니트로 느끼는 가을 감촉"
            defaultIndex={1}
            page={3}
          />
        </FadeUp>

        {/* 띠배너 */}
        <div className="mb-[48px]">
          <BandShapeBanner />
        </div>

        {/* 5-MainCuration */}
        <FadeUp>
          <MainCuration
            title="설레는 가을 향기, 함께 떠나는 캠핑"
            defaultIndex={2}
            page={1}
          />
        </FadeUp>

        {/* 6-MainDailyLook */}
        <FadeUp>
          <MainDailyLook title="최신 트렌드 세일" start={18} end={26} />
        </FadeUp>

        {/* 5-MainCuration */}
        <FadeUp>
          <MainCuration
            title="나의 일상에서 차분히 스며들 향기"
            defaultIndex={3}
            page={2}
          />
        </FadeUp>

        {/* 6-MainDailyLook */}
        <FadeUp>
          <MainDailyLook title="가을 향이 가득 풍기는" start={26} end={34} />
        </FadeUp>

        {/* 띠배너 */}
        <div className="mb-[48px]">
          <BandShapeBanner />
        </div>
      </div>
    </main>
  );
}
