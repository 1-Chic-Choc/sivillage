import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductList from "@/components/template/page/main/reuable/ProductList";
import { Product } from "@/types/ProductTypes";
import { getProductList, getProductSingle } from "@/action/productAction";
import { Suspense } from "react";
import SectionWrapper from "../main/reuable/SectionWrapper";
import ProductCard from "@/components/organism/product/ProductCard";

interface PromotionProductTabsProps {
  promotionType: string;
  productUuids: string[];
}

export default async function PromotionProductTabs({
  promotionType,
  productUuids,
}: PromotionProductTabsProps) {
  const productList = (
    await Promise.all(
      productUuids.map((productUuid) => getProductSingle({ productUuid })),
    )
  ).filter((product) => product !== null) as Product[];

  console.log(productUuids);

  return (
    <div>
      <SectionWrapper title={promotionType}>
        <div className="flex">
          {productList.map((product) => (
            <ProductCard key={product.productUuid} product={product} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
