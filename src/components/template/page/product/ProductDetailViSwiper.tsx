"use client";

import { Media } from "@/types/ProductTypes";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { productClassName } from "@/lib/classNames";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProductDetailViProps {
  productMediaList: Media[];
}

export default function ProductDetailViSwiper({
  productMediaList,
}: ProductDetailViProps) {
  const mediaList = productMediaList.length > 0 ? productMediaList : [null];
  return (
    <Swiper pagination={{ type: "bullets" }} modules={[Pagination]} loop>
      {mediaList.map((media, i) =>
        media ? (
          <SwiperSlide key={media.id}>
            <div className={productClassName.image}>
              <Image
                src={media.mediaUrl}
                alt={media.description || ""}
                fill
                className="object-cover"
              />
              <div className="absolute top-[0px] w-full h-[32%] bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.25)]"></div>
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide key={i}>
            <div
              className={cn(
                productClassName.image,
                "flex justify-center items-center",
              )}
            >
              이미지가 존재하지 않습니다.
            </div>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
}
