export interface Category {
  id: number;
  name: string;
  depth: number;
}

export interface ProductCategory {
  id: number;
  productId: string;
  categoryId: number;
}

export interface Product {
  productId: number;
  productUuid: string;
  brandUuid: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductOption {
  productOptionUuid: string;
  productId: number;
  sizeId: number;
  colorId: number;
  etcOptionId: number;
  saleStatus: string;
  price: number;
  discountRate: number;
  discountPrice: number;
}

export interface ProductInfo {
  id: number;
  kind: string;
  value: string;
  filtered: boolean;
}

export interface ProductHashtag {
  id: number;
  hashtagContent: string;
}

export interface ProductDetail {
  id: number;
  productDetailUrl: string;
}

export interface ProductMedia {
  id: number;
  productOptionUuid: string;
  mediaId: number;
  mediaOrder: number;
}

export interface Media {
  id: number;
  mediaUrl: string;
  mediaType: string;
  description: string;
}

export interface Color {
  id: number;
  name: string;
  value: string;
}

export interface Size {
  id: number;
  name: string;
  value: string;
}

export interface EtcOption {
  id: number;
  name: string;
}

export interface Brand {
  brandUuid: string;
  name: string;
  nameKo: string;
  logoUrl: string;
  brandListType: string;
  brandIndexLetter: string;
}

export interface BrandMedia {
  mediaId: number;
  mediaOrder: number;
}

export interface ProductListCount {
  totalCount: number;
  totalPages: number;
}

export interface ProductSizesPerColor {
  color: Color;
  sizes: Size[];
}

export interface ProductCategoryFilteringValues {
  colorIds: string[];
  sizeIds: string[];
  brandUuids: string[];
}

export type ProductLike = boolean;

export interface ProductScore {
  likeCount: number;
  reviewCount: number;
  starPointAverage: number;
  totalScore: number;
}
