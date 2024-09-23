"use client";

import React, { useState, useRef, useEffect } from "react";
import { brandDataModi } from "@/datas/dummy/brandNameData";
import Link from "next/link";
import Image from "next/image";
import { brandNameType } from "@/types/initialType";
import { useSearchParams } from "next/navigation";

const smoothScrollTo = (targetY: number, duration: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const scrollStep = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollStep);
    }
  };

  requestAnimationFrame(scrollStep);
};

const easeInOutQuad = (t: number) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

function BrandCatalog({ data }: { data: brandNameType[] }) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [filteredData, setFilteredData] = useState<brandNameType[]>(data);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const korean = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ".split("");
  const [currentSet, setCurrentSet] = useState<string>("alphabet");
  const [brandData, setBrandData] = useState(brandDataModi("en"));
  const sectionRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // 스크롤 스무스
  const scrollToSection = (char: string) => {
    const section = sectionRef.current[char];
    if (section) {
      const targetY = section.offsetTop;
      smoothScrollTo(targetY, 800);
    }
  };

  // 브랜드 검색할 키워드
  useEffect(() => {
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      const filtered = data.filter(
        (brand) =>
          brand.brand_name.toLowerCase().includes(lowerKeyword) ||
          brand.brand_name_ko.includes(lowerKeyword),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [keyword, data]);

  // 검색 키워드 강조
  const handleColorChange = (target: string, current: string) => {
    const regex = new RegExp(`(${current})`, "gi");
    return target.replace(regex, '<span class="text-red-400">$1</span>');
  };

  const brands = brandData.reduce((acc: any, brand) => {
    const firstLetter = brand.brand_index_letter[0].toUpperCase();
    const koreanFirstLetter = brand.brand_index_letter.charAt(0);

    if (alphabet.includes(firstLetter)) {
      acc[firstLetter] = acc[firstLetter] || [];
      acc[firstLetter].push(brand);
    } else if (korean.includes(koreanFirstLetter)) {
      acc[koreanFirstLetter] = acc[koreanFirstLetter] || [];
      acc[koreanFirstLetter].push(brand);
    }
    return acc;
  }, {});

  Object.keys(brands).forEach((key) => {
    brands[key].sort((a: any, b: any) => {
      return a.brand_name_ko.localeCompare(b.brand_name_ko, "ko-KR");
    });
  });

  const getCurrentSet = () => {
    return currentSet === "alphabet" ? alphabet : korean;
  };

  const handleSetChange = (set: string) => {
    setCurrentSet(set);
    if (set === "alphabet") {
      setBrandData(brandDataModi("en"));
    } else {
      setBrandData(brandDataModi("ko"));
    }
  };

  const toggleFavorite = (brandNo: string) => {
    setFavorites((prev) => ({
      ...prev,
      [brandNo]: !prev[brandNo],
    }));
  };

  const formatbrandName = (name: any) => name.replace(/\//g, "-");

  return (
    <div className="px-4 pt-1">
      <p className="pb-5 pl-9">
        <span>{keyword}</span>로 검색한 결과입니다.
      </p>
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
        <div className="w-21 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 ml-4">
            {getCurrentSet().map((char) => (
              <button
                key={char}
                className="p-1 border min-w-[35px] text-center"
                onClick={() => scrollToSection(char)}
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      </div>

      {keyword ? (
        <>
          {filteredData.map((brand, idx) => {
            const highlightedText = handleColorChange(
              brand.brand_name,
              keyword,
            );
            return (
              <div key={idx} className="p-2">
                <p dangerouslySetInnerHTML={{ __html: highlightedText }} />
                <p>{brand.brand_name_ko}</p>
              </div>
            );
          })}
        </>
      ) : (
        <div>
          {Object.keys(brands).map((char) => (
            <div
              key={char}
              ref={(el) => {
                sectionRef.current[char] = el;
              }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold mb-2">{char}</h2>
              <ul>
                {brands[char].map((brand: any) => (
                  <li
                    key={brand.ctg_no}
                    className="flex justify-between items-center py-2"
                  >
                    <Link href={`/brand/${formatbrandName(brand.brand_name)}`}>
                      <div>
                        <span className="font-bold">{brand.brand_name}</span>
                        <p className="text-sm text-gray-500">
                          {brand.brand_name_ko}
                        </p>
                      </div>
                    </Link>
                    <button onClick={() => toggleFavorite(brand.ctg_no)}>
                      <Image
                        src={
                          favorites[brand.ctg_no]
                            ? "https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_heart_light_on.svg"
                            : "https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_heart_light_off.svg"
                        }
                        alt="heart-icon"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrandCatalog;
