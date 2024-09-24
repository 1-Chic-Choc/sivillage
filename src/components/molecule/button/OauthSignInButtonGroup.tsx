"use client";

import AppleIcon from "@/components/atom/icon/oauth/AppleIcon";
import CellphoneIcon from "@/components/atom/icon/oauth/CellphoneIcon";
import KakaoIcon from "@/components/atom/icon/oauth/KakaoIcon";
import NaverIcon from "@/components/atom/icon/oauth/NaverIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

interface SNSButtonData {
  Icon: JSX.Element;
  onClick: () => void;
}

const snsButtonDatas: SNSButtonData[] = [
  {
    Icon: <CellphoneIcon />,
    onClick: () => alert("지원하지 않는 로그인 방식입니다."),
  },
  {
    Icon: <KakaoIcon />,
    onClick: () => {
      signIn("kakao", { callbackUrl: "/" });
    },
  },
  {
    Icon: <NaverIcon />,
    onClick: () => {
      signIn("naver", { callbackUrl: "/" });
    },
  },
  {
    Icon: <AppleIcon />,
    onClick: () => alert("지원하지 않는 로그인 방식입니다."),
  },
];

export default function OauthSignInButtonGroup() {
  return (
    <ul
      className={cn(
        "w-full h-[48px] mt-[32px] ml-[-1px]",
        "flex justify-center items-center",
      )}
    >
      {snsButtonDatas.map(({ Icon, onClick }, index) => (
        <li
          key={index}
          className={cn("flex justify-center items-center", "px-[16px]")}
        >
          <Button
            variant="ghost"
            size="icon"
            className="size-[48px] rounded-full"
            onClick={onClick}
          >
            {Icon}
          </Button>
        </li>
      ))}
    </ul>
  );
}
