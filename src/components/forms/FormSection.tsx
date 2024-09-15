import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { CheckboxFieldData, InputFieldData } from "./form-interface";

interface FormSectionProps {
  title?: string;
  className?: string;
  form: any;
  inputFieldDatas?: InputFieldData[];
  checkboxFieldDatas?: CheckboxFieldData[];
}

export default function FormSection({
  title,
  className,
  form,
  inputFieldDatas,
  checkboxFieldDatas,
}: FormSectionProps) {
  return (
    <section className={className}>
      <div className={cn("text-[18px] leading-[22px]")}>
        <strong>{title}</strong>
      </div>
      <div className={cn("mt-[20px]")}>
        {inputFieldDatas?.map((inputFieldData) => (
          <FormField
            key={inputFieldData.name}
            control={form.control}
            name={inputFieldData.name}
            render={({ field }) => (
              <FormItem className="mt-[16px]">
                <FormLabel
                  className={cn(
                    "text-[16px] font-[700] leading-[22px] mt-[33px]",
                  )}
                >
                  {inputFieldData.label}
                </FormLabel>
                <FormControl>
                  {
                    <inputFieldData.inputElement
                      {...field}
                      {...inputFieldData.props}
                      placeholder={inputFieldData.placeholder}
                    />
                  }
                </FormControl>
                <FormDescription>{inputFieldData.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {checkboxFieldDatas?.map((checkboxFieldData) => (
          <FormField
            key={checkboxFieldData.id}
            control={form.control}
            name={checkboxFieldData.name}
            render={({ field }) => (
              <FormItem key={checkboxFieldData.id} className={cn("mt-[16px]")}>
                <div className={cn("flex items-center")}>
                  <FormControl>
                    <Checkbox
                      className={cn(
                        "size-[24px] mr-[8px] rounded-none border-[rgb(224,224,224)]",
                      )}
                      checked={field.value?.includes(checkboxFieldData.id)}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([
                              ...field.value,
                              checkboxFieldData.id,
                            ])
                          : field.onChange(
                              field.value?.filter(
                                (value: string) =>
                                  value !== checkboxFieldData.id,
                              ),
                            )
                      }
                    />
                  </FormControl>
                  <FormLabel style={{ margin: "0px", lineHeight: "20px" }}>
                    {checkboxFieldData.label}
                  </FormLabel>
                </div>
                <FormDescription>
                  {checkboxFieldData.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </section>
  );
}
