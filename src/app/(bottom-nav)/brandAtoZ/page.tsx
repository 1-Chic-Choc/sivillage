import BrandCatalog from "@/components/layouts/brand/BrandCatalog";
import BrandSearch from "@/components/layouts/brand/BrandSearch";
import BottomNavigationBar from "@/components/navbars/BottomNavigationBar";
import { brandDataModi } from "@/datas/dummy/brandNameData";
import React from "react";

function page() {
  const data = brandDataModi("en");

  return (
    <main>
      <section id="brandSearch">
        <BrandSearch data={data} />
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
