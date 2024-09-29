import { getProductReviewList, getProductScore } from "@/action/productAction";
import { productDetailClassName } from "@/lib/classNames";
import ProductReviewContent from "./ProductReviewContent";
import { cn } from "@/lib/utils";

interface ProductReviewComponentProps {
  productUuid: string;
}

export default async function ProductReviewComponent({
  productUuid,
}: ProductReviewComponentProps) {
  const [productReviewList, productScore] = await Promise.all([
    getProductReviewList({ productUuid }),
    getProductScore({ productUuid }),
  ]);
  const reviewUuidList = productReviewList?.content || [];

  return (
    <div className={productDetailClassName.tabReviewBasic}>
      <div className={productDetailClassName.wrap}>
        <div className={productDetailClassName.wrapTitle}>
          <p>리뷰</p>
          <div className={productDetailClassName.wrapTitleButton}>
            리뷰 혜택보기
          </div>
        </div>
      </div>

      {reviewUuidList.length > 0 ? (
        <div>
          {/* <div className="pb-[24px] flex flex-col gap-[8px]">
            <div>5.0</div>
            <div></div>
            <div className="flex">
              <div
                className={cn(
                  "w-[62px] h-[20px] mr-[12px]",
                  "text-[10px] font-[700] leading-[normal]",
                  "text-[#FFF] text-center bg-[#929292]",
                  "flex justify-center items-center",
                )}
              >
                사이즈
              </div>
              <div className={cn("text-[14px] font-[400]")}>잘 맞아요</div>
            </div>
            <div className="flex">
              <div
                className={cn(
                  "w-[62px] h-[20px] mr-[12px]",
                  "text-[10px] font-[700] leading-[normal]",
                  "text-[#FFF] text-center bg-[#929292]",
                  "flex justify-center items-center",
                )}
              >
                색상
              </div>
              <div className={cn("text-[14px] font-[400]")}>똑같아요</div>
            </div>
            <div className="flex">
              <div
                className={cn(
                  "w-[62px] h-[20px] mr-[12px]",
                  "text-[10px] font-[700] leading-[normal]",
                  "text-[#FFF] text-center bg-[#929292]",
                  "flex justify-center items-center",
                )}
              >
                디자인
              </div>
              <div className={cn("text-[14px] font-[400]")}>아주 만족해요</div>
            </div>
          </div> */}
          {reviewUuidList.map((reviewUuid) => (
            <ProductReviewContent key={reviewUuid} reviewUuid={reviewUuid} />
          ))}
        </div>
      ) : (
        <div className={productDetailClassName.tabReviewBasicText}>
          <p className={productDetailClassName.tabReviewBasicTextStrong}>
            첫 번째 상품리뷰를 작성해 주세요.
          </p>
        </div>
      )}
    </div>
  );
}
