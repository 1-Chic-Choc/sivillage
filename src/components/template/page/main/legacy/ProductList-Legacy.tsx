"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FreeMode } from "swiper/modules";

interface ProductInfo {
  img_src: string;
  brand: string;
  name: string;
  price: string;
  productCode: string;
}

const productInfos: ProductInfo[] = [
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/goods/org/249/240806026432249.jpg?RS=350&SP=1",
    brand: "UGG",
    name: "[WOMEN] 스웨이드 레더 미니 플랫폼 부츠 (클래식 울트라 미니 플랫폼)",
    price: "268,000",
    productCode: "2408866941",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/goods/org/249/240806026432249.jpg?RS=350&SP=1",
    brand: "UGG",
    name: "[WOMEN] 스웨이드 레더 미니 플랫폼 부츠 (클래식 울트라 미니 플랫폼)",
    price: "268,000",
    productCode: "2408866941",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/goods/org/249/240806026432249.jpg?RS=350&SP=1",
    brand: "UGG",
    name: "[WOMEN] 스웨이드 레더 미니 플랫폼 부츠 (클래식 울트라 미니 플랫폼)",
    price: "268,000",
    productCode: "2408866941",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/goods/org/249/240806026432249.jpg?RS=350&SP=1",
    brand: "UGG",
    name: "[WOMEN] 스웨이드 레더 미니 플랫폼 부츠 (클래식 울트라 미니 플랫폼)",
    price: "268,000",
    productCode: "2408866941",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/goods/org/249/240806026432249.jpg?RS=350&SP=1",
    brand: "UGG",
    name: "[WOMEN] 스웨이드 레더 미니 플랫폼 부츠 (클래식 울트라 미니 플랫폼)",
    price: "268,000",
    productCode: "2408866941",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/goods/org/249/240806026432249.jpg?RS=350&SP=1",
    brand: "UGG",
    name: "[WOMEN] 스웨이드 레더 미니 플랫폼 부츠 (클래식 울트라 미니 플랫폼)",
    price: "268,000",
    productCode: "2408866941",
  },
];

export default function ProductList() {
  return (
    <Swiper slidesPerView={2} freeMode={true} modules={[FreeMode]}>
      {productInfos.map(({ img_src, brand, name, price, productCode }, i) => (
        <SwiperSlide key={i} className={cn("pr-[8px]")}>
          <Link href={`/product/${productCode}`} className="w-full">
            <div className="relative w-full aspect-[2/3]">
              <Image src={img_src} alt={name} fill />
              <div className="w-full aspect-[2/3] bg-[rgba(0,0,0,0.03)] absolute bottom-[0%]" />
            </div>
            <div className="py-[16px] px-[8px]">
              <p className="text-[14px] font-[700] leading-[20px] tracking-[-0.08px] mb-[6px]">
                {brand}
              </p>
              <p className="text-[12px] font-[400] leading-[18px] tracking-[-0.06px] text-nowrap text-ellipsis overflow-x-hidden">
                {name}
              </p>
              <p className="text-[12px] font-[400] leading-[18px] tracking-[-0.06px]">
                {price}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
