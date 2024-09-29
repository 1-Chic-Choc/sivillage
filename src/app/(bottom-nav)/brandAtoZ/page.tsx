import { fetchBrandList } from "@/action/brandAction";
import BrandCatalog from "@/components/template/layout/brand/BrandCatalog";
import BrandSearch from "@/components/template/layout/brand/BrandSearch";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import { brandDataModi } from "@/datas/dummy/brandNameData";
import { brandNameType } from "@/types/ResponseTypes";
import React from "react";

async function page() {
  // const data: brandNameType[] = brandDataModi("en");
  const data: brandNameType[] = (await fetchBrandList()).result;

  return (
    <main>
      <section id="brandSearch">
        <BrandSearch />
      </section>
      <section id="brandCategory">
        <BrandCatalog data={data} />
      </section>
      <div>
        <BottomNavigationBar />
      </div>
    </main>
  );
}

export default page;
