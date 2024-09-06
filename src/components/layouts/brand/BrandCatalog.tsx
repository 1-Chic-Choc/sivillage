"use client";

import React, { useState } from "react";

function BrandCatalog() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const koreanConsonants = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ".split("");

  const [currentSet, setCurrentSet] = useState<string>("alphabet");

  const getCurrentSet = () => {
    return currentSet === "alphabet" ? alphabet : koreanConsonants;
  };
  return (
    <div className="p-4">
      <div className="flex gap-2 mb-2 items-center">
        <button
          className={`min-w-[40px] h-9 border ${currentSet === "alphabet" ? "font-bold" : ""}`}
          onClick={() => setCurrentSet("alphabet")}
        >
          A-Z
        </button>
        <button
          className={`min-w-[40px] h-9 text-sm border ${currentSet === "koreanConsonants" ? "font-bold" : ""}`}
          onClick={() => setCurrentSet("koreanConsonants")}
        >
          ㄱ-ㅎ
        </button>

        <div className="w-21 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 ml-4">
            {getCurrentSet().map((char) => (
              <button
                key={char}
                className="p-1  border min-w-[35px] text-center"
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandCatalog;
