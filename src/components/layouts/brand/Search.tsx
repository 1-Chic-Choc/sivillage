"use client";

"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function Search() {
  const router = useRouter();

  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    router.push(`/brands?keyword=${e.target.value}`);
  };
  return (
    <div>
      <form>
        <Input
          type="text"
          placeholder="브랜드 검색"
          onChange={handleSearchKeyword}
        />
      </form>
    </div>
  );
}

export default Search;

// import { useEffect, useState, useRef } from 'react';

// export function Search() {
//   const [inputValue, setInputValue] = useState("");
//   const [isOverflow, setIsOverflow] = useState(false);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleClear = () => {
//     setInputValue("");
//   };

//   useEffect(() => {
//     if (inputRef.current) {
//       setIsOverflow(
//         inputRef.current.scrollWidth > inputRef.current.clientWidth,
//       );
//     }
//   }, [inputValue]);

//   return (
//     <div className="relative w-full">
//       <input
//         ref={inputRef}
//         type="text"
//         name="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         className="mt-1 px-3 py-2 h-10 w-full focus:outline-none"
//         placeholder="브랜드명 검색"
//       />
//       {isOverflow && (
//         <button
//           type="button"
//           onClick={handleClear}
//           className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
//         >
//           &times;
//         </button>
//       )}
//     </div>
//   );
// }
