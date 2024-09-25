import {
  getProductDetailList,
  getProductHashtagList,
  getProductOptionList,
} from "@/action/productAction";
import ProductDetailVi from "@/components/template/page/product/ProductDetailVi";
import { productDetailClassName } from "@/lib/classNames";
import Link from "next/link";
import IframeResizer from "@iframe-resizer/react";
import ProductDetailIframe from "@/components/template/page/product/ProductDetailIframe";

export default async function page({
  params: { productUuid },
}: {
  params: { productUuid: string };
}) {
  const [productOptionList, productHashtagList] = await Promise.all([
    getProductOptionList({ productUuid }),
    getProductHashtagList({ productUuid }),
  ]);

  if (!productOptionList) {
    return null;
  }

  const { productOptionUuid } = productOptionList[0];
  const productDetailList =
    (await getProductDetailList({ productOptionUuid })) || [];

  return (
    <main>
      {productUuid}
      <ProductDetailVi productOptionUuid={productOptionUuid} />
      <div className={productDetailClassName.infoContainer}>
        <h2 className={productDetailClassName.infoBrand}>DELLA LANA</h2>
        <p className={productDetailClassName.infoDescription}>
          투 턱 플리츠 스트레이트 팬츠
        </p>
        <div className={productDetailClassName.infoPrice}>
          <div className={productDetailClassName.infoPriceMember}>
            <span className={productDetailClassName.infoPriceCurrent}>
              <b>558,000</b>
              <span>원</span>
            </span>
          </div>
        </div>
      </div>
      <div className={productDetailClassName.hashtagContainer}>
        {productHashtagList?.map((hashtag) => (
          <Link
            href={`/search?keywords=${hashtag}`}
            key={hashtag.id}
            className={productDetailClassName.hastag}
          >
            {hashtag.hashtagContent}
          </Link>
        ))}
      </div>
      <div className={productDetailClassName.tapInfoDetail}>
        <iframe
          src={productDetailList[0].productDetailUrl}
          className="w-full h-[2000px]"
        />
        {/* <ProductDetailIframe
          productDetailUrl={productDetailList[0].productDetailUrl}
        /> */}
      </div>

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
