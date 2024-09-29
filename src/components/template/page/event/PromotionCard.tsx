import { getPromotionBenefitList } from "@/action/promotionAction";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface PromotionCardProps {
  promotion: Promotion;
}

export default async function PromotionCard({ promotion }: PromotionCardProps) {
  const benefitList =
    (await getPromotionBenefitList({
      promotionUuid: promotion.promotionUuid,
    })) || [];

  return (
    <div className="px-[24px] flex">
      <Link
        href={`/promotion/${promotion.promotionUuid}`}
        className="w-full flex mb-[20px]"
      >
        <div className="relative w-[42%] aspect-[25/28] mr-[16px]">
          <Image
            src={promotion.thumbnailUrl}
            alt={promotion.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="py-[6px]">
          <div className="text-[16px] font-[700] leading-[22px] mb-[4px]">
            {promotion.title}
          </div>
          <div className="text-[14px] text-[#404040] font-[400] leading-[18px] mb-[8px]">
            {promotion.description}
          </div>
          <div className="flex">
            {benefitList.map((benefit) => (
              <div
                key={benefit.benefitContent}
                className={cn(
                  "px-[6px] mr-[3px]",
                  "text-[10px] font-[700] leading-[20px]",
                  "text-white bg-[#131922]",
                )}
              >
                {benefit.benefitContent}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
