"use client";
import React, { useEffect, useState } from "react";
import { CircleDashed, Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { cartItemType } from "@/types/ResponseTypes";
import { getProductData } from "@/action/cart/cartActions";

// 개별 CartItem 컴포넌트 분리
export default function CartItem({
  item,
  isLoading,
  curruntId,
  handleChangeChecked,
  handleDelete,
  handleUpdateQuantity,
  // handleIncrease,
  // handleDecrease,
  // totalPrice,
}: {
  item: cartItemType;
  isLoading: boolean;
  curruntId: string;
  handleChangeChecked: (item: cartItemType) => void;
  handleDelete: (id: string) => void;
  handleUpdateQuantity: (id: string, newQuantity: number) => void;
  // handleIncrease: () => void;
  // handleDecrease: () => void;
  // totalPrice: number;
}) {
  console.log("item", item);
  const [quantity, setQuantity] = useState(item.quantity);

  // quantity 상태가 부모 컴포넌트의 item.quantity와 동기화되도록 useEffect 추가
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleUpdateQuantity(item.cartUuid, newQuantity); // 부모 컴포넌트에 업데이트 전달
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleUpdateQuantity(item.cartUuid, newQuantity); // 부모 컴포넌트에 업데이트 전달
    }
  };
  const fetchData = async () => {
    const data = await getProductData(item.productOptionUuid);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const totalPrice = item. * quantity;

  return (
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
          <span className="item pl-4">options</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2">
            <Button
              className="text-xs text-slate-500 underline underline-offset-4"
              variant={"ghost"}
              size="sm"
            >
              옵션변경
            </Button>
            <p className="pl-4 pt-2">{}원</p>
          </div>
          <div className="flex justify-end pr-3 pt-2">
            <Button
              className="h-6 w-6"
              size="icon"
              variant="outline"
              onClick={handleDecrease}
            >
              <Minus size={16} />
            </Button>
            <span className="h-6 w-8 border text-center">{item.quantity}</span>
            <Button
              className="h-6 w-6"
              size="icon"
              variant="outline"
              onClick={handleIncrease}
            >
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
