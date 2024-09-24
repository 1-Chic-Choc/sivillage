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
