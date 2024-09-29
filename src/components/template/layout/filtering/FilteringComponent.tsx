"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { colorImageList } from "@/datas/colorImageData";
import { cn } from "@/lib/utils";
import { ProductCategoryFilteringValues } from "@/types/ProductTypes";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormSubmitHandler } from "react-hook-form";

interface FilteringComponentProps {
  productCategoryFilteringValues?: ProductCategoryFilteringValues;
  exluded?: string[];
  path: string;
}

interface Filtering {
  minimumPrice: string;
  maximumPrice: string;
  colors: string[];
  sizes: string[];
  brands: string[];
}

export default function FilteringComponent({
  productCategoryFilteringValues,
  exluded = [],
  path,
}: FilteringComponentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentOption, setCurrentOption] = useState("가격");
  const [filtering, setFiltering] = useState<Filtering>({
    maximumPrice: "",
    minimumPrice: "",
    colors: [],
    sizes: [],
    brands: [],
  });

  // useEffect(() => {
  //   setFiltering(() => ({
  //     maximumPrice: searchParams.get("minimumPrice") || "",
  //     minimumPrice: searchParams.get("maximumPrice") || "",
  //     colors: searchParams.get("colors") || [],
  //     sizes: searchParams.get("sizes") || [],
  //     brands: searchParams.get("brands") || [],
  //   }));
  // }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(
      `${pathname}?${new URLSearchParams(Object.entries(filtering))}`,
    );
  };

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
            <form onSubmit={handleSubmit} method="get">
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

                {/* 가격 필터링 */}

                <TabsContent value="가격">
                  <div
                    className={cn(
                      "w-full py-[32px]",
                      "flex items-center justify-between",
                    )}
                  >
                    <div
                      className={cn(
                        "border flex items-center",
                        "w-[calc(50%-18px)]",
                      )}
                    >
                      <input
                        type="number"
                        placeholder="가격 하한"
                        name="minimumPrice"
                        className={cn("w-full h-[46px] px-[9px]")}
                        value={filtering?.minimumPrice}
                        onChange={(e) => {
                          setFiltering((prev) => ({
                            ...prev,
                            minimumPrice: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <span>~</span>
                    <div
                      className={cn(
                        "border flex items-center",
                        "w-[calc(50%-18px)]",
                      )}
                    >
                      <input
                        type="number"
                        placeholder="가격 상한"
                        name="maximumPrice"
                        className={cn("w-full h-[46px] px-[9px]")}
                        value={filtering?.maximumPrice}
                        onChange={(e) => {
                          setFiltering((prev) => ({
                            ...prev,
                            maximumPrice: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* 색상 필터링 */}

                <TabsContent value="색상">
                  <div className="p-[24px]">
                    {(productCategoryFilteringValues?.colorIds || []).length >
                    0 ? (
                      <div
                        className={cn(
                          "h-[calc(50vh-100px)] overflow-y-auto",
                          "flex flex-wrap gap-x-[28px] gap-y-[9px]",
                        )}
                      >
                        {colorImageList
                          .filter((color) =>
                            (
                              productCategoryFilteringValues?.colorIds || []
                            ).includes(color.name),
                          )
                          .map((color) => (
                            <div
                              key={color.name}
                              className="shrink-0 flex items-center gap-[9px]"
                            >
                              <input
                                id={color.name}
                                type="checkbox"
                                name="colors"
                                value={color.name}
                                checked={filtering?.colors?.includes(
                                  color.name,
                                )}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFiltering((prev) => ({
                                      ...prev,
                                      colors: [...prev.colors, e.target.value],
                                    }));
                                  } else {
                                    setFiltering((prev) => ({
                                      ...prev,
                                      colors: prev.colors.filter(
                                        (color) => color !== e.target.value,
                                      ),
                                    }));
                                  }
                                }}
                              />
                              <label htmlFor={`${color.name}`}>
                                <Image
                                  src={color.url}
                                  alt={color.name}
                                  width={16}
                                  height={16}
                                  className="border-[0.6667px] border-black"
                                />{" "}
                              </label>
                            </div>
                          ))}
                      </div>
                    ) : (
                      "선택할 수 있는 색상이 없습니다."
                    )}
                  </div>
                </TabsContent>

                {/* 사이즈 필터링 */}

                <TabsContent value="사이즈">
                  <div className="p-[24px]">
                    {(productCategoryFilteringValues?.sizeIds || []).length >
                    0 ? (
                      <div
                        className={cn(
                          "h-[calc(50vh-100px)] overflow-y-auto",
                          "flex flex-wrap gap-x-[28px] gap-y-[9px]",
                        )}
                      >
                        {(productCategoryFilteringValues?.sizeIds || [])
                          .filter((sizeId) => sizeId)
                          .map((sizeId) => (
                            <div
                              key={sizeId}
                              className="flex-shrink-0 flex items-center gap-[9px]"
                            >
                              <input
                                id={sizeId}
                                type="checkbox"
                                name="sizes"
                                value={sizeId}
                                checked={filtering?.sizes?.includes(sizeId)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFiltering((prev) => ({
                                      ...prev,
                                      sizes: [...prev.sizes, e.target.value],
                                    }));
                                  } else {
                                    setFiltering((prev) => ({
                                      ...prev,
                                      sizes: prev.sizes.filter(
                                        (size) => size !== e.target.value,
                                      ),
                                    }));
                                  }
                                }}
                              />
                              <label htmlFor={sizeId}>{sizeId}</label>
                            </div>
                          ))}
                      </div>
                    ) : (
                      "선택할 수 있는 사이즈가 없습니다."
                    )}
                  </div>
                </TabsContent>

                {/* 브랜드 필터링 */}

                <TabsContent value="브랜드">
                  <div className="p-[24px]">
                    {(productCategoryFilteringValues?.brandUuids || []).length >
                    0 ? (
                      <div
                        className={cn(
                          "h-[calc(50vh-100px)] overflow-y-auto",
                          "flex flex-wrap gap-x-[28px] gap-y-[9px]",
                        )}
                      >
                        {(productCategoryFilteringValues?.brandUuids || [])
                          .filter((brandUuid) => brandUuid)
                          .map((brandUuid) => (
                            <div
                              key={brandUuid}
                              className="shrink-0 flex items-center gap-[9px]"
                            >
                              <input
                                id={brandUuid}
                                type="checkbox"
                                name="brands"
                                value={brandUuid}
                                checked={filtering?.brands?.includes(brandUuid)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFiltering((prev) => ({
                                      ...prev,
                                      brands: [...prev.brands, e.target.value],
                                    }));
                                  } else {
                                    setFiltering((prev) => ({
                                      ...prev,
                                      brands: prev.brands.filter(
                                        (color) => color !== e.target.value,
                                      ),
                                    }));
                                  }
                                }}
                              />
                              <label htmlFor={brandUuid}>{brandUuid}</label>
                            </div>
                          ))}
                      </div>
                    ) : (
                      "선택할 수 있는 브랜드가 없습니다."
                    )}
                  </div>
                </TabsContent>
              </Tabs>
              <SheetFooter>
                <SheetClose>
                  <Button type="submit">적용</Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
