"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchIcon from "@/components/atom/icon/SearchIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchButton() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };
  const handleClick = () => {
    router.push(`/search/${keyword}`);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <SearchIcon />
        </SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader>
            <SheetTitle>키워드로 상품 찾기</SheetTitle>
            {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
          </SheetHeader>
          <div className="py-[24px]">
            <Input
              className="w-full"
              placeholder="검색할 키워드를 입력해주세요"
              value={keyword}
              onChange={handleChange}
            />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="rounded-none" onClick={handleClick}>
                검색하기
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
