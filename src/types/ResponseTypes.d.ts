export interface commonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export type CommonResType<T> = commonResType<T>;

// auth

export type UserUUID = Record<uuid, string>;

// category

export interface CategoryType {
  ctg_name: string;
  ctg_no: string;
  depth: number;
  parent_ctg_name: string | null;
  parent_ctg_no: string | null;
  is_leaf: boolean;
}

// cart

export interface cartItemType {
  cartUuid: string;
  productUuid: string;
  productOptionUuid: String;
  quantity: number;
  isSelected: boolean;
}

export interface cartItemDataType {
  totalPrice: number;
  disCountTotalPrice: number;
  shippingFee: number;
  cartItemList: cartItemType[];
}

export interface ProductDataType {
  productId: number;
  productUuid: string;
  brandUuid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductOptionDataType {
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

export interface SizeDataType {
  name: number;
  value: string;
}

export interface ColorDataType {
  name: number;
  value: string;
}

export interface productMediaType {
  mediaId: number;
  mediaOrder: number;
}

export interface MediaDataType {
  mediaUrl: string;
  mediaType: string;
  description: string;
}

export interface unsignedMemberDataType {
  userUuid: string;
}

export interface BrandDataType {
  brandUuid: string;
  name: string;
  nameKo: string;
  logoUrl: string;
  brandListType: string;
  brandIndexLetter: string;
}
