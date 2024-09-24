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

export type ProductUUID = Record<"productUuid", string>;

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
