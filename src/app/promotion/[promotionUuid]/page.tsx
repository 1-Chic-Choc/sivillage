import {
  getPromotion,
  getPromotionBenefitList,
  getPromotionMediaList,
  getPromotionProductList,
} from "@/action/promotionAction";
import BandShapeBanner from "@/components/template/page/main/reuable/BandShapeBanner";
import SectionWrapper from "@/components/template/page/main/reuable/SectionWrapper";
import PromotionImage from "@/components/template/page/promotion/PromotionImage";
import PromotionProductList from "@/components/template/page/promotion/PromotionProductList";
import PromotionProductTabs from "@/components/template/page/promotion/PromotionProductTabs";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface pageProps {
  params: { promotionUuid: string };
}

export default async function page({ params: { promotionUuid } }: pageProps) {
  const [promotion, promotionProductList, promotionMediaList] =
    await Promise.all([
      getPromotion({ promotionUuid }),
      getPromotionProductList({ promotionUuid }),
      getPromotionMediaList({ promotionUuid }),
    ]);

  if (!promotion) {
    return <main>존재하지 않는 프로모션입니다.</main>;
  }

  const productSet = new Set<string>();
  const productMap = new Map<string, string[]>();
  (promotionProductList || []).forEach(
    ({ productUuid, promotionType }: PromotionProduct) => {
      const productUuids = productMap.get(promotionType) || [];
      productUuids.push(productUuid);
      productMap.set(promotionType, productUuids);
      productSet.add(productUuid);
    },
  );

  const mediaList = (promotionMediaList || []).sort((a, b) =>
    a.mediaOrder === b.mediaOrder
      ? a.mediaId - b.mediaId
      : a.mediaOrder - b.mediaOrder,
  );

  const { thumbnailUrl, title } = promotion;

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

      <SectionWrapper title={promotion.title}>
        <div className="px-[24px]">
          <PromotionProductList productSet={productSet} />
        </div>
      </SectionWrapper>

      <BandShapeBanner />

      {/* {Array.from(productMap.entries()).map(([promotionType, productUuids]) => (
        <PromotionProductTabs
          key={promotionType}
          {...{ promotionType, productUuids }}
        />
      ))} */}
    </main>
  );
}
