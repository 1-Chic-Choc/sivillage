import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionWrapper from "./reuable/SectionWrapper";
import Link from "next/link";
import ProductList from "./reuable/ProductList";
import { Product } from "@/types/ProductTypes";
import { getProductList } from "@/action/productAction";
import { Suspense } from "react";

interface CurationData {
  title: string;
  banner: {
    title: string;
    subtitle: string;
    href: string;
  };
  products: Product[];
}

interface MainCurationProps {
  title?: string;
  defaultIndex?: number;
  page?: number;
}

export default async function MainCuration({
  title = "따뜻한 감성, 섬세한 이야기",
  defaultIndex = 0,
  page = 1,
}: MainCurationProps) {
  const productsList = await Promise.all([
    getProductList({ brands: ["UGG"], perPage: 6, page }),
    getProductList({ keywords: "니트웨어", perPage: 6, page }),
    getProductList({
      keywords: "가을캠핑의 낭만을 준비하세요",
      categories: ["스포츠/레저"],
      perPage: 6,
      page,
    }),
    getProductList({ keywords: "향테리어", perPage: 6, page }),
  ]);
  let curationDatas: CurationData[] = [
    {
      title: "UGG",
      banner: {
        title: "진짜는 촉감부터 달라요",
        subtitle: "부드럽게 감싸는 어그의 포근함",
        href: "/brand/UGG",
      },
      products: productsList[0] || [],
    },
    {
      title: "니트웨어", // 있음
      banner: {
        title: "가을을 알리는 포근함",
        subtitle: "니트로 느끼는 가을 감촉",
        href: "/search/니트웨어",
      },
      products: productsList[1] || [],
    },
    {
      title: "가을캠핑",
      banner: {
        title: "가을캠핑의 낭만을 준비하세요",
        subtitle: "설레는 가을 향기와 함께 떠나는 캥핌",
        href: "/search/가을캠핑의 낭만을 준비하세요?categories=스포츠/레저",
      },
      products: productsList[2] || [],
    },
    {
      title: "향테리어", // 있음
      banner: {
        title: "향기로 채우는 나만의 공간",
        subtitle: "나의 일상에 차분히 스며들 향기",
        href: "/search/향테리어",
      },
      products: productsList[3] || [],
    },
  ];

  curationDatas = [...curationDatas, ...curationDatas].splice(defaultIndex, 4);

  return (
    <Suspense fallback={null}>
      <SectionWrapper title={title}>
        <Tabs defaultValue={curationDatas[0].title}>
          <TabsList className="px-[24px] mb-[16px] bg-white ">
            {curationDatas.map((data, index) => (
              <TabsTrigger
                key={index}
                value={data.title}
                className={cn(
                  "border-[1px] rounded-full border-[#E5E7EB",
                  "px-[11px] py-[11px] mr-[8px]",
                  "text-[14px] font-[400] leading-[17px]",
                  "text-[#131922] bg-white",
                  "data-[state=active]:bg-[#131922] data-[state=active]:text-white",
                )}
              >
                {data.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {curationDatas.map(({ title, banner, products }, index) => (
            <TabsContent key={index} value={title}>
              <div className="mx-[24px] mb-[12px]">
                <Link href={banner.href}>
                  <div className="p-[16px] pr-[48px] bg-[#F8F8F8]">
                    <div className="text-[16px] text-[#131922] font-[700] leading-[20px]">
                      {banner.title}
                    </div>
                    <div className="text-[14px] text-[#787878] font-[400] leading-[20px]">
                      {banner.subtitle}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="mx-[24px]">
                <ProductList products={products} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </SectionWrapper>
    </Suspense>
  );
}
