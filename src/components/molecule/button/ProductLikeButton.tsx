"use client";

import { getProductLike, postProductLike } from "@/action/productAction";
import HeartLightOffIcon from "@/components/atom/icon/HeartLightOffIcon";
import HeartLightOnIcon from "@/components/atom/icon/HeartLightOnIcon";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

interface ProductLikeButtonProps {
  className?: string;
  productUuid: string;
}

export default function ProductLikeButton({
  className,
  productUuid,
}: ProductLikeButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    getProductLike({ productUuid }).then((isOn) => {
      setIsOn(isOn || false);
      setIsActive(true);
    });
  }, []);

  const handleClick = () => {
    if (isActive) {
      setIsOn((isOn) => !isOn);
    }
  };

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
      postProductLike({ productUuid }).then(() => {
        setIsActive(true);
      });
    }
  }, [isOn]);

  return (
    <div onClick={handleClick} className={className}>
      {isOn ? <HeartLightOnIcon /> : <HeartLightOffIcon />}
    </div>
  );
}
