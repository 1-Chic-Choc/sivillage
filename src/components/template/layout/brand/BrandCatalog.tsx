"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { fetchBrandList } from "@/action/brandAction"; // API 호출 함수 임포트
import { brandNameType } from "@/types/ResponseTypes";

interface BrandCatalogProps {
  data: brandNameType[];
}

// 스크롤 부드럽게 이동하는 함수
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

function BrandCatalog({ data }: BrandCatalogProps) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [brandData, setBrandData] = useState<brandNameType[]>(data); // API 데이터를 저장
  const [filteredData, setFilteredData] = useState<
    Map<string, brandNameType[]>
  >(new Map()); // 알파벳 그룹화된 데이터
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const korean = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ".split("");
  const [currentSet, setCurrentSet] = useState<string>("alphabet");

  const sectionRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // API에서 브랜드 목록을 불러오는 함수
  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetchBrandList();
      const brands = response.result;

      // 데이터를 그룹화
      const groupedBrands = groupBrandsByAlphabet(brands);
      setBrandData(brands);
      setFilteredData(groupedBrands); // 그룹화된 데이터를 저장
    };

    fetchBrands();
  }, []);

  // 브랜드 목록을 알파벳 또는 한글로 그룹화하는 함수
  const groupBrandsByAlphabet = (brands: brandNameType[]) => {
    const grouped = new Map<string, brandNameType[]>();

    brands.forEach((brand) => {
      const name = brand.name || ""; // 기본값 설정
      const indexLetter = brand.brandIndexLetter || ""; // 기본값 설정

      const firstLetter =
        currentSet === "alphabet"
          ? name.charAt(0).toUpperCase() === "&"
            ? "A"
            : name.charAt(0).toUpperCase()
          : indexLetter.charAt(0); // 한글 인덱스 처리/ brandIndexLetter가 undefined인 경우 방지

      if (!grouped.has(firstLetter)) {
        grouped.set(firstLetter, []);
      }
      grouped.get(firstLetter)?.push(brand);
    });

    return grouped;
  };

  // 스크롤 섹션 이동 함수
  const scrollToSection = (char: string) => {
    const section = sectionRef.current[char];
    if (section) {
      const targetY = section.offsetTop;
      smoothScrollTo(targetY, 800);
    }
  };

  // 검색어가 브랜드 이름에 포함되면 해당 부분을 주황색으로 강조하는 함수
  const highlightKeyword = (text: string, keyword: string | null) => {
    if (!keyword) return text; // 키워드가 없으면 그냥 텍스트 반환
    const regex = new RegExp(`(${keyword})`, "gi"); // 대소문자 구분 없이 검색
    return text.replace(regex, `<span style="color: orange;">$1</span>`); // 일치하는 부분 주황색으로 스타일링
  };

  // 검색 키워드에 따른 필터링 처리
  useEffect(() => {
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      const filtered = brandData.filter(
        (brand) =>
          brand.name?.toLowerCase().includes(lowerKeyword) ||
          brand.nameKo?.includes(lowerKeyword),
      );

      setFilteredData(groupBrandsByAlphabet(filtered));
    } else {
      setFilteredData(groupBrandsByAlphabet(brandData)); // 키워드가 없을 때는 전체 데이터
    }
  }, [keyword, brandData, currentSet]);

  // 알파벳/한글 탭 전환
  const handleSetChange = (set: string) => {
    setCurrentSet(set);
    setFilteredData(groupBrandsByAlphabet(brandData));
  };

  // 즐겨찾기 토글 기능
  const toggleFavorite = (brandUuid: string) => {
    setFavorites((prev) => ({
      ...prev,
      [brandUuid]: !prev[brandUuid],
    }));
  };

  // 브랜드 이름 포맷팅 함수
  const formatBrandName = (name: string | undefined) => {
    return name ? name.replace(/\//g, "_") : "";
  };

  return (
    <div className="px-4 pt-1">
      {/* 검색 결과 표시 */}
      {keyword && (
        <p className="pb-5 pl-9">
          <span>{keyword}</span>로 검색한 결과입니다.
        </p>
      )}

      {/* 알파벳/한글 선택 탭 */}
      <div className="flex gap-2 mb-2 items-center">
        <button
          className={`min-w-[40px] h-9 border ${
            currentSet === "alphabet" ? "font-bold" : ""
          }`}
          onClick={() => handleSetChange("alphabet")}
        >
          A-Z
        </button>
        <button
          className={`min-w-[40px] h-9 text-sm border ${
            currentSet === "korean" ? "font-bold" : ""
          }`}
          onClick={() => handleSetChange("korean")}
        >
          ㄱ-ㅎ
        </button>
        <div className="w-21 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 ml-4">
            {(currentSet === "alphabet" ? alphabet : korean).map((char) => (
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

      {/* 브랜드 목록 */}
      <div>
        {Array.from(filteredData.keys()).map((letter) => (
          <div
            key={letter}
            ref={(el) => {
              sectionRef.current[letter] = el; // 반환값 제거
            }}
          >
            <h2 className="text-xl font-bold mb-2">{letter}</h2>
            {filteredData.get(letter)?.map((brand, idx) => (
              <div key={idx} className="p-2 flex justify-between">
                <Link href={`/brand/${formatBrandName(brand.name)}`}>
                  <div>
                    <span
                      className="font-bold"
                      dangerouslySetInnerHTML={{
                        __html: highlightKeyword(brand.name || "", keyword),
                      }}
                    />
                    <p>{brand.nameKo}</p>
                  </div>
                </Link>
                <button onClick={() => toggleFavorite(brand.brandUuid)}>
                  <Image
                    src={
                      favorites[brand.brandUuid]
                        ? "https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_heart_light_on.svg"
                        : "https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_heart_light_off.svg"
                    }
                    alt="heart-icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
              </div>
            ))}
            <hr className="border-gray-300 my-2" /> {/* 구분선 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandCatalog;
