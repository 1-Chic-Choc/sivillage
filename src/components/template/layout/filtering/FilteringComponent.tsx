"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ProductCategoryFilteringValues } from "@/types/ProductTypes";
import { useState } from "react";

function FilteringPriceTab() {
  return (
    <div
      className={cn("w-full py-[32px]", "flex items-center justify-between")}
    >
      <div className={cn("border flex items-center", "w-[calc(50%-18px)]")}>
        <input
          type="number"
          placeholder="가격 하한"
          name="minimumPrice"
          className={cn("w-full h-[46px] px-[9px]")}
        />
      </div>
      <span>~</span>
      <div className={cn("border flex items-center", "w-[calc(50%-18px)]")}>
        <input
          type="number"
          placeholder="가격 상한"
          name="maximumPrice"
          className={cn("w-full h-[46px] px-[9px]")}
        />
      </div>
    </div>
  );
}

function FilteringColorTab({ colorIds }: { colorIds: string[] }) {
  return (
    <div className="p-[24px]">
      {colorIds.length > 0 ? (
        <div
          className={cn(
            "h-[calc(50vh-100px)] overflow-y-auto",
            "flex flex-wrap gap-x-[28px] gap-y-[9px]",
          )}
        >
          {colorIds
            .filter((colorId) => colorId)
            .map((colorId) => (
              <div
                key={colorId}
                className="shrink-0 flex items-center gap-[9px]"
              >
                <input type="checkbox" name="colors" value={colorId} />
                <label>{colorId}</label>
              </div>
            ))}
        </div>
      ) : (
        "선택할 수 있는 색상이 없습니다."
      )}
    </div>
  );
}
function FilteringSizeTab({ sizeIds }: { sizeIds: string[] }) {
  return (
    <div className="p-[24px]">
      {sizeIds.length > 0 ? (
        <div
          className={cn(
            "h-[calc(50vh-100px)] overflow-y-auto",
            "flex flex-wrap gap-x-[28px] gap-y-[9px]",
          )}
        >
          {sizeIds
            .filter((sizeId) => sizeId)
            .map((sizeId) => (
              <div
                key={sizeId}
                className="flex-shrink-0 flex items-center gap-[9px]"
              >
                <input type="checkbox" name="sizes" value={sizeId} />
                <label>{sizeId}</label>
              </div>
            ))}
        </div>
      ) : (
        "선택할 수 있는 사이즈가 없습니다."
      )}
    </div>
  );
}
function FilteringBrandTab({ brandUuids }: { brandUuids: string[] }) {
  return (
    <div className="p-[24px]">
      {brandUuids.length > 0 ? (
        <div
          className={cn(
            "h-[calc(50vh-100px)] overflow-y-auto",
            "flex flex-wrap gap-x-[28px] gap-y-[9px]",
          )}
        >
          {brandUuids
            .filter((brandUuid) => brandUuid)
            .map((brandUuid) => (
              <div
                key={brandUuid}
                className="shrink-0 flex items-center gap-[9px]"
              >
                <input type="checkbox" name="brands" value={brandUuid} />
                <label>{brandUuid}</label>
              </div>
            ))}
        </div>
      ) : (
        "선택할 수 있는 브랜드가 없습니다."
      )}
    </div>
  );
}

interface FilteringComponentProps {
  productCategoryFilteringValues?: ProductCategoryFilteringValues;
  exluded?: string[];
  path: string;
}

export default function FilteringComponent({
  productCategoryFilteringValues,
  exluded = [],
  path,
}: FilteringComponentProps) {
  const [currentOption, setCurrentOption] = useState("가격");
  return (
    <div>
      <div className={cn("w-full px-[24px] py-[16px]", "flex gap-x-[9px]")}>
        <Sheet>
          {["가격", "색상", "사이즈", "브랜드"]
            .filter((option) => !exluded.includes(option))
            .map((option) => (
              <SheetTrigger key={option}>
                <div
                  className={cn(
                    "px-[12px] py-[11px]",
                    "border border-[#E0E0E0]",
                    "text-[14px] leading-[17px]",
                  )}
                  onClick={() => setCurrentOption(option)}
                >
                  {option}
                </div>
              </SheetTrigger>
            ))}
          <SheetContent side={"bottom"}>
            <form action={path} method="get">
              <Tabs defaultValue={currentOption} className="h-[50vh]">
                <SheetHeader>
                  <TabsList>
                    {["가격", "색상", "사이즈", "브랜드"]
                      .filter((option) => !exluded.includes(option))
                      .map((option) => (
                        <TabsTrigger key={option} value={option}>
                          {option}
                        </TabsTrigger>
                      ))}
                  </TabsList>
                </SheetHeader>
                <TabsContent value="가격">
                  <FilteringPriceTab />
                </TabsContent>
                <TabsContent value="색상">
                  <FilteringColorTab
                    colorIds={productCategoryFilteringValues?.colorIds || []}
                  />
                </TabsContent>
                <TabsContent value="사이즈">
                  <FilteringSizeTab
                    sizeIds={productCategoryFilteringValues?.sizeIds || []}
                  />
                </TabsContent>
                <TabsContent value="브랜드">
                  <FilteringBrandTab
                    brandUuids={
                      productCategoryFilteringValues?.brandUuids || []
                    }
                  />
                </TabsContent>
              </Tabs>
              <SheetFooter>
                <Button type="submit">적용</Button>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
