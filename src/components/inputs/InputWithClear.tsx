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
    className,
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
    <div className={cn("flex", className)}>
      <Input
        {...props}
        className={cn(
          "focus-visible:ring-offset-0",
          "w-full h-[48px] rounded-none border px-[16px] py-[14px]",
          state && !disabled && "border-r-0",
        )}
        type={type}
        ref={ref}
        value={state}
        onChange={handleChange}
        disabled={disabled}
      />
      {state && !disabled && (
        <button
          type="button"
          className={cn("w-[48px] h-[48px]", "border border-l-0")}
          onClick={clear}
        >
          &times;
        </button>
      )}
    </div>
  );
}

export default forwardRef(InputWithClear);
