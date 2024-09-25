"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import LeftArrowBracketIcon from "@/components/atom/icon/LeftArrowBracketIcon";

export default function HistoryBackButton(props: ButtonProps) {
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <Button onClick={handleBack} {...props}>
      <LeftArrowBracketIcon />
    </Button>
  );
}
