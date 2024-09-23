import Image from "next/image";
import Link from "next/link";

export default function MainBrandBanner() {
  return (
    <div className="relative w-[100%-48px] aspect-[327/184] mx-[24px] mb-[48px]">
      <Link href="/">
        <Image
          src={
            "https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/972/30/240900000508972_20240911110342.jpg"
          }
          alt={"스니커즈 전문관 바로가기"}
          fill
          className="bg-slate-600"
        />
      </Link>
    </div>
  );
}
