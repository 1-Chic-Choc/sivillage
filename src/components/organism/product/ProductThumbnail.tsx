import { getMedia, getProductMediaList } from "@/action/productAction";
import Image from "next/image";

interface ProductThumbnailProps {
  productOptionUuid: string;
}

export default async function ProductThumbnail({
  productOptionUuid,
}: ProductThumbnailProps) {
  const productMediaList = (
    (await getProductMediaList({ productOptionUuid })) || []
  ).sort((a, b) => a.mediaOrder - b.mediaOrder);

  const { mediaId } = productMediaList[0];
  const media = await getMedia({ mediaId });

  if (!media) return null;

  return <Image src={media.mediaUrl} alt={media.description || ""} fill />;
}
