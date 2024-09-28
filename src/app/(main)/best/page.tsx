import {
  getProductBest100,
  getProductCategoryFilteringValues,
  getProductList,
  getProductListCount,
} from "@/action/productAction";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/organism/product/ProductCard";
import YouMayALsoLike from "@/components/organism/product/YouMayALsoLike";
import FilteringComponent from "@/components/template/layout/filtering/FilteringComponent";
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
      <h2 className={cn(sectionHead.h2, "px-[24px]")}>
        <span className={sectionHead.title}>Best Product</span>
      </h2>
      <div className={productClassName.list}>
        {(productBest || []).length > 0 ? (
          (productBest || []).map((product) => (
            <Suspense
              key={product.productUuid}
              fallback={<ProductCardSkeleton />}
            >
              <ProductCard product={product} />
            </Suspense>
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
