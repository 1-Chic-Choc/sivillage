import { Product } from "@/types/ProductTypes";
import { Suspense } from "react";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/organism/product/ProductCard";
import { cn } from "@/lib/utils";
import ProductLikeButton from "@/components/molecule/button/ProductLikeButton";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div
      className={cn(
        "w-full",
        "flex flex-nowrap overflow-auto scrollbar-hide gap-x-[9px]",
      )}
    >
      {products.map((product, i) => (
        <div
          key={i}
          className={cn("relative w-[calc(50%-4.5px)] flex-shrink-0")}
        >
          <ProductLikeButton
            productUuid={product.productUuid}
            className="absolute top-2 right-2 z-10"
          />
          <Suspense fallback={<ProductCardSkeleton />}>
            <ProductCard product={product} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
// export default function ProductList({ products }: { products: Product[] }) {
//   return (
//     <ProductListWrapper>
//       {products.map((product, i) => (
//         <ProductListSlideWrapper key={i}>
//           <div className={cn("w-[50%]")}>
//           <Suspense fallback={<ProductCardSkeleton />}>
//             <ProductCard product={product} />
//           </Suspense>

//           </div>
//         </ProductListSlideWrapper>
//       ))}
//     </ProductListWrapper>
//   );
// }
