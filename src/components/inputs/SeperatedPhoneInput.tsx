"use client";

import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputWithClear from "./InputWithClear";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Select from "./Select";

const prefixes = ["010", "011", "016", "017", "018", "019"] as const;
type Prefix = (typeof prefixes)[number];

function PhoneInput(
  { name }: { name: string },
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { setValue, trigger } = useFormContext();

  const phone_ref = useRef<HTMLInputElement | null>(null);

  const [selectedPrefix, setSelectedPrefix] = useState<Prefix>(prefixes[0]);

  function handlePhoneChange() {
    if (phone_ref.current) {
      phone_ref.current.value = phone_ref.current.value.replace(/\D/g, "");
    }
    const postfix = phone_ref.current?.value;
    setValue(name, `${selectedPrefix}${postfix}`);
    trigger(name);
  }

  function clearPhone() {
    setValue(name, `${selectedPrefix}`);
    trigger(name);
  }

  function selectPrefix(prefix: string) {
    const postfix = phone_ref.current?.value;
    setSelectedPrefix(prefix as Prefix);
    setValue(name, `${prefix}${postfix}`);
    trigger(name);
  }

  return (
    <div className={cn("flex items-center")}>
      <div className={cn("w-[90px] mr-[8px]")}>
        <Select
          defaultValue={selectedPrefix}
          onValueChange={selectPrefix}
          items={prefixes}
        />
      </div>

      <InputWithClear
        ref={phone_ref}
        className="flex-grow"
        onChange={handlePhoneChange}
        onClear={clearPhone}
        placeholder="휴대폰번호"
        maxLength={8}
      />

      <Button
        type="button"
        className={cn(
          "w-[90px] h-[48px] ml-[8px] rounded-none",
          "text-[14px] font-[500] leading-[normal]",
        )}
      >
        인증하기
      </Button>
    </div>
  );
}

export default forwardRef(PhoneInput);
