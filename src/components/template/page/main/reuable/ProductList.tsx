import { Product } from "@/types/ProductTypes";
import { Suspense } from "react";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/organism/product/ProductCard";
import { cn } from "@/lib/utils";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div
      className={cn(
        "w-full",
        "flex flex-nowrap overflow-auto scrollbar-hide gap-x-[9px]",
      )}
    >
      {products.map((product, i) => (
        <div key={i} className={cn("w-[calc(50%-4.5px)] flex-shrink-0")}>
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
