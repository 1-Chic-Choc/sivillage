"use client";

import AppleIcon from "@/components/atom/icon/oauth/AppleIcon";
import CellphoneIcon from "@/components/atom/icon/oauth/CellphoneIcon";
import KakaoIcon from "@/components/atom/icon/oauth/KakaoIcon";
import NaverIcon from "@/components/atom/icon/oauth/NaverIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SNSButtonData {
  Icon: JSX.Element;
  onClick: () => void;
}

const snsButtonDatas: SNSButtonData[] = [
  {
    Icon: <CellphoneIcon />,
    onClick: () => {},
  },
  {
    Icon: <KakaoIcon />,
    onClick: () => {},
  },
  {
    Icon: <NaverIcon />,
    onClick: () => {},
  },
  {
    Icon: <AppleIcon />,
    onClick: () => {},
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
