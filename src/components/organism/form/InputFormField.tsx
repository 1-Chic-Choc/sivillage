import { ForwardRefExoticComponent } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import InputWithClear from "@/components/molecule/input/InputWithClear";
import { cn } from "@/lib/utils";

export interface InputFormFieldProps {
  name: string;
  form: UseFormReturn<any>;
  className?: string;

  label?: {
    children?: React.ReactNode;
    className?: string;
  };

  input?: {
    element?: ForwardRefExoticComponent<any>;
    className?: string;
    placeholder?: string;
    props?: object;
  };

  description?: {
    children?: React.ReactNode;
    className?: string;
  };
}

export default function InputFormField({
  name,
  form,
  className,
  label,
  input,
  description,
}: InputFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel
            className={cn(
              "text-[16px] font-[700] leading-[22px]",
              label?.className,
            )}
          >
            {label?.children}
          </FormLabel>
          <FormControl>
            {input && input.element ? (
              <input.element
                {...field}
                {...input.props}
                className={input.className}
                placeholder={input.placeholder}
              />
            ) : (
              <InputWithClear
                {...field}
                {...input?.props}
                className={input?.className}
                placeholder={input?.placeholder}
              />
            )}
          </FormControl>
          <FormDescription
            className={cn(
              "text-[14px] text-[#787878] font-[400] leading-[20px]",
              description?.className,
            )}
          >
            {description?.children}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
