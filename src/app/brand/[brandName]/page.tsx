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
import { productClassName, sectionHead } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

interface pageProps {
  params: { brandName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function page({
  params: { brandName },
  searchParams,
}: pageProps) {
  const categories = searchParams.categories;
  const categoryArray = categories
    ? Array.isArray(categories)
      ? categories
      : [categories]
    : [];
  brandName = decodeURI(brandName).replace("_", "/");
  const filtering = { perPage: 100, ...searchParams, brands: [brandName] };

  const [products, productCount, productBest, productCategoryFilteringValues] =
    await Promise.all([
      getProductList(filtering),
      getProductListCount(filtering),
      getProductBest100({
        categories: categoryArray,
        page: 1,
        perPage: 10,
      }),
      getProductCategoryFilteringValues({
        brands: [brandName],
      }),
    ]);
  return (
    <main className="w-full">
      {(productBest || []).length > 7 ? (
        <YouMayALsoLike products={productBest || []} />
      ) : null}
      <h2 className={cn(sectionHead.h2, "px-[24px]")}>
        <span className={sectionHead.title}>All Product</span>
        <div>총 {productCount?.totalCount}개의 상품</div>
      </h2>

      {(products || []).length > 0 ? (
        <FilteringComponent
          path={`/brand/${brandName}`}
          productCategoryFilteringValues={
            productCategoryFilteringValues || undefined
          }
          exluded={["브랜드"]}
        />
      ) : null}
      <div className={productClassName.list}>
        {(products || []).length > 0 ? (
          (products || []).map((product) => (
            <div
              key={product.productUuid}
              className={cn(
                "relative w-[calc(50%-4.5px)] flex-shrink-0 mb-[36px]",
              )}
            >
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
