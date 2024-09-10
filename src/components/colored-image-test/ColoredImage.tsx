import { cn } from "@/lib/utils";
import Image from "next/image";
import sharp from "sharp";

interface ColoredImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default async function ColoredImage({
  src,
  alt,
  width,
  height,
  className,
}: ColoredImageProps) {
  const response = await fetch(src, { cache: "force-cache" });
  const buffer = await response.arrayBuffer();
  const { data } = await sharp(buffer)
    .extract({ left: 10, top: 10, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const buf2 = await sharp(buffer)
    .extract({ left: 100, top: 100, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const [r, g, b] = Array.from(data);
  const [r2, g2, b2] = Array.from(buf2.data);
  const cond = r2 < 200 || g2 < 200 || b2 < 200;

  return (
    <div className={cn(className, "bg-cover")}>
      <div
        style={{ backgroundColor: cond ? "" : `rgb(${r}, ${g}, ${b})` }}
        className={cn(cond || "mix-blend-luminosity")}
        // style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
        // className={cn("mix-blend-luminosity")}
      >
        <Image
          {...{ src, alt, width, height }}
          className="mix-blend-hard-light"
        />
      </div>
    </div>
  );
}
