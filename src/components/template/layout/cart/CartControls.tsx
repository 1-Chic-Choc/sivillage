import React from "react";
import { cartItemType } from "@/types/ResponseTypes";
import { CircleDashed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

function CartControls({
  isLoading,
  curruntId,
  cartItemList,
  handleCheckAll,
  handleConfirm,
  handleDeleteList,
}: {
  isLoading: boolean;
  curruntId: string;
  cartItemList: cartItemType[];
  handleCheckAll: (checked: boolean) => void;
  handleConfirm: () => void;
  handleDeleteList: (isAllorSelected: boolean) => void;
}) {
  return (
    <fieldset className="flex justify-between items-center py-4">
      <div className="flex justify-center items-center gap-2 text-sm">
        {isLoading && curruntId === "all" ? (
          <CircleDashed className=" animate-spin size-[24px]" />
        ) : (
          <Checkbox
            className="size-[24px] data-[state=checked]:bg-black"
            name="전체선택"
            id="all"
            checked={cartItemList.every((item) => item.isSelected)}
            onClick={() =>
              handleCheckAll(!cartItemList.every((item) => item.isSelected))
            }
          />
        )}
        <label htmlFor="all">전체선택</label>
      </div>
      <div className="flex justify-between items-center">
        <Button
          size={"sm"}
          variant={"ghost"}
          {...(!isLoading && { onClick: () => handleConfirm() })}
        >
          전체삭제
        </Button>
        <Button
          size={"sm"}
          variant={"ghost"}
          {...(!isLoading && { onClick: () => handleDeleteList(false) })}
        >
          선택삭제
        </Button>
      </div>
    </fieldset>
  );
}

export default CartControls;
