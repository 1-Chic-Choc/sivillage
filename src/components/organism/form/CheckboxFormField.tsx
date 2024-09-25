import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";

export interface CheckboxFormFieldProps {
  name: string;
  form: UseFormReturn<any>;

  items: {
    id: string;

    className?: string;
    label: {
      children: React.ReactNode;
      className?: string;
    };

    description?: {
      children: React.ReactNode;
      className?: string;
    };
  }[];
}

export default function CheckboxFormField({
  form,
  name,
  items,
}: CheckboxFormFieldProps) {
  return (
    <>
      {items.map((item, _, items) =>
        item.id == "all" ? (
          <FormField
            key={item.id}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem className={item.className}>
                <div className="flex items-center">
                  <FormControl>
                    <Checkbox
                      className="size-[24px] mr-[8px] rounded-none border border-[#E0E0E0]"
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...items.map((item) => item.id)])
                          : field.onChange([])
                      }
                    />
                  </FormControl>
                  <FormLabel className={item.label.className}>
                    {item.label.children}
                  </FormLabel>
                </div>
                <FormDescription className={item.description?.className}>
                  {item.description?.children}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <FormField
            key={item.id}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem className={item.className}>
                <div className={cn("flex items-center", item.label.className)}>
                  <FormControl>
                    <Checkbox
                      className="size-[24px] mr-[8px] rounded-none border border-[#E0E0E0]"
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...field.value, item.id])
                          : field.onChange(
                              field.value?.filter(
                                (value: string) => value !== item.id,
                              ),
                            )
                      }
                    />
                  </FormControl>
                  <FormLabel>{item.label.children}</FormLabel>
                </div>
                <FormDescription className={item.description?.className}>
                  {item.description?.children}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ),
      )}
    </>
  );
}
