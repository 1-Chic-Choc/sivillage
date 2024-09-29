export interface ProductReviewMedia {
  reviewUuid: string;
  mediaId: number;
  mediaOrder: number;
}

export interface ProductReviewList {
  content: string[];
  nextCursor: number;
  hasNExt: boolean;
  pageSize: number;
  page: number;
}

export interface ProductReview {
  reviewUuid: string;
  productUuid: string;
  userUuid: string;
  optionName: string;
  reviewContent: string;
  starPoint: number;
  likedCnt: number;
  reviewerEmail: string;
  reviewRateType1: string;
  reviewRateType2: string;
  reviewRateType3: string;
  reviewRateText1: string;
  reviewRateText2: string;
  reviewRateText3: string;
  createdAt: string;
}
