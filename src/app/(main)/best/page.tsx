import {
  getProductBest100,
  getProductCategoryFilteringValues,
  getProductList,
  getProductListCount,
} from "@/action/productAction";
import ProductLikeButton from "@/components/molecule/button/ProductLikeButton";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/organism/product/ProductCard";
import YouMayALsoLike from "@/components/organism/product/YouMayALsoLike";
import FilteringComponent from "@/components/template/layout/filtering/FilteringComponent";
import BestProductTopNavBar from "@/components/template/layout/navbar/BestPoructTopNavBar";
import { productClassName, sectionHead } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

interface pageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function page({ searchParams }: pageProps) {
  const categories = searchParams.categories;
  const categoryArray = categories
    ? Array.isArray(categories)
      ? categories
      : [categories]
    : ["여성의류"];
  const filtering = { ...searchParams };
  const [productBest] = await Promise.all([
    getProductBest100({
      categories: categoryArray,
      page: 1,
      perPage: 100,
    }),
  ]);
  return (
    <main className="w-full">
      <BestProductTopNavBar />
      <h2 className={cn(sectionHead.h2, "px-[24px]")}>
        <span className={sectionHead.title}>Best Product</span>
      </h2>
      <div className={productClassName.list}>
        {(productBest || []).length > 0 ? (
          (productBest || []).map((product, i) => (
            <div
              key={product.productUuid}
              className={cn(
                "relative flex-shrink-0 mb-[36px]",
                i < 2 && "w-[calc(50%-4.5px)]",
                i >= 2 && "w-[calc((100%-9px)/3)]",
              )}
            >
              <div
                className={cn(
                  "absolute p-2 z-10",
                  "font-[700] font-regular-bold-cell text-white text-center",
                  i === 0 && "bg-[#D99C63]",
                  i !== 0 && "bg-[#929292]",
                )}
              >
                {i + 1}
              </div>
              <ProductLikeButton
                productUuid={product.productUuid}
                className="absolute top-2 right-2 z-10"
              />
              <Suspense
                key={product.productUuid}
                fallback={<ProductCardSkeleton />}
              >
                <ProductCard product={product} />
              </Suspense>
            </div>
          ))
        ) : (
          <div
            className={cn(
              "w-full h-[100px]",
              "flex justify-center items-center",
            )}
          >
            관련 상품이 없습니다.
          </div>
        )}
      </div>
    </main>
  );
}
