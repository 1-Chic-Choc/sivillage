import ColoredImage from "@/components/colored-image-test/ColoredImage1";
import Image from "next/image";

const color_classes = [
  // Red
  // "bg-red-100",
  // "bg-red-200",
  // "bg-red-300",
  // "bg-red-400",
  "bg-red-500",
  // "bg-red-600",
  "bg-red-700",
  "bg-red-800",
  "bg-red-900",
  "bg-red-950",

  // Orange
  // "bg-orange-100",
  // "bg-orange-200",
  // "bg-orange-300",
  // "bg-orange-400",
  "bg-orange-500",
  // "bg-orange-600",
  "bg-orange-700",
  "bg-orange-800",
  "bg-orange-900",
  "bg-orange-950",

  // Amber
  // "bg-amber-100",
  // "bg-amber-200",
  // "bg-amber-300",
  // "bg-amber-400",
  "bg-amber-500",
  // "bg-amber-600",
  "bg-amber-700",
  "bg-amber-800",
  "bg-amber-900",
  "bg-amber-950",

  // Yellow
  // "bg-yellow-100",
  // "bg-yellow-200",
  // "bg-yellow-300",
  // "bg-yellow-400",
  "bg-yellow-500",
  // "bg-yellow-600",
  "bg-yellow-700",
  "bg-yellow-800",
  "bg-yellow-900",
  "bg-yellow-950",

  // Lime
  // "bg-lime-100",
  // "bg-lime-200",
  // "bg-lime-300",
  // "bg-lime-400",
  "bg-lime-500",
  // "bg-lime-600",
  "bg-lime-700",
  "bg-lime-800",
  "bg-lime-900",
  "bg-lime-950",

  // Emerald
  // "bg-emerald-100",
  // "bg-emerald-200",
  // "bg-emerald-300",
  // "bg-emerald-400",
  "bg-emerald-500",
  // "bg-emerald-600",
  "bg-emerald-700",
  "bg-emerald-800",
  "bg-emerald-900",
  "bg-emerald-950",

  // Teal
  // "bg-teal-100",
  // "bg-teal-200",
  // "bg-teal-300",
  // "bg-teal-400",
  "bg-teal-500",
  // "bg-teal-600",
  "bg-teal-700",
  "bg-teal-800",
  "bg-teal-900",
  "bg-teal-950",

  // Cyan
  // "bg-cyan-100",
  // "bg-cyan-200",
  // "bg-cyan-300",
  // "bg-cyan-400",
  "bg-cyan-500",
  // "bg-cyan-600",
  "bg-cyan-700",
  "bg-cyan-800",
  "bg-cyan-900",
  "bg-cyan-950",

  // Sky
  // "bg-sky-100",
  // "bg-sky-200",
  // "bg-sky-300",
  // "bg-sky-400",
  "bg-sky-500",
  // "bg-sky-600",
  "bg-sky-700",
  "bg-sky-800",
  "bg-sky-900",
  "bg-sky-950",

  // Blue
  // "bg-blue-100",
  // "bg-blue-200",
  // "bg-blue-300",
  // "bg-blue-400",
  "bg-blue-500",
  // "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
  "bg-blue-950",

  // Indigo
  // "bg-indigo-100",
  // "bg-indigo-200",
  // "bg-indigo-300",
  // "bg-indigo-400",
  "bg-indigo-500",
  // "bg-indigo-600",
  "bg-indigo-700",
  "bg-indigo-800",
  "bg-indigo-900",
  "bg-indigo-950",

  // Violet
  // "bg-violet-100",
  // "bg-violet-200",
  // "bg-violet-300",
  // "bg-violet-400",
  "bg-violet-500",
  // "bg-violet-600",
  "bg-violet-700",
  "bg-violet-800",
  "bg-violet-900",
  "bg-violet-950",

  // Purple
  // "bg-purple-100",
  // "bg-purple-200",
  // "bg-purple-300",
  // "bg-purple-400",
  "bg-purple-500",
  // "bg-purple-600",
  "bg-purple-700",
  "bg-purple-800",
  "bg-purple-900",
  "bg-purple-950",

  // Fuchsia
  // "bg-fuchsia-100",
  // "bg-fuchsia-200",
  // "bg-fuchsia-300",
  // "bg-fuchsia-400",
  "bg-fuchsia-500",
  // "bg-fuchsia-600",
  "bg-fuchsia-700",
  "bg-fuchsia-800",
  "bg-fuchsia-900",
  "bg-fuchsia-950",

  // Pink
  // "bg-pink-100",
  // "bg-pink-200",
  // "bg-pink-300",
  // "bg-pink-400",
  "bg-pink-500",
  // "bg-pink-600",
  "bg-pink-700",
  "bg-pink-800",
  "bg-pink-900",
  "bg-pink-950",

  // Rose
  // "bg-rose-100",
  // "bg-rose-200",
  // "bg-rose-300",
  // "bg-rose-400",
  "bg-rose-500",
  // "bg-rose-600",
  "bg-rose-700",
  "bg-rose-800",
  "bg-rose-900",
  "bg-rose-950",

  "bg-white",
  "",
];

export default function Home() {
  const blend_modes = [
    "mix-blend-normal",
    // "mix-blend-multiply",
    "mix-blend-screen",
    // "mix-blend-overlay",
    // "mix-blend-darken",
    "mix-blend-lighten",
    "mix-blend-color-dodge",
    // "mix-blend-color-burn",
    "mix-blend-hard-light",
    // "mix-blend-soft-light",
    // "mix-blend-difference",
    // "mix-blend-exclusion",
    // "mix-blend-hue",
    // "mix-blend-saturation",
    // "mix-blend-color",
    "mix-blend-luminosity",
    "mix-blend-plus-darker",
    "mix-blend-plus-lighter",
  ];

  const image_urls = [
    "https://image.sivillage.com/upload/C00001/s3/goods/org/641/240621022277641.jpg?RS=600&SP=1",
    "https://image.sivillage.com/upload/C00001/s3/goods/org/183/240823028895183.jpg?RS=300&SP=1",
    "https://image.sivillage.com/upload/C00001/s3/goods/org/998/240830029960998.jpg?RS=300&SP=1",
    "https://image.sivillage.com/upload/C00001/s3/goods/org/393/240830029960393.jpg?RS=300&SP=1",
    "https://image.sivillage.com/upload/C00001/s3/goods/org/743/240902030330743.jpg?RS=300&SP=1",
    "https://image.sivillage.com/upload/C00001/s3/goods/org/981/240830029970981.jpg?RS=300&SP=1",
    "https://image.sivillage.com/upload/C00001/s3/goods/org/951/240830029970951.jpg?RS=300&SP=1",
  ];
  return (
    <main className=" flex flex-wrap">
      {image_urls.map((image_url) => (
        <div className="flex flex-wrap w-[30%]" key={image_url}>
          {color_classes.map((color_class) => (
            <ColoredImage
              key={color_class}
              src={image_url}
              alt=""
              width={60}
              height={90}
              className={color_class}
            />
          ))}
          <Image src={image_url} alt="" width={60} height={90} />
        </div>
      ))}
    </main>
  );
}
