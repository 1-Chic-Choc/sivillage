"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import PriceDisplay from "@/components/molecule/PriceDisplay";
import { Color } from "@/types/ProductTypes";
import { postCartItem } from "@/action/productAction";
import { useRouter } from "next/navigation";

interface cartOption {
  color: Color;
  sizes: {
    productOptionUuid: string;
    id: number;
    name: string;
    value: string;
  }[];
}

interface ProductDetailBottomButtonProps {
  token: string | undefined | null;
  price: number;
  cartOptions: cartOption[];
  productUuid: string;
  defaultProductOptionUuid: string;
}

export default function ProductDetailBottomButton({
  token,
  price,
  cartOptions,
  productUuid,
  defaultProductOptionUuid,
}: ProductDetailBottomButtonProps) {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [focus, setFocus] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [selectedProductOptionUuid, setSelectedProductOptionUuid] = useState(
    defaultProductOptionUuid,
  );

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColorIndex(Number(e.target.value));
    setSelectedProductOptionUuid(
      cartOptions[colorIndex].sizes[0].productOptionUuid,
    );
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProductOptionUuid(e.target.value);
  };

  const countUp = () => {
    setCount((count) => (count === 99 ? 99 : count + 1));
  };

  const countDown = () => {
    setCount((count) => (count === 1 ? 1 : count - 1));
  };

  const handleChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount((prev) => {
      const value = Number(e.target.value);
      if (value > -10 && value <= 99) {
        return value;
      }
      return prev;
    });
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    if (count < 1 && !focus) {
      setCount(1);
      alert("해당 상품의 최소구매수량은 1개입니다.");
    }
  }, [count]);

  const handleSubmit = () => {
    if (token) {
      postCartItem({
        productUuid: productUuid,
        productOptionUuid: selectedProductOptionUuid,
        quantity: count,
      }).then((httpCode) => {
        if (httpCode === 200) {
          router.push("/cart");
        } else {
          alert("장바구니 담기에 실패했습니다. 다시 시도해주세요.");
        }
      });
    } else {
      alert(
        "비회원 장바구니 기능은 현재 준비중입니다. 로그인 후 이용해주세요.",
      );
    }
  };

  return (
    <div className={cn("border-b", "fixed bottom-0", "w-full h-[56px] z-[50]")}>
      <div
        className={cn(
          "w-full h-[56px]",
          "flex items-center justify-between",
          "bg-white",
        )}
      >
        <Button
          className={cn(
            "size-full flex justify-center items-center rounded-none p-0",
          )}
          variant={"ghost"}
          onClick={() => {
            alert("해당 기능은 현재 준비중입니다. 쇼핑백 기능을 이용해주세요.");
          }}
        >
          선물하기
        </Button>

        <Sheet>
          <SheetTrigger
            className={cn(
              "size-full flex justify-center items-center rounded-none",
              "text-white bg-[#787878]",
            )}
          >
            쇼핑백
          </SheetTrigger>
          <SheetContent side={"bottom"} className="p-0">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <div className={cn("flex flex-col gap-y-[16px]", "p-[40px]")}>
              <div
                className={cn("flex items-center justify-between gap-x-[9px]")}
              >
                <select
                  defaultValue={colorIndex}
                  className={cn(
                    "w-full h-[48px]",
                    "border-[0.667px] border-[#E5E7EB]",
                  )}
                  onChange={handleColorChange}
                >
                  {cartOptions.map(({ color }, i) => (
                    <option key={color.value} value={i}>
                      {color.value}
                    </option>
                  ))}
                </select>

                {cartOptions[colorIndex].sizes.length > 0 ? (
                  <select
                    className={cn(
                      "w-full h-[48px]",
                      "border-[0.667px] border-[#E5E7EB]",
                    )}
                    defaultValue={
                      cartOptions[colorIndex].sizes[0].productOptionUuid
                    }
                    onChange={handleSizeChange}
                  >
                    {cartOptions[colorIndex].sizes.map((size) => (
                      <option key={size.value} value={size.productOptionUuid}>
                        {size.value}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>

              <div className={cn("flex items-center justify-between")}>
                <Button
                  variant={"ghost"}
                  className={cn(
                    "shrink-0",
                    "size-[48px] p-[8px] rounded-none",
                    "border-[0.667px] border-[#E5E7EB]",
                  )}
                >
                  <Image
                    src={
                      "https://cdn-mo.sivillage.com/mo/assets/comm/image/05Icon24PxThinSubtraction.png"
                    }
                    alt="마이너스 버튼"
                    width={48}
                    height={48}
                    onClick={countDown}
                  />
                </Button>
                <input
                  type="number"
                  className={cn(
                    "w-full h-[48px]",
                    "border-[0.667px] border-[#E5E7EB]",
                    "text-center",
                  )}
                  value={count}
                  onChange={handleChagne}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <Button
                  variant={"ghost"}
                  className={cn(
                    "shrink-0",
                    "size-[48px] p-[8px] rounded-none",
                    "border-[0.667px] border-[#E5E7EB]",
                  )}
                  onClick={countUp}
                >
                  <Image
                    src={
                      "https://cdn-mo.sivillage.com/mo/assets/comm/image/05Icon24PxThinAdd.png"
                    }
                    alt="플러스 버튼"
                    width={48}
                    height={48}
                  />
                </Button>
              </div>
              <div
                className={cn("flex items-center justify-between gap-x-[9px]")}
              >
                <div className={cn("text-[14px] font-[400] leading-[20px]")}>
                  판매가
                </div>
                <div className={cn("text-[16px] font-[500] leading-[normal]")}>
                  <PriceDisplay
                    className={cn("text-[24px] font-[700] leading-[30px]")}
                    price={price}
                  />{" "}
                  원
                </div>
              </div>
            </div>
            <SheetFooter className="p-0">
              <div
                className={cn(
                  "w-full h-[56px]",
                  "flex items-center justify-between",
                  "bg-white",
                )}
              >
                <Button
                  className={cn(
                    "size-full flex justify-center items-center rounded-none p-0",
                  )}
                  variant={"ghost"}
                  onClick={() => {
                    alert(
                      "해당 기능은 현재 준비중입니다. 쇼핑백 기능을 이용해주세요.",
                    );
                  }}
                >
                  선물하기
                </Button>
                <Button
                  className={cn(
                    "size-full flex justify-center items-center rounded-none",
                    "text-white bg-[#787878]",
                  )}
                  onClick={handleSubmit}
                >
                  쇼핑백
                </Button>

                <Button
                  className={cn(
                    "size-full flex justify-center items-center rounded-none p-0",
                    "text-white bg-[#131922]",
                  )}
                  onClick={() => {
                    alert(
                      "해당 기능은 현재 준비중입니다. 쇼핑백 기능을 이용해주세요.",
                    );
                  }}
                >
                  바로 구매
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Button
          className={cn(
            "size-full flex justify-center items-center rounded-none p-0",
            "text-white bg-[#131922]",
          )}
          onClick={() => {
            alert("해당 기능은 현재 준비중입니다. 쇼핑백 기능을 이용해주세요.");
          }}
        >
          바로 구매
        </Button>
      </div>
    </div>
  );
}
