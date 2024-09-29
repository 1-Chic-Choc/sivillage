import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const mainCategoryItems = [
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/dspl/banner/90/258/00/240400000463258.png",
    text: "공식스토어",
    href: "/brandAtoZ",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/dspl/banner/90/239/00/240400000463239.png",
    text: "뷰티",
    href: "/category/뷰티",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/369/00/240900000507369_20240906105936.png",
    text: "여성의류",
    href: "/category/여성의류",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/241/00/240400000463241_20240906105815.png?cVer=06105815",
    text: "남성의류",
    href: "/category/남성의류",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/245/00/240400000463245_20240906105913.png?cVer=06105913",
    text: "백",
    href: "/category/백",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/316/00/240800000503316_20240828141253.png",
    text: "슈즈",
    href: "/category/슈즈",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/367/00/240900000507367_20240906105907.png",
    text: "액세서리",
    href: "/category/액세서리",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/366/00/240900000507366_20240906105840.png",
    text: "스포츠\n/레저",
    href: "/category/스포츠_레저",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/243/00/240400000463243_20240906105826.png?cVer=06105827",
    text: "라이프",
    href: "/category/라이프",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/370/00/240900000507370_20240906110003.png",
    text: "JAJU",
    href: "/brand/JAJU",
  },
];

export default function MainCategory() {
  return (
    <div
      className={cn(
        "w-full px-[24px]",
        "grid grid-cols-[repeat(5,minmax(0,16.8%))] justify-between gap-y-[16px] mb-[32px] ",
      )}
    >
      {mainCategoryItems.map(({ img_src, text, href }, index) => (
        <Link
          key={index}
          href={href}
          className={cn("w-full flex flex-col items-center")}
        >
          <span className="relative w-full aspect-[1]">
            <Image src={img_src} alt={text} fill className="rounded-full" />
          </span>
          <span className="text-[12px] text-[#131922] font-[500] leading-[16px] mt-[6px] whitespace-pre-wrap">
            {text}
          </span>
        </Link>
      ))}
    </div>
  );
}
