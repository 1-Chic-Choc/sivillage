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
  form: any;
  inputFieldDatas?: InputFieldData[];
  checkboxFieldDatas?: CheckboxFieldData[];
}

export default function FormSection({
  form,
  inputFieldDatas,
  checkboxFieldDatas,
}: FormSectionProps) {
  return (
    <section className={cn("p-10")}>
      {inputFieldDatas?.map((inputFieldData) => (
        <FormField
          key={inputFieldData.name}
          control={form.control}
          name={inputFieldData.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{inputFieldData.label}</FormLabel>
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
            <FormItem key={checkboxFieldData.id}>
              <FormControl>
                <Checkbox
                  checked={field.value?.includes(checkboxFieldData.id)}
                  onCheckedChange={(checked) =>
                    checked
                      ? field.onChange([...field.value, checkboxFieldData.id])
                      : field.onChange(
                          field.value?.filter(
                            (value: string) => value !== checkboxFieldData.id,
                          ),
                        )
                  }
                />
              </FormControl>
              <FormLabel>{checkboxFieldData.label}</FormLabel>
              <FormDescription>{checkboxFieldData.description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </section>
  );
}
