"use client";

import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import Select from "./Select";

interface IDate {
  year?: string;
  month?: string;
  day?: string;
}

function SeperatedDateInput(
  { name }: { name: string },
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { setValue, trigger } = useFormContext();

  const [date, setDate] = useState<IDate>({});
  const currentYear = new Date().getFullYear();

  function handleYearChange(year: string) {
    setDate((prev) => ({ ...prev, year }));
  }
  function handleMonthChange(month: string) {
    setDate((prev) => ({ ...prev, month }));
  }
  function handleDayChange(day: string) {
    setDate((prev) => ({ ...prev, day }));
  }

  const yearItems = [];
  for (let i = currentYear; i >= currentYear - 100; --i) {
    yearItems.push(`${i}`);
  }

  const monthItems = [];
  for (let i = 1; i <= 12; ++i) {
    monthItems.push(`${i}`);
  }

  const [dayItems, setDayItems] = useState<string[]>([]);

  useEffect(() => {
    if (date.year && date.month) {
      const year = parseInt(date.year);
      const month = parseInt(date.month);
      const daysInMonth = new Date(year, month, 0).getDate();
      const newDayItems = [];
      for (let i = 1; i <= daysInMonth; ++i) {
        newDayItems.push(`${i}`);
      }
      setDate((prev) => ({ ...prev, day: undefined }));
      setDayItems(newDayItems);
    }
  }, [date.year, date.month]);

  useEffect(() => {
    const year = parseInt(date.year || "");
    const month = parseInt(date.month || "");
    const day = parseInt(date.day || "");

    if (date.year && date.month && date.day) {
      setValue(name, new Date(year, month - 1, day, 9).toISOString());
      trigger(name);
    } else {
      setValue(name, "");
      trigger(name);
    }
  }, [name, date, setValue, trigger]);

  return (
    <div className={cn("grid grid-cols-3")}>
      <Select
        onValueChange={handleYearChange}
        items={yearItems}
        placeholder="년도"
        itemText={(year) => `${year}년`}
      />

      <Select
        onValueChange={handleMonthChange}
        items={monthItems}
        placeholder="월"
        itemText={(month) => `${month}월`}
      />

      <Select
        onValueChange={handleDayChange}
        items={dayItems}
        placeholder="일"
        itemText={(day) => `${day}일`}
      />
    </div>
  );
}

export default forwardRef(SeperatedDateInput);
