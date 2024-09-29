import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ProductLikeButtonContent from "./ProductLikeButtonContent";

interface ProductLikeButtonProps {
  className?: string;
  productUuid: string;
}

export default async function ProductLikeButton({
  className,
  productUuid,
}: ProductLikeButtonProps) {
  const session = await getServerSession(options);
  const token = session?.user?.accessToken;

  return <ProductLikeButtonContent {...{ className, productUuid, token }} />;
}
