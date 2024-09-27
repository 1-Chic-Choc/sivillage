import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getCategoryByPath, getCategoryList } from "@/action/productAction";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function MainNavBarLink({
  href,
  text,
  is_current,
}: {
  href: string;
  text: string;
  is_current: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "h-[48px] mx-[9px]",
        "inline-flex flex-shrink-0 flex-wrap items-center",
        "overflow-hidden",
        text === "Home" && "px-[1px]",
      )}
      target={text === "SSG DF" ? "_blank" : ""}
      rel={text === "SSG DF" ? "noopener noreferrer" : ""}
    >
      <span
        className={cn(
          "text-[16px] font-[500] leading-[24px] tracking-[0.4px] text-nowrap",
          is_current ? "text-[#131922]" : "text-[#929292]",
        )}
      >
        {is_current ? <strong>{text}</strong> : text}
      </span>
    </Link>
  );
}

interface Props {
  categories: string[];
}

export default async function CategoryTopNavBar({ categories }: Props) {
  const path = categories.map((cat) => cat.replace("_", "/"));
  const current_cat = await getCategoryByPath({ path });
  const sub_cat_datas =
    (await getCategoryList({ parentId: current_cat!.id })) || [];

  console.log(categories);

  const sub_cat_links = sub_cat_datas.map((sub_cat_data) => {
    console.log(sub_cat_data);
    const text = sub_cat_data.name;
    const path = [
      categories[categories.length - 1],
      sub_cat_data.name.replace("/", "_"),
    ].join("/");
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
      path: `${categories.join("/")}`,
      is_current: true,
    },
    ...sub_cat_links,
  ];

  return (
    <div>
      <div
        className={cn(
          "h-[48px] px-[24px] flex flex-nowrap items-center",
          "text-[16px]",
        )}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {categories.map((category, index) => (
              <React.Fragment key={category}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/category/${categories.slice(0, index + 1).join("/")}`}
                  >
                    {category.replace("_", "/")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <TopNavigationBar
        className={cn(
          "flex flex-nowrap items-center px-[15px] leading-[normal] overflow-x-auto scrollbar-hide border-y-[1px]",
        )}
      >
        {paths.length > 1
          ? paths.map(({ text, path, is_current }) => (
              <MainNavBarLink
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
