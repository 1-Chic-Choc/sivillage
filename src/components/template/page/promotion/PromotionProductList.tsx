import { getProductSingle } from "@/action/productAction";
import ProductLikeButton from "@/components/molecule/button/ProductLikeButton";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/organism/product/ProductCard";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

interface PromotionProductListProps {
  productSet: Set<string>;
}

export default async function PromotionProductList({
  productSet,
}: PromotionProductListProps) {
  const productList = (
    await Promise.all(
      Array.from(productSet).map((productUuid) =>
        getProductSingle({ productUuid }),
      ),
    )
  ).filter((product) => product !== null);

  return (
    <div className={cn("flex")}>
      {productList.map((product) => (
        <div
          key={product.productUuid}
          className={cn("relative w-[calc(50%-4.5px)] flex-shrink-0 mb-[36px]")}
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
      ))}
    </div>
  );
}
