import { cn } from "@/lib/utils";

export const productClassName = {
  list: cn("flex flex-wrap justify-between px-[24px]"),
  // item: cn("w-[calc(50%-4.5px)] mb-[36px]"),
  thumnail: cn("relative w-full aspect-[2/3]"),
  blend: cn("absolute bottom-[0px] w-full aspect-[2/3] bg-[rgba(0,0,0,0.03)]"),
  textContainer: cn("h-[96px] px-[8px] py-[16px]"),
  brand: cn("mb-[6px]", "text-[14px] font-[700]", "leading-[normal]"),
  name: cn(
    "h-[18px] mb-[2px]",
    "text-[12px] font-[400]",
    "leading-[18px] tracking-[-0.06px]",
    "text-ellipsis",
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
