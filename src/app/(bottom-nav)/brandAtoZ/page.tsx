import BrandCatalog from "@/components/template/layout/brand/BrandCatalog";
import BrandSearch from "@/components/template/layout/brand/BrandSearch";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import { brandDataModi } from "@/datas/dummy/brandNameData";

import React from "react";

function page() {
  const data = brandDataModi("en");

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
