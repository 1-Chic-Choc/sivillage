"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapper from "@/components/template/page/main/reuable/SectionWrapper";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { getPromotionList } from "@/action/promotionAction";
import Link from "next/link";

interface DailyLookItem {
  img_src: string;
  strong: string;
  description: string;
}

const dailyLookItems: DailyLookItem[] = [
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/071/00/240900000509071_20240911140052.jpg?RS=750&SP=1",
    strong: "주느세콰 에센셜 캐시미어 데일리룩",
    description: "24FW단독 10% 쿠폰+시청후기 사은품 이벤트",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/316/00/240900000509316_20240911161735.jpg?RS=750&SP=1",
    strong: "특별함을 더해 줄 지컷 위크",
    description: "신상 10% + 포인트 10% 적립 + 원데이 딜까지",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/816/00/240900000508816_20240911094515.jpg?cVer=11013045&RS=750&SP=1",
    strong: "여름이 끝나도 멈출 수 없는 스포츠",
    description: "퀵빌록루 일부상품 최대 60% OFF",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/168/00/240900000509168_20240911144752.jpg?RS=750&SP=1",
    strong: "묵직한 멋을 품은 발걸음",
    description: "히드낸더 24FW 단독, 최대 20%OFF + GIFT",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/780/00/240900000508780_20240911092955.jpg?RS=750&SP=1",
    strong: "천상의 머릿결을 찾아서",
    description: "러쉬 헤어케어 신제품 출시 이벤트",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/673/00/240900000509673_20240912095701.jpg?RS=750&SP=1",
    strong: "24FW 필립플레인 브랜드 위크",
    description: "아이코닉한 당신의 스타일 완성",
  },
];

export default function MainDailyLook() {
  const [promotionList, setPromotionList] = useState<Promotion[]>([]);
  useEffect(() => {
    getPromotionList().then((data) => {
      if (data) {
        setPromotionList(data.slice(10, 20));
      }
    });
  }, []);
  return (
    <SectionWrapper title="이번 주 소식">
      <Swiper autoplay={{ delay: 4800 }} speed={1200} modules={[Autoplay]}>
        {promotionList.length > 0
          ? promotionList.map(
              ({ promotionUuid, thumbnailUrl, title, description }, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/promotion/${promotionUuid}`}>
                    <div className="relative w-full aspect-[375/574]">
                      <Image
                        src={thumbnailUrl}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-[0px] w-full aspect-[375/574] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]"></div>
                    <div className="absolute bottom-[56px] px-[24px]">
                      <p className="text-[22px] text-white font-[700] leading-[30px] mb-[7px]">
                        {title}
                      </p>
                      <p className="text-[16px] text-white font-[400] leading-[22px]">
                        {description}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ),
            )
          : dailyLookItems.map(({ img_src, strong, description }, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[375/574]">
                  <Image
                    src={img_src}
                    alt={strong}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-[0px] w-full aspect-[375/574] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]"></div>
                <div className="absolute bottom-[56px] px-[24px]">
                  <p className="text-[22px] text-white font-[700] leading-[30px] mb-[7px]">
                    {strong}
                  </p>
                  <p className="text-[16px] text-white font-[400] leading-[22px]">
                    {description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </SectionWrapper>
  );
}
