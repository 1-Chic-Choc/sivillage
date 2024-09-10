import {
  middleCategoryType,
  topCategoryType,
  bottomCategoryType,
} from "@/types/ResponseTypes";

export const topcategoryData: topCategoryType[] = [
  {
    topCategoryCode: "1",
    topCategoryName: "여성의류",
  },
  {
    topCategoryCode: "2",
    topCategoryName: "남성의류",
  },
  {
    topCategoryCode: "3",
    topCategoryName: "백",
  },
  {
    topCategoryCode: "4",
    topCategoryName: "슈즈",
  },
  {
    topCategoryCode: "5",
    topCategoryName: "액세서리",
  },
];

export const middleCategoryData1: middleCategoryType[] = [
  {
    middleCategoryCode: "1",
    middleCategoryName: "아우터",
    topCategoryCode: "1",
  },
  {
    middleCategoryCode: "2",
    middleCategoryName: "드레스",
    topCategoryCode: "1",
  },
];
export const middleCategoryData2: middleCategoryType[] = [
  {
    middleCategoryCode: "1",
    middleCategoryName: "아우터",
    topCategoryCode: "2",
  },
  {
    middleCategoryCode: "2",
    middleCategoryName: "수트",
    topCategoryCode: "2",
  },
];
export const middleCategoryData3: middleCategoryType[] = [
  {
    middleCategoryCode: "1",
    middleCategoryName: "여성가방",
    topCategoryCode: "3",
  },
  {
    middleCategoryCode: "2",
    middleCategoryName: "남성가방",
    topCategoryCode: "3",
  },
];

export const bottomCategoryData: bottomCategoryType[] = [
  {
    bottomCategoryCode: "1",
    bottomCategoryName: "다운 패딩 코트",
    topCategoryCode: "1",
  },
  {
    bottomCategoryCode: "2",
    bottomCategoryName: "다운 패딩 코트",
    topCategoryCode: "2",
  },
  {
    bottomCategoryCode: "3",
    bottomCategoryName: "다운 패딩 코트",
    topCategoryCode: "3",
  },
  {
    bottomCategoryCode: "4",
    bottomCategoryName: "다운 패딩 코트",
    topCategoryCode: "1",
  },
  {
    bottomCategoryCode: "5",
    bottomCategoryName: "다운 패딩 코트",
    topCategoryCode: "2",
  },
  {
    bottomCategoryCode: "6",
    bottomCategoryName: "다운 패딩 코트",
    topCategoryCode: "3",
  },
];
