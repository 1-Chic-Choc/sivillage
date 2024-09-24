import { getColor } from "@/action/productAction";

interface ProductColorProps {
  colorId: number;
}

export default async function ProductColor({ colorId }: ProductColorProps) {
  const color = await getColor({ id: colorId });
  return <div>{color?.name}</div>;
}
