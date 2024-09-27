interface Promotion {
  promotionUuid: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

interface PromotionProduct {
  productUuid: string;
  promotionType: string;
}

interface PromotionMedia {
  mediaId: number;
  mediaOrder: number;
}

interface PromotionBenefit {
  benefitContent: string;
}
