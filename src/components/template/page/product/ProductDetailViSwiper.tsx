"use client";

import { Media } from "@/types/ProductTypes";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { productClassName } from "@/lib/classNames";

interface ProductDetailViProps {
  productMediaList: Media[];
}

export default function ProductDetailViSwiper({
  productMediaList,
}: ProductDetailViProps) {
  return (
    <Swiper pagination={{ type: "bullets" }} modules={[Pagination]} loop>
      {productMediaList.map((media) => (
        <SwiperSlide key={media.id}>
          <div className={productClassName.image}>
            <Image src={media.mediaUrl} alt={media.description || ""} fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
