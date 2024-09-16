"use client";

import { ForwardedRef, forwardRef, useState } from "react";
import InputWithClear from "./InputWithClear";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DaumPostcodeEmber from "react-daum-postcode";
import { set, useFormContext } from "react-hook-form";

// https://postcode.map.daum.net/guide

interface DaumPostcodeEmberCompleteData {
  zonecode: string;
  autoJibunAddress: string;
  autoRoadAddress: string;
  roadAddress: string;
  jibunAddress: string;
  address: string;
  buildingName: string;
  bname: string;
}
interface IAddress {
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
  detailAddress: string;
  fullAddress: string;
}

function AddressInput(
  { name, className }: { name: string; className?: string },
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { setValue, trigger } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState<IAddress>({
    zonecode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
    fullAddress: "",
  });

  function handleComplete(data: DaumPostcodeEmberCompleteData) {
    setAddress((address) => ({
      ...address,
      zonecode: data.zonecode,
      roadAddress: data.roadAddress || data.autoRoadAddress,
      jibunAddress: data.jibunAddress || data.autoJibunAddress,
    }));
    setIsOpen(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setAddress((address) => ({ ...address, detailAddress: value }));
  }

  function handleClick() {
    const fullAddress = `${address.roadAddress} ${address.detailAddress}`;
    setAddress((address) => ({
      ...address,
      fullAddress,
    }));
    setValue(name, {
      zonecode: address.zonecode,
      fullAddress,
    });
    trigger(name);
  }

  return (
    <div className={cn("grid grid-cols-[1fr_81px]", className)}>
      <p className="flex items-center text-[14px] text-[#A0A0A0] h-[40px]">
        {address.fullAddress || "주소를 입력해 주세요."}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[81px] h-[40px] rounded-none",

              "text-[14px] font-[500] leading-[normal]",
            )}
            onClick={() => setIsOpen(true)}
          >
            주소검색
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>주소검색</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <DaumPostcodeEmber onComplete={handleComplete} />
          {!isOpen && (
            <>
              <div>[우편번호] {address.zonecode}</div>
              <div>[도로명주소] {address.roadAddress}</div>
              <div>[지번주소] {address.jibunAddress}</div>

              <InputWithClear
                value={address.detailAddress}
                onChange={handleChange}
                placeholder="나머지 상세주소를 입력해 주세요."
                required
              />
              <DialogClose onClick={handleClick}>
                <DialogFooter>주소사용</DialogFooter>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default forwardRef(AddressInput);
