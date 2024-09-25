import { getProductList } from "@/action/productAction";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/organism/product/ProductCard";
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
  const filtering = { ...searchParams, categories };
  const products = (await getProductList(filtering)) || [];

  return (
    <main className="w-full">
      <h2 className={cn(sectionHead.h2, "px-[24px]")}>
        <span className={sectionHead.title}>You May Also Like</span>
      </h2>
      <div className={productClassName.list}>
        {products.map((product) => (
          <Suspense
            key={product.productUuid}
            fallback={<ProductCardSkeleton />}
          >
            <ProductCard product={product} />
          </Suspense>
        ))}
      </div>
    </main>
  );
}
