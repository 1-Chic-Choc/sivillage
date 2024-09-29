export const colorImageList: readonly { name: string; url: string }[] = [
  {
    name: "화이트",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_010005_210114010651.png",
  },
  {
    name: "베이지",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_020065_210114011229.png",
  },
  {
    name: "그레이",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_030005_210114010650.png",
  },
  {
    name: "블랙",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_040002_210114011352.png",
  },
  {
    name: "브라운",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_110021_210114010651.png",
  },
  {
    name: "레드",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_060027_210114011352.png",
  },
  {
    name: "핑크",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_070070_210114011352.png",
  },
  {
    name: "오렌지",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_080018_210114011352.png",
  },
  {
    name: "옐로우",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_120010_210114010651.png",
  },
  {
    name: "그린",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_110022_210114010650.png",
  },
  {
    name: "블루",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_100018_210114010651.png",
  },
  {
    name: "퍼플",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_110023_210114010651.png",
  },
  {
    name: "골드",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_110024_210114010650.png",
  },
  {
    name: "실버",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_110025_210114010651.png",
  },
  {
    name: "기타",
    url: "https://image.sivillage.com/upload/C00001/goods/color/color_15_210114025641.png",
  },
];

export const colorImageMap: Map<string, string> = new Map(
  colorImageList.map(({ name, url }) => [name, url]),
);
