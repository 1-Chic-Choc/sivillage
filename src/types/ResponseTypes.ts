export interface topCategoryType {
  topCategoryCode: string;
  topCategoryName: string;
}

export interface middleCategoryType {
  middleCategoryCode: string;
  middleCategoryName: string;
  topCategoryCode: string;
}

export interface bottomCategoryType {
  bottomCategoryCode: string;
  bottomCategoryName: string;
  topCategoryCode: string;
}
