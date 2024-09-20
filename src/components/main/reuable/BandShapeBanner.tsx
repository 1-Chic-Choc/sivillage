"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

const bannerItems = [
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/203/00/240900000509203_20240911145805.jpg?RS=750&SP=1",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/962/00/240900000509962_20240912141024.jpg?RS=750&SP=1",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/205/00/240900000509205_20240918224744.jpg?cVer=18104746&RS=750&SP=1",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/206/00/240900000509206_20240911145921.jpg?RS=750&SP=1",
  },
  {
    img_src:
      "https://image.sivillage.com/upload/C00001/s3/dspl/banner/99/209/00/240900000509209_20240911150003.jpg?RS=750&SP=1",
  },
];

export default function BandShapeBanner() {
  return (
    <Swiper
      autoplay={{
        delay: 4800,
      }}
      speed={1200}
      loop={true}
      modules={[Autoplay]}
    >
      {bannerItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full aspect-[75/16]">
            <Image src={item.img_src} alt="" fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
