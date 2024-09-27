import {
  getPromotion,
  getPromotionBenefitList,
  getPromotionMediaList,
  getPromotionProductList,
} from "@/action/promotionAction";
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

  const { thumbnailUrl, title, description } = promotion;

  return (
    <main className="w-full">
      <div>{title}</div>
      <div className="relative w-full aspect-[375/574]">
        <Image src={thumbnailUrl} alt={title || ""} fill />
      </div>
      <p>{description}</p>
      <div>
        {promotionProductList &&
          promotionProductList.map(({ productUuid, promotionType }) => (
            <div key={productUuid}>{promotionType}</div>
          ))}
      </div>
      {/* <div>
        {promotionMediaList && promotionMediaList.map(({ mediaId, mediaOrder }) => (
          <div key={mediaId}>{mediaOrder}</div>
        ))}
      </div>
      <div>
        {promotionBenefitList && promotionBenefitList.map(({ benefitContent }) => (
          <div key={benefitContent}>{benefitContent}</div>
        ))}
      </div> */}
    </main>
  );
}
