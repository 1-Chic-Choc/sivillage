"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ShoppingGuideText from "./ShoppingGuideText";

function ShoppingGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-4">
        <div
          className="flex justify-between items-center py-4 text-lg font-bold px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          쇼핑백 이용안내
          <ChevronDown
            size={24}
            strokeWidth={1}
            className={` ${isOpen ? " rotate-180 " : " rotate-0 "} transition-all`}
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ShoppingGuideText />
        </div>
      </div>
    </>
  );
}

export default ShoppingGuide;
