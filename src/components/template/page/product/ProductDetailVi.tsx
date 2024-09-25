import { getMedia, getProductMediaList } from "@/action/productAction";
import ProductDetailViSwiper from "./ProductDetailViSwiper";

interface ProductDetailViProps {
  productOptionUuid: string;
}

export default async function ProductDetailVi({
  productOptionUuid,
}: ProductDetailViProps) {
  const mediaList =
    (await getProductMediaList({
      productOptionUuid,
    })) || [];

  const productMediaList = (
    await Promise.all(mediaList.map(({ mediaId }) => getMedia({ mediaId })))
  ).filter((media) => media !== null);

  return (
    <div className="w-full">
      <ProductDetailViSwiper productMediaList={productMediaList} />
    </div>
  );
}
