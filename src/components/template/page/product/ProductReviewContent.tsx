import {
  getMedia,
  getProductReview,
  getProductReviewMediaList,
} from "@/action/productAction";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductReviewContentProps {
  reviewUuid: string;
}

export default async function ProductReviewContent({
  reviewUuid,
}: ProductReviewContentProps) {
  const [review, reviewMediaList] = await Promise.all([
    getProductReview({ reviewUuid }),
    getProductReviewMediaList({ reviewUuid }),
  ]);

  const mediaList =
    (await Promise.all(
      (reviewMediaList || []).map((reviewMedia) =>
        getMedia({ mediaId: reviewMedia.mediaId }),
      ),
    )) || [];

  return review ? (
    <div className="py-[20px] border-t border-b">
      <div className="relative w-[104px] h-[18px]">
        <div
          className={cn("h-full bg-[#D99C63]", `w-[${review.starPoint * 20}%]`)}
        ></div>
        <Image
          src={
            "https://cdn-mo.sivillage.com/mo/assets/comm/image/detail_starpoint.png"
          }
          width={104}
          height={18}
          alt="별점 바탕"
          className="absolute top-0 left-0"
        />
      </div>
      <div className="flex justify-between mt-[6px]">
        <div className="text-[12px] text-[#787878] leading-[18px]">
          <span>{review.reviewerEmail}</span>
          {" | "}
          <span>{review.createdAt.slice(0, 10)}</span>
        </div>
        <div className="flex">
          <span className="mr-[5px]">
            <Image
              src={
                "https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_review_like.png"
              }
              alt="좋아요 버튼"
              width={16}
              height={16}
            />
          </span>
          <span className="text-[12px]">{review.likedCnt}</span>
        </div>
      </div>
      <div className="text-[12px] text-[#787878] leading-[18px] mt-[4px]">
        <span>구매옵션 : {review.optionName}</span>
      </div>
      <div className={cn("mt-[12px]", "text-[14px]")}>
        {review.reviewContent}
      </div>

      <div className={cn("mt-[16px]")}>
        <ul className="flex flex-col gap-[8px]">
          <li className="flex items-center">
            <div
              className={cn(
                "w-[62px] h-[20px] mr-[12px]",
                "text-[10px] font-[700] leading-[normal]",
                "text-[#FFF] text-center bg-[#929292]",
                "flex justify-center items-center",
              )}
            >
              {review.reviewRateType1}
            </div>
            <div className={cn("text-[14px] font-[400]")}>
              {review.reviewRateText1}
            </div>
          </li>
          <li className="flex items-center">
            <div
              className={cn(
                "w-[62px] h-[20px] mr-[12px]",
                "text-[10px] font-[700] leading-[normal]",
                "text-[#FFF] text-center bg-[#929292]",
                "flex justify-center items-center",
              )}
            >
              {review.reviewRateType2}
            </div>
            <div className={cn("text-[14px] font-[400]")}>
              {review.reviewRateText2}
            </div>
          </li>
          <li className="flex items-center">
            <div
              className={cn(
                "w-[62px] h-[20px] mr-[12px]",
                "text-[10px] font-[700] leading-[normal]",
                "text-[#FFF] text-center bg-[#929292]",
                "flex justify-center items-center",
              )}
            >
              {review.reviewRateType3}
            </div>
            <div className={cn("text-[14px] font-[400]")}>
              {review.reviewRateText3}
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full flex gap-[9px] mt-[16px] overflow-hidden">
        {mediaList.map((media, index) =>
          media ? (
            <div
              className="relative shrink-0 w-[calc(50%-4.5px)] aspect-[1]"
              key={index}
            >
              <Image
                key={index}
                src={media.mediaUrl}
                fill
                alt="리뷰 이미지"
                className="object-cover"
              />
            </div>
          ) : null,
        )}
      </div>

      <div className={cn("mt-[12px] text-[12px] text-[#DB3C3C] text-end")}>
        신고
      </div>
    </div>
  ) : null;
}
