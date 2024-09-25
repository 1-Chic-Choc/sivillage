import { cn } from "@/lib/utils";

export const productClassName = {
  list: cn("flex flex-wrap justify-between px-[24px]"),
  item: cn("w-[calc(50%-4.5px)] mb-[36px]"),
  image: cn("relative w-full aspect-[2/3]"),
  blend: cn("absolute bottom-[0px] w-full aspect-[2/3] bg-[rgba(0,0,0,0.03)]"),
  textContainer: cn("h-[96px] px-[8px] py-[16px]"),
  brand: cn("mb-[6px]", "text-[14px] font-[700]", "leading-[normal]"),
  name: cn(
    "h-[18px] mb-[2px]",
    "text-[12px] font-[400]",
    "leading-[18px] tracking-[-0.06px]",
    "text-ellipsis text-nowrap overflow-hidden",
  ),
  price: cn(
    "h-[18px]",
    "text-[12px] font-[400]",
    "leading-[18px] tracking-[-0.06px]",
    "flex gap-x-[5px] items-center",
  ),
  discountRate: cn("text-[#d99c63] font-[700]"),
};

export const sectionHead = {
  h2: cn(
    "flex justify-between items-center",
    "h-[56px] mb-[16px] p-[0_24px] box-border",
  ),
  title: cn(
    "text-[22px] leading-[40px]",
    "font-regular-bold-cello font-[900]",
    "text-[#131922]",
    "text-nowrap text-ellipsis overflow-hidden",
  ),
};

export const productDetailClassName = {
  infoContainer: cn(
    "pt-[12px] pb-[48px]",
    "border-b-[8px_solid_#f0f0f0]",
    "overflow-hidden",
  ),
  infoBrand: cn(
    "text-[#040404] text-[16px] font-[700] leading-[20px] tracking-[normal]",
    "relative inline-block",
    "px-[24px] py-[11px]",
  ),
  infoDescription: cn(
    "text-[18px] leading-[24px] text-[#40404]",
    "py-[4px] px-[24px] tracking-[0]",
  ),
  infoPrice: cn(
    "px-[24px] mt-[2px] py-[10px]",
    "flex flex-wrap items-center gap-y-[4px]",
  ),
  infoPriceMember: cn("flex flex-wrap items-center mr-[10px]"),
  infoPriceCurrent: cn(
    "flex flex-nowrap items-end",
    "text-[24px] font-[700] leading-[26px] text-[#131a23]",
  ),
  hashtagContainer: cn("flex flex-wrap p-[20px] bg-[#f0f0f0]"),
  hastag: cn(
    "h-[40px] m-[4px] px-[16px] bg-[#fff] border border-[#e0e0e0]",
    "text-[14px] tracking-[0.8px] text-[#131922]",
    "flex items-center justify-center",
    "text-nowrap text-ellipsis overflow-x-atuo",
  ),
  tapInfoDetail: cn("border-b-[8px] border-[#f0f0f0]"),

  tabReviewBasic: cn("px-[24px] border-b-[8px] border-[#f0f0f0]"),
  wrap: cn("leading-[20px] pt-[24px] pb-[20px]"),
  wrapTitle: cn(
    "text-[16px] font-[700] leading-[22px]",
    "text-ellipsis tracking-[0.4px] overflow-hidden",
    "flex justify-between items-center",
  ),
  wrapTitleButton: cn("text-[14px] text-[#787878] underline"),
  tabReviewBasicText: cn("pt-[32px] pb-[72px]"),
  tabReviewBasicTextStrong: cn(
    "text-[14px] leading-[20px] font-[500] text-[#131922] text-center",
  ),
};
