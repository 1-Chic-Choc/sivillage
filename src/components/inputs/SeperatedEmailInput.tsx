"use client";

import InputWithClear from "./InputWithClear";
import { cn } from "@/lib/utils";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import Select from "./Select";

const domains = [
  "직접입력",
  "naver.com",
  "gmail.com",
  "daum.net",
  "nate.com",
] as const;

type Domain = (typeof domains)[number];

function SeperatedEmailInput(
  { name }: { name: string },
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { setValue, trigger } = useFormContext();

  const id_ref = useRef<HTMLInputElement | null>(null);
  const domain_ref = useRef<HTMLInputElement | null>(null);

  function handleEmailChange() {
    setValue(name, `${id_ref.current?.value}@${domain_ref.current?.value}`);
    trigger(name);
  }

  function clearId() {
    setValue(name, `${domain_ref.current?.value}`);
    trigger(name);
  }
  function clearDomain() {
    setValue(name, `${id_ref.current?.value}`);
    trigger(name);
  }

  const [selectedDomain, setSelectedDomain] = useState<Domain>(domains[0]);

  function selectDomain(domain: string) {
    setSelectedDomain(domain as Domain);
    setValue(name, `${id_ref.current?.value}@${domain}`);
    trigger(name);
  }

  function isCustomDomain() {
    return selectedDomain !== "직접입력";
  }

  return (
    <div className={cn("grid grid-cols-4")}>
      <InputWithClear
        ref={id_ref}
        onChange={handleEmailChange}
        onClear={clearId}
      />

      <div className={cn("flex justify-center items-center")}>@</div>

      <InputWithClear
        ref={domain_ref}
        onChange={handleEmailChange}
        onClear={clearDomain}
        value={isCustomDomain() ? selectedDomain : ""}
        disabled={isCustomDomain()}
      />

      <Select
        defaultValue={selectedDomain}
        onValueChange={selectDomain}
        items={domains}
      />
    </div>
  );
}

export default forwardRef(SeperatedEmailInput);
