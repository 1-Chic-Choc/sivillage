"use client";

import { cn } from "@/lib/utils";
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export interface InputWithClearProps extends InputHTMLAttributes<HTMLElement> {
  onClear?: () => void;
  value?: string;
}

function InputWithClear(
  {
    type,
    value,
    onChange,
    onClear,
    name,
    disabled,
    ...props
  }: InputWithClearProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [state, setState] = useState("");
  const { setValue, trigger } = useFormContext();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e);
    setState(e.target.value);
  }

  function clear() {
    onClear && onClear();
    if (name) {
      setValue(name, "");
      trigger(name);
    }
    setState("");
  }

  useEffect(() => {
    setState(value || "");
  }, [value]);

  return (
    <div className={cn("border flex")}>
      <Input
        {...props}
        className={cn("w-full h-[48px] border-none")}
        type={type}
        ref={ref}
        value={state}
        onChange={handleChange}
        disabled={disabled}
      />
      {state && !disabled && (
        <button type="button" className="w-[48px] h-[48px]" onClick={clear}>
          &times;
        </button>
      )}
    </div>
  );
}

export default forwardRef(InputWithClear);
