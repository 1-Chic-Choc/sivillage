import {
  getPromotion,
  getPromotionBenefitList,
  getPromotionMediaList,
  getPromotionProductList,
} from "@/action/promotionAction";
import PromotionImage from "@/components/template/page/promotion/PromotionImage";
import PromotionProductTabs from "@/components/template/page/promotion/PromotionProductTabs";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface pageProps {
  params: { promotionUuid: string };
}

export default async function page({ params: { promotionUuid } }: pageProps) {
  const [
    promotion,
    promotionProductList,
    promotionMediaList,
    promotionBenefitList,
  ] = await Promise.all([
    getPromotion({ promotionUuid }),
    getPromotionProductList({ promotionUuid }),
    getPromotionMediaList({ promotionUuid }),
    getPromotionBenefitList({ promotionUuid }),
  ]);

  if (!promotion) {
    return <main>존재하지 않는 프로모션입니다.</main>;
  }

  const productMap = new Map<string, string[]>();
  (promotionProductList || []).forEach(
    ({ productUuid, promotionType }: PromotionProduct) => {
      const productUuids = productMap.get(promotionType) || [];
      productUuids.push(productUuid);
      productMap.set(promotionType, productUuids);
    },
  );

  const mediaList = (promotionMediaList || []).sort((a, b) =>
    a.mediaOrder === b.mediaOrder
      ? a.mediaId - b.mediaId
      : a.mediaOrder - b.mediaOrder,
  );

  const { thumbnailUrl, title, description } = promotion;

  return (
    <main className="w-full">
      <div className={cn("pt-[12px] pb-[18px] px-[24px] box-border")}>
        <div
          className={cn(
            "mb-[12px]",
            "text-[16px] font-[700] text-[#131922]",
            "leading-[24px] tracking-[0.4px]",
            "text-ellipsis overflow-hidden",
          )}
        >
          {title}
        </div>
      </div>
      <div className="relative w-full aspect-[375/574]">
        <Image
          src={thumbnailUrl}
          alt={title || ""}
          fill
          className="object-cover"
        />
      </div>
      {/* <p>{description}</p> */}

      {mediaList.map(({ mediaId }) => (
        <div key={mediaId}>
          <PromotionImage mediaId={mediaId} />
        </div>
      ))}
      <PromotionProductTabs />
      {/* <div>
        {promotionProductList &&
          promotionProductList.map(({ productUuid, promotionType }) => (
            <div key={productUuid}>{promotionType} - {productUuid}</div>
          ))}
      </div> */}
      {/* <div>
        {promotionBenefitList &&
          promotionBenefitList.map(({ benefitContent }) => (
            <div key={benefitContent}>{benefitContent}</div>
          ))}
      </div> */}
    </main>
  );
}
