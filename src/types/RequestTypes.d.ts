import { Product } from "./ProductTypes";

export interface SignUpResquestType {
  email: string;
  password: string;
  name: string;
  phone: string;
  postalCode: string;
  address: string;
  birth: string;
  terms: {
    termsId: number;
    isAgree: boolean;
  }[];
  oauthProvider?: string;
  oauthId?: string;
  oauthEmail?: string;
}

// auth

export type SignInRequestType = Record<
  "email" | "password" | "autoSignIn",
  string
>;

// oauth

export type UserInfoRequestType = Record<
  "oauthProvider" | "oauthId" | "oauthEmail",
  string
>;

// product
export interface ProductListRequestType {
  categories?: string[];
  sizes?: string[];
  colors?: string[];
  brands?: string[];
  minimumPrice?: number;
  mximumPrice?: number;
  page?: number;
  perPage?: number;
  sortBy?: "createdAt" | "price" | "discount_rate" | "name";
  isAscending?: boolean;
  keywords?: string;
}

export type ProductListCountRequestType = ProductListRequestType;

export type ProductSizesPerColorResquestType = ProductUUID;

export interface ProductBest100RequestType {
  categories?: string[];
  page?: number;
  perPage?: number;
}

export interface ProductCategoryFilteringValuesRequestType {
  categories?: string[];
}

export type CategoryByPathRequestType = Record<"path", string[]>;
export type CategpryListRequestType = Record<"parentId", number>;

export type ProductID = Record<"productId", string>;
export type ProductUUID = Record<"productUuid", string>;

export type ProductCategoryRequestType = ProductID;
export type ProductSingleRequestType = ProductUUID;
export type ProductOptionListRequestType = ProductUUID;
export type ProductInfoListRequestType = ProductUUID;
export type ProductHashtagListRequestType = ProductUUID;

export type ProductOptionUUID = Record<"productOptionUuid", string>;

export type ProductDetailRequestType = ProductOptionUUID;
export type ProductMediaRequestType = ProductOptionUUID;

export type MediaRequestType = Record<"mediaId", number>;

export type ColorRequestType = Record<"id", number>;

export type SizeRequestType = Record<"id", number>;

export type EtcOptionRequestType = Record<"id", number>;

export type BrandRequestType = Record<"brandUuid", string>;
export type BrandMediaListRequestType = Record<"brandUuid", string>;

export type ProductReviewListRequestType = ProductUUID;

export type ProductLikeRequestType = ProductUUID;

// promotion
export type PromotionUUID = Record<"promotionUuid", string>;

export type PromotionRequestType = PromotionUUID;
export type PromotionProductListRequestType = PromotionUUID;
export type PromotionMediaListRequestType = PromotionUUID;
export type PromotionBenefitListRequestType = PromotionUUID;

//cart
