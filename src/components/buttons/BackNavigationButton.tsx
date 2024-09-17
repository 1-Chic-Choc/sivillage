"use client";

import LeftArrowBracket from "@/icons/Header/LeftArrowBracket";
import { Button, ButtonProps } from "../ui/button";

export default function BackNavigationButton(props: ButtonProps) {
  function handleClick() {
    window.history.back();
  }

  return (
    <Button {...props} variant="ghost" onClick={handleClick}>
      <LeftArrowBracket />
    </Button>
  );
}
