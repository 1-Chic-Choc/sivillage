import React from "react";

export default function TitleHeader({
  title = "타이틀",
  textStyle = "text-2xl font-bold",
}: {
  title: string;
  textStyle?: string;
}) {
  return <h1 className={textStyle}>{title}</h1>;
}
