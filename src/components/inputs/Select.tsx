import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SelectProps {
  defaultValue?: string;
  onValueChange: (value: string) => void;
  items: readonly string[];
  itemText?: (item: string) => string;
  placeholder?: string;
}

export default function Select({
  defaultValue,
  onValueChange,
  items,
  itemText,
  placeholder,
}: SelectProps) {
  return (
    <ShadcnSelect {...{ defaultValue, onValueChange }}>
      <SelectTrigger
        className={cn("h-[48px] rounded-none pl-[16px] leading-[normal]")}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item} value={item}>
            {itemText ? itemText(item) : item}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
}
