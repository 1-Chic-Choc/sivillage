import { brandNameType } from "./initialType";

export interface commonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export type CommonResType<T> = commonResType<T>;

// auth

export type UserUUID = Record<"uuid", string>;

// category

export interface CategoryType {
  ctg_name: string;
  ctg_no: string;
  depth: number;
  parent_ctg_name: string | null;
  parent_ctg_no: string | null;
  is_leaf: boolean;
}

export interface brandNameType {
  brandUuid: string;
  name: string;
  nameKo: string;
  logoUrl: string;
  brandListType: string;
  brandIndexLetter: string;
}

export interface BrandApiResponse {
  httpStatus: {
    error: boolean;
    is4xxClientError: boolean;
    is5xxServerError: boolean;
    is1xxInformational: boolean;
    is2xxSuccessful: boolean;
    is3xxRedirection: boolean;
  };
  isSuccess: boolean;
  message: string;
  code: number;
  result: brandNameType[];
}
