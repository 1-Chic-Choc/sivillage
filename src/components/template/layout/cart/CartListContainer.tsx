"use client";

import CartControls from "./CartControls";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import CartDeleteModal from "./CartDeleteModal";
import {
  cartCheckUpdate,
  deleteCartItem,
  deleteCartList,
} from "@/action/cart/myDataAction";
import { cartItemType } from "@/types/ResponseTypes";
import { HrUi } from "@/components/ui/HrUi";

export default function CartListContainer({
  cartItemList,
  selectedItem,
}: {
  cartItemList: cartItemType[];
  selectedItem: cartItemType[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [curruntId, setCurrentId] = useState<string>("");
  const [cartList, setCartList] = useState<cartItemType[]>(cartItemList);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedList, setSelectedList] =
    useState<cartItemType[]>(selectedItem);

  // 전체 선택
  const handleCheckAll = async (checked: boolean) => {
    setIsLoading(true);
    setCurrentId("all");

    // 전체 선택/해제 상태로 업데이트
    const itemsToUpdate = cartList.map((item) => ({
      cartUuid: item.cartUuid,
      isSelected: checked,
    }));

    try {
      await cartCheckUpdate(itemsToUpdate); // API 요청으로 상태 업데이트
      setCartList((prevList) =>
        prevList.map((item) => ({ ...item, isSelected: checked })),
      );
    } catch (error) {
      console.error("Failed to update cart selection", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 개별 항목 선택 처리
  const handleChangeChecked = async (item: cartItemType) => {
    setIsLoading(true);
    setCurrentId(item.cartUuid);

    const updatedItem = {
      cartUuid: item.cartUuid,
      isSelected: !item.isSelected,
    };

    try {
      await cartCheckUpdate([updatedItem]); // API 요청으로 개별 항목 업데이트
      setCartList((prevList) =>
        prevList.map((cartItem) =>
          cartItem.cartUuid === item.cartUuid
            ? { ...cartItem, isSelected: !cartItem.isSelected }
            : cartItem,
        ),
      );
    } catch (error) {
      console.error("Failed to update cart item selection", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 항목 삭제
  const handleDelete = async (id: string) => {
    setIsLoading(true);
    setCurrentId(id);

    try {
      await deleteCartItem({ cartUuid: id }); // 삭제 API 호출
      setCartList((prevList) =>
        prevList.filter((item) => item.cartUuid !== id),
      );
    } catch (error) {
      console.error("Failed to delete cart item", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 선택된 항목 또는 전체 항목 삭제
  const deleteCartItem = async (isAllorSelected: boolean) => {
    const ids = isAllorSelected
      ? cartList.map((item) => item.cartUuid)
      : selectedList.map((item) => item.cartUuid);

    try {
      await deleteCartList(ids); // 삭제 API 호출
      setCartList((prevList) =>
        prevList.filter((item) => !ids.includes(item.cartUuid)),
      );
    } catch (error) {
      console.error("Failed to delete cart list", error);
    }
  };

  const handleConfirm = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setCartList(cartItemList);
    setSelectedList(selectedItem);
  }, [cartItemList, selectedItem]);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setCartList((prevList) =>
      prevList.map((item) =>
        item.cartUuid === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  return (
    <div className="w-full p-4">
      <CartControls
        isLoading={isLoading}
        curruntId={curruntId}
        cartItemList={cartList}
        handleCheckAll={handleCheckAll}
        handleConfirm={handleConfirm}
        handleDeleteList={handleDeleteList}
      />
      <HrUi />
      {cartList.map((item) => (
        <CartItem
          key={item.cartUuid}
          item={item}
          isLoading={isLoading}
          curruntId={curruntId}
          handleChangeChecked={handleChangeChecked}
          handleDelete={handleDelete}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      ))}
      <CartDeleteModal
        isOpen={isOpen}
        onClose={onClose}
        handleDeleteList={handleDeleteList}
        title="상품삭제"
        description="선택한 상품 전체를 삭제하시겠습니까?"
        cancelText="취소"
        confirmText="삭제"
      />
    </div>
  );
}
