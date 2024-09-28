"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CircleDashed, Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { cartItemType } from "@/types/ResponseTypes";
import { getProductData, updateQuantity } from "@/action/cart/cartActions";
import CartDrawer from "./CartDrawer";

export default function CartItem({
  item,
  isLoading,
  curruntId,
  handleChangeChecked,
  handleDelete,
  handleUpdateQuantity,
}: {
  item: cartItemType;
  isLoading: boolean;
  curruntId: string;
  handleChangeChecked: (item: cartItemType) => void;
  handleDelete: (id: string) => void;
  handleUpdateQuantity: (id: string, newQuantity: number) => void;
}) {
  const [quantity, setQuantity] = useState<number>(1);
  const [productData, setProductData] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isThrottling, setIsThrottling] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);
  // quantity 상태가 부모 컴포넌트의 item.quantity와 동기화되도록 useEffect 추가
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);

  // 컴포넌트가 마운트될 때 데이터 패칭
  useEffect(() => {
    // 상품 데이터를 패치하는 함수
    const fetchData = async () => {
      try {
        const data = await getProductData(item.productOptionUuid);
        console.log("Fetched product data:", data);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (item.productOptionUuid) {
      fetchData();
    }
  }, [item.productOptionUuid]);

  const handleCounter = (changeType: string) => {
    if (changeType === "decrease") {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
    setClickCount(clickCount + 1);
    setIsThrottling(true);
  };

  useEffect(() => {
    if (clickCount > 0) {
      const timer = setTimeout(async () => {
        try {
          console.log("fetch...");

          // 수량 업데이트 API 호출
          await updateQuantity({
            cartUuid: item.cartUuid,
            quantity,
          });

          console.log("Quantity updated successfully!");
        } catch (error) {
          console.error("Failed to update quantity:", error);
        } finally {
          setIsThrottling(false); // API 호출 완료 후 스로틀링 해제
          setClickCount(0); // 클릭 카운트 리셋
        }
      }, 1000); // 1초 동안 변화가 없으면 API 호출

      return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 정리
    }

    return undefined;
  }, [clickCount, quantity, item.cartUuid]); // 의존성 배열에 필요한 값들 추가

  // useEffect(() => {
  //   if (clickCount > 0) {
  //     setTimeout(async () => {
  //       console.log("fetch...");
  //       setClickCount(0);
  //     }, 1000);
  //     return;
  //   } else {
  //     setIsThrottling(false);
  //     console.log("wating");
  //   }
  // }, [clickCount]);

  // 가격 정보 출력
  const priceInfo = productData
    ? `${productData.price ?? 0}원 / 할인: ${productData.discountPrice ?? 0}원`
    : "가격 정보를 불러오는 중...";

  return (
    <>
      <fieldset className="flex justify-between gap-4 pt-4 pb-8 items-center border-b border-gray-300">
        <div className="pl-2">
          <ul className="flex w-full items-center gap-2 text-sm">
            <li>
              {isLoading && item.cartUuid === curruntId ? (
                <CircleDashed
                  strokeWidth={0.8}
                  className="size-[24px] animate-spin"
                />
              ) : (
                <Checkbox
                  className="size-[24px] data-[state=checked]:bg-black"
                  checked={item.isSelected}
                  onClick={() => handleChangeChecked(item)}
                  name={item.cartUuid}
                  id={item.cartUuid}
                />
              )}
            </li>
            <li>
              <p className="w-60 text-center">{item.cartUuid}</p>
            </li>
            <li className="pl-4">
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => handleDelete(item.cartUuid)}
              >
                <X size={16} />
              </Button>
            </li>
          </ul>
          <div className="flex">
            <Image
              className="h-70 mr-8"
              src="https://image.sivillage.com/upload/C00001/s3/goods/org/123/240221009160123.jpg?RS=200&SP=1"
              alt={item.cartUuid}
              width={50}
              height={50}
            />
            <span className="item pl-4">{priceInfo}</span>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2">
              <Button
                onClick={() => setIsOpen(true)}
                className="text-xs text-slate-500 underline underline-offset-4"
                variant={"ghost"}
                size="sm"
              >
                옵션변경
              </Button>
              <p className="pl-4 pt-2">
                {productData ? productData.discountPrice : " "}원
              </p>
              <p className="pl-4 pt-2">
                {productData ? productData.price * item.quantity : " "}원
              </p>
            </div>
            <div className="flex justify-end pr-3 pt-2">
              <Button
                className={`h-6 w-6 ${quantity < 2 && "opacity-40 cursor-not-allowed"}`}
                size="icon"
                variant="outline"
                onClick={() => quantity > 1 && handleCounter("decrease")}
              >
                <Minus size={16} />
              </Button>
              <span className="h-6 w-8 border text-center">{quantity}</span>
              <Button
                className="h-6 w-6"
                size="icon"
                variant="outline"
                onClick={() => handleCounter("increase")}
              >
                <Plus size={16} />
              </Button>
            </div>
          </div>
        </div>
      </fieldset>
      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
