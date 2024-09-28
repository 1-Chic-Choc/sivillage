import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import { cn } from "@/lib/utils";
import { getCategoryList } from "@/action/productAction";
import ParamCategoryLink from "@/components/molecule/navbar/ParamCategoryLink";

export default async function BestProductTopNavBar() {
  const sub_cat_datas = (await getCategoryList()) || [];
  const sub_cat_links = sub_cat_datas.map((sub_cat_data) => {
    const text = sub_cat_data.name;
    const path = `/best?categories=${sub_cat_data.name}`;
    const is_current = false;
    return {
      text,
      path,
      is_current,
    };
  });

  const paths = [
    {
      text: "전체",
      path: `/best`,
      is_current: true,
    },
    ...sub_cat_links,
  ];

  return (
    <div>
      <TopNavigationBar
        className={cn(
          "flex flex-nowrap items-center px-[15px] leading-[normal] overflow-x-auto scrollbar-hide border-y-[1px]",
        )}
      >
        {paths.length > 1
          ? paths.map(({ text, path, is_current }) => (
              <ParamCategoryLink
                key={text}
                href={path}
                text={text}
                is_current={is_current}
              />
            ))
          : null}
      </TopNavigationBar>
    </div>
  );
}
