"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper 모듈 사용 설정 (CSS는 글로벌에 포함됨)
import "swiper/swiper-bundle.css";
import Image from "next/image";

const imageSrcArray = [
  "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/426/00/240900000506426_20240905083503.jpg",
  "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/567/00/240600000482567_20240626134838.jpg",
  "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/537/00/240900000505537_20240903092452.jpg",
];

export default function ShoppingBanner() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imageSrcArray.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              className="w-full pb-10 object-contain"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
