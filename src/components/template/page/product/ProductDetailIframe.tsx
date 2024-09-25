"use client";

import IframeResizer from "@iframe-resizer/react";
import { useEffect, useRef } from "react";

interface ProductDetailIframeProps {
  productDetailUrl: string;
}

export default function ProductDetailIframe({
  productDetailUrl,
}: ProductDetailIframeProps) {
  const fowardRef = useRef<any>(null);

  useEffect(() => {
    console.log(fowardRef.current.resize());
  }, [productDetailUrl]);

  return (
    <IframeResizer
      license=""
      forwardRef={fowardRef}
      src={productDetailUrl}
      style={{ width: "100%", height: "100vw" }}
      // className="w-full h-[2000px]"
    />
  );
}
