import { Product } from "@/types/ProductTypes";
import ProductThumbnail from "./ProductThumbnail";
import { getBrand, getProductOptionList } from "@/action/productAction";
import ProductColor from "./ProductColor";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { productClassName } from "@/lib/classNames";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default async function ProductCard({
  product: { productUuid, name, brandUuid },
}: ProductCardProps) {
  const [productOptionList, brand] = await Promise.all([
    getProductOptionList({
      productUuid,
    }),
    getBrand({ brandUuid }),
  ]);

  if (!productOptionList) {
    return null;
  }

  const { productOptionUuid, price, discountPrice, discountRate } =
    productOptionList[0];

  const colorIds = productOptionList.map(({ colorId }) => colorId);

  return (
    <Link
      href={`/product/${productUuid}`}
      className={"w-[calc(50%-4.5px)] mb-[36px]"}
    >
      <div className={productClassName.thumnail}>
        <Suspense fallback={<Skeleton className="size-full" />}>
          <ProductThumbnail {...{ productOptionUuid }} />
        </Suspense>
        <div className={productClassName.blend} />
      </div>

      <div className={productClassName.textContainer}>
        <p className={productClassName.brand}>{brand && brand.name}</p>
        <p className={productClassName.name}>{name}</p>
        <p className={productClassName.price}>
          {discountRate && (
            <span className={productClassName.discountRate}>
              {discountRate}
            </span>
          )}
          <span>{discountPrice || price}</span>
        </p>
        {colorIds.length > 1
          ? colorIds.map((colorId) => (
              <ProductColor key={colorId} {...{ colorId }} />
            ))
          : null}
      </div>
    </Link>
  );
}

export async function ProductCardSkeleton() {
  return (
    <div className={"w-[calc(50%-4.5px)] mb-[36px]"}>
      <div className={productClassName.thumnail}>
        <Skeleton className="size-full" />
      </div>

      <div className={productClassName.textContainer}>
        <Skeleton className={productClassName.brand}></Skeleton>
        <Skeleton className={productClassName.name}></Skeleton>
        <Skeleton className={productClassName.price}></Skeleton>
        {/* {colorIds.length > 1
          ? colorIds.map((colorId) => (
              <ProductColor key={colorId} {...{ colorId }} />
            ))
          : null} */}
      </div>
    </div>
  );
}
