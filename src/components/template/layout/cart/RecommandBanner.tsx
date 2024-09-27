"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper 모듈 사용 설정 (CSS는 글로벌에 포함됨)
import "swiper/swiper-bundle.css";

const imageSrcArray = [
  "https://image.sivillage.com/upload/C00001/s3/goods/org/459/240712024476459.jpg?RS=350&SP=1",
  "https://image.sivillage.com/upload/C00001/s3/goods/org/459/240712024476459.jpg?RS=350&SP=1",
  "https://image.sivillage.com/upload/C00001/s3/goods/org/539/240828029572539.jpg?RS=350&SP=1",
  "https://image.sivillage.com/upload/C00001/goods/org/329/230623005514329.jpg?RS=350&SP=1",
  "https://image.sivillage.com/upload/C00001/s3/goods/org/388/240725025284388.jpg?RS=350&SP=1",
  "https://image.sivillage.com/upload/C00001/s3/goods/org/388/240725025284388.jpg?RS=350&SP=1",
];

export default function RecommandBanner() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        className="mySwiper"
      >
        {imageSrcArray.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-48">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full pb-10 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
