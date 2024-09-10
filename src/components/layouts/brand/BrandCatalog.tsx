"use client";

import React, { useState, useRef } from "react";
import { brandDataModi } from "@/datas/dummy/brandNameData"; // brandDataModi 함수 import

function BrandCatalog() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // A-Z 알파벳 배열
  const korean = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ".split(""); // ㄱ-ㅎ 자음 배열

  const [currentSet, setCurrentSet] = useState<string>("alphabet");

  // 현재 선택된 브랜드 데이터를 관리하기 위한 상태 (기본값은 "en" 데이터)
  const [brandData, setBrandData] = useState(brandDataModi("en"));

  // 각 알파벳/자음 섹션에 대한 참조 저장
  const sectionRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // 스크롤 이동 함수
  const scrollToSection = (char: string) => {
    sectionRef.current[char]?.scrollIntoView({ behavior: "smooth" });
  };

  // 영어/한글 데이터를 필터링 후 회사명을 그룹화하는 함수
  const brands = brandData.reduce((acc: any, brand) => {
    const firstLetter = brand.brand_index_letter[0].toUpperCase(); // 영어 회사명 첫 글자
    const koreanFirstLetter = brand.brand_index_letter.charAt(0); // 한글 회사명 첫 글자

    // 영어 회사 이름을 알파벳으로 그룹화
    if (alphabet.includes(firstLetter)) {
      acc[firstLetter] = acc[firstLetter] || [];
      acc[firstLetter].push(brand);
    }
    // 한글 회사 이름을 자음으로 그룹화
    else if (korean.includes(koreanFirstLetter)) {
      acc[koreanFirstLetter] = acc[koreanFirstLetter] || [];
      acc[koreanFirstLetter].push(brand);
    }
    return acc;
  }, {});

  // 각 그룹을 가나다 순으로 정렬
  Object.keys(brands).forEach((key) => {
    brands[key].sort((a: any, b: any) => {
      return a.brand_name_ko.localeCompare(b.brand_name_ko, "ko-KR"); // 한글 정렬
    });
  });

  const getCurrentSet = () => {
    return currentSet === "alphabet" ? alphabet : korean;
  };

  // 영어/한글 데이터 필터링을 위한 함수
  const handleSetChange = (set: string) => {
    setCurrentSet(set);
    if (set === "alphabet") {
      setBrandData(brandDataModi("en")); // 영어 브랜드 데이터로 필터링
    } else {
      setBrandData(brandDataModi("ko")); // 한글 브랜드 데이터로 필터링
    }
  };

  return (
    <div className="p-4">
      {/* A-Z, ㄱ-ㅎ 버튼 */}
      <div className="flex gap-2 mb-2 items-center">
        <button
          className={`min-w-[40px] h-9 border ${currentSet === "alphabet" ? "font-bold" : ""}`}
          onClick={() => handleSetChange("alphabet")}
        >
          A-Z
        </button>
        <button
          className={`min-w-[40px] h-9 text-sm border ${currentSet === "korean" ? "font-bold" : ""}`}
          onClick={() => handleSetChange("korean")}
        >
          ㄱ-ㅎ
        </button>

        {/* A-Z 또는 ㄱ-ㅎ 버튼 리스트 */}
        <div className="w-21 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 ml-4">
            {getCurrentSet().map((char) => (
              <button
                key={char}
                className="p-1 border min-w-[35px] text-center"
                onClick={() => scrollToSection(char)} // 클릭 시 해당 섹션으로 이동
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 회사 목록을 그룹화하여 섹션으로 표시 */}
      <div>
        {Object.keys(brands).map((char) => (
          <div
            key={char}
            ref={(el) => {
              sectionRef.current[char] = el; // 각 섹션을 참조로 저장
            }}
            className="mb-6"
          >
            <h2 className="text-xl font-bold mb-2">{char}</h2>
            <ul>
              {brands[char].map((brand: any) => (
                <li
                  key={brand.ctg_no} // 고유 ID로 사용
                  className="flex justify-between items-center py-2"
                >
                  <div>
                    <span className="font-bold">{brand.brand_name}</span>
                    <p className="text-sm text-gray-500">
                      {brand.brand_name_ko}
                    </p>
                  </div>
                  <span className="text-lg">♡</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandCatalog;
