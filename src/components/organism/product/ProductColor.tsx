import { getColor } from "@/action/productAction";
import { colorImageMap } from "@/datas/colorImageData";
import Image from "next/image";

interface ProductColorProps {
  colorId: number;
}

export default async function ProductColor({ colorId }: ProductColorProps) {
  const color = (await getColor({ id: colorId }))?.name || "기타";
  const src = colorImageMap.get(color);
  return (
    <Image
      src={src!}
      alt={color}
      width={16}
      height={16}
      className="border-[0.6667px] border-black"
    />
  );
}
