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
  params: { path: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function page({
  params: { path },
  searchParams,
}: pageProps) {
  const categories = path.map((i) => decodeURI(i).replace("_", "/"));
  const filtering = { perPage: 100, ...searchParams, categories };
  const [products, productCount, productBest, productCategoryFilteringValues] =
    await Promise.all([
      getProductList(filtering),
      getProductListCount(filtering),
      getProductBest100({
        categories: categories,
        page: 1,
        perPage: 10,
      }),
      getProductCategoryFilteringValues({ categories }),
    ]);

  return (
    <main className="w-full">
      <YouMayALsoLike products={productBest || []} />
      <h2 className={cn(sectionHead.h2, "px-[24px]")}>
        <span className={sectionHead.title}>All Product</span>
        <div>총 {productCount?.totalCount}개의 상품</div>
      </h2>

      <FilteringComponent
        path={`/category/${path.join("/")}`}
        productCategoryFilteringValues={
          productCategoryFilteringValues || undefined
        }
      />
      <div className={productClassName.list}>
        {(products || []).length > 0 ? (
          (products || []).map((product) => (
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
