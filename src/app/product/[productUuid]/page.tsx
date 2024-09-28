import {
  getBrand,
  getColor,
  getProductDetailList,
  getProductHashtagList,
  getProductOptionList,
  getProductSingle,
} from "@/action/productAction";
import PriceDisplay from "@/components/molecule/PriceDisplay";
import ProductDetailVi from "@/components/template/page/product/ProductDetailVi";
import { productDetailClassName } from "@/lib/classNames";
import Link from "next/link";

export default async function page({
  params: { productUuid },
}: {
  params: { productUuid: string };
}) {
  const [product, productOptionList, productHashtagList] = await Promise.all([
    getProductSingle({ productUuid }),
    getProductOptionList({ productUuid }),
    getProductHashtagList({ productUuid }),
  ]);

  if (!productOptionList) {
    return null;
  }

  const { productOptionUuid } = productOptionList[0];
  // const productDetailList =
  //   (await getProductDetailList({ productOptionUuid })) || [];
  const [productDetailList, brand, color] = await Promise.all([
    getProductDetailList({ productOptionUuid }),
    getBrand({ brandUuid: product!.brandUuid }),
    getColor({ id: productOptionList[0].colorId }),
  ]);

  return (
    <main>
      <ProductDetailVi productOptionUuid={productOptionUuid} />
      <div className={productDetailClassName.infoContainer}>
        <h2 className={productDetailClassName.infoBrand}>{brand?.name}</h2>
        <p className={productDetailClassName.infoDescription}>
          {product?.name}
        </p>
        <div className={productDetailClassName.infoPrice}>
          <div className={productDetailClassName.infoPriceMember}>
            <span className={productDetailClassName.infoPriceCurrent}>
              <b>
                <PriceDisplay price={productOptionList[0].price} />
              </b>
              <span>원</span>
            </span>
          </div>
        </div>
      </div>
      <div className={productDetailClassName.hashtagContainer}>
        {productHashtagList?.map((hashtag) => (
          <Link
            href={`/search/${hashtag.hashtagContent.replace("#", "")}`}
            key={hashtag.id}
            className={productDetailClassName.hastag}
          >
            {hashtag.hashtagContent}
          </Link>
        ))}
      </div>
      {productDetailList![0]?.productDetailUrl ? (
        <div className={productDetailClassName.tapInfoDetail}>
          <iframe
            src={productDetailList![0]?.productDetailUrl}
            className="w-full h-[2000px]"
          />
        </div>
      ) : null}

      <div className={productDetailClassName.tabReviewBasic}>
        <div className={productDetailClassName.wrap}>
          <div className={productDetailClassName.wrapTitle}>
            <p>리뷰</p>
            <div className={productDetailClassName.wrapTitleButton}>
              리뷰 혜택보기
            </div>
          </div>
        </div>

        <div className={productDetailClassName.tabReviewBasicText}>
          <p className={productDetailClassName.tabReviewBasicTextStrong}>
            첫 번째 상품리뷰를 작성해 주세요.
          </p>
        </div>
      </div>

      <div className={productDetailClassName.tabReviewBasic}>
        <div className={productDetailClassName.wrap}>
          <div className={productDetailClassName.wrapTitle}>
            <p>Q&A</p>
          </div>
        </div>

        <div className={productDetailClassName.tabReviewBasicText}>
          <p className={productDetailClassName.tabReviewBasicTextStrong}>
            등록된 Q&A가 없습니다.
          </p>
        </div>
      </div>
    </main>
  );
}
