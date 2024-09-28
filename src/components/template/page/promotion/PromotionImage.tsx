import { getMedia } from "@/action/productAction";
import { cn } from "@/lib/utils";
import { get } from "http";
import Image from "next/image";
import { Suspense } from "react";

interface PromotionImageProps {
  mediaId: number;
}

export default async function PromotionImage({ mediaId }: PromotionImageProps) {
  const media = await getMedia({ mediaId });
  if (!media) return null;

  return (
    <div className={cn("w-full")}>
      <Image
        src={media.mediaUrl}
        alt={media.description || ""}
        width={2000}
        height={2000}
      />
    </div>
  );
}
