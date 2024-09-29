import { getPromotionList } from "@/action/promotionAction";
import AlianceBenefitIcon from "@/components/atom/icon/event/AlianceBenefitIcon";
import BrandPromotionIcon from "@/components/atom/icon/event/BrandPromotionIcon";
import EventBenefitIcon from "@/components/atom/icon/event/EventBenefitIcon";
import PromotionCard from "@/components/template/page/event/PromotionCard";
import BandShapeBanner from "@/components/template/page/main/reuable/BandShapeBanner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const eventTabList = [
  {
    title: "전체",
    icon: (
      <b className="font-regular-bold-cello text-[16px] font-[900] text-white">
        All
      </b>
    ),
    isCurrent: true,
  },
  {
    title: "이벤트 혜택",
    icon: <EventBenefitIcon />,
    isCurrent: false,
  },
  {
    title: "브랜드 기획전",
    icon: <BrandPromotionIcon />,
    isCurrent: false,
  },
  {
    title: "제휴 혜택",
    icon: <AlianceBenefitIcon />,
    isCurrent: false,
  },
];

export default async function page() {
  const promotionList = (await getPromotionList()) || [];
  return (
    <div>
      <div
        className={cn("w-full p-[24px]", "flex justify-center items-center")}
      >
        {eventTabList.map((tab) => (
          <div className={cn("flex flex-col items-center")}>
            <div
              className={cn(
                "mx-[6px] mb-[8px]",
                "size-[72px] rounded-full",
                "flex justify-center items-center",
                tab.isCurrent ? "bg-[#131922]" : "bg-[#F8F8F8]",
              )}
            >
              {tab.icon}
            </div>
            <div className={cn("text-[12px] font-[500] text-center")}>
              {tab.title}
            </div>
          </div>
        ))}
      </div>
      <div className={cn("pb-[46px] border-b-[8px] border-[#E0E0E0]")}>
        <BandShapeBanner />
      </div>
      <div>
        <div
          className={cn(
            "py-[8px] pl-[24px] pr-[16px] mb-[4px]",
            "text-[16px] font-[700] leading-[40px]",
          )}
        >
          <div>
            총 <span className="text-[#D99C63]">{promotionList.length}</span>건
          </div>
        </div>

        {promotionList.slice(0, 100).map((promotion) => (
          <PromotionCard key={promotion.promotionUuid} promotion={promotion} />
        ))}
      </div>
    </div>
  );
}
