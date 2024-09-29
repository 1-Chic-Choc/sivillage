"use client";

import { getProductLike, postProductLike } from "@/action/productAction";
import HeartLightOffIcon from "@/components/atom/icon/HeartLightOffIcon";
import HeartLightOnIcon from "@/components/atom/icon/HeartLightOnIcon";
import { useEffect, useState } from "react";
interface ProductLikeButtonContentProps {
  className?: string;
  productUuid: string;
  token: string | null;
}

export default function ProductLikeButtonContent({
  className,
  productUuid,
  token,
}: ProductLikeButtonContentProps) {
  const [isActive, setIsActive] = useState(false);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (token) {
      getProductLike({ productUuid }).then((isOn) => {
        setIsOn(isOn || false);
        setIsActive(true);
      });
    }
  }, [token, productUuid]);

  const handleClick = () => {
    console.log("token", token);
    if (token) {
      if (isActive) {
        setIsOn((isOn) => !isOn);
      }
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };

  useEffect(() => {
    if (isActive && token) {
      setIsActive(false);
      postProductLike({ productUuid }).then(() => {
        setIsActive(true);
      });
    }
  }, [isOn, token, productUuid]);

  return (
    <div onClick={handleClick} className={className}>
      {isOn ? <HeartLightOnIcon /> : <HeartLightOffIcon />}
    </div>
  );
}
