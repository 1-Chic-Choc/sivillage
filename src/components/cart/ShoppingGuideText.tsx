import React from "react";
import { TextUi } from "../ui/text/TextUi";

function ShoppingGuideText() {
  return (
    <TextUi variant={"lightGray"} size={"xs"} className="leading-5">
      <ul className="list-disc list-inside text-base px-2">
        <li>
          쇼핑백은 최대 100개의 상품을 담을 수 있고, 최대 보관기간은 30일입니다.
        </li>
        <li>판매 종료된 상품은 쇼핑백에 담긴 지 14일 이후 자동삭제 됩니다.</li>
        <li>선물포장가능 상품인 경우 주문서에서 선물포장 신청이 가능합니다.</li>
      </ul>
    </TextUi>
  );
}

export default ShoppingGuideText;
