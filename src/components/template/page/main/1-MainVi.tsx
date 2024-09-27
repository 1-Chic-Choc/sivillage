"use client";

import Image from "next/image";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Suspense, useEffect, useState } from "react";
import { getPromotionList } from "@/action/promotionAction";
import Link from "next/link";

interface ViItem {
  img_src: string;
  brand: string[];
  title?: string;
  subtitle?: string;
}

const viItems: ViItem[] = [
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/812/00/240900000508812_20240911094353.jpg?RS=750&SP=1",
    brand: [],
    title: "최고의 장비로 퍼펙트한 라운딩",
    subtitle: "블러드라인 최대 60% OFF + 10% 상품쿠폰 증정",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/403/00/240800000503403_20240912093551.jpg?cVer=12093551?cVer=19111355&RS=750&SP=1",
    brand: ["UGG"],
    title: "하니와 함께하는\n어그의 계절",
    subtitle: "FEELS LIKE UGG",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/073/00/240900000509073_20240911140215.jpg?RS=750&SP=1",
    brand: ["GOLDEN GOOSE KOREA"],
    title: "시대를\n초월한 매력",
    subtitle: "골든구스 라이트스타 오픈, 특별한 혜탹까지!",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/822/00/240900000508822_20240911094915.jpg?cVer=12013504&RS=750&SP=1",
    brand: ["FACE FACTORY"],
    title: "건강한 환절기\n스킨케어 노하우",
    subtitle: "베스트 제품 최대 78% 할인 혜택",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/405/00/240900000508405_20240910093248.jpg?RS=750&SP=1",
    brand: ["J.LINDEBERG", "etc"],
    title: "스타일과 기능성을\n한 번에",
    subtitle: "가을 필드룩 최대 50% 할인 + 쿠폰",
  },
];

export default function MainVi() {
  const [promotionList, setPromotionList] = useState<Promotion[]>([]);
  useEffect(() => {
    getPromotionList().then((data) => {
      if (data) {
        setPromotionList(data.slice(0, 10));
      }
    });
  }, []);

  return (
    <div className="mb-[48px]">
      <Swiper
        autoplay={{
          delay: 4800,
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ["-50%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={1200}
        modules={[Autoplay, EffectCreative]}
        loop
      >
        {promotionList.length > 0
          ? promotionList.map(
              ({ promotionUuid, title, description, thumbnailUrl }, i) => (
                <SwiperSlide key={promotionUuid}>
                  <Link href={`/promotion/${promotionUuid}`}>
                    <div className="relative w-full aspect-[375/574]">
                      <Image
                        src={thumbnailUrl}
                        alt={title || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-[0px] w-full aspect-[375/574] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]"></div>
                    <div className="w-full absolute bottom-[2.4rem] flex flex-col  items-center mb-[8px] text-center">
                      {/* <p className="text-[14px] text-white font-[700] leading-[20px] mb-[8px]">
                {`${brand[0]}${brand.length > 1 ? " & more" : ""}`}
              </p> */}
                      <p className="text-[24px] text-white font-[700] leading-[42px] whitespace-pre-wrap">
                        {title}
                      </p>
                      <p className="text-[16px] text-white font-[400] leading-[24px] mt-[8px]">
                        {description}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ),
            )
          : viItems.map(({ img_src, brand, title, subtitle }, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full aspect-[375/574]">
                  <Image
                    src={img_src}
                    alt={title || ""}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-[0px] w-full aspect-[375/574] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]"></div>
                <div className="w-full absolute bottom-[2.4rem] flex flex-col  items-center mb-[8px] text-center">
                  <p className="text-[14px] text-white font-[700] leading-[20px] mb-[8px]">
                    {`${brand[0] ? brand[0] : ""}${brand.length > 1 ? " & more" : ""}`}
                  </p>
                  <p className="text-[24px] text-white font-[700] leading-[42px] whitespace-pre-wrap">
                    {title}
                  </p>
                  <p className="text-[16px] text-white font-[400] leading-[24px] mt-[8px]">
                    {subtitle}
                  </p>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
