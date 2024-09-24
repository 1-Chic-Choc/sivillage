import BrandCatalog from "@/components/template/layout/brand/BrandCatalog";
import BrandSearch from "@/components/template/layout/brand/BrandSearch";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import React from "react";

function page() {
  return (
    <main>
      <section id="brandSearch">
        <BrandSearch />
      </section>
      <section id="brandCategory">
        <BrandCatalog />
      </section>
      <div>
        <BottomNavigationBar />
      </div>
    </main>
  );
}

export default page;
