import ProductList from "@/components/template/page/main/reuable/ProductList";
import { sectionHead } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface YouMayAlsoLikeProps {
  products: any[];
}

export default function YouMayALsoLike({ products }: YouMayAlsoLikeProps) {
  return (
    <>
      <h2 className={cn(sectionHead.h2, "px-[24px]")}>
        <span className={sectionHead.title}>You May Also Like</span>
      </h2>
      <div className="px-[24px]">
        <ProductList products={products} />
      </div>
    </>
  );
}
